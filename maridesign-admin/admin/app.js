/* ============================================================
   maridesign — admin panel
   Plain ES modules, no build step. State lives in `state` and
   the editor re-renders from it; the server is the source of truth.
   ============================================================ */

const api = async (path, options = {}) => {
  const res = await fetch(`/api${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }
  if (!res.ok) throw new Error(data?.error || `Ошибка ${res.status}`);
  return data;
};

const state = {
  cases: [],
  current: null,
  page: null,
  site: null,
  lang: 'ru',
  schema: { sectionTypes: [] },
  collapsed: new Set(),
  dirty: false,
};

const el = (id) => document.getElementById(id);

function status(message, isError = false) {
  const box = el('status');
  box.textContent = message;
  box.classList.toggle('error', isError);
  box.classList.add('show');
  clearTimeout(status._timer);
  status._timer = setTimeout(() => box.classList.remove('show'), 2600);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function filled(value) {
  return value != null && String(value).trim() !== '';
}

function typeLabel(typeId) {
  return state.schema.sectionTypes.find((t) => t.id === typeId)?.label?.ru || typeId;
}

// ---------- data ----------

async function loadSchema() {
  state.schema = await api('/schema');
}

async function loadCases() {
  state.cases = await api('/cases');
  renderCaseList();
}

async function loadSite() {
  state.site = await api('/site');
}

// The home hero button ("Последняя работа") points at one case. The admin picks
// it here and the choice is stored in site.json as hero.primaryHref.
async function setLatestWork(slug) {
  if (!state.site) await loadSite();
  state.site.hero = state.site.hero || {};
  state.site.hero.primaryHref = slug ? `/case/${slug}` : '';
  try {
    await api('/site', { method: 'PUT', body: JSON.stringify(state.site) });
    renderEditor();
    status('Кнопка «Последняя работа» обновлена');
  } catch (error) {
    status(error.message, true);
  }
}

async function reorderCases(ids) {
  try {
    state.cases = await api('/cases/reorder', {
      method: 'POST',
      body: JSON.stringify({ ids }),
    });
    renderCaseList();
    status('Порядок кейсов сохранён');
  } catch (error) {
    status(error.message, true);
  }
}

async function openCase(id) {
  state.current = await api(`/cases/${id}`);
  state.collapsed = new Set((state.current.sections || []).map((s) => s.id));
  renderCaseList();
  renderEditor();
}

async function createCase() {
  const created = await api('/cases', {
    method: 'POST',
    body: JSON.stringify({ title: { ru: 'Новый кейс', en: '' } }),
  });
  await loadCases();
  await openCase(created.id);
  status('Кейс создан');
}

async function saveCurrent() {
  if (!state.current) return;
  try {
    const saved = await api(`/cases/${state.current.id}`, {
      method: 'PUT',
      body: JSON.stringify(state.current),
    });
    state.current = saved;
    state.dirty = false;
    await loadCases();
    status('Сохранено');
  } catch (error) {
    status(error.message, true);
  }
}

async function removeCurrent() {
  if (!state.current) return;
  if (!confirm(`Удалить кейс «${state.current.title.ru || state.current.slug}»? Действие необратимо.`))
    return;
  await api(`/cases/${state.current.id}`, { method: 'DELETE' });
  state.current = null;
  await loadCases();
  renderEditor();
  status('Кейс удалён');
}

// ---------- upload ----------

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function uploadFile(file) {
  const dataUrl = await readFileAsDataUrl(file);
  const result = await api('/upload', {
    method: 'POST',
    body: JSON.stringify({ filename: file.name, dataUrl }),
  });
  return result.url;
}

// ---------- rendering: sidebar ----------

function renderCaseList() {
  const list = el('case-list');
  if (!state.cases.length) {
    list.innerHTML = '<p style="color:var(--muted);font-size:13px">Пока нет кейсов</p>';
    return;
  }
  list.innerHTML = state.cases
    .map((entry, index) => {
      const active = state.current?.id === entry.id ? ' active' : '';
      const cover = entry.cover?.ru || entry.cover?.en || '';
      const translated = filled(entry.title.en);
      return `<div class="case-item${active}" data-id="${entry.id}" draggable="true">
      <span class="case-item-handle" title="Перетащите, чтобы изменить порядок">⠿</span>
      <div class="case-item-thumb">${
        cover ? `<img src="${escapeHtml(cover)}" alt="">` : ''
      }</div>
      <div class="case-item-meta">
        <div class="case-item-title">${escapeHtml(entry.title.ru || entry.slug)}</div>
        <div class="case-item-sub">${escapeHtml(
          [entry.slug, translated ? 'EN ✓' : 'EN —'].join(' · ')
        )}</div>
      </div>
      <div class="case-item-actions">
        <button class="icon-btn" data-case-up="${entry.id}" ${
        index === 0 ? 'disabled' : ''
      } title="Выше">↑</button>
        <button class="icon-btn" data-case-down="${entry.id}" ${
        index === state.cases.length - 1 ? 'disabled' : ''
      } title="Ниже">↓</button>
      </div>
      <span class="dot ${entry.published ? 'dot-published' : 'dot-draft'}" title="${
        entry.published ? 'Опубликован' : 'Черновик'
      }"></span>
    </div>`;
    })
    .join('');

  list.querySelectorAll('.case-item').forEach((node) => {
    node.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openCase(node.dataset.id);
    });
  });

  list.querySelectorAll('[data-case-up]').forEach((btn) =>
    btn.addEventListener('click', () => moveCase(btn.dataset.caseUp, -1))
  );
  list.querySelectorAll('[data-case-down]').forEach((btn) =>
    btn.addEventListener('click', () => moveCase(btn.dataset.caseDown, 1))
  );

  bindCaseDragAndDrop();
}

function moveCase(id, delta) {
  const cases = state.cases;
  const index = cases.findIndex((c) => c.id === id);
  const target = index + delta;
  if (index < 0 || target < 0 || target >= cases.length) return;
  [cases[index], cases[target]] = [cases[target], cases[index]];
  renderCaseList();
  reorderCases(cases.map((c) => c.id));
}

function bindCaseDragAndDrop() {
  const list = el('case-list');
  let draggedId = null;

  list.querySelectorAll('.case-item').forEach((node) => {
    node.addEventListener('dragstart', (e) => {
      draggedId = node.dataset.id;
      node.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    node.addEventListener('dragend', () => {
      node.classList.remove('dragging');
      draggedId = null;
    });
    node.addEventListener('dragover', (e) => {
      if (!draggedId || draggedId === node.dataset.id) return;
      e.preventDefault();
      node.classList.add('drag-over');
    });
    node.addEventListener('dragleave', () => node.classList.remove('drag-over'));
    node.addEventListener('drop', (e) => {
      e.preventDefault();
      node.classList.remove('drag-over');
      const targetId = node.dataset.id;
      if (!draggedId || draggedId === targetId) return;
      const cases = state.cases;
      const from = cases.findIndex((c) => c.id === draggedId);
      const to = cases.findIndex((c) => c.id === targetId);
      if (from < 0 || to < 0) return;
      const [moved] = cases.splice(from, 1);
      cases.splice(to, 0, moved);
      draggedId = null;
      renderCaseList();
      reorderCases(cases.map((c) => c.id));
    });
  });
}

// ---------- rendering: localized inputs ----------

function localizedInput({ label, value, path, multiline = false, rows = 4, placeholder = '' }) {
  const active = value[state.lang] ?? '';
  const other = state.lang === 'ru' ? value.en : value.ru;
  const mark = filled(other) ? '<span class="fill-mark" title="Перевод заполнен">●</span>' : '';
  // The field is a { ru, en } object, so the edit has to land on the active
  // locale. Writing to `path` directly would replace the object with a string
  // and the value would vanish on the next re-render.
  const inputPath = `${path}.${state.lang}`;
  const input = multiline
    ? `<textarea class="textarea" data-path="${inputPath}" rows="${rows}" placeholder="${escapeHtml(
        placeholder
      )}">${escapeHtml(active)}</textarea>`
    : `<input class="input" data-path="${inputPath}" value="${escapeHtml(active)}" placeholder="${escapeHtml(
        placeholder
      )}">`;
  return `<div class="field">
    <label>${escapeHtml(label)} <span style="color:var(--muted)">(${state.lang.toUpperCase()})${
      state.lang === 'ru' ? '' : mark
    }</span></label>
    ${input}
  </div>`;
}

