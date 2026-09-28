// Sets a new admin password without touching the secret URL or the session key.
// Usage: node server/set-password.js "новый пароль"
import { setPassword } from './auth.js';

const password = process.argv.slice(2).join(' ').trim();

if (!password) {
  console.error('Укажи пароль: node server/set-password.js "новый пароль"');
  process.exit(1);
}

setPassword(password);
console.log('Пароль обновлён.');
