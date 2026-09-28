import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(HERE, '..');
export const DATA_DIR = path.join(ROOT, 'data');
export const CASES_DIR = path.join(DATA_DIR, 'cases');
export const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');
export const PAGES_FILE = path.join(DATA_DIR, 'pages.json');
export const SITE_FILE = path.join(DATA_DIR, 'site.json');

export const LOCALES = ['ru', 'en'];
export const DEFAULT_LOCALE = 'ru';

export const SECTION_TYPES = [
  { id: 'text', label: { ru: 'Текст', en: 'Text' } },
  { id: 'image', label: { ru: 'Изображение', en: 'Image' } },
  { id: 'gallery', label: { ru: 'Галерея', en: 'Gallery' } },
  { id: 'textImage', label: { ru: 'Текст + изображение', en: 'Text + image' } },
  { id: 'imageText', label: { ru: 'Изображение + текст', en: 'Image + text' } },
  { id: 'video', label: { ru: 'Видео', en: 'Video' } },
  { id: 'quote', label: { ru: 'Цитата', en: 'Quote' } },
  { id: 'list', label: { ru: 'Список', en: 'List' } },
];

export const CASE_FIELDS = [
  { key: 'title', type: 'localizedText', required: true },
  { key: 'slug', type: 'slug', required: true },
  { key: 'company', type: 'text' },
  { key: 'year', type: 'text' },
  { key: 'summary', type: 'localizedTextarea' },
  { key: 'cover', type: 'localizedImage' },
  { key: 'role', type: 'localizedText' },
  { key: 'timeline', type: 'localizedText' },
  { key: 'team', type: 'localizedText' },
  { key: 'platform', type: 'localizedText' },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

export function initStorage() {
  ensureDir(DATA_DIR);
  ensureDir(CASES_DIR);
  ensureDir(UPLOADS_DIR);
  if (!fs.existsSync(PAGES_FILE)) {
    writeJson(PAGES_FILE, { other: newGalleryPage('other') });
  }
  if (!fs.existsSync(SITE_FILE)) {
    fs.writeFileSync(
      SITE_FILE,
      JSON.stringify(
        {
          port: 4500,
          siteTitle: { ru: 'Мария Шиныбекова', en: 'Maria Shinybekova' },
          siteDescription: {
            ru: 'UI/UX и продуктовый дизайнер с 4+ годами опыта проектирования B2B продуктов',
            en: 'UI/UX and product designer with 4+ years of experience in B2B product design',
          },
          nav: [
            { id: 'projects', href: '/', label: { ru: 'Проекты', en: 'Projects' } },
            { id: 'other', href: '/other', label: { ru: 'Разное', en: 'Other' } },
            { id: 'resume', href: '/resume', label: { ru: 'Резюме', en: 'Resume' } },
          ],
          contact: {
            label: { ru: 'Обсудить проект', en: 'Discuss a project' },
            href: 'https://t.me/marishinybekova',
          },
        },
        null,
        2
      ),
      'utf8'
    );
  }
}

export function readJson(file, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

// Atomic write: write to a temp file in the same directory, then replace the target.
// On Windows `rename` fails if the destination already exists, so an existing file
// is removed first. The temp file still guarantees a half-written file is never
// the one the server reads.
export function writeJson(file, value) {
  ensureDir(path.dirname(file));
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(value, null, 2), 'utf8');
  if (fs.existsSync(file)) fs.unlinkSync(file);
  fs.renameSync(tmp, file);
}

export function newId() {
  return crypto.randomBytes(6).toString('hex');
}

export function slugify(input, fallback = 'case') {
  const translit = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i',
    й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't',
    у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '',
    э: 'e', ю: 'yu', я: 'ya',
  };
  const base = String(input || '')
    .toLowerCase()
    .split('')
    .map((ch) => (translit[ch] !== undefined ? translit[ch] : ch))
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
  return base || fallback;
}

export function emptyLocale(value = '') {
  return { ru: value, en: '' };
}

export function newSection(type = 'text') {
  return {
    id: newId(),
    type,
    anchor: '',
    title: { ru: 'Новая секция', en: '' },
    body: { ru: '', en: '' },
    image: null,
    images: [],
    videoUrl: '',
    items: [{ ru: '', en: '' }],
  };
}

export function newCase(title = 'Новый кейс') {
  const now = new Date().toISOString();
  return {
    id: newId(),
    slug: slugify(title),
    published: false,
    order: Date.now(),
    createdAt: now,
    updatedAt: now,
    title: { ru: title, en: '' },
    company: '',
    year: String(new Date().getFullYear()),
    summary: { ru: '', en: '' },
    cover: { ru: null, en: null },
    role: { ru: '', en: '' },
    timeline: { ru: '', en: '' },
    team: { ru: '', en: '' },
    platform: { ru: '', en: '' },
    sections: [newSection('text')],
    seo: { titleRu: '', titleEn: '', descriptionRu: '', descriptionEn: '' },
  };
}

