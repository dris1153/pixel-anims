import './sky/backdrop.js';
import { COUNTRIES, SHOWCASES, TAG_GROUPS, animUrl, countryOf, detailUrl } from './showcases.js';
import { flag } from './flags.js';
import { addPlayToggle, calm, fitFrame } from './cards.js';
import { setupCopy } from './copy.js';

setupCopy();
const slug = new URLSearchParams(location.search).get('s');
const index = SHOWCASES.findIndex(s => s.slug === slug);
if (index < 0) {
  document.title = 'Showcase not found · pixel-anims';
  document.getElementById('not-found').hidden = false;
} else {
  render(SHOWCASES[index], index);
}

function render(s, i) {
  const page = document.getElementById('detail');
  document.title = `${s.title} · pixel-anims showcase`;

  const frame = page.querySelector('.frame');
  frame.style.aspectRatio = `${s.res[0]} / ${s.res[1]}`;
  const iframe = frame.querySelector('iframe');
  iframe.title = `${s.title}: live pixel art animation`;
  addPlayToggle(frame, iframe, animUrl(s), s.still, s.title, !calm);
  fitFrame(frame, s.res);

  const kind = page.querySelector('.kind');
  kind.textContent = s.kind;
  kind.classList.toggle('kind-ref', Boolean(s.ref));
  page.querySelector('h1').textContent = s.title;
  page.querySelector('[data-spec="res"]').textContent = `${s.res[0]}×${s.res[1]}`;
  page.querySelector('[data-spec="loop"]').textContent = `${s.loop} s`;
  page.querySelector('[data-spec="states"]').textContent = s.states.join(' → ');
  const names = new Map(TAG_GROUPS.flatMap(g => g.tags)); // each tag opens the showcase list filtered to it
  page.querySelector('[data-spec="tags"]').append(...s.tags.map(t => {
    const a = document.createElement('a');
    a.href = `/showcase/?tags=${t}`;
    a.textContent = names.get(t) ?? t;
    return a;
  }));
  const country = document.createElement('a');
  country.href = `/showcase/?tags=${countryOf(s)}`;
  country.append(flag(countryOf(s)), new Map(COUNTRIES).get(countryOf(s)));
  page.querySelector('[data-spec="country"]').append(country);
  page.querySelector('.prompt p').textContent = s.prompt;
  const note = page.querySelector('.note');
  if (s.note) note.textContent = s.note;
  else note.remove();
  page.querySelector('.open').href = animUrl(s);

  const n = SHOWCASES.length;
  link(page.querySelector('[rel="prev"]'), SHOWCASES[(i - 1 + n) % n]);
  link(page.querySelector('[rel="next"]'), SHOWCASES[(i + 1) % n]);
  page.hidden = false;
}

function link(a, s) {
  a.href = detailUrl(s);
  a.querySelector('.pager-name').textContent = s.title;
}