function langTabs() {
  return `<div class="lang-tabs">
    <button class="lang-tab${state.lang === 'ru' ? ' active' : ''}" data-lang="ru">Русский</button>
    <button class="lang-tab${state.lang === 'en' ? ' active' : ''}" data-lang="en">English</button>
  </div>`;
}

function imagePicker({ label, value, path, hint = '', localized = false }) {
  const currentValue = value?.[state.lang] || '';
  const otherLang = state.lang === 'ru' ? value?.en : value?.ru;
  // A localized image (the case cover) is a { ru, en } object, so the URL field
  // writes to the active locale; a plain image field keeps the path as-is.
  const inputPath = localized ? `${path}.${state.lang}` : path;
  return `<div class="field">
    <label>${escapeHtml(label)} <span style="color:var(--muted)">(${state.lang.toUpperCase()})</span></label>
    <div class="image-picker">
      <div class="image-preview" data-drop="${path}">
        ${
          currentValue
            ? `<img src="${escapeHtml(currentValue)}" alt="">`
            : '<div class="image-preview-empty">Перетащите файл<br>или нажмите</div>'
        }
      </div>
      <div class="image-controls">
        <div class="row">
          <button class="btn btn-sm" data-pick="${path}">Загрузить файл</button>
          ${
            currentValue
              ? `<button class="btn btn-sm btn-danger" data-clear="${path}">Убрать</button>`
              : ''
          }
          ${
            state.lang === 'en' && otherLang
              ? `<button class="btn btn-sm" data-copy-image="${path}">Взять из RU</button>`
              : ''
          }
        </div>
        <input class="input url-input" data-path="${inputPath}" value="${escapeHtml(
          currentValue
        )}" placeholder="или вставьте ссылку на изображение">
        ${
          hint
            ? `<span style="font-size:11px;color:var(--muted)">${escapeHtml(hint)}</span>`
            : ''
        }
      </div>
    </div>
  </div>`;
}

