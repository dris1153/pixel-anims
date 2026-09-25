// The header's language menu: a HUD button showing the current flag and code, and plain ?lang= links to the other languages
// (the next page load saves the choice, so no click handling is needed beyond opening and closing).
import './i18n.css';
import { LANGS, lang, langUrl, t } from './i18n.js';
import { flag } from '../flags.js';

const bar = document.querySelector('.bar');
if (bar) {
  const box = document.createElement('div');
  box.className = 'lang';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'lang-btn';
  button.textContent = lang.toUpperCase();
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'lang-menu');
  const current = LANGS.find(l => l.code === lang);
  button.setAttribute('aria-label', `${button.textContent} · ${t('lang.label', { name: current.name })}`);
  button.prepend(flag(current.flag)); // flags are decorative: the label and each link's text name the language
  const menu = document.createElement('ul');
  menu.className = 'lang-menu';
  menu.id = 'lang-menu';
  menu.hidden = true;
  for (const l of LANGS) {
    const a = document.createElement('a');
    a.href = langUrl(l.code);
    a.hreflang = a.lang = l.code;
    a.append(flag(l.flag), l.name);
    if (l.code === lang) a.setAttribute('aria-current', 'true');
    const li = document.createElement('li');
    li.append(a);
    menu.append(li);
  }
  const open = on => {
    if (on) for (const a of menu.querySelectorAll('a')) a.href = langUrl(a.hreflang); // pages rewrite their query (filters)
    menu.hidden = !on;
    button.setAttribute('aria-expanded', String(on));
  };
  button.addEventListener('click', () => open(menu.hidden));
  document.addEventListener('pointerdown', e => { if (!box.contains(e.target)) open(false); });
  box.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { open(false); button.focus(); } });
  // Tabbing away closes it; a click on a link may blur to nothing first (Safari), so a null target is left to pointerdown.
  box.addEventListener('focusout', e => { if (e.relatedTarget && !box.contains(e.relatedTarget)) open(false); });
  box.append(button, menu);
  bar.append(box);
}
