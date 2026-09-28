// One-off importer: reads the exported Framer CMS data and creates matching
// cases in the admin panel, so existing content does not have to be retyped.
//
// Source: maridesignb2b-full/data/*.framercms
// Target: data/cases/*.json
//
// The Framer CMS uses opaque field keys, mapped to real names below. The mapping
// was derived by matching each key against the text that appeared in the rendered
// page and in the site's own indexes:
//
//   wGmP6opvl -> title        UChNSq1Q_ -> slug         VLnZ4w5Mq -> company
//   gKAeE6He4 -> year         enb_IUJvR -> summary      cCwylbwLp -> cover
//   iKxJMOz9b -> role         xfESysqZB -> timeline     ZKxSAzHNf -> team
//   NsQ0viaaT -> platform
//
// Only the metadata block is imported. Section bodies live in a nested container
// format that is not publicly documented, and reading it without the exact
// framing silently pulls text across cases, so sections are left for the admin
// panel where they can be entered against the real page.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { initStorage, writeJson, newId, slugify, caseFile, normalizeCase, CASES_DIR } from './store.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));

// Locate the exported Framer site. `import.meta.url` can point at the working
// directory rather than this file under some invocations, so walk up from HERE
// and from cwd, and accept the first candidate that actually contains data/.
function findExportDir() {
  const candidates = [];
  for (const base of [HERE, process.cwd()]) {
    for (const rel of [
      '../../maridesignb2b-full',
      '../maridesignb2b-full',
      '../../../maridesignb2b-full',
      'maridesignb2b-full',
      '../maridesignb2b-full',
    ]) {
      candidates.push(path.resolve(base, rel));
    }
  }
  const found = candidates.find((dir) => fs.existsSync(path.join(dir, 'data')));
  if (!found) {
    throw new Error(
      'Не найден каталог экспорта (maridesignb2b-full/data).\n' +
        'Положите папку экспорта рядом с maridesign-admin или укажите путь:\n' +
        '  node server/import-framer.js "C:\\путь\\к\\maridesignb2b-full"'
    );
  }
  return found;
}

const EXPORT_DIR = process.argv[2] ? path.resolve(process.argv[2]) : findExportDir();
const DATA_DIR = path.join(EXPORT_DIR, 'data');

const FIELD = {
  title: 'wGmP6opvl',
  slug: 'UChNSq1Q_',
  company: 'VLnZ4w5Mq',
  year: 'gKAeE6He4',
  summary: 'enb_IUJvR',
  role: 'iKxJMOz9b',
  timeline: 'xfESysqZB',
  team: 'ZKxSAzHNf',
  platform: 'NsQ0viaaT',
  cover: 'cCwylbwLp',
};

// Field keys that carry no content we need in the admin panel.
const SKIP = new Set([
  'id', 'createdAt', 'updatedAt', 'previousItemId', 'nextItemId', 'MMK',
]);

const TEXT_KEYS = new Set([
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'div', 'span', 'br', 'ul', 'ol', 'a', 'strong', 'em',
]);

// Framer stores rich text as nested arrays: [4, "p", {attrs}, ...children].
// Literal characters sit in [5, "text"] pairs. Pull readable text back out.
// (The alternative implementation used elsewhere in this file handles the same
// shape starting from a raw string.)
function richTextToPlain(node, out = []) {
  if (node == null) return out.join('');
  if (typeof node === 'string') {
    out.push(node);
    return out.join('');
  }
  if (!Array.isArray(node)) return out.join('');

  // Literal text wins over tag handling.
  if (node[0] === 5 && typeof node[1] === 'string') {
    out.push(node[1]);
    return out.join('');
  }

  const tag = node[1];
  if (tag === 'br') out.push('\n');

  for (let i = 1; i < node.length; i++) {
    const child = node[i];
    if (Array.isArray(child)) richTextToPlain(child, out);
  }

  if (tag === 'p' || (typeof tag === 'string' && /^h[1-6]$/.test(tag))) out.push('\n\n');
  if (tag === 'li') out.push('\n');
  return out.join('');
}

function richTextArray(raw) {
  const text = String(raw ?? '');
  const start = text.indexOf('[');
  if (start < 0) return '';
  try {
    return cleanText(richTextToPlain(JSON.parse(text.slice(start))));
  } catch {
    return '';
  }
}

function cleanText(value) {
  return String(value ?? '')
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^\s+|\s+$/g, '');
}

// The exporter writes a chunked, nested container format. A fully general parser
// would need the exact container framing, which is not publicly documented, and
// a wrong guess silently skips fields. Instead every known field is located by
// its byte pattern and its value read directly:
//
//   key:   [4-byte BE length][identifier bytes]
//   value: [1 tag byte][4-byte BE length][payload]
//
// This is reliable for the metadata block and for the section title/body pairs,
// which are the only things the importer needs.
function findKey(buffer, key, from = 0) {
  const needle = Buffer.from(key, 'utf8');
  const prefix = Buffer.alloc(4);
  prefix.writeUInt32BE(needle.length);

  let at = from;
  while (at >= 0) {
    const found = buffer.indexOf(needle, at);
    if (found < 0) return -1;
    // The four bytes before the key must be its big-endian length.
    if (found >= 4 && buffer.readUInt32BE(found - 4) === needle.length) return found;
    at = found + 1;
  }
  return -1;
}

function readValueAt(buffer, at) {
  if (at + 5 > buffer.length) return null;
  const tag = buffer[at];
  if (tag > 0x0f) return null;
  const length = buffer.readUInt32BE(at + 1);
  if (length > 400000 || at + 5 + length > buffer.length) return null;
  return {
    tag,
    text: buffer.slice(at + 5, at + 5 + length).toString('utf8'),
    end: at + 5 + length,
  };
}

