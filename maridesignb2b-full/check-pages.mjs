// Checks what each exported page actually renders, and whether the Framer
// runtime in the export is able to hydrate it without network access.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const EXPORT = process.cwd();

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mjs': 'application/javascript',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.framercms': 'application/octet-stream',
};

const server = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
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

await new Promise((r) => server.listen(4700, r));

const browser = await puppeteer.launch({ headless: 'new' });
const pages = [
  'about',
  'experiments',
  'resume',
  'case-studies_making-life-easier',
  'case-studies_work-on-document-system',
  'case-studies_system-control',
  'case-studies_document-system-mobile-app',
  '__index__',
];

for (const name of pages) {
  const p = await browser.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  const errors = [];
  p.on('pageerror', (e) => errors.push(e.message.slice(0, 120)));
  p.on('requestfailed', (r) => errors.push('REQFAIL ' + r.url().slice(-60)));

  try {
    const target =
      name === '__index__'
        ? 'http://localhost:4700/index.html'
        : `http://localhost:4700/subpages/${name}.html`;
    await p.goto(target, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (e) {
    console.log(`${name}: navigation issue — ${e.message.slice(0, 60)}`);
  }
  await new Promise((r) => setTimeout(r, 3000));

  const info = await p.evaluate(() => ({
    textLen: document.body.innerText.trim().length,
    sections: document.querySelectorAll('section').length,
    framerRoot: !!document.querySelector('[data-framer-root]'),
    rootClass: document.querySelector('[data-framer-root]')?.className?.split(' ')[0] || null,
    firstText: document.body.innerText.trim().slice(0, 70).replace(/\s+/g, ' '),
  }));

  console.log(`\n=== ${name} ===`);
  console.log(JSON.stringify(info, null, 2));
  if (errors.length) console.log('errors:', [...new Set(errors)].slice(0, 3).join(' | '));
  await p.close();
}

await browser.close();
server.close();
