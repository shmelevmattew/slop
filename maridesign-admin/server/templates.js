import { t, normalizeLocale, UI } from './i18n.js';
import {
  escapeHtml,
  renderCaseBody,
  renderCaseMeta,
  renderCaseNav,
  renderLocalizedSwitcher,
  pick,
} from './render.js';

// One place that decides what a URL looks like. The same scheme serves both the
// running app and a static upload: the default locale lives at the root and the
// other one under the /en prefix, so the prefix must come first.
function url(path, locale, { draft = '' } = {}) {
  const clean = path === '/' || path === '' ? '' : path.replace(/^\/+|\/+$/g, '');
  const base =
    locale === 'ru'
      ? `/${clean}`
      : clean
        ? `/en/${clean}/`
        : '/en/';
  const normalized = base === '/' ? '/' : base.replace(/\/+/g, '/');
  return draft ? `${normalized}?draft=${draft}` : normalized;
}

function navHtml(site, locale, activeId) {
  return site.nav
    .map((item) => {
      const label = item.label?.[locale] || item.label?.ru || '';
      const active = item.id === activeId ? ' active' : '';
      return `<a class="nav-link${active}" href="${escapeHtml(
        url(item.href, locale)
      )}">${escapeHtml(label)}</a>`;
    })
    .join('\n        ');
}

function langSwitchHtml(path, locale) {
  // `path` is the page without language. The default locale maps to the root,
  // the other one lives under /en, so switching works on a plain static host
  // without query strings.
  const hrefFor = (code) => url(path, code);

  return `<div class="lang-switch" role="group" aria-label="${escapeHtml(
    t(locale, 'language')
  )}">
        <a class="lang-option${locale === 'ru' ? ' lang-active' : ''}" href="${escapeHtml(
          hrefFor('ru')
        )}" hreflang="ru">RU</a>
        <a class="lang-option${locale === 'en' ? ' lang-active' : ''}" href="${escapeHtml(
          hrefFor('en')
        )}" hreflang="en">EN</a>
      </div>`;
}

function avatarHtml(site, locale, className = 'hero-avatar', { interactive = false } = {}) {
  const src = site.avatar;
  if (!src) return '';
  const title = site.siteTitle?.[locale] || site.siteTitle?.ru || '';
  const image = `<img src="${escapeHtml(
    src
  )}" alt="${escapeHtml(title)}" width="60" height="60" decoding="async" draggable="false">`;
  // The hero avatar is a button so a click can play the animation instead of
  // navigating away; the footer avatar keeps linking back to the home page.
  if (interactive) {
    return `<button type="button" class="${className}" data-avatar aria-label="${escapeHtml(
      title
    )}">${image}</button>`;
  }
  return `<a class="${className}" href="${escapeHtml(url('/', locale))}">${image}</a>`;
}

// The header is a floating pill pinned to the top of the viewport, matching the
// exported Framer layout: blur(10px) backdrop, translucent fill, 12px radius.
// The language switcher sits in its own pill on the right edge, so it stays put
// no matter how wide the nav grows or how much the header shifts when centring.
// `mode` switches the header between the full site nav and the case-study bar.
// On a case the bar holds the back link plus the section titles, which highlight
// as the reader scrolls (see public/case-nav.js).
function headerHtml({
  site,
  locale,
  path,
  activeId,
  mode = 'site',
  backHref = '',
  backLabel = '',
  sections = [],
}) {
  if (mode === 'case') {
    const sectionLinks = sections
      .map(
        (section, i) =>
          `<a class="case-section-link${
            i === 0 ? ' is-current' : ''
          }" href="#${escapeHtml(section.id)}" data-section-link="${escapeHtml(
            section.id
          )}">${escapeHtml(section.label)}</a>`
      )
      .join('\n        ');

    return `<header class="site-header header-case" data-mode="case">
    <a class="back-link" href="${escapeHtml(backHref)}">${escapeHtml(backLabel)}</a>
    ${
      sectionLinks
        ? `<span class="case-header-divider" aria-hidden="true"></span>
    <nav class="case-section-nav" aria-label="${escapeHtml(
      t(locale, 'contents')
    )}">
        ${sectionLinks}
    </nav>`
        : ''
    }
  </header>`;
  }

  return `<header class="site-header" data-mode="site">
    <div class="header-inner">
      <nav class="site-nav">
        ${navHtml(site, locale, activeId)}
      </nav>
    </div>
    <span class="header-divider" aria-hidden="true"></span>
    <div class="lang-switch-float">${langSwitchHtml(path, locale)}</div>
  </header>`;
}

