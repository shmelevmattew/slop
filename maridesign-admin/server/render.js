import { sectionLabels } from './i18n.js';

const LOCALES = ['ru', 'en'];

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Text from the admin panel is plain text with blank-line paragraphs.
// Anything richer is intentionally not interpreted as HTML.
export function renderText(value) {
  const text = String(value ?? '').trim();
  if (!text) return '';
  return text
    .split(/\n{2,}/)
    .map((block) => {
      const lines = block.split('\n').map((l) => escapeHtml(l.trim())).join('<br>');
      return `<p>${lines}</p>`;
    })
    .join('\n');
}

// Localized value lookup with fallback to the default locale so an untranslated
// case still renders something readable instead of an empty box.
function pick(value, locale, fallback = 'ru') {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  const direct = value[locale];
  if (direct != null && String(direct).trim() !== '') return direct;
  const fb = value[fallback];
  return fb == null ? '' : fb;
}

export function pickLocalized(value, locale) {
  return pick(value, locale);
}

function alt(value, locale) {
  const text = String(pick(value, locale)).replace(/"/g, '');
  return escapeHtml(text);
}

function imageTag(src, altText, className = '', loading = 'lazy') {
  if (!src) return '';
  return `<img class="${className}" src="${escapeHtml(src)}" alt="${altText}" loading="${loading}" decoding="async">`;
}

function sectionMeta(section, locale) {
  return {
    title: String(pick(section.title, locale)),
    body: String(pick(section.body, locale)),
    items: Array.isArray(section.items)
      ? section.items.map((i) => String(pick(i, locale))).filter(Boolean)
      : [],
    image: section.image || null,
    images: Array.isArray(section.images) ? section.images.filter(Boolean) : [],
    videoUrl: section.videoUrl || '',
    anchor: section.anchor || '',
  };
}

function renderSection(section, locale, index) {
  const m = sectionMeta(section, locale);
  const heading = m.title || sectionLabels[section.type]?.[locale] || '';
  const idAttr = m.anchor ? ` id="${escapeHtml(m.anchor)}"` : ` id="section-${index + 1}"`;
  const headingHtml = heading
    ? `<h2 class="section-title">${escapeHtml(heading)}</h2>`
    : '';
  const bodyHtml = renderText(m.body);

  switch (section.type) {
    case 'image':
      return `<section class="case-section section-image"${idAttr}>
  ${headingHtml}
  <figure class="figure">${imageTag(m.image, escapeHtml(heading), 'figure-img')}</figure>
</section>`;

    case 'gallery': {
      const items = m.images
        .map(
          (src, i) =>
            `<figure class="gallery-item">${imageTag(
              src,
              `${escapeHtml(heading)} — ${i + 1}`,
              'gallery-img'
            )}<figcaption>${i + 1}</figcaption></figure>`
        )
        .join('\n');
      return `<section class="case-section section-gallery"${idAttr}>
  ${headingHtml}
  ${bodyHtml}
  <div class="gallery">${items}</div>
</section>`;
    }

    case 'textImage':
      return `<section class="case-section section-split"${idAttr}>
  ${headingHtml}
  <div class="split split-text-first">
    <div class="split-text">${bodyHtml}</div>
    <div class="split-media"><figure class="figure">${imageTag(
      m.image,
      escapeHtml(heading),
      'figure-img'
    )}</figure></div>
  </div>
</section>`;

    case 'imageText':
      return `<section class="case-section section-split"${idAttr}>
  ${headingHtml}
  <div class="split split-image-first">
    <div class="split-media"><figure class="figure">${imageTag(
      m.image,
      escapeHtml(heading),
      'figure-img'
    )}</figure></div>
    <div class="split-text">${bodyHtml}</div>
  </div>
</section>`;

    case 'video': {
      const src = m.videoUrl;
      const isFile = /\.(mp4|webm|ogg)$/i.test(src);
      const media = isFile
        ? `<video class="video" controls preload="metadata" src="${escapeHtml(src)}"></video>`
        : src
          ? `<div class="video-embed"><iframe src="${escapeHtml(
              src
            )}" title="${escapeHtml(heading)}" loading="lazy" allowfullscreen frameborder="0"></iframe></div>`
          : '';
      return `<section class="case-section section-video"${idAttr}>
  ${headingHtml}
  ${bodyHtml}
  ${media}
</section>`;
    }

    case 'quote':
      return `<section class="case-section section-quote"${idAttr}>
  ${headingHtml}
  <blockquote>${renderText(m.body)}</blockquote>
</section>`;

    case 'list': {
      const items = m.items.map((i) => `<li>${escapeHtml(i)}</li>`).join('\n');
      return `<section class="case-section section-list"${idAttr}>
  ${headingHtml}
  ${bodyHtml}
  ${items ? `<ul class="list">${items}</ul>` : ''}
</section>`;
    }

    case 'text':
    default:
      return `<section class="case-section section-text"${idAttr}>
  ${headingHtml}
  ${bodyHtml}
</section>`;
  }
}

export function renderCaseBody(entry, locale) {
  const sections = (entry.sections || [])
    .map((section, index) => renderSection(section, locale, index))
    .join('\n');
  return sections;
}

export function renderCaseNav(entry, locale) {
  const anchors = [
    ...(entry.sections || [])
      .map((s, i) => ({
        anchor: s.anchor || `section-${i + 1}`,
        label: String(pick(s.title, locale)) || sectionLabels[s.type]?.[locale] || '',
      }))
      .filter((a) => a.label),
  ];
  if (!anchors.length) return '';
  const links = anchors
    .map(
      (a) => `<a class="anchor-link" href="#${escapeHtml(a.anchor)}">${escapeHtml(a.label)}</a>`
    )
    .join('\n');
  return `<nav class="case-toc" aria-label="${locale === 'ru' ? 'Содержание' : 'Contents'}">
  ${links}
</nav>`;
}

export function renderCaseMeta(entry, locale) {
  const rows = [
    { label: { ru: 'Роль', en: 'Role' }, value: entry.role },
    { label: { ru: 'Длительность', en: 'Duration' }, value: entry.timeline },
    { label: { ru: 'Платформа', en: 'Platform' }, value: entry.platform },
  ]
    .map((row) => {
      const value = String(pick(row.value, locale)).trim();
      if (!value) return '';
      return `<div class="meta-row">
      <dt>${escapeHtml(row.label[locale] || row.label.ru)}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>`;
    })
    .filter(Boolean)
    .join('\n');

  if (!rows) return '';
  return `<dl class="case-meta">${rows}</dl>`;
}

export function renderLocalizedSwitcher(entry, path, locale, translations) {
  return LOCALES.map((code) => {
    const available = translations ? translations[code] : true;
    const label = code === 'ru' ? 'Русский' : 'English';
    const flag = code === 'ru' ? 'RU' : 'EN';
    if (!available) {
      return `<span class="lang-option lang-missing" title="${
        locale === 'ru' ? 'Перевод не заполнен' : 'Translation missing'
      }">${flag}</span>`;
    }
    const href = `${path}?lang=${code}`;
    const active = code === locale ? ' lang-active' : '';
    return `<a class="lang-option${active}" href="${escapeHtml(href)}" hreflang="${code}">${flag}<span class="lang-full">${label}</span></a>`;
  }).join('\n');
}

export { pick };
