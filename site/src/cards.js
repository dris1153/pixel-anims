import { animUrl, countryOf, detailUrl, metaLine, posterUrl, stillOf } from './showcases.js';
import { flag } from './flags.js';
import { addTilt } from './tilt.js';

export const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

export function el(tag, className, text) {
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
  const iframe = frame.querySelector('iframe');
  if (iframe) fadeInOnLoad(frame, iframe);
}
function fadeInOnLoad(frame, iframe) {
  const shown = () => frame.classList.add('is-loaded'); // fades it in (motion.css)
  iframe.addEventListener('load', shown);
  if (iframe.contentDocument?.readyState === 'complete' && iframe.contentWindow.location.href !== 'about:blank') shown(); // loaded before this ran
}
function fitNow(frame) {
  const w = +frame.dataset.w, h = +frame.dataset.h, dpr = devicePixelRatio || 1;
  const c = Math.min(frame.clientWidth / w, frame.clientHeight / h), s = Math.max(1, Math.round(c * dpr));
  const iframe = frame.querySelector('iframe'), poster = frame.querySelector('.poster');
  if (iframe) {
    iframe.style.width = `${w * s / dpr}px`;
    iframe.style.height = `${h * s / dpr}px`;
    iframe.style.transform = `translate(-50%, -50%) scale(${c * dpr / s})`; // may be wider than the frame, so no auto margins
  }
  if (poster) { // the same box the iframe ends up filling
    poster.style.width = `${w * c}px`;
    poster.style.height = `${h * c}px`;
  }
}

function liveIframe(title) {
  const iframe = el('iframe');
  iframe.tabIndex = -1;
  iframe.title = `${title}: live pixel art animation`;
  return iframe;
}

// Tick 0 as a 1x PNG (pnpm posters) shows at once; the live iframe fades in over it from the same tick.
// Tiles pass live = false and get their iframe later from autoplayInView: an empty iframe still builds an
// about:blank document on insert, which for a whole grid stalls the page.
function wideFrame(s, live = true) {
  const frame = el('div', 'frame frame-wide');
  const poster = el('img', 'poster');
  poster.alt = '';
  poster.decoding = 'async';
  poster.src = posterUrl(s);
  poster.addEventListener('error', () => poster.remove());
  frame.append(poster);
  if (live) {
    const iframe = liveIframe(s.title);
    iframe.loading = 'lazy'; // set before any src, or the first load is eager
    frame.append(iframe);
  }
  fitFrame(frame, s.res);
  return frame;
}

function kind(s) {
  return el('p', s.ref ? 'kind kind-ref' : 'kind', s.kind);
}

export function featureCard(s) {
  const card = el('article', 'feature');
  const frame = wideFrame(s);
  addPlayToggle(frame, frame.querySelector('iframe'), animUrl(s), s.still, s.title, !calm);
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
  const frame = wideFrame(s, false);
  frame.dataset.src = calm ? stillOf(animUrl(s), s.still) : animUrl(s); // autoplayInView adds the iframe near the screen
  frame.dataset.title = s.title;
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

// Off-screen tiles hold their next animation frame instead of swapping src: a reload flashes blank. Running tiles
// get every other frame (30 fps): the engine then steps twice per frame and renders once, halving the render cost.
// ponytail: needs same-origin pages whose engine calls the global requestAnimationFrame every frame.
function hold(iframe, off) {
  const win = iframe.contentWindow;
  win.realRaf ??= win.requestAnimationFrame; // an own property of window, so it can't be deleted back
  win.requestAnimationFrame = off ? cb => { iframe.pending = cb; } : cb => win.realRaf(() => win.realRaf(cb));
  if (off) return;
  if (iframe.pending) win.realRaf(iframe.pending);
  iframe.pending = null;
}

// Tiles near the screen boot two at a time instead of all at once, so a page of iframes never stalls the main
// thread (they share it with this page). Tiles never shown, like other pages or filtered-out ones, never load.
const queue = [];
let booting = 0;
function boot(frame) {
  if (frame.querySelector('iframe') || queue.includes(frame)) return;
  queue.push(frame);
  pump();
}
function pump() {
  while (booting < 2 && queue.length) {
    const frame = queue.shift(), iframe = liveIframe(frame.dataset.title);
    iframe.setAttribute('aria-hidden', 'true');
    let done = false;
    const free = () => {
      if (done) return;
      done = true;
      booting--;
      pump();
    };
    booting++;
    iframe.addEventListener('load', free, { once: true });
    setTimeout(free, 3000); // a tile hidden mid-load or a failed page must not keep its slot
    if (!calm) iframe.addEventListener('load', () => hold(iframe, !!frame.held)); // a load replaces the window
    fadeInOnLoad(frame, iframe);
    iframe.src = frame.dataset.src;
    frame.append(iframe);
    fitNow(frame);
  }
}

// Tiles load as they near the screen, run only while on it, and resume where they stopped.
export function autoplayInView(list) {
  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      const frame = target.querySelector('.frame'), iframe = frame.querySelector('iframe');
      if (isIntersecting) boot(frame);
      if (calm) continue;
      frame.held = !isIntersecting; // applied again on each load
      if (iframe) hold(iframe, frame.held);
    }
  }, { rootMargin: '120px 0px' });
  for (const item of list.children) observer.observe(item);
}