function footerHtml(site, locale) {
  const siteTitle = site.siteTitle?.[locale] || site.siteTitle?.ru || '';
  const description =
    site.siteDescription?.[locale] || site.siteDescription?.ru || '';
  const contacts = site.contacts || {};
  const contactsHeading =
    contacts.heading?.[locale] || contacts.heading?.ru || 'Контакты';
  const linksHeading =
    site.footerLinksHeading?.[locale] || site.footerLinksHeading?.ru || 'Ссылки';

  // Contacts are copy-to-clipboard buttons rather than plain links: clicking
  // copies the address and shows a short confirmation. `data-copy` holds the
  // exact text to put on the clipboard, `data-copy-label` the confirmation word
  // for the current locale, so no translation lives in the script.
  const copiedLabel = locale === 'ru' ? 'Скопировано' : 'Copied';
  const contactRows = [];
  if (contacts.email) {
    contactRows.push(
      `<button type="button" class="footer-contact" data-copy="${escapeHtml(
        contacts.email
      )}" data-copy-label="${escapeHtml(copiedLabel)}" title="${escapeHtml(
        locale === 'ru' ? 'Скопировать почту' : 'Copy email'
      )}">
        <span class="footer-contact-text">${escapeHtml(contacts.email)}</span>
      </button>`
    );
  }
  if (contacts.telegram) {
    contactRows.push(
      `<button type="button" class="footer-contact" data-copy="${escapeHtml(
        contacts.telegram
      )}" data-copy-label="${escapeHtml(copiedLabel)}" title="${escapeHtml(
        locale === 'ru' ? 'Скопировать телеграм' : 'Copy Telegram'
      )}">
        <span class="footer-contact-text">${escapeHtml(contacts.telegram)}</span>
      </button>`
    );
  }

  const linkRows = (site.nav || [])
    .map(
      (item) =>
        `<a class="footer-link" href="${escapeHtml(url(item.href, locale))}">${escapeHtml(
          item.label?.[locale] || item.label?.ru || ''
        )}</a>`
    )
    .join('\n        ');

  return `<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="footer-brand-head">
        ${avatarHtml(site, locale, 'footer-avatar')}
        <h2 class="footer-name">${escapeHtml(siteTitle)}</h2>
      </div>
      <p class="footer-description">${escapeHtml(description)}</p>
      <p class="footer-copyright">© ${escapeHtml(String(new Date().getFullYear()))}</p>
    </div>
    <div class="footer-column">
      <p class="footer-column-heading">${escapeHtml(contactsHeading)}</p>
      <div class="footer-links">
        ${contactRows.join('\n        ')}
      </div>
    </div>
    <div class="footer-column">
      <p class="footer-column-heading">${escapeHtml(linksHeading)}</p>
      <div class="footer-links">
        ${linkRows}
      </div>
    </div>
  </div>
</footer>`;
}

// Yandex.Metrika counter. Rendered only when a counter id is set in site.json,
// so the site stays clean until analytics is configured.
function metricaHtml(site) {
  const id = String(site?.metricaId || '').trim();
  if (!id) return '';
  return `<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${id}', 'ym');

    ym(${id}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/${id}" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->`;
}

export function layout({
  site,
  locale,
  title,
  description,
  path,
  activeId,
  body,
  draft = false,
  adminLink = '',
  headerMode = 'site',
  backHref = '',
  backLabel = '',
  headerSections = [],
}) {
  const siteTitle = site.siteTitle?.[locale] || site.siteTitle?.ru || 'Portfolio';
  const siteDescription = site.siteDescription?.[locale] || site.siteDescription?.ru || '';

  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title || siteTitle)}</title>
