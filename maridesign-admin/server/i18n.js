export const UI = {
  ru: {
    projects: 'Проекты',
    other: 'Разное',
    resume: 'Резюме',
    contact: 'Обсудить проект',
    caseStudies: 'Кейсы',
    backToProjects: 'Все проекты',
    nextProject: 'Следующий проект',
    prevProject: 'Предыдущий проект',
    noCases: 'Кейсы пока не опубликованы.',
    draftNotice: 'Черновик — кейс виден только в админке.',
    year: 'Год',
    contents: 'Содержание',
    language: 'Язык',
    viewDraft: 'Открыть черновик',
    allCases: 'Все кейсы',
    otherProjects: 'Другие проекты',
    aboutProject: 'О проекте',
    experience: 'Опыт работы',
    tools: 'Инструменты',
    skills: 'Навыки',
    education: 'Образование',
  },
  en: {
    projects: 'Projects',
    other: 'Other',
    resume: 'Resume',
    contact: 'Discuss a project',
    caseStudies: 'Case studies',
    backToProjects: 'All projects',
    nextProject: 'Next project',
    prevProject: 'Previous project',
    noCases: 'No case studies published yet.',
    draftNotice: 'Draft — visible in the admin panel only.',
    year: 'Year',
    contents: 'Contents',
    language: 'Language',
    viewDraft: 'Open draft',
    allCases: 'All cases',
    otherProjects: 'Other projects',
    aboutProject: 'About the project',
    experience: 'Experience',
    tools: 'Tools',
    skills: 'Skills',
    education: 'Education',
  },
};

export const sectionLabels = {
  text: { ru: 'Текст', en: 'Text' },
  image: { ru: 'Изображение', en: 'Image' },
  gallery: { ru: 'Галерея', en: 'Gallery' },
  textImage: { ru: 'Текст + изображение', en: 'Text + image' },
  imageText: { ru: 'Изображение + текст', en: 'Image + text' },
  video: { ru: 'Видео', en: 'Video' },
  quote: { ru: 'Цитата', en: 'Quote' },
  list: { ru: 'Список', en: 'List' },
};

export function t(locale, key) {
  const dict = UI[locale] || UI.ru;
  return dict[key] ?? UI.ru[key] ?? key;
}

export function normalizeLocale(value, fallback = 'ru') {
  return value === 'en' || value === 'ru' ? value : fallback;
}
