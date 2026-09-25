// Runs the night valley live in .sky: a 400x180 canvas over the still PNG, CSS-scaled like it, drawn at up to 30 fps.
// Weak devices keep the still: some are ruled out up front, the rest by a probe of the first seconds and a watchdog after.
// ?sky=live or ?sky=static forces a mode; .sky[data-mode] says which one ran and why.
import { W, H, init, step, draw } from './live.js';

const KEY = 'pixel-anims:sky-static-until', WEEK = 7 * 864e5, STEP_MS = 1000 / 60, DRAW_MS = 32;
const SESSION = 1, LONG = 2;                                             // how long a fallback is remembered
const WARM = 10, PROBE = 120, PROBE_MS = 2500, MAX_MEDIAN_MS = 25, MAX_COST_MS = 4, WATCH_MS = 3000, MIN_FPS = 30;
const sky = document.querySelector('.sky');
const force = new URLSearchParams(location.search).get('sky');

function staticReason() {
  if (force === 'static') return 'forced';
  if (force === 'live') return '';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return 'motion';
  if (navigator.connection?.saveData) return 'data';
  if ((navigator.hardwareConcurrency || 8) <= 2) return 'cpu';
  if ((navigator.deviceMemory || 8) <= 2) return 'memory';
  try {
    if (+localStorage.getItem(KEY) > Date.now()) return 'weak';
    if (sessionStorage.getItem(KEY)) return 'slow';
  } catch { /* storage blocked: probe every page */ }
  return '';
}

if (sky) {
  const why = staticReason();
  if (why) sky.dataset.mode = 'static-' + why;
  else run();
}

function run() {
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) { sky.dataset.mode = 'static-canvas'; return; }
  const img = ctx.createImageData(W, H), u32 = new Uint32Array(img.data.buffer);
  const deltas = new Float32Array(PROBE);
  let raf = 0, last = 0, lastDraw = -DRAW_MS, acc = 0, frames = 0, probed = 0, probeStart = 0, done = false, costSum = 0, draws = 0, winStart = 0, winFrames = 0;

  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (!frames) init();                                               // paint the layers on the first frame, not during page load
    const resumed = !last, dt = resumed ? STEP_MS : now - last;
    last = now;
    if (resumed) { winStart = now; winFrames = 0; }                    // back from a pause or a hidden tab: the gap is no slow frame
    const t0 = performance.now();
    acc = Math.min(acc + dt, 250);                                     // a long stall skips ahead instead of catching up
    while (acc >= STEP_MS) { acc -= STEP_MS; step(); }
    if (now - lastDraw >= DRAW_MS) {
      lastDraw = now;
      draw(u32);
      ctx.putImageData(img, 0, 0);
      if (!canvas.isConnected) { sky.append(canvas); sky.dataset.mode = done ? 'live' : 'probe'; }
      if (frames >= WARM && !done) { costSum += performance.now() - t0; draws++; }
    }
    measure(now, dt, resumed);
  }

  function measure(now, dt, resumed) {
    if (++frames <= WARM) { probeStart = now; return; }
    if (resumed) return;
    if (!done) { // 120 frames or 2.5 s, whichever comes first, so a slow device is not kept busy for long
      deltas[probed++] = dt;
      if (probed < 20 || (probed < PROBE && now - probeStart < PROBE_MS)) return;
      done = true;
      const d = deltas.subarray(0, probed).sort(), median = d[probed >> 1], cost = costSum / Math.max(1, draws);
      sky.dataset.probe = median.toFixed(1) + ' ms/frame, ' + cost.toFixed(2) + ' ms/draw';
      if (force !== 'live') {
        if (cost > MAX_COST_MS) return fallback('weak', LONG);         // the backdrop itself is too heavy here
        if (median > MAX_MEDIAN_MS) return fallback('slow', SESSION);  // the page runs slow: drop the backdrop for this visit
      }
      sky.dataset.mode = 'live';
      winStart = now; winFrames = 0;
      return;
    }
    winFrames++;
    if (now - winStart < WATCH_MS) return;
    if (force !== 'live' && winFrames * 1000 / (now - winStart) < MIN_FPS) return fallback('slow', SESSION);
    winStart = now; winFrames = 0;
  }

  function fallback(why, keep) {
    cancelAnimationFrame(raf);
    observer?.disconnect();
    canvas.remove();
    sky.dataset.mode = 'static-' + why;
    try {
      if (keep === LONG) localStorage.setItem(KEY, String(Date.now() + WEEK));
      else if (keep === SESSION) sessionStorage.setItem(KEY, '1');
    } catch { /* storage blocked */ }
  }

  // Only run while the backdrop is on screen; requestAnimationFrame already stops in hidden tabs.
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    cancelAnimationFrame(raf);
    last = 0;
    if (entries[entries.length - 1].isIntersecting) raf = requestAnimationFrame(frame);
  }) : null;
  if (observer) observer.observe(sky);
  else raf = requestAnimationFrame(frame);
  document.addEventListener('visibilitychange', () => { last = 0; });
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener?.('change', e => { if (e.matches) fallback('motion', 0); });
}
