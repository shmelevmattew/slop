// Traces which module URL the Framer runtime requests for the local canvas
// component, and whether the file exists at that path.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const EXPORT = process.cwd();
const requested = [];

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.mjs': 'application/javascript',
  '.js': 'application/javascript',
};

const server = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  requested.push(p);
  const file = path.join(EXPORT, p);
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('nf');
      return;
    }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
});

await new Promise((r) => server.listen(4800, r));

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:4800/subpages/case-studies_making-life-easier.html', {
  waitUntil: 'networkidle2',
  timeout: 30000,
});
await new Promise((r) => setTimeout(r, 3000));

console.log('=== module requests ===');
requested
  .filter((u) => u.endsWith('.mjs') || u.includes('canvasComponent'))
  .forEach((u) => console.log('  ', u));

console.log('\n=== does PHEQ exist where asked? ===');
for (const u of requested.filter((u) => u.includes('PHEQ'))) {
  const exists = fs.existsSync(path.join(EXPORT, u));
  console.log(`  ${exists ? 'FOUND  ' : 'MISSING'} ${u}`);
}

// where the file really lives
const real = path.join(EXPORT, 'scripts/vendor/PHEQ_zui5.K8H22VMU.mjs');
console.log('\nreal file exists:', fs.existsSync(real));

// how the runtime builds the url: look for the importer of canvasComponent
const main = fs.readFileSync(path.join(EXPORT, 'scripts/vendor/script_main.WZihZBhk.mjs'), 'utf8');
const idx = main.indexOf('canvasComponent');
console.log('\ncanvasComponent in script_main at:', idx);
if (idx >= 0) {
  console.log(JSON.stringify(main.slice(Math.max(0, idx - 300), idx + 300)));
}

await browser.close();
server.close();
