import { animUrl, detailUrl, metaLine, stillOf } from './showcases.js';
import { addTilt } from './tilt.js';

export const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// Play/Pause swaps the iframe between the live page and its one-tick still.
export function addPlayToggle(frame, iframe, file, still, title, playing) {
  const button = el('button', 'play');
  button.type = 'button';
  const set = (on, load = true) => {
    if (load) iframe.src = on ? file : stillOf(file, still);
    button.textContent = on ? 'Pause' : 'Play';
    button.setAttribute('aria-label', `${on ? 'Pause' : 'Play'} ${title}`);
  };
  button.addEventListener('click', () => set(button.textContent === 'Play'));
  frame.append(button);
  set(playing, !(playing && iframe.getAttribute('src')));
}

function wideFrame(s) {
  const frame = el('div', 'frame frame-wide');
  const iframe = el('iframe');
  iframe.loading = 'lazy'; // set before any src, or the first load is eager
  iframe.tabIndex = -1;
  iframe.title = `${s.title}: live pixel art animation`;
  frame.append(iframe);
  return frame;
}

function kind(s) {
  return el('p', s.ref ? 'kind kind-ref' : 'kind', s.kind);
}

export function featureCard(s) {
  const card = el('article', 'feature');
  const frame = wideFrame(s);
  addPlayToggle(frame, frame.firstChild, animUrl(s), s.still, s.title, !calm);
  const body = el('div', 'feature-body');
  const more = el('a', 'btn', 'View details');
  more.href = detailUrl(s);
  more.append(el('span', 'sr-only', ` for ${s.title}`));
  body.append(kind(s), el('h3', '', s.title), el('p', 'meta', metaLine(s)), more);
  card.append(frame, body);
  return card;
}

// Stretched-link tile: an iframe may not sit inside <a>, so the name link's ::after covers the card.
// The <li> stays flat as the pointer hit area; .tile-card inside carries the look and tilts.
export function tile(s) {
  const item = el('li', 'tile');
  const card = el('div', 'tile-card');
  const frame = wideFrame(s);
  const iframe = frame.firstChild;
  iframe.setAttribute('aria-hidden', 'true');
  iframe.src = item.dataset.still = stillOf(animUrl(s), s.still);
  item.dataset.live = animUrl(s);
  const name = el('a', 'tile-name', s.title);
  name.href = detailUrl(s);
  card.append(frame, name);
  item.append(card);
  addTilt(item, card);
  return item;
}

// Tiles run live only while on screen; each reload restarts the loop at tick 0.
export function autoplayInView(list) {
  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      const iframe = target.querySelector('iframe');
      const src = isIntersecting && !calm ? target.dataset.live : target.dataset.still;
      if (iframe.getAttribute('src') !== src) iframe.src = src;
    }
  }, { rootMargin: '120px 0px' });
  for (const item of list.children) observer.observe(item);
}