// ---------- rendering: sections ----------

function sectionFields(section) {
  const heading = localizedInput({
    label: 'Название секции',
    value: section.title,
    path: `sections.${section.id}.title`,
    placeholder: 'Например: Подтверждение проблемы',
  });

  const body = localizedInput({
    label: 'Текст',
    value: section.body,
    path: `sections.${section.id}.body`,
    multiline: true,
    rows: 6,
    placeholder: 'Абзацы разделяйте пустой строкой',
  });

  const type = section.type;

  if (type === 'image' || type === 'textImage' || type === 'imageText') {
    return `${heading}${body}${imagePicker({
      label: 'Изображение',
      value: { ru: section.image, en: section.image },
      imageSingle: true,
      path: `sections.${section.id}.image`,
    })}`;
  }

  if (type === 'gallery') {
    const thumbs = (section.images || [])
      .map(
        (src, i) => `<div class="gallery-thumb">
        <img src="${escapeHtml(src)}" alt="">
        <div class="gallery-thumb-actions">
          <button data-img-up="sections.${section.id}.images" data-index="${i}" title="Влево">←</button>
          <button data-img-down="sections.${section.id}.images" data-index="${i}" title="Вправо">→</button>
          <button data-img-del="sections.${section.id}.images" data-index="${i}" title="Удалить">×</button>
        </div>
      </div>`
      )
      .join('');
    return `${heading}${body}
      <div class="field">
        <label>Изображения</label>
        <div class="gallery-grid">${thumbs}</div>
        <div class="row" style="margin-top:10px">
          <button class="btn btn-sm" data-gallery-add="${section.id}">Добавить изображения</button>
        </div>
      </div>`;
  }

  if (type === 'list') {
    const items = (section.items || [])
      .map(
        (item, i) => `<div class="list-item-row">
        <input class="input" data-path="sections.${section.id}.items.${i}.${state.lang}" value="${escapeHtml(
          item[state.lang] ?? ''
        )}" placeholder="Пункт ${i + 1}">
        <button class="icon-btn" data-item-del="${section.id}" data-index="${i}" title="Удалить">×</button>
      </div>`
      )
      .join('');
    return `${heading}${body}
      <div class="field">
        <label>Пункты списка</label>
        ${items}
        <button class="btn btn-sm" data-item-add="${section.id}" style="margin-top:6px">Добавить пункт</button>
      </div>`;
  }

  if (type === 'video') {
    return `${heading}${body}
      <div class="field">
        <label>Ссылка на видео</label>
        <input class="input" data-path="sections.${section.id}.videoUrl" value="${escapeHtml(
          section.videoUrl || ''
        )}" placeholder="https://... (mp4 или ссылка для встраивания)">
      </div>`;
  }

  if (type === 'quote') {
    return `${heading}${localizedInput({
      label: 'Текст цитаты',
      value: section.body,
      path: `sections.${section.id}.body`,
      multiline: true,
      rows: 4,
    })}`;
  }

  return `${heading}${body}`;
}

function renderSection(section, index, total) {
  const collapsed = state.collapsed.has(section.id);
  return `<div class="section-editor" data-section="${section.id}">
    <div class="section-head" draggable="true" data-drag="${section.id}">
      <span class="section-handle">⠿</span>
      <span class="section-type-badge">${escapeHtml(typeLabel(section.type))}</span>
      <span class="section-heading-text">${escapeHtml(
        section.title?.[state.lang] || section.title?.ru || '(без названия)'
      )}</span>
      <div class="section-head-actions">
        <button class="icon-btn" data-collapse="${section.id}" title="Свернуть/развернуть">${
          collapsed ? '▸' : '▾'
        }</button>
        <button class="icon-btn" data-move-up="${section.id}" ${
          index === 0 ? 'disabled' : ''
        } title="Выше">↑</button>
        <button class="icon-btn" data-move-down="${section.id}" ${
          index === total - 1 ? 'disabled' : ''
        } title="Ниже">↓</button>
        <button class="icon-btn" data-section-dup="${section.id}" title="Дублировать">⧉</button>
        <button class="icon-btn" data-section-del="${section.id}" title="Удалить">×</button>
      </div>
    </div>
    <div class="section-body${collapsed ? ' collapsed' : ''}">
      ${sectionFields(section)}
    </div>
  </div>`;
}

// ---------- rendering: editor ----------