<meta name="description" content="${escapeHtml(description || siteDescription)}">
<link rel="alternate" hreflang="ru" href="${escapeHtml(url(path, 'ru'))}">
<link rel="alternate" hreflang="en" href="${escapeHtml(url(path, 'en'))}">
<link rel="icon" href="/static/favicon.jpg">
<link rel="stylesheet" href="/static/site.css?v=20">
${metricaHtml(site)}
</head>
<body>
${draft ? `<div class="draft-banner">${escapeHtml(t(locale, 'draftNotice'))} ${adminLink ? `<a href="${escapeHtml(adminLink)}">${escapeHtml(t(locale, 'viewDraft'))}</a>` : ''}</div>` : ''}
${headerHtml({ site, locale, path, activeId, mode: headerMode, backHref, backLabel, sections: headerSections })}
<main>
${body}
</main>
${footerHtml(site, locale)}
<script src="/static/copy-contact.js" defer></script>
<script src="/static/media.js" defer></script>
<script src="/static/avatar.js" defer></script>
</body>
</html>`;
}

function coverImage(cover, locale) {
  const src = cover?.[locale] || cover?.ru || cover?.en;
  return src ? String(src) : null;
}

// Top-of-page block on the home page: portrait, name, description and the two
// calls to action, laid out exactly like the Framer hero (see site.css).
// `buttons` overrides the default pair, which lets sub-pages (the resume) swap
// the primary action without duplicating the whole block.
function heroHtml(site, locale, { buttons: buttonOverride = null } = {}) {
  const hero = site.hero || {};
  const name = site.siteTitle?.[locale] || site.siteTitle?.ru || '';
  const description =
    site.siteDescription?.[locale] || site.siteDescription?.ru || '';
  const primary = hero.primary?.[locale] || hero.primary?.ru || '';
  const secondary = hero.secondary?.[locale] || hero.secondary?.ru || '';

  // Contacts are repeated at the top of the hero (they also stay in the footer).
  // They copy to the clipboard on click, reusing the footer contact behaviour.
  const contacts = site.contacts || {};
  const copiedLabel = locale === 'ru' ? 'Скопировано' : 'Copied';
  const contactRows = [];
  if (contacts.email) {
    contactRows.push(
      `<button type="button" class="footer-contact hero-contact" data-copy="${escapeHtml(
        contacts.email
      )}" data-copy-label="${escapeHtml(copiedLabel)}" title="${escapeHtml(
        locale === 'ru' ? 'Скопировать почту' : 'Copy email'
      )}"><span class="footer-contact-text">${escapeHtml(contacts.email)}</span></button>`
    );
  }
  if (contacts.telegram) {
    contactRows.push(
      `<button type="button" class="footer-contact hero-contact" data-copy="${escapeHtml(
        contacts.telegram
      )}" data-copy-label="${escapeHtml(copiedLabel)}" title="${escapeHtml(
        locale === 'ru' ? 'Скопировать телеграм' : 'Copy Telegram'
      )}"><span class="footer-contact-text">${escapeHtml(contacts.telegram)}</span></button>`
    );
  }

  const buttons =
    buttonOverride !== null
      ? buttonOverride
      : [
          primary && hero.primaryHref
            ? `<a class="hero-button hero-button-primary" href="${escapeHtml(
                url(hero.primaryHref, locale)
              )}">${escapeHtml(primary)}</a>`
            : '',
          secondary && hero.secondaryHref
            ? `<a class="hero-button hero-button-secondary" href="${escapeHtml(
                hero.secondaryHref
              )}" target="_blank" rel="noopener">${escapeHtml(secondary)}</a>`
            : '',
        ]
          .filter(Boolean)
          .join('\n      ');

  return `<section class="framer-hero">
    <div class="hero-inner">
      <div class="hero-text">
        ${avatarHtml(site, locale, 'hero-avatar', { interactive: true })}
        <h1 class="hero-name">${escapeHtml(name)}</h1>
        <p class="hero-description">${escapeHtml(description)}</p>
        ${
          contactRows.length
            ? `<div class="hero-contacts">${contactRows.join('\n          ')}</div>`
            : ''
        }
      </div>
      ${buttons ? `<div class="hero-buttons">${buttons}</div>` : ''}
    </div>
  </section>`;
}

