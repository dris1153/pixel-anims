import { SHOWCASES, animUrl, detailUrl, metaLine } from './showcases.js';
import { addPlayToggle, calm } from './cards.js';
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

  const kind = page.querySelector('.kind');
  kind.textContent = s.kind;
  kind.classList.toggle('kind-ref', Boolean(s.ref));
  page.querySelector('h1').textContent = s.title;
  page.querySelector('.meta').textContent = metaLine(s);
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