function renderEditor() {
  const main = el('main');
  const current = state.current;
  el('btn-view-case').disabled = !current;

  if (!current) {
    main.innerHTML = '<div class="empty">Выберите кейс слева или создайте новый.</div>';
    return;
  }

  const sections = current.sections || [];
  const enFilled = filled(current.title.en) && filled(current.summary.en);

  main.innerHTML = `
    <div class="card">
      <div class="row-between" style="margin-bottom:14px">
        <div>
          <h2 class="card-title">${escapeHtml(current.title.ru || current.slug)}</h2>
          <p class="card-hint" style="margin:0">
            <span class="chip ${current.published ? 'chip-published' : 'chip-draft'}">${
              current.published ? 'Опубликован' : 'Черновик'
            }</span>
            <span class="chip" style="margin-left:6px">/case/${escapeHtml(current.slug)}</span>
            <span class="chip" style="margin-left:6px">EN: ${enFilled ? 'заполнен' : 'не заполнен'}</span>
          </p>
        </div>
        <div class="row">
          <label class="row" style="gap:6px;cursor:pointer">
            <input type="checkbox" data-path="published" ${current.published ? 'checked' : ''}>
            <span style="font-size:13px">Показывать на сайте</span>
          </label>
          <button class="btn btn-primary" id="btn-save">Сохранить</button>
          <button class="btn btn-danger" id="btn-delete">Удалить</button>
        </div>
      </div>
      ${langTabs()}

      <div class="grid-2">
        <div>
          ${localizedInput({
            label: 'Название кейса',
            value: current.title,
            path: 'title',
            placeholder: 'Облегчили жизнь юристов...',
          })}
        </div>
        <div>
          <div class="field">
            <label>Адрес страницы (slug)</label>
            <input class="input" data-path="slug" value="${escapeHtml(current.slug)}">
          </div>
        </div>
      </div>

      ${localizedInput({
        label: 'Краткое описание',
        value: current.summary,
        path: 'summary',
        multiline: true,
        rows: 3,
        placeholder: 'Показывается под заголовком и на главной',
      })}

      <div class="grid-2">
        <div class="field">
          <label>Компания</label>
          <input class="input" data-path="company" value="${escapeHtml(current.company)}" placeholder="MMK">
        </div>
        <div class="field">
          <label>Год</label>
          <input class="input" data-path="year" value="${escapeHtml(current.year)}" placeholder="2025">
        </div>
      </div>

      ${imagePicker({
        label: 'Обложка (на главной странице)',
        value: current.cover,
        path: 'cover',
        localized: true,
        hint: 'Лучше 16:9, например 1920×1080',
      })}
    </div>

    <div class="card">
      <h2 class="card-title">Сведения о проекте</h2>
      <p class="card-hint">Эти поля показываются в блоке под заголовком кейса.</p>
      <div class="grid-2">
        ${localizedInput({ label: 'Роль', value: current.role, path: 'role', placeholder: 'Продуктовый дизайнер' })}
        ${localizedInput({ label: 'Длительность', value: current.timeline, path: 'timeline', placeholder: '2 месяца' })}
      </div>
      <div class="grid-2">
        ${localizedInput({ label: 'Платформа', value: current.platform, path: 'platform', placeholder: 'Веб приложение' })}
      </div>
    </div>

    <div class="card">
      <h2 class="card-title">Кнопка «Последняя работа» на главной</h2>
      <p class="card-hint">Выберите кейс, который открывается по кнопке в главном блоке на главной странице.</p>
      <div class="field">
        <label>Кейс</label>
        <select class="select" id="latest-work-select">
          <option value="">— не выбрано —</option>
          ${state.cases
            .map(
              (c) =>
                `<option value="${escapeHtml(c.slug)}" ${
                  (state.site?.hero?.primaryHref || '') === `/case/${c.slug}` ? 'selected' : ''
                }>${escapeHtml(c.title.ru || c.slug)}</option>`
            )
            .join('')}
        </select>
      </div>
    </div>

    <div class="card">
      <div class="row-between" style="margin-bottom:14px">
        <div>
          <h2 class="card-title">Секции кейса</h2>
          <p class="card-hint" style="margin:0">Порядок секций — это порядок блоков на странице.</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-add-section">Добавить секцию</button>
      </div>
      ${
        sections.length
          ? sections.map((s, i) => renderSection(s, i, sections.length)).join('')
          : '<div class="empty">Секций пока нет. Добавьте первую.</div>'
      }
    </div>
  `;

  bindEditorEvents();
}

// ---------- path helpers ----------

// Walks a dotted path where a segment may name an array element. Sections are
// addressed as `sections.<id>.<field>`, and the id has to resolve to the array
// index, otherwise the edit would create a stray `sections.abc` object and
// silently never reach the section.
function resolveParent(object, path) {
  const keys = path.split('.');
  const last = keys.pop();

  let target = object;
  for (const key of keys) {
    if (Array.isArray(target) && !/^\d+$/.test(key)) {
      const index = target.findIndex((item) => item && item.id === key);
      if (index === -1) return null;
      target = target[index];
      continue;
    }
    if (target[key] == null) target[key] = {};
    target = target[key];
  }

  return { container: target, key: last };
}