export function normalizeCase(raw) {
  const base = newCase();
  const merged = { ...base, ...(raw || {}) };

  // Guarantee every localized field is a { ru, en } object so the UI and renderer
  // never have to defend against nulls.
  const localize = (value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return { ru: String(value.ru ?? ''), en: String(value.en ?? '') };
    }
    if (typeof value === 'string') return { ru: value, en: '' };
    return { ru: '', en: '' };
  };

  const localizeImage = (value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return {
        ru: typeof value.ru === 'string' ? value.ru : null,
        en: typeof value.en === 'string' ? value.en : null,
      };
    }
    if (typeof value === 'string') return { ru: value, en: null };
    return { ru: null, en: null };
  };

  merged.title = localize(merged.title);
  merged.summary = localize(merged.summary);
  merged.role = localize(merged.role);
  merged.timeline = localize(merged.timeline);
  merged.team = localize(merged.team);
  merged.platform = localize(merged.platform);
  merged.cover = localizeImage(merged.cover);

  const usedAnchors = new Set();
  merged.sections = (Array.isArray(merged.sections) ? merged.sections : []).map((section) => {
    const s = { ...newSection(), ...(section || {}) };
    s.id = s.id || newId();
    s.type = SECTION_TYPES.some((t) => t.id === s.type) ? s.type : 'text';
    s.title = localize(s.title);
    s.body = localize(s.body);
    s.image = typeof s.image === 'string' ? s.image : null;
    s.images = Array.isArray(s.images) ? s.images.filter((i) => typeof i === 'string') : [];
    s.videoUrl = typeof s.videoUrl === 'string' ? s.videoUrl : '';
    s.items = Array.isArray(s.items) ? s.items.map(localize) : [];

    // Anchor must be unique: two sections sharing one would break the table of
    // contents, and repeated save/load must not drift. An empty anchor means
    // "use the positional fallback" in the renderer.
    const baseAnchor = slugify(s.anchor || s.title?.ru || '', '');
    if (!baseAnchor) {
      s.anchor = '';
      return s;
    }
    let anchor = baseAnchor;
    let suffix = 2;
    while (usedAnchors.has(anchor)) anchor = `${baseAnchor}-${suffix++}`;
    usedAnchors.add(anchor);
    s.anchor = anchor;
    return s;
  });

  merged.seo = { ...base.seo, ...(merged.seo || {}) };
  merged.slug = merged.slug || base.slug;
  merged.order = Number.isFinite(merged.order) ? merged.order : Date.now();
  merged.published = !!merged.published;
  return merged;
}

// ---------- gallery pages ("Разное") ----------
// A gallery page is a flat list of cards, each an image with a heading and an
// optional caption. It is deliberately simpler than a case section list: no
// reordering by type, no anchors, just title + image per card.

export function newGalleryItem(title = 'Новый раздел') {
  return {
    id: newId(),
    title: { ru: title, en: '' },
    body: { ru: '', en: '' },
    image: null,
  };
}

export function newGalleryPage(slug = 'other', title = '') {
  return {
    slug,
    title: { ru: title, en: '' },
    intro: { ru: '', en: '' },
    items: [newGalleryItem()],
    updatedAt: new Date().toISOString(),
  };
}

export function normalizeGalleryPage(raw = {}) {
  const localize = (value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return { ru: String(value.ru ?? ''), en: String(value.en ?? '') };
    }
    if (typeof value === 'string') return { ru: value, en: '' };
    return { ru: '', en: '' };
  };

  const page = {
    slug: String(raw.slug || 'other'),
    title: localize(raw.title),
    intro: localize(raw.intro),
    updatedAt: raw.updatedAt || new Date().toISOString(),
  };

  page.items = (Array.isArray(raw.items) ? raw.items : []).map((item) => ({
    id: item?.id || newId(),
    title: localize(item?.title),
    body: localize(item?.body),
    image: typeof item?.image === 'string' && item.image ? item.image : null,
  }));

  return page;
}

export function readPages() {
  const raw = readJson(PAGES_FILE, {}) || {};
  const pages = {};
  for (const [slug, value] of Object.entries(raw)) {
    pages[slug] = normalizeGalleryPage({ ...value, slug });
  }
  return pages;
}

export function readPage(slug) {
  return readPages()[slug] || null;
}

export function savePage(slug, raw) {
  const pages = readPages();
  const page = normalizeGalleryPage({ ...raw, slug });
  page.updatedAt = new Date().toISOString();
  pages[slug] = page;
  writeJson(PAGES_FILE, pages);
  return page;
}

// ---------- cases ----------

export function caseFile(id) {
  return path.join(CASES_DIR, `${id}.json`);
}

export function readCases() {
  ensureDir(CASES_DIR);
  return fs
    .readdirSync(CASES_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => normalizeCase(readJson(path.join(CASES_DIR, f))))
    .sort((a, b) => a.order - b.order);
}

export function readCase(id) {
  const file = caseFile(id);
  if (!fs.existsSync(file)) return null;
  return normalizeCase(readJson(file));
}

export function saveCase(raw) {
  const value = normalizeCase(raw);
  value.updatedAt = new Date().toISOString();
  writeJson(caseFile(value.id), value);
  return value;
}

export function deleteCase(id) {
  const file = caseFile(id);
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    return true;
  }
  return false;
}

export function publishedCases() {
  return readCases().filter((c) => c.published);
}
