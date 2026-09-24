import { SHOWCASES, TAG_GROUPS, countryOf, resTag } from './showcases.js';
import { autoplayInView, tile } from './cards.js';
import { flag } from './flags.js';

const list = document.getElementById('showcase-tiles');
const search = document.getElementById('showcase-search');
const count = document.getElementById('showcase-count');
const empty = document.getElementById('showcase-empty');
const clearLink = document.querySelector('.filter-clear');
const items = SHOWCASES.map(s => ({
  el: tile(s),
  tags: new Set([...s.tags, resTag(s), countryOf(s)]),
  text: `${s.title} ${s.prompt}`.toLowerCase(),
}));
list.append(...items.map(item => item.el));
autoplayInView(list); // filtered-out tiles stop intersecting, so they hold still
for (const { el } of items) {
  el.addEventListener('animationend', e => { if (e.target === el) el.classList.remove('is-loading', 'is-entering'); });
}

// Filter state lives in the URL (?tags=a,b&q=text) so a filtered view can be shared or reloaded.
const known = new Set(TAG_GROUPS.flatMap(g => g.tags.map(([id]) => id)));
const params = new URLSearchParams(location.search);
const picked = new Set((params.get('tags') ?? '').split(',').filter(id => known.has(id)));
search.value = params.get('q') ?? '';

const chips = [];
for (const group of TAG_GROUPS) {
  const row = document.createElement('div');
  row.className = 'chip-group';
  row.setAttribute('role', 'group');
  row.setAttribute('aria-label', group.label);
  const label = document.createElement('span');
  label.className = 'chip-label';
  label.setAttribute('aria-hidden', 'true');
  label.textContent = group.label;
  row.append(label);
  for (const [id, name] of group.tags) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip';
    chip.dataset.tag = id;
    chip.textContent = name;
    if (group.flags) chip.prepend(flag(id));
    chip.addEventListener('click', () => {
      if (!picked.delete(id)) picked.add(id);
      apply();
    });
    chips.push(chip);
    row.append(chip);
  }
  document.getElementById('showcase-chips').append(row);
}
search.addEventListener('input', apply);
for (const button of document.querySelectorAll('[data-clear]')) {
  button.addEventListener('click', () => {
    picked.clear();
    search.value = '';
    apply();
    search.focus();
  });
}
apply();
play(items.filter(item => !item.el.hidden), 'is-loading'); // load stagger over the tiles that start visible

// Replays a tile animation in order; the stagger index caps at 6 so the last tile is never late.
function play(targets, cls) {
  targets.forEach(({ el }, k) => {
    el.classList.remove('is-loading', 'is-entering');
    void el.offsetWidth;
    el.style.setProperty('--i', Math.min(k, 6));
    el.classList.add(cls);
  });
}

// OR within a group, AND across groups; every search word must appear in the title or brief.
function matches(item, words) {
  return TAG_GROUPS.every(g => {
    const wanted = g.tags.filter(([id]) => picked.has(id));
    return !wanted.length || wanted.some(([id]) => item.tags.has(id));
  }) && words.every(w => item.text.includes(w));
}

function apply() {
  const query = search.value.trim();
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  let shown = 0;
  const entering = [];
  for (const item of items) {
    const wasHidden = item.el.hidden;
    item.el.hidden = !matches(item, words);
    if (item.el.hidden) continue;
    shown++;
    if (wasHidden) entering.push(item);
  }
  play(entering, 'is-entering'); // tiles leaving just vanish: exits never wait
  for (const chip of chips) chip.setAttribute('aria-pressed', String(picked.has(chip.dataset.tag)));
  count.textContent = `Showing ${shown} of ${items.length}`;
  empty.hidden = shown > 0;
  clearLink.hidden = !picked.size && !words.length;
  const parts = [];
  if (picked.size) parts.push(`tags=${[...picked].join(',')}`);
  if (query) parts.push(`q=${encodeURIComponent(query)}`);
  history.replaceState(null, '', parts.length ? `?${parts.join('&')}` : location.pathname);
}