function getByPath(object, path) {
  const keys = path.split('.');
  let target = object;
  for (const key of keys) {
    if (target == null) return undefined;
    if (Array.isArray(target) && !/^\d+$/.test(key)) {
      const found = target.find((item) => item && item.id === key);
      if (!found) return undefined;
      target = found;
      continue;
    }
    target = target[key];
  }
  return target;
}

function setByPath(object, path, value) {
  const resolved = resolveParent(object, path);
  if (!resolved) return;
  resolved.container[resolved.key] = value;
}

// ---------- events ----------

function bindEditorEvents() {
  const main = el('main');

  main.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.lang;
      renderEditor();
    });
  });

  main.querySelectorAll('[data-path]').forEach((input) => {
    const isCheckbox = input.type === 'checkbox';
    const handler = () => {
      const raw = isCheckbox ? input.checked : input.value;
      setByPath(state.current, input.dataset.path, raw);
      state.dirty = true;
      // Keep the collapsed section header in sync while the title is typed.
      if (/\.title\.(ru|en)$/.test(input.dataset.path)) {
        const sectionId = input.dataset.path.split('.')[1];
        const head = sectionId
          ? main.querySelector(`[data-section="${sectionId}"] .section-heading-text`)
          : null;
        if (head) head.textContent = raw || '(без названия)';
      }
    };
    input.addEventListener('input', handler);
    input.addEventListener('change', handler);
  });

  el('btn-save')?.addEventListener('click', saveCurrent);
  el('btn-delete')?.addEventListener('click', removeCurrent);
  el('btn-add-section')?.addEventListener('click', openSectionPicker);
  el('latest-work-select')?.addEventListener('change', (e) => setLatestWork(e.target.value));

  main.querySelectorAll('[data-collapse]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const id = btn.dataset.collapse;
      if (state.collapsed.has(id)) state.collapsed.delete(id);
      else state.collapsed.add(id);
      renderEditor();
    })
  );

  main.querySelectorAll('[data-move-up]').forEach((btn) =>
    btn.addEventListener('click', () => moveSection(btn.dataset.moveUp, -1))
  );
  main.querySelectorAll('[data-move-down]').forEach((btn) =>
    btn.addEventListener('click', () => moveSection(btn.dataset.moveDown, 1))
  );

  main.querySelectorAll('[data-section-del]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const id = btn.dataset.sectionDel;
      const section = state.current.sections.find((s) => s.id === id);
      if (!confirm(`Удалить секцию «${section?.title?.ru || 'без названия'}»?`)) return;
      state.current.sections = state.current.sections.filter((s) => s.id !== id);
      renderEditor();
    })
  );

  main.querySelectorAll('[data-section-dup]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const id = btn.dataset.sectionDup;
      const index = state.current.sections.findIndex((s) => s.id === id);
      const copy = JSON.parse(JSON.stringify(state.current.sections[index]));
      copy.id = Math.random().toString(16).slice(2, 14);
      copy.title = { ru: `${copy.title.ru} (копия)`, en: copy.title.en };
      state.current.sections.splice(index + 1, 0, copy);
      renderEditor();
    })
  );

  // gallery
  main.querySelectorAll('[data-gallery-add]').forEach((btn) =>
    btn.addEventListener('click', () => pickFiles(async (urls) => {
      const section = state.current.sections.find((s) => s.id === btn.dataset.galleryAdd);
      section.images = [...(section.images || []), ...urls];
      renderEditor();
    }, true))
  );

  main.querySelectorAll('[data-img-del]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const section = findSectionByPath(btn.dataset.imgDel);
      section.images.splice(Number(btn.dataset.index), 1);
      renderEditor();
    })
  );

  main.querySelectorAll('[data-img-up]').forEach((btn) =>
    btn.addEventListener('click', () => swapImage(btn.dataset.imgUp, Number(btn.dataset.index), -1))
  );
  main.querySelectorAll('[data-img-down]').forEach((btn) =>
    btn.addEventListener('click', () => swapImage(btn.dataset.imgDown, Number(btn.dataset.index), 1))
  );

  // list items
  main.querySelectorAll('[data-item-add]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const section = state.current.sections.find((s) => s.id === btn.dataset.itemAdd);
      section.items = [...(section.items || []), { ru: '', en: '' }];
      renderEditor();
    })
  );
  main.querySelectorAll('[data-item-del]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const section = state.current.sections.find((s) => s.id === btn.dataset.itemDel);
      section.items.splice(Number(btn.dataset.index), 1);
      renderEditor();
    })
  );

  // image pickers
  main.querySelectorAll('[data-pick]').forEach((btn) =>
    btn.addEventListener('click', () => pickFiles(async (urls) => setImage(btn.dataset.pick, urls[0]), false))
  );

  main.querySelectorAll('[data-copy-image]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const image = getByPath(state.current, btn.dataset.copyImage);
      image[state.lang] = image.ru;
      renderEditor();
    })
  );

  main.querySelectorAll('[data-clear]').forEach((btn) =>
    btn.addEventListener('click', () => setImage(btn.dataset.clear, '', true))
  );

  main.querySelectorAll('[data-drop]').forEach((zone) => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', async (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      const file = e.dataTransfer.files?.[0];
      if (!file) return;
      try {
        const url = await uploadFile(file);
        setImage(zone.dataset.drop, url);
      } catch (error) {
        status(error.message, true);
      }
    });
    zone.addEventListener('click', () => pickFiles(async (urls) => setImage(zone.dataset.drop, urls[0]), false));
  });

  bindDragAndDrop();
}

