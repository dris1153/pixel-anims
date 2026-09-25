// Site languages. The HTML is written in English; for another language this module loads its dictionary before any
// page script runs (top-level await), swaps every [data-i18n*] text, and page scripts ask t() for what they build.
// The language comes from ?lang, then the saved choice, then the browser, then English.
import EN from './dict/en.js';

export const LANGS = [ // flag: the pixel flag the switcher shows for the language (public/flags)
  { code: 'en', name: 'English', flag: 'gb' }, { code: 'vi', name: 'Tiếng Việt', flag: 'vn' }, { code: 'ko', name: '한국어', flag: 'kr' },
  { code: 'ja', name: '日本語', flag: 'jp' }, { code: 'zh', name: '中文', flag: 'cn' }, { code: 'th', name: 'ไทย', flag: 'th' },
  { code: 'hi', name: 'हिन्दी', flag: 'in' }, { code: 'ar', name: 'العربية', flag: 'sa' }, { code: 'es', name: 'Español', flag: 'es' },
];
export const LANG_KEY = 'pixel-anims:lang';
const CODES = LANGS.map(l => l.code);
const FONTS = { // Google Fonts family for each non-Latin script (IBM Plex's sibling; Chinese has none, so Noto)
  ja: 'IBM+Plex+Sans+JP:wght@400;500;600;700',
  ko: 'IBM+Plex+Sans+KR:wght@400;500;600;700',
  zh: 'Noto+Sans+SC:wght@400;500;600;700',
  th: 'IBM+Plex+Sans+Thai:wght@400;500;600;700',
  hi: 'IBM+Plex+Sans+Devanagari:wght@400;500;600;700',
  ar: 'IBM+Plex+Sans+Arabic:wght@400;500;600;700',
};
const loaders = import.meta.glob(['./dict/*.js', '!./dict/en.js']);

export let lang = resolve();
let dict = EN;
if (lang !== 'en') {
  try { dict = (await loaders[`./dict/${lang}.js`]()).default; } catch { lang = 'en'; } // no dictionary: English, lang and fonts too
}
document.documentElement.lang = lang;
if (FONTS[lang]) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${FONTS[lang]}&display=swap`;
  document.head.append(link);
}
applyI18n();
document.documentElement.classList.remove('i18n-pending');

function resolve() {
  const pick = c => c && CODES.includes(c) ? c : null;
  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch { /* storage blocked */ }
  const browser = (navigator.languages ?? [navigator.language]).map(l => pick(l?.slice(0, 2).toLowerCase())).find(Boolean);
  const asked = pick(new URLSearchParams(location.search).get('lang'));
  if (asked) try { localStorage.setItem(LANG_KEY, asked); } catch { /* storage blocked */ } // a shared ?lang link sticks for the visit
  return asked ?? pick(saved) ?? browser ?? 'en';
}

// t('key', { name: 'x' }, 'fallback'): this language, then English, then the fallback (or the key itself).
export function t(key, vars, fallback) {
  let s = dict[key] ?? EN[key] ?? fallback ?? key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  return s;
}

// [data-i18n]: text; [data-i18n-html]: text with inline markup from our own dictionaries; [data-i18n-attr]: "attr:key;…".
export function applyI18n(root = document) {
  if (lang === 'en') return;
  for (const el of root.querySelectorAll('[data-i18n]')) el.textContent = t(el.dataset.i18n);
  for (const el of root.querySelectorAll('[data-i18n-html]')) el.innerHTML = t(el.dataset.i18nHtml);
  for (const el of root.querySelectorAll('[data-i18n-attr]')) {
    for (const pair of el.dataset.i18nAttr.split(';')) { const [attr, key] = pair.split(':'); el.setAttribute(attr, t(key)); }
  }
}

// A URL for the same page in another language, keeping its query (filters, showcase) and hash.
export function langUrl(code) {
  const u = new URL(location.href);
  u.searchParams.set('lang', code);
  return u.pathname + u.search + u.hash;
}
