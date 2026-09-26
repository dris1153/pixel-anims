// A long block that rests on its first line, or its first `lines` lines ("…"), and opens to its full height from a
// click on the text or on the toggle under it. clampText() does the same for a lone paragraph with the toggle in the
// text: "…text… show more" in the paragraph's own font. The height tweens with the transitions.dev resize timing;
// under reduced motion it jumps.
import './collapse.css';
import { t } from './i18n/i18n.js';
import { tokenMs } from './tokens.js';

const calm = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const tween = (node, from, to) => node.animate({ height: [`${from}px`, `${to}px`] },
  { duration: tokenMs('--duration-fast', 250), easing: getComputedStyle(document.documentElement).getPropertyValue('--ease-smooth-out').trim() || 'ease-out' });
let ids = 0;

export function collapsible(body, { lines = 1 } = {}) {
  body.style.setProperty('--clamp-lines', lines);
  body.classList.add('clamp', 'is-clamped');
  const first = body.firstElementChild;
  if (body.childElementCount < 2 && first && first.scrollHeight <= first.clientHeight + 1) { // it fits: nothing to hide
    body.classList.remove('clamp', 'is-clamped');
    return;
  }
  body.id ||= `clamp-${++ids}`;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'clamp-toggle';
  button.setAttribute('aria-controls', body.id);
  let isOpen = false, anim = null;
  const label = () => {
    button.textContent = t(isOpen ? 'more.hide' : 'more.show');
    button.setAttribute('aria-expanded', String(isOpen));
  };
  label();
  body.after(button);

  const toggle = () => {
    const from = body.getBoundingClientRect().height; // mid-tween too: the new tween starts where the old one is
    anim?.cancel();
    isOpen = !isOpen;
    body.classList.toggle('is-clamped', !isOpen);
    const to = body.getBoundingClientRect().height;
    label();
    if (calm()) return;
    if (!isOpen) body.classList.remove('is-clamped'); // closing: keep the full text in view while the box shrinks
    const run = tween(body, from, to);
    run.onfinish = () => { if (!isOpen) body.classList.add('is-clamped'); anim = null; };
    run.oncancel = () => { if (!isOpen) body.classList.add('is-clamped'); };
    anim = run;
  };
  button.addEventListener('click', toggle);
  body.addEventListener('click', () => { if (!isOpen) toggle(); }); // open text stays selectable
}

// The paragraph keeps the longest run of whole words (Intl.Segmenter, so Chinese, Japanese and Thai cut between words
// too) that still leaves room for "… show more" inside `lines` lines, and cuts again when its width changes.
export function clampText(p, lines) {
  const full = p.textContent;
  const lineHeight = () => parseFloat(getComputedStyle(p).lineHeight);
  const fits = () => p.getBoundingClientRect().height <= lines * lineHeight() + 1;
  if (fits()) return;
  const segs = 'Segmenter' in Intl ? [...new Intl.Segmenter(document.documentElement.lang || undefined, { granularity: 'word' }).segment(full)].map(s => s.segment) : [...full];
  p.id ||= `clamp-${++ids}`;
  const link = document.createElement('button');
  link.type = 'button';
  link.className = 'more-link';
  link.setAttribute('aria-controls', p.id);
  let isOpen = false, anim = null, width = 0;
  const show = text => {
    link.textContent = t(isOpen ? 'more.hide' : 'more.show');
    link.setAttribute('aria-expanded', String(isOpen));
    p.replaceChildren(text, ' ', link);
    p.classList.toggle('is-clamped', !isOpen);
  };
  const cut = () => {
    let lo = 0, hi = segs.length;
    const text = n => `${segs.slice(0, n).join('').replace(/[\s,;:.、，。]+$/u, '')}…`;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; show(text(mid)); if (fits()) lo = mid; else hi = mid - 1; }
    show(text(lo));
  };
  cut();
  new ResizeObserver(() => { const w = p.clientWidth; if (w !== width) { width = w; if (!isOpen && !anim) cut(); } }).observe(p);
  document.fonts.ready.then(() => { if (!isOpen && !anim) cut(); }); // the web font changes every word's width

  const toggle = () => {
    const from = p.getBoundingClientRect().height;
    anim?.cancel();
    isOpen = !isOpen;
    if (isOpen) show(full); else cut();
    const to = p.getBoundingClientRect().height;
    if (calm()) return;
    if (!isOpen) show(full); // closing: keep the full text in view while the box shrinks
    p.style.overflow = 'hidden';
    const run = tween(p, from, to);
    const done = () => { p.style.overflow = ''; if (!isOpen) cut(); anim = null; };
    run.onfinish = done;
    run.oncancel = () => { p.style.overflow = ''; };
    anim = run;
  };
  link.addEventListener('click', e => { e.stopPropagation(); toggle(); });
  p.addEventListener('click', () => { if (!isOpen) toggle(); }); // open text stays selectable
}