function findSectionByPath(path) {
  const id = path.split('.')[1];
  return state.current.sections.find((s) => s.id === id);
}

// A section's image field is a plain string while the case cover is { ru, en }.
// `imageSingle` distinguishes the two shapes.
function setImage(path, url, forceEmpty = false) {
  const value = getByPath(state.current, path);
  if (value && typeof value === 'object') {
    value[state.lang] = forceEmpty ? null : url;
  } else {
    setByPath(state.current, path, forceEmpty ? null : url);
  }
  renderEditor();
  status(forceEmpty ? 'Изображение убрано' : 'Изображение загружено');
}

function swapImage(path, index, delta) {
  const section = findSectionByPath(path);
  const target = index + delta;
  if (target < 0 || target >= section.images.length) return;
  [section.images[index], section.images[target]] = [section.images[target], section.images[index]];
  renderEditor();
}

function moveSection(id, delta) {
  const sections = state.current.sections;
  const index = sections.findIndex((s) => s.id === id);
  const target = index + delta;
  if (target < 0 || target >= sections.length) return;
  [sections[index], sections[target]] = [sections[target], sections[index]];
  renderEditor();
}

function pickFiles(onDone, multiple = false) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*,video/mp4,video/webm';
  input.multiple = multiple;
  input.addEventListener('change', async () => {
    const files = [...(input.files || [])];
    if (!files.length) return;
    try {
      const urls = [];
      for (const file of files) urls.push(await uploadFile(file));
      await onDone(urls);
    } catch (error) {
      status(error.message, true);
    }
  });
  input.click();
}

// ---------- drag and drop reordering ----------

function bindDragAndDrop() {
  let draggedId = null;
  const main = el('main');

  main.querySelectorAll('[data-drag]').forEach((handle) => {
    handle.addEventListener('dragstart', (e) => {
      draggedId = handle.dataset.drag;
      handle.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    handle.addEventListener('dragend', () => {
      handle.classList.remove('dragging');
      draggedId = null;
    });
  });

  main.querySelectorAll('.section-editor').forEach((node) => {
    node.addEventListener('dragover', (e) => {
      if (!draggedId) return;
      e.preventDefault();
      node.style.borderColor = 'var(--accent)';
    });
    node.addEventListener('dragleave', () => {
      node.style.borderColor = '';
    });
    node.addEventListener('drop', (e) => {
      node.style.borderColor = '';
      if (!draggedId) return;
      e.preventDefault();
      const targetId = node.dataset.section;
      if (targetId === draggedId) return;
      const sections = state.current.sections;
      const from = sections.findIndex((s) => s.id === draggedId);
      const to = sections.findIndex((s) => s.id === targetId);
      const [moved] = sections.splice(from, 1);
      sections.splice(to, 0, moved);
      renderEditor();
    });
  });
}

// ---------- section picker modal ----------

function openSectionPicker() {
  const root = el('modal-root');
  root.innerHTML = `<div class="modal-backdrop">
    <div class="modal">
      <h3>Добавить секцию</h3>
      <p>Выберите тип блока. Название и содержимое можно будет изменить.</p>
      <div class="section-type-grid">
        ${state.schema.sectionTypes
          .map(
            (type) => `<button class="section-type-option" data-type="${type.id}">
            ${escapeHtml(type.label.ru)}
          </button>`
          )
          .join('')}
      </div>
      <div class="row" style="justify-content:flex-end">
        <button class="btn" id="modal-cancel">Отмена</button>
      </div>
    </div>
  </div>`;

  el('modal-cancel').addEventListener('click', () => (root.innerHTML = ''));
  root.querySelector('.modal-backdrop').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) root.innerHTML = '';
  });

  root.querySelectorAll('[data-type]').forEach((btn) =>
    btn.addEventListener('click', async () => {
      const section = await api('/sections/preview', {
        method: 'POST',
        body: JSON.stringify({ type: btn.dataset.type }),
      });
      state.current.sections.push(section);
      state.collapsed.delete(section.id);
      root.innerHTML = '';
      renderEditor();
      status('Секция добавлена');
    })
  );
}

// ---------- gallery page editor ("Разное") ----------
// A flat list of image cards. Editing reuses the same data-path helpers as the
// case editor, but the root object is `state.page` instead of `state.current`,
// so the shared setters take the root as an argument below.

async function loadOtherPage() {
  state.page = await api('/pages/other');
  renderOtherEditor();
}

async function saveOtherPage() {
  try {
    state.page = await api('/pages/other', {
      method: 'PUT',
      body: JSON.stringify(state.page),
    });
    state.dirty = false;
    status('Сохранено');
  } catch (error) {
    status(error.message, true);
  }
}

