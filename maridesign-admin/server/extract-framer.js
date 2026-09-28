// Pulls the real Framer CSS and markup out of the export so the rebuilt site can
// reuse them verbatim instead of approximating the design.
//
// The exported page keeps all styling in inline <style> blocks scoped to the
// page root class (`.framer-iD016 ...`). Those rules reference the exact same
// class names the markup uses, so copying both gives an identical result.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const EXPORT_DIR = path.resolve(ROOT, '../maridesignb2b-full');
const OUT_DIR = path.join(ROOT, 'framer');
const PAGE = path.join(EXPORT_DIR, 'subpages', 'case-studies_making-life-easier.html');

const html = fs.readFileSync(PAGE, 'utf8');

// --- 1. the page root class, which every rule is scoped to -------------------
const rootMatch = /<div data-framer-root="" class="([^"]+)"/.exec(html);
const rootClasses = rootMatch ? rootMatch[1].split(/\s+/) : [];
const rootClass = rootClasses.find((c) => /^framer-[A-Za-z0-9]{5,}$/.test(c));
console.log('page root class:', rootClass);
console.log('all root classes:', rootClasses.join(' '));

// --- 2. every inline style block --------------------------------------------
const styleBlocks = [...html.matchAll(/<style([^>]*)>([\s\S]*?)<\/style>/g)].map((m) => ({
  attrs: m[1],
  css: m[2],
}));
console.log('style blocks:', styleBlocks.length);

const css = styleBlocks.map((b) => b.css).join('\n');
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'framer.css'), css, 'utf8');
console.log('written framer.css:', css.length, 'chars');

// --- 3. the token and variable declarations ---------------------------------
const tokenCount = (css.match(/--token-[0-9a-f-]+/g) || []).length;
const presetCount = (css.match(/framer-styles-preset-[a-z0-9]+/g) || []).length;
console.log('token references:', tokenCount);
console.log('style preset references:', presetCount);

// --- 4. which top-level sections exist on the page ---------------------------
const sectionNames = [...html.matchAll(/<section[^>]*data-framer-name="([^"]+)"/g)].map((m) => m[1]);
console.log('sections on page:', [...new Set(sectionNames)].join(', '));

// --- 5. save the markup of one content section as the reusable sample --------
function extractSection(name) {
  const marker = html.indexOf(`data-framer-name="${name}"`);
  if (marker < 0) return null;
  const start = html.lastIndexOf('<section', marker);
  let depth = 0;
  let i = start;
  while (i < html.length) {
    if (html.startsWith('<section', i)) {
      depth++;
      i += 8;
      continue;
    }
    if (html.startsWith('</section>', i)) {
      depth--;
      i += 10;
      if (depth === 0) return html.slice(start, i);
      continue;
    }
    i++;
  }
  return null;
}

const samples = {};
for (const name of ['Case Study', 'Section 1', 'Next']) {
  const markup = extractSection(name);
  if (markup) {
    samples[name] = markup;
    const file = path.join(OUT_DIR, `sample-${name.replace(/\s+/g, '-').toLowerCase()}.html`);
    fs.writeFileSync(file, markup, 'utf8');
    console.log(`saved ${file}: ${markup.length} chars`);
  }
}

// --- 6. report the preset classes used for text ------------------------------
const presets = [...new Set((html.match(/framer-styles-preset-[a-z0-9]+/g) || []))];
console.log('preset classes in markup:', presets.join(', '));
