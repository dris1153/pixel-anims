import { SHOWCASES, TAG_GROUPS, detailUrl } from './showcases.js';
import { el } from './cards.js';
import { t } from './i18n/i18n.js';

const MAX = 8;
const TAGS = TAG_GROUPS.flatMap(g => g.tags.map(([id, name]) => ({ id, name, group: g.label })));

// ARIA 1.2 combobox on the search box: matching tags (Enter adds the filter) and showcases (Enter opens it).
// Typing still filters the grid live; the list only offers shortcuts.
export function setupSuggest(input, list, { picked, onTag }) {
  let options = [], active = -1;

  const close = () => {
    options = [];
    active = -1;
    list.hidden = true;
    list.replaceChildren();
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
  };
  const highlight = i => {
    active = i;
    options.forEach((o, k) => o.node.setAttribute('aria-selected', String(k === i)));
    if (i < 0) input.removeAttribute('aria-activedescendant');
    else {
      input.setAttribute('aria-activedescendant', options[i].node.id);
      options[i].node.scrollIntoView({ block: 'nearest' });
    }
  };
  const choose = o => {
    if (o.url) {
      location.href = o.url;
      return;
    }
    input.value = ''; // the tag now does the filtering the typed text was doing
    close();
    onTag(o.id);
  };
  const open = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) return close();
    const rank = name => (name.toLowerCase().startsWith(q) ? 0 : 1);
    const tags = TAGS.filter(t => !picked.has(t.id) && t.name.toLowerCase().includes(q))
      .sort((a, b) => rank(a.name) - rank(b.name)).slice(0, 4);
    const shows = SHOWCASES.filter(s => s.title.toLowerCase().includes(q))
      .sort((a, b) => rank(a.title) - rank(b.title)).slice(0, MAX - tags.length);
    options = [
      ...tags.map(g => ({ id: g.id, kind: t('suggest.tag', { group: g.group }), label: g.name })),
      ...shows.map(s => ({ url: detailUrl(s), kind: t('suggest.showcase'), label: s.title })),
    ];
    if (!options.length) return close();
    options.forEach((o, k) => {
      o.node = el('li', 'suggest-option');
      o.node.id = `suggest-${k}`;
      o.node.setAttribute('role', 'option');
      o.node.append(el('span', 'suggest-kind', o.kind), el('span', 'suggest-label', o.label));
      o.node.addEventListener('click', () => choose(o));
    });
    list.replaceChildren(...options.map(o => o.node));
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    highlight(-1);
  };

  input.addEventListener('input', open);
  input.addEventListener('focus', open);
  input.addEventListener('blur', close);
  list.addEventListener('mousedown', e => e.preventDefault()); // keep focus in the input while clicking an option
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (list.hidden) open();
      if (!options.length) return;
      e.preventDefault();
      const next = active + (e.key === 'ArrowDown' ? 1 : -1); // -1 is the input itself, then it wraps
      highlight(next >= options.length ? -1 : next < -1 ? options.length - 1 : next);
    } else if (e.key === 'Enter' && active >= 0) {
      e.preventDefault();
      choose(options[active]);
    } else if (e.key === 'Escape' && !list.hidden) {
      e.preventDefault(); // keep the text; a second Escape lets type=search clear it
      close();
    }
  });
}