function renderOtherEditor() {
  const main = el('main-other');
  const page = state.page;
  if (!page) {
    main.innerHTML = '<div class="empty">Не удалось загрузить страницу.</div>';
    return;
  }

  const items = page.items || [];

  main.innerHTML = `
    <div class="card">
      <div class="row-between" style="margin-bottom:14px">
        <div>
          <h2 class="card-title">Страница «Разное»</h2>
          <p class="card-hint" style="margin:0">
            Картинки с заголовками. Шапка с фото, именем и кнопками и футер берутся с главной автоматически.
          </p>
        </div>
        <div class="row">
          <button class="btn" id="btn-other-view">Посмотреть страницу</button>
          <button class="btn btn-primary" id="btn-other-save">Сохранить</button>
        </div>
      </div>
      ${langTabs()}

      ${localizedInput({
        label: 'Заголовок раздела (в шапке страницы)',
        value: page.title,
        path: 'title',
        placeholder: 'Разное',
      })}

      ${localizedInput({
        label: 'Описание под заголовком',
        value: page.intro,
        path: 'intro',
        multiline: true,
        rows: 2,
        placeholder: 'Необязательно',
      })}
    </div>

    <div class="card">
      <div class="row-between" style="margin-bottom:14px">
        <div>
          <h2 class="card-title">Карточки</h2>
          <p class="card-hint" style="margin:0">Порядок карточек — это порядок на странице.</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-other-add">Добавить карточку</button>
      </div>
      ${
        items.length
          ? items.map((item, i) => renderOtherItem(item, i, items.length)).join('')
          : '<div class="empty">Карточек пока нет. Добавьте первую.</div>'
      }
    </div>
  `;

  bindOtherEvents();
}

function renderOtherItem(item, index, total) {
  const collapsed = state.collapsed.has(item.id);
  return `<div class="section-editor" data-other-item="${item.id}">
    <div class="section-head" draggable="true" data-other-drag="${item.id}">
      <span class="section-handle">⠿</span>
      <span class="section-type-badge">Карточка ${index + 1}</span>
      <span class="section-heading-text">${escapeHtml(
        item.title?.[state.lang] || item.title?.ru || '(без названия)'
      )}</span>
      <div class="section-head-actions">
        <button class="icon-btn" data-other-collapse="${item.id}" title="Свернуть/развернуть">${
          collapsed ? '▸' : '▾'
        }</button>
        <button class="icon-btn" data-other-up="${item.id}" ${
          index === 0 ? 'disabled' : ''
        } title="Выше">↑</button>
        <button class="icon-btn" data-other-down="${item.id}" ${
          index === total - 1 ? 'disabled' : ''
        } title="Ниже">↓</button>
        <button class="icon-btn" data-other-del="${item.id}" title="Удалить">×</button>
      </div>
    </div>
    <div class="section-body${collapsed ? ' collapsed' : ''}">
      ${imagePicker({
        label: 'Картинка',
        value: { [state.lang]: item.image, ru: item.image, en: null },
        path: `items.${index}.image`,
        hint: 'Лучше 4:3, например 1600×1200',
      })}
      ${localizedInput({
        label: 'Заголовок',
        value: item.title,
        path: `items.${index}.title`,
        placeholder: 'Например: Эксперименты с типографикой',
      })}
      ${localizedInput({
        label: 'Подпись под картинкой',
        value: item.body,
        path: `items.${index}.body`,
        multiline: true,
        rows: 2,
        placeholder: 'Необязательно',
      })}
    </div>
  </div>`;
}