export function renderHome({ site, cases, locale, draftId = null }) {
  const title = t(locale, 'projects');
  const cards = cases
    .map((entry) => {
      const href = url(`/case/${entry.slug}`, locale, {
        draft: draftId === entry.id ? draftId : '',
      });
      const cover = coverImage(entry.cover, locale);
      const titleText = String(pick(entry.title, locale));

      // Markup mirrors the exported Framer project card: a 4:3 media area with
      // the project name in a blurred pill underneath. The pill is absolutely
      // positioned over the bottom edge of the image on hover in Framer, but the
      // static export keeps it in flow below the image, so we do the same.
      const media = cover
        ? `<div class="card-media">
        <div class="card-media-bg"></div>
        <div class="card-media-img"><img src="${escapeHtml(cover)}" alt="${escapeHtml(
            titleText
          )}" loading="lazy" decoding="async"></div>
      </div>`
        : `<div class="card-media card-media-empty">${escapeHtml(
            locale === 'ru' ? 'Нет обложки' : 'No cover'
          )}</div>`;

      return `<a class="framer-case framer-card" href="${escapeHtml(href)}" data-framer-name="Desktop">
      <div class="card-shell">${media}</div>
      <div class="card-caption">
        <div class="card-pill">
          <p class="card-pill-text">${escapeHtml(titleText)}</p>
        </div>
      </div>
    </a>`;
    })
    .join('\n');

  const body = `<div class="framer-page">
  ${heroHtml(site, locale)}
  <div class="framer-projects">
    ${
      cards
        ? `<div class="projects-grid">${cards}</div>`
        : `<div class="empty-state">${escapeHtml(t(locale, 'noCases'))}</div>`
    }
  </div>
</div>`;

  return layout({
    site,
    locale,
    title: `${title} — ${site.siteTitle?.[locale] || ''}`,
    path: '/',
    activeId: 'projects',
    body,
  });
}

export function renderCase({ site, entry, locale, allCases, draft = false, adminLink = '' }) {
  const titleText = String(pick(entry.title, locale));
  const summary = String(pick(entry.summary, locale));
  const cover = coverImage(entry.cover, locale);
  const overline = [entry.company, entry.year].filter(Boolean).map(escapeHtml).join('<span>·</span>');

  // Anchors feed the sticky section nav. Sections without a heading are skipped
  // because there would be nothing to show in the bar.
  const anchors = (entry.sections || [])
    .map((s, i) => ({
      id: s.anchor || `section-${i + 1}`,
      label: String(pick(s.title, locale)).trim(),
    }))
    .filter((a) => a.label);

  const aboutAnchor = { id: 'about-project', label: t(locale, 'aboutProject') };
  const headerSections = [aboutAnchor, ...anchors];

  const others = allCases.filter((c) => c.id !== entry.id).slice(0, 4);
  const otherCards = others
    .map((other) => {
      const href = url(`/case/${other.slug}`, locale);
      const otherTitle = String(pick(other.title, locale));
      const otherCover = coverImage(other.cover, locale);
      const media = otherCover
        ? `<div class="card-media"><div class="card-media-bg"></div><div class="card-media-img"><img src="${escapeHtml(
            otherCover
          )}" alt="${escapeHtml(otherTitle)}" loading="lazy" decoding="async"></div></div>`
        : `<div class="card-media card-media-empty">${escapeHtml(
            locale === 'ru' ? 'Нет обложки' : 'No cover'
          )}</div>`;
      return `<a class="framer-card other-card" href="${escapeHtml(href)}">
        <div class="card-shell">${media}</div>
        <div class="card-caption"><div class="card-pill"><p class="card-pill-text">${escapeHtml(
          otherTitle
        )}</p></div></div>
      </a>`;
    })
    .join('\n');

  const metaRows = [
    { label: { ru: 'Роль', en: 'Role' }, value: entry.role },
    { label: { ru: 'Длительность', en: 'Duration' }, value: entry.timeline },
    { label: { ru: 'Платформа', en: 'Platform' }, value: entry.platform },
  ]
    .map((row) => {
      const value = String(pick(row.value, locale)).trim();
      if (!value) return '';
      return `<div class="meta-row"><dt>${escapeHtml(
        row.label[locale] || row.label.ru
      )}</dt><dd>${escapeHtml(value)}</dd></div>`;
    })
    .filter(Boolean)
    .join('\n      ');

  const body = `<article class="case-page">
  <div class="case-hero">
    ${overline ? `<div class="case-overline">${overline}</div>` : ''}
    <h1 class="case-title">${escapeHtml(titleText)}</h1>
    ${summary ? `<p class="case-summary">${escapeHtml(summary)}</p>` : ''}
  </div>
  ${
    cover
      ? `<figure class="case-cover"><img src="${escapeHtml(cover)}" alt="${escapeHtml(
          titleText
        )}" loading="eager" decoding="async" draggable="false" data-protected></figure>`
      : ''
  }
  <div class="case-body-wrap">
    <div class="case-body" id="about-project">
      ${metaRows ? `<dl class="case-meta">${metaRows}</dl>` : ''}
      ${renderCaseBody(entry, locale)}
    </div>
  </div>
  ${
    otherCards
      ? `<section class="other-projects">
    <div class="other-projects-inner">
      <h2 class="other-projects-title">${escapeHtml(t(locale, 'otherProjects'))}</h2>
      <div class="projects-grid projects-grid-three">${otherCards}</div>
    </div>
  </section>`
      : ''
  }
