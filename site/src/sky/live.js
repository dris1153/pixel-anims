// The live backdrop: a fixed 60 Hz step and a compose pass over the painted layers. Nothing allocates per frame.
import { W, H, N, EMPTY, PAL32, STAR, STAR_D, CLD_L, CLD_M, CLD_HI, LAMP_D, LAMP_M, LAMP_L, INK, plot, line, halo, lighten } from './palette.js';
import { SKY, LAND, CLOUDS, STARS, LAMPS, WINDOWS, CAT, buildLayers } from './paint.js';

export { W, H };
const buf = new Uint8Array(N);
const MAXP = 24, px = new Float32Array(MAXP), py = new Float32Array(MAXP), pvx = new Float32Array(MAXP), pvy = new Float32Array(MAXP), plife = new Int16Array(MAXP);
let tick = 0, seed = 20260925, built = false;
let shotLife = 0, shotX = 0, shotY = 0, shotVX = 0, shotVY = 0, nextShot = 360;
let lampLvl, winC, winT, blinkT = 0, nextBlink = 200;

function rand() { // xorshift32: the live motion's own seeded randomness
  seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5;
  return (seed >>> 0) / 4294967296;
}
export function init() {
  if (built) return;
  buildLayers();
  lampLvl = new Float32Array(LAMPS.length).fill(1);
  winC = Uint8Array.from(WINDOWS, w => w.lit ? LAMP_M : INK); winT = new Int16Array(WINDOWS.length);
  built = true;
}

export function step() {
  tick++;
  if (tick % 4 === 0) for (let k = 0; k < LAMPS.length; k++) { // a flame breathes: small steps, now and then a dip
    const r = rand();
    lampLvl[k] = r < 0.08 ? 0.55 : Math.min(1, Math.max(0.7, lampLvl[k] + (rand() - 0.5) * 0.3));
  }
  for (let k = 0; k < LAMPS.length; k++) if (rand() < 0.07) { // sparks drift up from the lamps
    for (let i = 0; i < MAXP; i++) if (plife[i] <= 0) {
      const L = LAMPS[k];
      px[i] = L.x + (rand() - 0.5) * 2; py[i] = L.y - 4; pvx[i] = (rand() - 0.5) * 0.12; pvy[i] = -0.18 - rand() * 0.16; plife[i] = 30 + rand() * 24 | 0;
      break;
    }
  }
  for (let i = 0; i < MAXP; i++) if (plife[i] > 0) { plife[i]--; px[i] += pvx[i] + Math.sin((tick + i * 17) * 0.08) * 0.05; py[i] += pvy[i]; }
  for (let k = 0; k < WINDOWS.length; k++) { // castle windows: steady, a bright flicker now and then, sometimes a light goes out
    if (winT[k] > 0 && --winT[k] === 0) winC[k] = WINDOWS[k].lit ? LAMP_M : INK;
    else if (winT[k] === 0 && tick % 30 === k) {
      const r = rand();
      if (WINDOWS[k].lit && r < 0.25) { winC[k] = LAMP_L; winT[k] = 6 + rand() * 10 | 0; }
      else if (r < 0.05) { winC[k] = WINDOWS[k].lit ? INK : LAMP_M; winT[k] = 180 + rand() * 240 | 0; }
    }
  }
  if (shotLife > 0) { shotLife--; shotX += shotVX; shotY += shotVY; }
  else if (tick >= nextShot) { // a shooting star across the upper sky every 10-15 s
    const dir = rand() < 0.5 ? -1 : 1;
    shotX = 90 + rand() * 220; shotY = 4 + rand() * 26; shotVX = 2.4 * dir; shotVY = 1.1; shotLife = 22;
    nextShot = tick + 600 + (rand() * 300 | 0);
  }
  if (blinkT > 0) blinkT--;
  else if (tick >= nextBlink) { blinkT = 8; nextBlink = tick + 180 + (rand() * 140 | 0); }
}

