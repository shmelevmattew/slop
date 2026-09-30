import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { URL } from 'node:url';
import {
  ROOT,
  UPLOADS_DIR,
  SITE_FILE,
  SECTION_TYPES,
  CASE_FIELDS,
  initStorage,
  readJson,
  writeJson,
  readCases,
  readCase,
  saveCase,
  deleteCase,
  reorderCases,
  newCase,
  newSection,
  normalizeCase,
  publishedCases,
  slugify,
  readPages,
  readPage,
  savePage,
  newGalleryPage,
  newGalleryItem,
} from './store.js';
import { normalizeLocale } from './i18n.js';
import { renderHome, renderCase, renderGallery, renderResume, renderNotFound } from './templates.js';
import {
  loadAdminConfig,
  isAuthenticated,
  verifyPassword,
  createSessionToken,
  sessionCookie,
  clearCookie,
} from './auth.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ADMIN_DIR = path.join(ROOT, 'admin');
const PUBLIC_DIR = path.join(ROOT, 'public');

initStorage();

// The admin panel lives behind a random URL segment and a signed session
// cookie. Search engines are told to stay away from every admin response.
const adminConfig = loadAdminConfig();
const ADMIN_BASE = `/${adminConfig.path}`;
const NOINDEX = { 'X-Robots-Tag': 'noindex, nofollow, noarchive' };

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    'Cache-Control': 'no-store',
    ...headers,
  });
  res.end(body);
}

function sendJson(res, status, value) {
  send(res, status, JSON.stringify(value), {
    'Content-Type': 'application/json; charset=utf-8',
    ...NOINDEX,
  });
}

function sendFile(res, filePath, { cache = false, headers = {} } = {}) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      send(res, 404, 'Not found', { 'Content-Type': 'text/plain; charset=utf-8' });
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    send(res, 200, data, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': cache ? 'public, max-age=3600' : 'no-store',
      ...headers,
    });
  });
}