</article>
<script src="/static/case-nav.js" defer></script>`;

  return layout({
    site,
    locale,
    title: `${titleText} — ${site.siteTitle?.[locale] || ''}`,
    description: summary,
    path: `/case/${entry.slug}`,
    activeId: 'projects',
    body,
    draft,
    adminLink,
    headerMode: 'case',
    backHref: url('/', locale, { draft: '1' }).replace(/\?draft=1$/, ''),
    backLabel: t(locale, 'backToProjects'),
    headerSections,
  });
}

export function renderGallery({ site, page, locale }) {
  const title = page.title?.[locale] || page.title?.ru || t(locale, 'other');
  const intro = page.intro?.[locale] || page.intro?.ru || '';

  const cards = (page.items || [])
    .map((item) => {
      const itemTitle = String(pick(item.title, locale));
      const body = String(pick(item.body, locale));
      const image = item.image || null;
      if (!itemTitle && !image) return '';

      // Image first, then the heading, matching the project-card rhythm so the
      // page reads as part of the same site.
      const media = image
        ? `<div class="card-media"><div class="card-media-bg"></div><div class="card-media-img"><img src="${escapeHtml(
            image
          )}" alt="${escapeHtml(itemTitle)}" loading="lazy" decoding="async"></div></div>`
        : `<div class="card-media card-media-empty">${escapeHtml(
            locale === 'ru' ? 'Нет картинки' : 'No image'
          )}</div>`;

      return `<figure class="gallery-card">
      ${media}
      ${
        itemTitle || body
          ? `<figcaption class="gallery-card-caption">${
              itemTitle
                ? `<h2 class="gallery-card-title">${escapeHtml(itemTitle)}</h2>`
                : ''
            }${
              body ? `<p class="gallery-card-body">${escapeHtml(body)}</p>` : ''
            }</figcaption>`
          : ''
      }
    </figure>`;
    })
    .filter(Boolean)
    .join('\n');

  const body = `<div class="framer-page">
  ${heroHtml(site, locale)}
  <div class="framer-projects">
    ${
      intro
        ? `<div class="gallery-heading"><p class="gallery-heading-intro">${escapeHtml(
            intro
          )}</p></div>`
        : ''
    }
    ${
      cards
        ? `<div class="gallery-grid">${cards}</div>`
        : `<div class="empty-state">${escapeHtml(
            locale === 'ru' ? 'Здесь пока пусто.' : 'Nothing here yet.'
          )}</div>`
    }
  </div>
</div>`;

  return layout({
    site,
    locale,
    title: `${title} — ${site.siteTitle?.[locale] || ''}`,
    description: intro || site.siteDescription?.[locale] || '',
    path: '/other',
    activeId: 'other',
    body,
  });
}