function compose(still) {
  buf.set(SKY);
  for (let s = 0; s < STARS.n; s++) { // each star twinkles on its own period
    const x = STARS.x[s], y = STARS.y[s], period = 200 + (s % 7) * 37, ph = (tick + s * 53) % period;
    const dim = !still && ph < 18, bright = STARS.bright[s];
    if (dim && !bright) continue;
    plot(buf, x, y, bright && !dim ? STAR : STAR_D);
    if (STARS.cross[s] && (still || ph > 40)) { plot(buf, x - 1, y, STAR_D); plot(buf, x + 1, y, STAR_D); plot(buf, x, y - 1, STAR_D); plot(buf, x, y + 1, STAR_D); }
  }
  if (shotLife > 0) { // the shooting star: a bright head and a fading tail
    const hx = Math.round(shotX), hy = Math.round(shotY), tx = Math.round(shotX - shotVX * 4), ty = Math.round(shotY - shotVY * 4);
    line(buf, tx, ty, hx, hy, shotLife > 6 ? CLD_HI : STAR_D);
    plot(buf, hx, hy, STAR);
  }
  for (let k = 0; k < CLOUDS.length; k++) { // the cloud banks drift right and wrap round behind the cliffs
    const c = CLOUDS[k], L = c.layer, off = still ? 0 : (tick * c.speed) | 0;
    for (let y = c.y0; y <= c.y1; y++) for (let x = c.x0; x <= c.x1; x++) {
      const v = L[y * W + x];
      if (v !== EMPTY) buf[y * W + (x + off) % W] = v;
    }
  }
  for (let i = 0; i < N; i++) if (LAND[i] !== EMPTY) buf[i] = LAND[i];
  for (let k = 0; k < LAMPS.length; k++) { // the lamps: a glow on the air, a light pool on the rock, a bright core
    const L = LAMPS[k], lvl = still ? 1 : lampLvl[k];
    halo(buf, L.x, L.y - 1, lvl > 0.9 ? 12 : lvl > 0.65 ? 11 : 9, CLD_L, CLD_M);
    lighten(buf, L.x - L.d * 5, L.y, lvl > 0.65 ? 7 : 5);
    plot(buf, L.x, L.y - 2, lvl > 0.8 ? LAMP_L : LAMP_M); plot(buf, L.x, L.y - 1, lvl > 0.6 ? LAMP_L : LAMP_M);
  }
  for (let i = 0; i < MAXP; i++) if (plife[i] > 0) plot(buf, Math.round(px[i]), Math.round(py[i]), plife[i] > 28 ? LAMP_L : plife[i] > 12 ? LAMP_M : LAMP_D);
  for (let k = 0; k < WINDOWS.length; k++) { const w = WINDOWS[k], c = still ? (w.lit ? LAMP_M : INK) : winC[k]; for (let j = 0; j < 3; j++) { plot(buf, w.x, w.y + j, c); plot(buf, w.x + 1, w.y + j, c); } }
  const sway = still ? 0 : ((tick / 50) | 0) % 4;                        // the cat's tail sways; it blinks every few seconds
  line(buf, CAT.x + 4, CAT.y - 1, CAT.x + (sway === 1 ? 7 : sway === 3 ? 5 : 6), CAT.y - (sway === 1 ? 4 : 5), INK);
  plot(buf, CAT.x, CAT.y - 6, !still && blinkT > 0 ? INK : LAMP_L);
}

export function draw(u32) {
  compose(false);
  for (let i = 0; i < N; i++) u32[i] = PAL32[buf[i]];
}
export function paintStill(canvas) { // the fallback picture: every moving part at rest
  init();
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d'), img = ctx.createImageData(W, H), u32 = new Uint32Array(img.data.buffer);
  compose(true);
  for (let i = 0; i < N; i++) u32[i] = PAL32[buf[i]];
  ctx.putImageData(img, 0, 0);
}