function bindOtherEvents() {
  const main = el('main-other');

  main.querySelectorAll('[data-other-item] .section-head').forEach((head) => {
    head.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      const id = head.dataset.otherDrag;
      if (state.collapsed.has(id)) state.collapsed.delete(id);
      else state.collapsed.add(id);
      renderOtherEditor();
    });
  });

  main.querySelectorAll('[data-other-collapse]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const id = btn.dataset.otherCollapse;
      if (state.collapsed.has(id)) state.collapsed.delete(id);
      else state.collapsed.add(id);
      renderOtherEditor();
    })
  );

  main.querySelectorAll('[data-other-up]').forEach((btn) =>
    btn.addEventListener('click', () => moveOtherItem(btn.dataset.otherUp, -1))
  );
  main.querySelectorAll('[data-other-down]').forEach((btn) =>
    btn.addEventListener('click', () => moveOtherItem(btn.dataset.otherDown, 1))
  );

  main.querySelectorAll('[data-other-del]').forEach((btn) =>
    btn.addEventListener('click', () => {
      if (!confirm('Удалить карточку?')) return;
      state.page.items = state.page.items.filter((i) => i.id !== btn.dataset.otherDel);
      renderOtherEditor();
    })
  );

  // Shared text inputs: route writes to state.page for the gallery editor.
  main.querySelectorAll('[data-path]').forEach((input) => {
    const isCheckbox = input.type === 'checkbox';
    input.addEventListener('input', () => {
      const raw = isCheckbox ? input.checked : input.value;
      setByPath(state.page, input.dataset.path, raw);
      state.dirty = true;
    });
  });

  main.querySelectorAll('[data-pick]').forEach((btn) =>
    btn.addEventListener('click', () =>
      pickFiles(async (urls) => setOtherImage(btn.dataset.pick, urls[0]), false)
    )
  );

  main.querySelectorAll('[data-clear]').forEach((btn) =>
    btn.addEventListener('click', () => setOtherImage(btn.dataset.clear, null))
  );

  main.querySelectorAll('[data-drop]').forEach((zone) => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', async (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      const file = e.dataTransfer.files?.[0];
      if (!file) return;
      try {
        const url = await uploadFile(file);
        setOtherImage(zone.dataset.drop, url);
      } catch (error) {
        status(error.message, true);
      }
    });
    zone.addEventListener('click', () =>
      pickFiles(async (urls) => setOtherImage(zone.dataset.drop, urls[0]), false)
    );
  });

  el('btn-other-add').addEventListener('click', async () => {
    const item = await api('/pages/preview', { method: 'POST' });
    state.page.items.push(item);
    state.collapsed.delete(item.id);
    renderOtherEditor();
    status('Карточка добавлена');
  });

  el('btn-other-save').addEventListener('click', () => saveOtherPage());
  el('btn-other-view').addEventListener('click', () =>
    window.open(`/other?lang=${state.lang}`, '_blank')
  );

  bindOtherDragAndDrop();
}

function setOtherImage(path, url) {
  setByPath(state.page, path, url || null);
  state.dirty = true;
  renderOtherEditor();
  status(url ? 'Картинка загружена' : 'Картинка убрана');
}

function moveOtherItem(id, delta) {
  const items = state.page.items;
  const index = items.findIndex((i) => i.id === id);
  const target = index + delta;
  if (index < 0 || target < 0 || target >= items.length) return;
  [items[index], items[target]] = [items[target], items[index]];
  renderOtherEditor();
}

function bindOtherDragAndDrop() {
  const main = el('main-other');
  let draggedId = null;

  main.querySelectorAll('[data-other-drag]').forEach((handle) => {
    handle.addEventListener('dragstart', (e) => {
      draggedId = handle.dataset.otherDrag;
      e.dataTransfer.effectAllowed = 'move';
    });
  });

  main.querySelectorAll('[data-other-item]').forEach((node) => {
    node.addEventListener('dragover', (e) => {
      e.preventDefault();
      node.classList.add('drag-over');
    });
    node.addEventListener('dragleave', () => node.classList.remove('drag-over'));
    node.addEventListener('drop', (e) => {
      e.preventDefault();
      node.classList.remove('drag-over');
      const targetId = node.dataset.otherItem;
      if (!draggedId || draggedId === targetId) return;
      const items = state.page.items;
      const from = items.findIndex((i) => i.id === draggedId);
      const to = items.findIndex((i) => i.id === targetId);
      if (from < 0 || to < 0) return;
      const [moved] = items.splice(from, 1);
      items.splice(to, 0, moved);
      draggedId = null;
      renderOtherEditor();
    });
  });
}

// ---------- tabs ----------

function switchTab(tab) {
  el('layout-cases').classList.toggle('hidden', tab !== 'cases');
  el('layout-other').classList.toggle('hidden', tab !== 'other');
  document.querySelectorAll('.topbar-tab').forEach((btn) =>
    btn.classList.toggle('active', btn.dataset.tab === tab)
  );
  // The case-only buttons make no sense while editing the gallery page.
  const caseControls = ['btn-new', 'btn-view-case'];
  caseControls.forEach((id) => {
    const node = el(id);
    if (node) node.classList.toggle('hidden', tab !== 'cases');
  });
  if (tab === 'other' && !state.page) loadOtherPage().catch((e) => status(e.message, true));
}

document.querySelectorAll('.topbar-tab').forEach((btn) =>
  btn.addEventListener('click', () => switchTab(btn.dataset.tab))
);

// ---------- wire up ----------

el('btn-new').addEventListener('click', () => createCase().catch((e) => status(e.message, true)));
el('btn-view-case').addEventListener('click', () => {
  if (!state.current) return;
  window.open(`/case/${state.current.slug}?lang=${state.lang}&draft=${state.current.id}`, '_blank');
});
el('btn-view-site').addEventListener('click', () => window.open(`/?lang=${state.lang}`, '_blank'));

window.addEventListener('beforeunload', (e) => {
  if (state.dirty) {
    e.preventDefault();
    e.returnValue = '';
  }
});

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    if (!el('layout-other').classList.contains('hidden')) saveOtherPage();
    else saveCurrent();
  }
});

(async () => {
  try {
    await loadSchema();
    await loadSite();
    await loadCases();
    if (state.cases.length) await openCase(state.cases[0].id);
  } catch (error) {
    status(error.message, true);
  }
})();