// Resume page: same hero and footer as the home page, with the primary button
// swapped for a PDF download and a structured body underneath.
// The PDF is uploaded separately, so the button is rendered as a plain link when
// the file exists and as a disabled button with a note when it does not — that
// way the page never offers a download that 404s.
export function renderResume({ site, locale, pdfReady = false }) {
  const data = site.resume || {};
  const pickLocal = (value) => String(pick(value, locale));
  const heading = (key, fallback) =>
    pickLocal(data[key]) || fallback;

  const downloadLabel = pickLocal(data.downloadLabel);
  const downloadHref = data.downloadHref || '/static/resume.pdf';

  const heroButtons = `${
    pdfReady
      ? `<a class="hero-button hero-button-primary" href="${escapeHtml(
          downloadHref
        )}" download>${escapeHtml(downloadLabel)}</a>`
      : `<span class="hero-button hero-button-primary is-disabled" title="${escapeHtml(
          locale === 'ru'
            ? 'Файл резюме ещё не загружен'
            : 'The resume file has not been uploaded yet'
        )}">${escapeHtml(downloadLabel)}</span>`
  }
      ${
        site.hero?.secondaryHref
          ? `<a class="hero-button hero-button-secondary" href="${escapeHtml(
              site.hero.secondaryHref
            )}" target="_blank" rel="noopener">${escapeHtml(
              pickLocal(site.hero.secondary)
            )}</a>`
          : ''
      }`;

  const experience = (data.experience || [])
    .map((job) => {
      const role = pickLocal(job.role);
      const company = pickLocal(job.company);
      const period = pickLocal(job.period);
      const description = pickLocal(job.description);
      if (!role && !company) return '';
      return `<article class="resume-job">
      <header class="resume-job-head">
        <h3 class="resume-job-role">${escapeHtml(role)}</h3>
        ${
          company
            ? `<p class="resume-job-company"><span class="resume-at">@</span>${escapeHtml(
                company
              )}</p>`
            : ''
        }
        ${period ? `<p class="resume-job-period">${escapeHtml(period)}</p>` : ''}
      </header>
      ${description ? `<p class="resume-job-text">${escapeHtml(description)}</p>` : ''}
    </article>`;
    })
    .filter(Boolean)
    .join('\n');

  const tools = (data.tools || [])
    .map((tool) => {
      const name = pickLocal(tool.name);
      const note = pickLocal(tool.note);
      if (!name) return '';
      return `<div class="resume-tool">
      <p class="resume-tool-name">${escapeHtml(name)}</p>
      ${note ? `<p class="resume-tool-note">${escapeHtml(note)}</p>` : ''}
    </div>`;
    })
    .filter(Boolean)
    .join('\n');

  const skills = (data.skills || [])
    .map((skill) => {
      const label = pickLocal(skill);
      return label ? `<li class="resume-skill">${escapeHtml(label)}</li>` : '';
    })
    .filter(Boolean)
    .join('\n');

  const education = (data.education || [])
    .map((item) => {
      const degree = pickLocal(item.degree);
      const place = pickLocal(item.place);
      if (!degree && !place) return '';
      return `<div class="resume-education">
      ${degree ? `<p class="resume-education-degree">${escapeHtml(degree)}</p>` : ''}
      ${place ? `<p class="resume-education-place">${escapeHtml(place)}</p>` : ''}
    </div>`;
    })
    .filter(Boolean)
    .join('\n');

  const body = `<div class="framer-page">
  ${heroHtml(site, locale, { buttons: heroButtons })}
  <div class="framer-projects">
    ${
      experience
        ? `<section class="resume-block">
      <h2 class="resume-block-title">${escapeHtml(
        heading('experienceHeading', t(locale, 'experience'))
      )}</h2>
      <div class="resume-jobs">${experience}</div>
    </section>`
        : ''
    }
    ${
      tools
        ? `<section class="resume-block">
      <h2 class="resume-block-title">${escapeHtml(
        heading('toolsHeading', t(locale, 'tools'))
      )}</h2>
      <div class="resume-tools">${tools}</div>
    </section>`
        : ''
    }
    ${
      skills
        ? `<section class="resume-block">
      <h2 class="resume-block-title">${escapeHtml(
        heading('skillsHeading', t(locale, 'skills'))
      )}</h2>
      <ul class="resume-skills">${skills}</ul>
    </section>`
        : ''
    }
    ${
      education
        ? `<section class="resume-block">
      <h2 class="resume-block-title">${escapeHtml(
        heading('educationHeading', t(locale, 'education'))
      )}</h2>
      ${education}
    </section>`
        : ''
    }
  </div>
</div>`;

  return layout({
    site,
    locale,
    title: `${pickLocal(data.title) || t(locale, 'resume')} — ${
      site.siteTitle?.[locale] || ''
    }`,
    path: '/resume',
    activeId: 'resume',
    body,
  });
}

export function renderNotFound({ site, locale }) {
  const body = `<div class="page page-narrow">
  <h1 class="page-title">404</h1>
  <p class="page-intro">${
    locale === 'ru' ? 'Страница не найдена.' : 'This page could not be found.'
  }</p>
  <a class="anchor-link" href="${escapeHtml(url('/', locale))}">${escapeHtml(
    t(locale, 'backToProjects')
  )}</a>
</div>`;
  return layout({
    site,
    locale,
    title: '404',
    path: '/404',
    activeId: '',
    body,
  });
}

export { normalizeLocale, UI };