function readBody(req, limit = 25 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(new Error('Payload too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function safeUploadPath(name) {
  const base = path.basename(String(name || 'file')).replace(/[^a-zA-Z0-9._-]/g, '_');
  const withExt = base.length > 120 ? base.slice(-120) : base;
  return path.join(UPLOADS_DIR, `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${withExt}`);
}

const EXT_BY_MIME = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/webp': '.webp',
  'image/gif': '.gif',
  'image/avif': '.avif',
  'image/svg+xml': '.svg',
  'video/mp4': '.mp4',
  'video/webm': '.webm',
};

// Accepts a JSON body with { filename, dataUrl } so the admin panel can upload
// through a single fetch call without multipart parsing.
function saveDataUrl(filename, dataUrl) {
  const match = /^data:([a-zA-Z0-9/+.-]+);base64,(.+)$/s.exec(String(dataUrl || ''));
  if (!match) throw new Error('Ожидается data URL вида data:image/png;base64,...');
  const mime = match[1];
  const buffer = Buffer.from(match[2], 'base64');
  if (buffer.length > 20 * 1024 * 1024) throw new Error('Файл больше 20 МБ');
  const ext = path.extname(String(filename || '')) || EXT_BY_MIME[mime] || '.bin';
  const target = safeUploadPath(`${path.basename(String(filename || 'file'), path.extname(String(filename || '')))}${ext}`);
  fs.writeFileSync(target, buffer);
  return `/uploads/${path.basename(target)}`;
}

async function handleApi(req, res, url) {
  const segments = url.pathname.split('/').filter(Boolean); // ["api", ...]
  const route = segments.slice(1).join('/');

  if (req.method === 'GET' && route === 'schema') {
    sendJson(res, 200, {
      sectionTypes: SECTION_TYPES,
      caseFields: CASE_FIELDS,
      locales: ['ru', 'en'],
    });
    return;
  }

  if (req.method === 'GET' && route === 'site') {
    sendJson(res, 200, readJson(SITE_FILE, {}));
    return;
  }

  if (req.method === 'PUT' && route === 'site') {
    const body = JSON.parse((await readBody(req)).toString('utf8') || '{}');
    writeJson(SITE_FILE, body);
    sendJson(res, 200, { ok: true });
    return;
  }

  if (route === 'cases' && req.method === 'GET') {
    sendJson(res, 200, readCases());
    return;
  }

  if (route === 'pages' && req.method === 'GET') {
    sendJson(res, 200, readPages());
    return;
  }

  if (route.startsWith('pages/')) {
    const slug = segments[2];
    if (req.method === 'GET') {
      const page = readPage(slug) || newGalleryPage(slug);
      sendJson(res, 200, page);
      return;
    }
    if (req.method === 'PUT') {
      const body = JSON.parse((await readBody(req)).toString('utf8') || '{}');
      sendJson(res, 200, savePage(slug, body));
      return;
    }
  }

  if (route === 'cases' && req.method === 'POST') {
    const body = JSON.parse((await readBody(req)).toString('utf8') || '{}');
    const created = saveCase({ ...newCase(body.title?.ru || 'Новый кейс'), ...body });
    sendJson(res, 201, created);
    return;
  }

  if (route === 'cases/reorder' && req.method === 'POST') {
    const body = JSON.parse((await readBody(req)).toString('utf8') || '{}');
    sendJson(res, 200, reorderCases(body.ids));
    return;
  }

  if (route.startsWith('cases/')) {
    const id = segments[2];
    if (req.method === 'GET') {
      const entry = readCase(id);
      if (!entry) return sendJson(res, 404, { error: 'Кейс не найден' });
      sendJson(res, 200, entry);
      return;
    }
    if (req.method === 'PUT') {
      const body = JSON.parse((await readBody(req)).toString('utf8') || '{}');
      const merged = normalizeCase({ ...body, id });
      sendJson(res, 200, saveCase(merged));
      return;
    }
    if (req.method === 'DELETE') {
      const ok = deleteCase(id);
      sendJson(res, ok ? 200 : 404, { ok });
      return;
    }
  }

  if (req.method === 'POST' && route === 'upload') {
    const body = JSON.parse((await readBody(req)).toString('utf8') || '{}');
    const url = saveDataUrl(body.filename, body.dataUrl);
    sendJson(res, 200, { url });
    return;
  }

  if (req.method === 'POST' && route === 'sections/preview') {
    // Returns a fresh section object so the admin panel can add one without
    // duplicating the shape definition on the client.
    const body = JSON.parse((await readBody(req)).toString('utf8') || '{}');
    sendJson(res, 200, newSection(body.type || 'text'));
    return;
  }

  if (req.method === 'POST' && route === 'pages/preview') {
    sendJson(res, 200, newGalleryItem());
    return;
  }

  sendJson(res, 404, { error: 'Неизвестный маршрут API' });
}

function handlePublic(req, res, url, locale) {
  const site = readJson(SITE_FILE, {});
  const draftId = url.searchParams.get('draft');
  const includeDrafts = Boolean(draftId);

  let pathname = decodeURIComponent(url.pathname);

  // The English build lives under /en so the same URLs work on a static host.
  let effectiveLocale = locale;
  if (pathname === '/en' || pathname === '/en/' || pathname.startsWith('/en/')) {
    effectiveLocale = 'en';
    pathname = pathname.slice(3) || '/';
    if (!pathname.startsWith('/')) pathname = `/${pathname}`;
  }

  if (pathname === '/' || pathname === '') {
    const cases = includeDrafts ? readCases() : publishedCases();
    send(res, 200, renderHome({ site, cases, locale: effectiveLocale, draftId }), {
      'Content-Type': 'text/html; charset=utf-8',
    });
    return;
  }

  if (pathname.startsWith('/case/')) {
    const slug = pathname.slice('/case/'.length).replace(/\/+$/, '');
    const all = includeDrafts ? readCases() : publishedCases();
    const entry = all.find((c) => c.slug === slug);
    if (!entry) {
      send(res, 404, renderNotFound({ site, locale: effectiveLocale }), {
        'Content-Type': 'text/html; charset=utf-8',
      });
      return;
    }
    send(
      res,
      200,
      renderCase({
        site,
        entry,
        locale: effectiveLocale,
        allCases: all,
        draft: includeDrafts && !entry.published,
        adminLink: ADMIN_BASE,
      }),
      { 'Content-Type': 'text/html; charset=utf-8' }
    );
    return;
  }

  if (pathname.startsWith('/uploads/')) {
    const name = path.basename(pathname);
    const target = path.join(UPLOADS_DIR, name);
    if (!target.startsWith(UPLOADS_DIR)) return send(res, 403, 'Forbidden');
    sendFile(res, target, { cache: true });
    return;
  }

  if (pathname.startsWith('/static/')) {
    const rel = pathname.slice('/static/'.length);
    const target = path.join(PUBLIC_DIR, rel);
    if (!target.startsWith(PUBLIC_DIR)) return send(res, 403, 'Forbidden');
    sendFile(res, target, { cache: true });
    return;
  }

  // Gallery pages ("Разное") keep the home hero and footer, only the grid
  // between them changes, so `renderGallery` sits between the two layouts.
  if (pathname === '/other' || pathname === '/other/') {
    const page = readPage('other');
    if (page) {
      send(res, 200, renderGallery({ site, page, locale: effectiveLocale }), {
        'Content-Type': 'text/html; charset=utf-8',
      });
      return;
    }
  }

  // Resume shares the home hero and footer too, with a different body and a
  // PDF download in place of the primary call to action.
  if (pathname === '/resume' || pathname === '/resume/') {
    const pdfHref = site.resume?.downloadHref || '/static/resume.pdf';
    const pdfPath = path.join(PUBLIC_DIR, path.basename(pdfHref));
    send(
      res,
      200,
      renderResume({ site, locale: effectiveLocale, pdfReady: fs.existsSync(pdfPath) }),
      { 'Content-Type': 'text/html; charset=utf-8' }
    );
    return;
  }

  send(res, 404, renderNotFound({ site, locale }), {
    'Content-Type': 'text/html; charset=utf-8',
  });
}

let PORT = 4500;

function renderLogin({ error = false } = {}) {
  return fs
    .readFileSync(path.join(ADMIN_DIR, 'login.html'), 'utf8')
    .replaceAll('__ADMIN_BASE__', ADMIN_BASE)
    .replace('__ERROR__', error ? '<p class="error">Неверный пароль</p>' : '');
}

function renderAdmin() {
  return fs
    .readFileSync(path.join(ADMIN_DIR, 'index.html'), 'utf8')
    .replaceAll('__ADMIN_BASE__', ADMIN_BASE);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  // Keep search engines out of the whole site.
  if (url.pathname === '/robots.txt') {
    send(res, 200, 'User-agent: *\nDisallow: /\n', {
      'Content-Type': 'text/plain; charset=utf-8',
      ...NOINDEX,
    });
    return;
  }

  // Admin login: a plain form post, no browser auth dialog.
  if (url.pathname === `${ADMIN_BASE}/login` && req.method === 'POST') {
    const body = (await readBody(req)).toString('utf8');
    const password = new URLSearchParams(body).get('password') || '';
    if (verifyPassword(password, adminConfig)) {
      send(res, 302, '', {
        'Set-Cookie': sessionCookie(createSessionToken(adminConfig)),
        Location: ADMIN_BASE,
        ...NOINDEX,
      });
    } else {
      send(res, 401, renderLogin({ error: true }), {
        'Content-Type': 'text/html; charset=utf-8',
        ...NOINDEX,
      });
    }
    return;
  }

  if (url.pathname === `${ADMIN_BASE}/logout`) {
    send(res, 302, '', {
      'Set-Cookie': clearCookie(),
      Location: `${ADMIN_BASE}/login`,
      ...NOINDEX,
    });
    return;
  }

  // Admin assets. Only the stylesheet and the script are exposed, and they hold
  // no secrets, so the login page can load them before a session exists.
  if (url.pathname.startsWith(`${ADMIN_BASE}/`)) {
    const rel = url.pathname.slice(ADMIN_BASE.length + 1);
    if (rel !== 'admin.css' && rel !== 'app.js') {
      send(res, 404, 'Not found', { 'Content-Type': 'text/plain; charset=utf-8', ...NOINDEX });
      return;
    }
    sendFile(res, path.join(ADMIN_DIR, rel), { headers: NOINDEX });
    return;
  }

  // Admin shell — only with a valid session cookie.
  if (url.pathname === ADMIN_BASE || url.pathname === `${ADMIN_BASE}/`) {
    if (!isAuthenticated(req, adminConfig)) {
      send(res, 200, renderLogin(), {
        'Content-Type': 'text/html; charset=utf-8',
        ...NOINDEX,
      });
      return;
    }
    send(res, 200, renderAdmin(), {
      'Content-Type': 'text/html; charset=utf-8',
      ...NOINDEX,
    });
    return;
  }

  // Admin API — guarded by the session cookie.
  if (url.pathname.startsWith('/api/')) {
    if (req.method === 'OPTIONS') {
      send(res, 204, '');
      return;
    }
    if (!isAuthenticated(req, adminConfig)) {
      sendJson(res, 401, { error: 'Требуется вход в админ-панель' });
      return;
    }
    try {
      await handleApi(req, res, url);
    } catch (error) {
      sendJson(res, 400, { error: error.message });
    }
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    send(res, 405, 'Method not allowed');
    return;
  }

  const site = readJson(SITE_FILE, {});
  const locale = normalizeLocale(url.searchParams.get('lang'), 'ru');
  handlePublic(req, res, url, locale);
});

function start() {
  const site = readJson(SITE_FILE, {});
  PORT = Number(process.env.PORT || site.port || 4500);
  // A PaaS (Timeweb Cloud App Platform and friends) needs the app on 0.0.0.0;
  // behind a local reverse proxy 127.0.0.1 is the safer default.
  const HOST = process.env.HOST || '127.0.0.1';
  server.listen(PORT, HOST, () => {
    console.log('');
    console.log('  Админ-панель:  http://' + HOST + ':' + PORT + ADMIN_BASE);
    console.log('  Сайт:          http://localhost:' + PORT + '/');
    console.log('  Данные:        ' + path.join(ROOT, 'data'));
    console.log('');
    console.log('  Ctrl+C — остановить');
    console.log('');
  });
}

start();

export { server, start };
