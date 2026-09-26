// A long block that rests on its first line ("…") and opens to its full height, from a click on the text or on the
// toggle under it. The height tweens with the transitions.dev resize timing; under reduced motion it jumps.
import './collapse.css';
import { t } from './i18n/i18n.js';
import { tokenMs } from './tokens.js';

const calm = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
let ids = 0;

export function collapsible(body) {
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
    const run = body.animate({ height: [`${from}px`, `${to}px`] },
      { duration: tokenMs('--duration-fast', 250), easing: getComputedStyle(document.documentElement).getPropertyValue('--ease-smooth-out').trim() || 'ease-out' });
    run.onfinish = () => { if (!isOpen) body.classList.add('is-clamped'); anim = null; };
    run.oncancel = () => { if (!isOpen) body.classList.add('is-clamped'); };
    anim = run;
  };
  button.addEventListener('click', toggle);
  body.addEventListener('click', () => { if (!isOpen) toggle(); }); // open text stays selectable
}
