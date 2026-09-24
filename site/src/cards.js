import { animUrl, countryOf, detailUrl, metaLine, stillOf } from './showcases.js';
import { flag } from './flags.js';
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

// The engine scales by whole numbers and pads the rest with the scene's own background, so each iframe renders
// at the nearest whole multiple in device pixels and a transform scales it the rest of the way to fill the frame
// (contain), centered on the frame's matte. Chrome keeps the scaled canvas nearest-neighbour.
const fitObserver = 'ResizeObserver' in window ? new ResizeObserver(entries => entries.forEach(e => fitNow(e.target))) : null;
export function fitFrame(frame, [w, h]) {
  frame.dataset.w = w;
  frame.dataset.h = h;
  frame.classList.add('is-fit');
  fitObserver?.observe(frame);
  fitNow(frame);
  const iframe = frame.querySelector('iframe'), shown = () => frame.classList.add('is-loaded'); // fades it in (motion.css)
  iframe.addEventListener('load', shown);
  if (iframe.contentDocument?.readyState === 'complete' && iframe.contentWindow.location.href !== 'about:blank') shown(); // loaded before this ran
}
function fitNow(frame) {
  const w = +frame.dataset.w, h = +frame.dataset.h, dpr = devicePixelRatio || 1, iframe = frame.querySelector('iframe');
  const c = Math.min(frame.clientWidth / w, frame.clientHeight / h), s = Math.max(1, Math.round(c * dpr));
  iframe.style.width = `${w * s / dpr}px`;
  iframe.style.height = `${h * s / dpr}px`;
  iframe.style.transform = `translate(-50%, -50%) scale(${c * dpr / s})`; // may be wider than the frame, so no auto margins
}

function wideFrame(s) {
  const frame = el('div', 'frame frame-wide');
  const iframe = el('iframe');
  iframe.loading = 'lazy'; // set before any src, or the first load is eager
  iframe.tabIndex = -1;
  iframe.title = `${s.title}: live pixel art animation`;
  frame.append(iframe);
  fitFrame(frame, s.res);
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
  iframe.src = calm ? stillOf(animUrl(s), s.still) : animUrl(s);
  const name = el('a', 'tile-name', s.title);
  name.href = detailUrl(s);
  card.append(frame, name);
  if (countryOf(s) !== 'other') { // a small flag in the corner; the detail page names the country
    const badge = el('span', 'tile-flag');
    badge.append(flag(countryOf(s)));
    card.append(badge);
  }
  item.append(card);
  addTilt(item, card);
  return item;
}

// Off-screen tiles hold their next animation frame instead of swapping src: a reload flashes blank.
// ponytail: needs same-origin pages whose engine calls the global requestAnimationFrame every frame.
function hold(iframe, off) {
  iframe.held = off;
  const win = iframe.contentWindow;
  win.realRaf ??= win.requestAnimationFrame; // an own property of window, so it can't be deleted back
  win.requestAnimationFrame = off ? cb => { iframe.pending = cb; } : win.realRaf;
  if (off) return;
  if (iframe.pending) win.realRaf(iframe.pending);
  iframe.pending = null;
}

// Tiles run only while on screen and resume where they stopped.
export function autoplayInView(list) {
  if (calm) return;
  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) hold(target.querySelector('iframe'), !isIntersecting);
  }, { rootMargin: '120px 0px' });
  for (const item of list.children) {
    const iframe = item.querySelector('iframe');
    iframe.addEventListener('load', () => iframe.held && hold(iframe, true)); // lazy load replaces the window
    observer.observe(item);
  }
}
