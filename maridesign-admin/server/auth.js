// Admin authentication: a single password, a signed session cookie and a
// secret URL segment. The password is never stored in clear text — only a
// scrypt hash with a per-install salt. The secret path and the cookie signing
// key live in data/admin.json, which is generated on first run.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { ROOT } from './store.js';

const ADMIN_FILE = path.join(ROOT, 'data', 'admin.json');

export const SESSION_COOKIE = 'md_admin';
export const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function randomHex(bytes = 16) {
  return crypto.randomBytes(bytes).toString('hex');
}

function randomPassword() {
  return crypto.randomBytes(12).toString('base64url');
}

function hashPassword(password, salt) {
  return crypto.scryptSync(String(password), salt, 32).toString('hex');
}

function writeConfig(config) {
  fs.mkdirSync(path.dirname(ADMIN_FILE), { recursive: true });
  fs.writeFileSync(ADMIN_FILE, JSON.stringify(config, null, 2), 'utf8');
}

// Reads data/admin.json, creating it with a random secret path, a random
// cookie key and the default password when it is missing or incomplete.
export function loadAdminConfig() {
  let raw = null;
  try {
    raw = JSON.parse(fs.readFileSync(ADMIN_FILE, 'utf8'));
  } catch {
    raw = null;
  }
  if (raw && raw.path && raw.salt && raw.passwordHash && raw.sessionSecret) {
    return raw;
  }
  const salt = randomHex(16);
  const password = process.env.ADMIN_PASSWORD || randomPassword();
  const config = {
    path: `manage-${randomHex(8)}`,
    salt,
    passwordHash: hashPassword(password, salt),
    sessionSecret: randomHex(32),
  };
  writeConfig(config);
  if (!process.env.ADMIN_PASSWORD) {
    console.log('');
    console.log('  Админка создана. Пароль: ' + password);
    console.log('  Сменить: node server/set-password.js "новый пароль"');
    console.log('');
  }
  return config;
}

export function verifyPassword(password, config) {
  const expected = String(config.passwordHash || '');
  const actual = hashPassword(password, config.salt);
  if (actual.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(actual), Buffer.from(expected));
}

// Replaces the password, keeping the secret path and cookie key intact.
export function setPassword(newPassword) {
  const config = loadAdminConfig();
  config.salt = randomHex(16);
  config.passwordHash = hashPassword(newPassword, config.salt);
  writeConfig(config);
  return config;
}

function sign(value, secret) {
  return crypto.createHmac('sha256', secret).update(value).digest('hex');
}

export function createSessionToken(config) {
  const expiry = String(Date.now() + SESSION_TTL_MS);
  return `${expiry}.${sign(expiry, config.sessionSecret)}`;
}

function verifySessionToken(token, config) {
  if (typeof token !== 'string') return false;
  const dot = token.indexOf('.');
  if (dot < 0) return false;
  const expiry = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = sign(expiry, config.sessionSecret);
  if (sig.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  return Number(expiry) > Date.now();
}

function parseCookies(req) {
  const header = req.headers.cookie || '';
  const out = {};
  for (const part of header.split(';')) {
    const idx = part.indexOf('=');
    if (idx < 0) continue;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (key) out[key] = decodeURIComponent(value);
  }
  return out;
}

export function isAuthenticated(req, config) {
  const cookies = parseCookies(req);
  return verifySessionToken(cookies[SESSION_COOKIE], config);
}

export function sessionCookie(token) {
  return `${SESSION_COOKIE}=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${Math.floor(
    SESSION_TTL_MS / 1000
  )}`;
}

export function clearCookie() {
  return `${SESSION_COOKIE}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`;
}