function readField(buffer, key) {
  const at = findKey(buffer, key);
  if (at < 0) return null;
  return readValueAt(buffer, at + key.length);
}

// Enumerate every element in the file, so section pairs can be walked in order.
// Keys are validated by the length prefix that precedes them, which keeps the
// walk from desynchronising inside binary payloads.
function parseRecords(buffer) {
  const elements = [];
  let p = 0;

  while (p < buffer.length) {
    // Try a value at this position first: tag byte + BE length.
    const value = readValueAt(buffer, p);
    if (value && value.tag !== 0x00) {
      elements.push({ kind: 'value', tag: value.tag, text: value.text });
      p = value.end;
      continue;
    }

    // Then try a key: BE length + identifier.
    const length = p + 4 <= buffer.length ? buffer.readUInt32BE(p) : Infinity;
    if (length > 0 && length <= 64 && p + 4 + length <= buffer.length) {
      const text = buffer.slice(p + 4, p + 4 + length).toString('utf8');
      if (/^[A-Za-z_][A-Za-z0-9_]{0,40}$/.test(text)) {
        elements.push({ kind: 'key', text });
        p += 4 + length;
        continue;
      }
    }

    p += 1;
  }

  return elements;
}

// Elements alternate key, value, key, value… in page order. Metadata fields are
// recognised by key name; every other key/value pair is a section, whose title
// is the first pair and whose body follows.
function collectFields(elements) {
  const fields = new Map();
  const pairs = [];

  for (let i = 0; i < elements.length - 1; i++) {
    const key = elements[i];
    if (key.kind !== 'key') continue;
    const value = elements[i + 1];
    if (!value || value.kind !== 'value') continue;

    if (!fields.has(key.text)) fields.set(key.text, value.text);
    pairs.push({ key: key.text, value: value.text, tag: value.tag });
  }

  return { fields, pairs };
}

// Rich text arrives as a JSON array embedded in the payload.
function richTextFromValue(value) {
  return richTextArray(value);
}

function readValue(raw) {
  const text = cleanText(String(raw ?? ''));
  if (text.includes('"src"')) {
    const match = /"src"\s*:\s*"([^"]+)"/.exec(text);
    if (match) return { kind: 'image', src: match[1].split('?')[0], text: '' };
  }
  if (text.trimStart().startsWith('[')) {
    const rich = richTextFromValue(text);
    if (rich) return { kind: 'rich', text: rich, src: null };
  }
  return { kind: 'text', text, src: null };
}

function loadRecords() {
  if (!fs.existsSync(DATA_DIR)) {
    throw new Error(`Не найден каталог с данными экспорта: ${DATA_DIR}`);
  }
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.framercms') && f.includes('chunk-default'))
    .map((f) => path.join(DATA_DIR, f));

  const all = [];
  for (const file of files) {
    const buffer = fs.readFileSync(file);
    // Only files that actually contain the case title field are useful.
    if (findKey(buffer, FIELD.title) < 0) continue;
    all.push({ file: path.basename(file), buffer });
  }
  return all;
}

// Local uploads mirrored from the export, so cover images work offline.
function localImage(framerUrl) {
  if (!framerUrl) return null;
  const name = framerUrl.split('/').pop().split('?')[0];
  const candidates = [
    path.join(EXPORT_DIR, 'assets', 'images', name),
    path.join(EXPORT_DIR, 'assets', 'misc', name),
  ];
  return candidates.find((c) => fs.existsSync(c)) || null;
}

function buildCaseFrom(buffer) {
  const get = (key) => {
    const field = readField(buffer, key);
    return field ? readValue(field.text) : null;
  };

  const title = get(FIELD.title)?.text || '';
  if (!title) return null;

  const coverField = get(FIELD.cover);
  const coverLocal = coverField?.kind === 'image' ? localImage(coverField.src) : null;

  // Section bodies are not imported: see the note at the top of this file.
  const sections = [];

  return normalizeCase({
    id: newId(),
    slug: slugify(get(FIELD.slug)?.text || title),
    published: true,
    order: Date.now() + sections.length,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { ru: title, en: '' },
    company: get(FIELD.company)?.text || '',
    year: get(FIELD.year)?.text || '',
    summary: { ru: get(FIELD.summary)?.text || '', en: '' },
    cover: { ru: coverLocal ? copyCover(coverLocal) : null, en: null },
    role: { ru: get(FIELD.role)?.text || '', en: '' },
    timeline: { ru: get(FIELD.timeline)?.text || '', en: '' },
    team: { ru: get(FIELD.team)?.text || '', en: '' },
    platform: { ru: get(FIELD.platform)?.text || '', en: '' },
    sections,
    seo: { titleRu: '', titleEn: '', descriptionRu: '', descriptionEn: '' },
  });
}

function copyCover(sourcePath) {
  const target = path.join(path.dirname(CASES_DIR), 'uploads', path.basename(sourcePath));
  if (!fs.existsSync(target)) fs.copyFileSync(sourcePath, target);
  return `/uploads/${path.basename(target)}`;
}

function main() {
  initStorage();
  const bundles = loadRecords();
  console.log(`Файлов с данными: ${bundles.length}`);

  let created = 0;
  const seenSlugs = new Set();
  for (const bundle of bundles) {
    const entry = buildCaseFrom(bundle.buffer);
    if (!entry) continue;
    if (seenSlugs.has(entry.slug)) continue;
    seenSlugs.add(entry.slug);
    writeJson(caseFile(entry.id), entry);
    created++;
    console.log(
      `  + ${entry.slug}  («${entry.title.ru.slice(0, 48)}», секций: ${entry.sections.length})`
    );
  }

  console.log(`\nИмпортировано кейсов: ${created}`);
  console.log('Откройте админку и заполните английские переводы.');
}

main();
