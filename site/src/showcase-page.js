import './sky/backdrop.js';
import { SHOWCASES, TAG_GROUPS, countryOf, resTag } from './showcases.js';
import { autoplayInView, tile } from './cards.js';
import { setupFacets } from './filter-popovers.js';
import { setupSuggest } from './search-suggest.js';
import { PER_PAGE, renderPager } from './pager.js';

const list = document.getElementById('showcase-tiles');
const search = document.getElementById('showcase-search');
const count = document.getElementById('showcase-count');
const empty = document.getElementById('showcase-empty');
const active = document.getElementById('showcase-active');
const pager = document.getElementById('showcase-pager');
const sort = document.getElementById('showcase-sort');
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

// Filter, sort and page state live in the URL (?tags=a,b&q=text&sort=oldest&page=2) so a view can be shared or reloaded.
const known = new Set(TAG_GROUPS.flatMap(g => g.tags.map(([id]) => id)));
const params = new URLSearchParams(location.search);
const picked = new Set((params.get('tags') ?? '').split(',').filter(id => known.has(id)));
search.value = params.get('q') ?? '';
sort.value = params.get('sort') === 'oldest' ? 'oldest' : 'newest';
let order = items;
let page = Math.max(1, parseInt(params.get('page'), 10) || 1);

const facets = setupFacets(document.getElementById('showcase-facets'), active, { picked, onChange: apply, countFor });
setupSuggest(search, document.getElementById('showcase-suggest'), {
  picked,
  onTag: id => {
    picked.add(id);
    apply();
  },
});
search.addEventListener('input', apply);
sort.addEventListener('change', () => {
  arrange();
  apply();
});
for (const button of document.querySelectorAll('[data-clear]')) {
  button.addEventListener('click', () => {
    picked.clear();
    search.value = '';
    apply();
    search.focus();
  });
}
arrange();
render();
play(order.filter(item => !item.el.hidden), 'is-loading'); // load stagger over the tiles that start visible

// Replays a tile animation in order; the stagger index caps at 6 so the last tile is never late.
function play(targets, cls) {
  targets.forEach(({ el }, k) => {
    el.classList.remove('is-loading', 'is-entering');
    void el.offsetWidth;
    el.style.setProperty('--i', Math.min(k, 6));
    el.classList.add(cls);
  });
}

// SHOWCASES is newest first, so Oldest first just reverses it. A plain append would reload every booted iframe at
// once; moveBefore keeps them running, and where it is missing (Safari) CSS order reorders without moving anything.
function arrange() {
  order = sort.value === 'oldest' ? [...items].reverse() : items;
  if ('moveBefore' in Element.prototype) for (const item of order) list.moveBefore(item.el, null);
  else order.forEach((item, k) => { item.el.style.order = k; });
}

function searchWords() {
  return search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
}

// OR within a group, AND across groups; every search word must appear in the title or brief.
// `skip` leaves one group out, for counting what each of its options would show.
function matches(item, words, skip = -1) {
  return TAG_GROUPS.every((g, k) => {
    if (k === skip) return true;
    const wanted = g.tags.filter(([id]) => picked.has(id));
    return !wanted.length || wanted.some(([id]) => item.tags.has(id));
  }) && words.every(w => item.text.includes(w));
}

function countFor(g, id) {
  const words = searchWords();
  return items.filter(item => item.tags.has(id) && matches(item, words, g)).length;
}

// Any filter, search or sort change starts over on the first page.
function apply() {
  page = 1;
  render();
}

function goTo(p) {
  page = p;
  render();
  list.scrollIntoView({ block: 'start' }); // scroll-padding keeps it clear of the sticky bar
}

function render() {
  const query = search.value.trim();
  const words = searchWords();
  const hits = order.filter(item => matches(item, words));
  const pages = Math.max(1, Math.ceil(hits.length / PER_PAGE));
  page = Math.min(page, pages); // ?page=9 past the end lands on the last page
  const first = (page - 1) * PER_PAGE, shown = new Set(hits.slice(first, first + PER_PAGE));
  const entering = [];
  for (const item of order) {
    const wasHidden = item.el.hidden;
    item.el.hidden = !shown.has(item);
    if (!item.el.hidden && wasHidden) entering.push(item);
  }
  play(entering, 'is-entering'); // tiles leaving just vanish: exits never wait
  facets.update();
  renderPager(pager, page, pages, goTo);
  count.textContent = hits.length ? `Showing ${first + 1}–${first + shown.size} of ${hits.length}` : `Showing 0 of ${items.length}`;
  empty.hidden = hits.length > 0;
  active.hidden = !picked.size && !words.length;
  const parts = [];
  if (picked.size) parts.push(`tags=${[...picked].join(',')}`);
  if (query) parts.push(`q=${encodeURIComponent(query)}`);
  if (sort.value === 'oldest') parts.push('sort=oldest');
  if (page > 1) parts.push(`page=${page}`);
  history.replaceState(null, '', parts.length ? `?${parts.join('&')}` : location.pathname);
}
