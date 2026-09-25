// The backdrop's black cat lives in the header: it sits on its page's menu button, hops to the hovered one, chases the
// pointer along the floor under the bar, answers clicks, strolls when left alone and dozes off after a minute.
import { SIT, WALK, SLEEP, CW, CH, PX, paintCat } from './cat-sprites.js';

const HOP_MS = 320, WALK_PX = 0.08, RUN_PX = 0.35, SLEEP_MS = 60000; // speeds in px per ms

export function startCat(bar, home) {
  const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
  canvas.width = CW; canvas.height = CH; canvas.className = 'hud-cat';
  canvas.setAttribute('aria-hidden', 'true');
  bar.append(canvas);
  let mode = 'sit', on = home, x = 0, y = 0, facing = 1, frame = 0, blink = false, tick = 0, raf = 0, last = 0;
  let hop = null, walkTo = 0, speed = WALK_PX, arrive = null, after = null, stepAcc = 0, chasing = false, leave = 0, back = 0;
  let activity = performance.now(), strollAt = activity + 20000 + Math.random() * 10000, clicks = [], scared = 0;

  const rectIn = el => { const b = bar.getBoundingClientRect(), r = el.getBoundingClientRect(); return { l: r.left - b.left, r: r.right - b.left, t: r.top - b.top }; };
  const onTop = a => { const r = rectIn(a); return [r.r - CW * PX - 6, r.t - CH * PX + 2]; };       // sitting on the button, right side
  const floorY = () => bar.clientHeight - CH * PX;                                                  // the lane under the bar's content
  const clampX = v => Math.max(6, Math.min(bar.clientWidth - CW * PX - 6, v));
  const paint = () => paintCat(ctx, mode === 'sleep' ? SLEEP : mode === 'sit' ? SIT[frame] : WALK[frame], blink);
  const put = () => { canvas.style.translate = `${Math.round(x / PX) * PX}px ${Math.round(y / PX) * PX}px`; canvas.style.scale = `${facing} 1`; };

  function bubble(kind) { // a heart, a "!" or a "z" floating up from the cat's head
    const b = document.createElement('span');
    b.className = 'hud-bubble ' + kind;
    const beside = y < 14;                                                      // no headroom on a button: float it by the head
    b.style.translate = `${Math.round(beside ? x + (facing > 0 ? CW * PX + 2 : -12) : x + (facing > 0 ? CW * PX - 12 : 4))}px ${Math.round(beside ? y + 2 : y - 12)}px`;
    setTimeout(() => b.remove(), 1400);                                          // animationend never comes under reduced motion
    bar.append(b);
  }
  function move(now) { // one loop for hops and walks; it stops when the cat settles
    const dt = Math.min(50, now - (last || now));
    last = now;
    if (hop) {
      const u = Math.min(1, (now - hop.t0) / HOP_MS);
      x = hop.x0 + (hop.x1 - hop.x0) * u; y = hop.y0 + (hop.y1 - hop.y0) * u - Math.sin(Math.PI * u) * hop.arc;
      if (u >= 1) { hop = null; settle(); }
    } else if (mode === 'walk') {
      const d = walkTo - x, stepPx = Math.min(Math.abs(d), speed * dt);
      if (d) facing = d < 0 ? -1 : 1;
      x += Math.sign(d) * stepPx;
      if ((stepAcc += stepPx) > (speed > WALK_PX ? 12 : 6)) { stepAcc = 0; frame ^= 1; paint(); }
      if (Math.abs(walkTo - x) < 0.5) settle();
    }
    put();
    raf = mode === 'hop' || mode === 'walk' ? requestAnimationFrame(move) : 0;
  }
  const run = () => { if (!raf) { last = 0; raf = requestAnimationFrame(move); } };
  function settle() { const done = arrive; arrive = null; mode = 'sit'; frame = 0; paint(); if (done) done(); }

  function hopTo(x1, y1, then) {
    hop = { t0: performance.now(), x0: x, y0: y, x1, y1, arc: Math.max(0, Math.min(14, y, y1)) }; // the arc never lifts it off the top of the bar
    if (x1 !== x) facing = x1 < x ? -1 : 1;
    mode = 'hop'; frame = 1; arrive = then; paint(); run();
  }
  function floorTo(x1, fast, then) { // down to the floor if needed, then walk (or run) to x1; a new call just retargets
    walkTo = clampX(x1); speed = fast ? RUN_PX : WALK_PX; after = then;
    if (mode === 'walk') { arrive = after; return; }
    if (mode === 'hop' && hop.floor) return;                                   // already dropping down: it walks on landing
    if (on || mode === 'hop') { hopTo(x, floorY(), startWalk); hop.floor = true; }
    else startWalk();
  }
  function startWalk() { on = null; mode = 'walk'; arrive = after; paint(); run(); }
  function sitOn(a) { // walk under the button if on the floor, then hop up onto it
    if (!a || (on === a && mode === 'sit')) return;
    const [x1, y1] = onTop(a);
    const up = () => hopTo(x1, y1, () => { on = a; });
    if (on || mode === 'hop') up();
    else floorTo(x1, Math.abs(x1 - x) > 300, up);                             // a long way home is a trot
  }
  const wake = () => { activity = performance.now(); if (mode === 'sleep') { mode = 'sit'; paint(); } };

  // the pointer on the bar's empty space: the cat jumps down and chases it along the floor
  bar.addEventListener('pointermove', e => {
    wake(); clearTimeout(leave);
    if (e.target.closest('a, nav, .hud-cat')) return;
    chasing = true; clearTimeout(back);
    floorTo(e.clientX - bar.getBoundingClientRect().left - CW * PX / 2, true);
  });
  bar.addEventListener('pointerleave', () => { if (chasing) leave = setTimeout(() => { chasing = false; sitOn(home); }, 900); });
  canvas.addEventListener('pointerdown', e => { // a pat: a hop and a heart; three quick ones and it bolts to the far end
    e.preventDefault(); wake(); clearTimeout(back);
    const now = performance.now();
    clicks = clicks.filter(t => now - t < 2000); clicks.push(now);
    if (clicks.length >= 3) {
      clicks = []; bubble('bang'); chasing = false; scared = now + 4500;         // the menu cannot call it back for a while
      floorTo(x < bar.clientWidth / 2 ? bar.clientWidth : 0, true, () => { back = setTimeout(() => sitOn(home), 4000); });
    } else if (mode !== 'hop') { // a walk stops for a pat, then carries on where it was going
      const resume = mode === 'walk' && arrive, fast = speed > WALK_PX, to = walkTo;
      arrive = null; mode = 'sit'; bubble('heart');
      hopTo(x, y, resume ? () => floorTo(to, fast, resume) : null);
    }
  });

  setInterval(() => { // idle life at about 6 fps: tail, blinks, strolls, dozing
    if (document.hidden || !canvas.offsetWidth) return;                           // hidden tab, or no cat on narrow bars
    const now = performance.now();
    tick++;
    if (mode === 'sleep') { if (tick % 12 === 0) bubble('zz'); return; }
    if (mode !== 'sit') return;
    const was = frame * 2 + blink;
    frame = (tick >> 3) & 1; blink = tick % 23 === 0 || tick % 37 === 0;
    if (was !== frame * 2 + blink) paint();
    if (on !== home || chasing || bar.matches(':hover')) return;
    if (now - activity > SLEEP_MS) { mode = 'sleep'; paint(); return; }
    if (now < strollAt) return;
    strollAt = now + 20000 + Math.random() * 10000;
    const group = [bar.querySelector('.hud-score'), bar.querySelector('.logo')].find(el => el?.offsetWidth); // sometimes it sits by the logo
    const spot = Math.random() < 0.4 && group ? rectIn(group).r + 8 : 20 + Math.random() * (bar.clientWidth - 80);
    floorTo(spot, false, () => { back = setTimeout(() => { if (!chasing) sitOn(home); }, 3500); });
  }, 160);

  function place() { if ((mode === 'sit' || mode === 'sleep') && on) { [x, y] = onTop(on); put(); } else if (!on && mode !== 'hop') { y = floorY(); x = clampX(x); put(); } }
  paint(); place();
  new ResizeObserver(place).observe(bar);
  return { go: a => { if (performance.now() < scared) return; chasing = false; clearTimeout(leave); clearTimeout(back); wake(); sitOn(a); } };
}
