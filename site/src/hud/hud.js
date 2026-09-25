// The header HUD: an arcade score board, a menu cursor that follows the pointer and keyboard focus, and the cat.
import './hud.css';
import { SHOWCASES, countryOf } from '../showcases.js';
import { startCat } from './cat.js';

const bar = document.querySelector('.bar'), nav = bar?.querySelector('nav');
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (bar && nav) {
  const links = [...nav.querySelectorAll('a')];
  const home = nav.querySelector('[aria-current="page"]') // else the section this page sits in (the detail page is under Showcase)
    ?? links.filter(a => a.origin === location.origin && a.pathname !== '/' && location.pathname.startsWith(a.pathname))
      .sort((a, b) => b.pathname.length - a.pathname.length)[0] ?? links[0];
  scoreBoard();
  const cat = !calm && matchMedia('(hover: hover) and (pointer: fine)').matches ? startCat(bar, home) : null;
  menuCursor(home, a => cat?.go(a), (cx, cy) => cat?.hits(cx, cy));
}

function scoreBoard() { // SHOWCASES 074 ★ COUNTRIES 031, counting up like an arcade score
  const counts = [SHOWCASES.length, new Set(SHOWCASES.map(countryOf).filter(c => c !== 'other')).size];
  const el = document.createElement('p');
  el.className = 'hud-score';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = 'Showcases <b>000</b><i></i>Countries <b>000</b>';
  bar.insertBefore(el, nav);
  const digits = el.querySelectorAll('b'), pad = n => String(n).padStart(3, '0');
  if (calm) { digits.forEach((b, k) => { b.textContent = pad(counts[k]); }); return; }
  const t0 = performance.now();
  const count = now => {
    const u = Math.min(1, (now - t0) / 800), steps = Math.floor(u * 16) / 16;   // 16 visible ticks, like a score tallying
    digits.forEach((b, k) => { b.textContent = pad(Math.round(counts[k] * steps)); });
    if (u < 1) requestAnimationFrame(count);
  };
  requestAnimationFrame(count);
}

function menuCursor(home, onTarget, onCat) { // one cursor that steps to the hovered or focused link and back home
  const cur = document.createElement('span');
  cur.className = 'hud-cursor';
  cur.setAttribute('aria-hidden', 'true');
  nav.append(cur);
  nav.classList.add('has-cursor');
  let target = home;
  const put = () => { cur.style.translate = `${target.offsetLeft}px ${target.offsetTop + (target.offsetHeight >> 1) - 5}px`; };
  const to = a => { if (!a) return; if (a !== target) { target = a; put(); } onTarget(a); }; // the cat may still be off on a stroll
  nav.addEventListener('pointerover', e => to(e.target.closest('a')));
  const rest = () => { const f = document.activeElement; to(nav.contains(f) && f.matches(':focus-visible') ? f : home); };
  nav.addEventListener('pointerleave', e => { if (!onCat(e.clientX, e.clientY)) rest(); }); // reaching up for the cat keeps it there
  bar.addEventListener('pointerleave', rest);
  nav.addEventListener('focusin', e => to(e.target.closest('a')));
  nav.addEventListener('focusout', e => { if (!nav.contains(e.relatedTarget)) to(home); });
  nav.addEventListener('pointerdown', e => {
    if (!e.target.closest('a')) return;
    cur.classList.remove('blip'); void cur.offsetWidth; cur.classList.add('blip');   // restart the flash on every press
  });
  put();
  cur.getBoundingClientRect(); // settle the first position before transitions apply
  cur.classList.add('ready');
  new ResizeObserver(put).observe(nav); // fonts, wrapping and scrollbars all move the links
}
