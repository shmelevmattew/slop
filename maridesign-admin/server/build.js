// Renders the published site to dist/ as plain files, ready to upload to any
// static host. The admin panel is not included: it only makes sense next to a
// running server that can write to data/.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, UPLOADS_DIR, SITE_FILE, initStorage, readJson, publishedCases } from './store.js';
import { renderHome, renderCase, renderNotFound } from './templates.js';

const DIST = path.join(ROOT, 'dist');
const PUBLIC_DIR = path.join(ROOT, 'public');
const LOCALES = ['ru', 'en'];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content, 'utf8');
}

// Only files referenced by published content are copied, so unused uploads do
// not end up in the deployed folder.
function collectUsedUploads(cases) {
  const used = new Set();
  const add = (value) => {
    if (typeof value === 'string' && value.startsWith('/uploads/')) used.add(path.basename(value));
  };
  for (const entry of cases) {
    add(entry.cover?.ru);
    add(entry.cover?.en);
    for (const section of entry.sections || []) {
      add(section.image);
      for (const image of section.images || []) add(image);
      if (section.videoUrl?.startsWith('/uploads/')) add(path.basename(section.videoUrl));
    }
  }
  return used;
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const name of fs.readdirSync(src)) {
    const from = path.join(src, name);
    const to = path.join(dest, name);
    if (fs.statSync(from).isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function copyStatic(cases) {
  ensureDir(DIST);

  // stylesheet and fonts ship as-is
  copyDir(PUBLIC_DIR, path.join(DIST, 'static'));

  // Only the uploads actually referenced by published content are copied, so
  // unused files do not end up in the deployed folder.
  const used = collectUsedUploads(cases);
  for (const name of used) {
    const src = path.join(UPLOADS_DIR, name);
    if (fs.existsSync(src)) write(path.join(DIST, 'uploads', name), fs.readFileSync(src));
  }

  return used.size;
}

function main() {
  initStorage();

  const site = readJson(SITE_FILE, {});
  const cases = publishedCases();

  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true, force: true });

  let pages = 0;
  for (const locale of LOCALES) {
    // Home lives at dist/ for the default locale and dist/en/ for the other,
    // which keeps the URLs clean on a static host.
    const homeFile = locale === 'ru' ? path.join(DIST, 'index.html') : path.join(DIST, locale, 'index.html');
    write(homeFile, renderHome({ site, cases, locale }));
    pages++;

    for (const entry of cases) {
      const file =
        locale === 'ru'
          ? path.join(DIST, 'case', entry.slug, 'index.html')
          : path.join(DIST, locale, 'case', entry.slug, 'index.html');
      write(
        file,
        renderCase({ site, entry, locale, allCases: cases })
      );
      pages++;
    }
  }

  write(path.join(DIST, '404.html'), renderNotFound({ site, locale: 'ru' }));
  const uploads = copyStatic(cases);

  console.log('');
  console.log(`  Собрано страниц: ${pages} (${LOCALES.join(', ')})`);
  console.log(`  Кейсов:          ${cases.length}`);
  console.log(`  Файлов картинок: ${uploads}`);
  console.log(`  Папка:           ${DIST}`);
  console.log('');
  console.log('  Залей содержимое dist/ на хостинг статики.');
  console.log('');
}

main();
