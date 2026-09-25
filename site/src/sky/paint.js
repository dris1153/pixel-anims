// Paints the night valley once into layers: the sky, six drifting cloud banks, the land in front, and the
// positions of everything that moves (stars, lamps, castle windows, the cat).
import {
  W, H, N, EMPTY, BG, SKY_A, SKY_B, SKY_C, SKY_D, CLD_D, CLD_M, CLD_L, CLD_HI, MOON_D, MOON_M, MOON_L, HILL_F, HILL_N,
  ROCK_D, ROCK_M, ROCK_L, ROCK_HI, TREE_D, TREE_M, TREE_L, LAMP_D, LAMP_M, POST, INK, dith, plot, hline, rect, line, disc,
} from './palette.js';

export const SKY = new Uint8Array(N), LAND = new Uint8Array(N);
export const CLOUDS = [];                                             // { layer, x0, x1, y0, y1, speed }
export const STARS = { n: 0, x: new Int16Array(90), y: new Int16Array(90), bright: new Uint8Array(90), cross: new Uint8Array(90) };
export const LAMPS = [], WINDOWS = [], CAT = { x: 0, y: 0 };

export function buildLayers() {
  const seed = Uint32Array.of(20260925);
  const rnd = () => { let x = seed[0]; x ^= x << 13; x ^= x >>> 17; x ^= x << 5; seed[0] = x; return seed[0] / 4294967296; };
  const STOPS = [0, 34, 70, 104, 999], SKYC = [SKY_A, SKY_B, SKY_C, SKY_D];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { // bands that dither into each other over 8 rows
    let b = 0;
    while (y >= STOPS[b + 1]) b++;
    const into = b < 3 ? (y - (STOPS[b + 1] - 8)) / 8 : 0;
    SKY[y * W + x] = into > 0 && dith(x, y, into) ? SKYC[b + 1] : SKYC[b];
  }
  for (let k = 0; k < 90; k++) { // stars, most faint, a few bright with a cross; drawn live so they can twinkle
    const x = rnd() * W | 0, y = rnd() * 108 | 0;
    if (Math.hypot(x - 318, y - 26) < 24) continue;
    const bright = rnd() < 0.18, s = STARS.n++;
    STARS.x[s] = x; STARS.y[s] = y; STARS.bright[s] = bright ? 1 : 0;
    STARS.cross[s] = bright && rnd() < 0.4 ? 1 : 0;
  }
  // the moon, with a dithered halo on the open sky
  for (let dy = -22; dy <= 22; dy++) for (let dx = -22; dx <= 22; dx++) {
    const d = Math.hypot(dx, dy), x = 318 + dx, y = 26 + dy;
    if (d > 13 && d < 21 && dith(x, y, (21 - d) / 10)) plot(SKY, x, y, d < 16 ? CLD_L : CLD_M);
  }
  for (let dy = -13; dy <= 13; dy++) for (let dx = -13; dx <= 13; dx++) {
    const d = Math.hypot(dx, dy);
    if (d > 13) continue;
    const lit = (-dx * 0.7 - dy * 0.7) / 13;
    plot(SKY, 318 + dx, 26 + dy, lit > 0.35 ? MOON_L : lit < -0.45 ? MOON_D : MOON_M);
  }
  for (let k = 0; k < 7; k++) { const cx = 318 + Math.round(Math.cos(k * 2.3) * (4 + k)), cy = 26 + Math.round(Math.sin(k * 2.3) * (3 + k * 0.8)); disc(SKY, cx, cy, k % 3 === 0 ? 2 : 1, MOON_D); }
  // cloud banks, each on its own layer: high ones drift faster than the low ones by the mountains
  const bank = (x0, x1, base, hgt, ph, lit, speed) => {
    const layer = new Uint8Array(N).fill(EMPTY);
    let y0 = base;
    for (let x = x0; x <= x1; x++) {
      const u = (x - x0) / (x1 - x0), taper = Math.sin(Math.PI * u) ** 0.6;
      const bump = 0.35 + 0.65 * Math.abs(Math.sin(x * 0.11 + ph)) ** 0.6 * (0.7 + 0.3 * Math.sin(x * 0.041 + ph * 3));
      const top = Math.round(base - hgt * taper * bump), bot = base + Math.round(2 * taper);
      y0 = Math.min(y0, top);
      for (let y = top; y <= bot; y++) plot(layer, x, y, y === top ? (lit ? CLD_HI : CLD_L) : y <= top + 1 ? CLD_L : y >= bot - 1 ? CLD_D : (x * 7 + y * 13) % 23 === 0 ? CLD_L : CLD_M);
    }
    CLOUDS.push({ layer, x0, x1, y0, y1: base + 2, speed });
  };
  bank(60, 180, 34, 6, 1, 0, 1 / 40);
  bank(250, 300, 58, 5, 2, 1, 1 / 55);
  bank(280, 395, 72, 11, 4, 1, 1 / 70);
  bank(20, 170, 92, 13, 3, 0, 1 / 90);
  bank(140, 260, 110, 7, 5, 0, 1 / 120);
  bank(200, 345, 126, 9, 6, 0, 1 / 150);
  // the land: far mountains, moonlit ridges, the near hills fading into the page
  LAND.fill(EMPTY);
  for (let x = 0; x < W; x++) {
    const far = Math.round(128 - 12 * Math.abs(Math.sin(x * 0.031)) - 6 * Math.abs(Math.sin(x * 0.087 + 1)) - 3 * Math.sin(x * 0.23));
    const near = Math.round(152 - 5 * Math.sin(x * 0.02 + 2) - 3 * Math.sin(x * 0.07));
    for (let y = far; y < H; y++) plot(LAND, x, y, y === far ? ROCK_L : y < near ? HILL_F : HILL_N);
    plot(LAND, x, near, ROCK_M);
  }
  // the left cliff: a pillar of rock with pines on top and a lamp on an arm
  const leftEdge = y => Math.round(42 + 6 * Math.sin(y * 0.07) + 3 * Math.sin(y * 0.23) + (y < 60 ? (60 - y) * 0.25 : 0));
  for (let x = 0; x < 64; x++) {
    const top = Math.round(36 + 3 * Math.sin(x * 0.4) + (x > 28 ? (x - 28) * 0.8 : 0));
    for (let y = top; y < H; y++) { const e = leftEdge(y); if (x <= e) plot(LAND, x, y, y === top ? ROCK_HI : rock(x, y, e - x)); }
  }
  pines(4, 38, 5, rnd); pines(36, 108, 2, rnd);
  lamp(leftEdge(84) + 1, 84, 1);
  // the right crag and its castle
  const rightEdge = y => Math.round(346 - 5 * Math.sin(y * 0.06) - 3 * Math.sin(y * 0.19 + 2) + (y < 70 ? (70 - y) * 0.3 : 0));
  for (let y = 56; y < H; y++) {
    const e = rightEdge(y);
    for (let x = e; x < W; x++) plot(LAND, x, y, y === 56 ? ROCK_HI : rock(x, y, x - e));
  }
  castle(352, 58);
  lamp(rightEdge(102) - 1, 102, -1);
  CAT.x = rightEdge(120) + 3; CAT.y = 120;                           // a black cat watching the valley; eyes and tail are live
  rect(LAND, CAT.x, CAT.y - 4, 4, 4, INK); rect(LAND, CAT.x - 1, CAT.y - 7, 3, 3, INK); plot(LAND, CAT.x - 1, CAT.y - 8, INK); plot(LAND, CAT.x + 1, CAT.y - 8, INK);
  pines(380, 150, 3, rnd);
  for (let y = 158; y < H; y++) for (let x = 0; x < W; x++) if (dith(x, y, (y - 157) / 16)) plot(LAND, x, y, BG);
}

function rock(x, y, d) { // weathered rock: a lit rim on the face, soft strata and cracks
  if (d <= 1) return ROCK_HI;
  if (d <= 3) return ROCK_L;
  const T = Math.PI * 2, n = Math.sin(x * 0.55 + Math.sin(y * T / 60) * 2.2) + 0.9 * Math.sin(y * T / 40 + x * 0.23) + 0.5 * Math.sin(y * T / 24 - x * 0.6);
  if (Math.abs(n - 0.35) < 0.09) return ROCK_D;
  return n > 1.25 ? ROCK_L : n < -1.1 ? ROCK_D : ROCK_M;
}
function pines(x0, base, n, rnd) { // a row of dark pines standing on a ledge
  for (let k = 0; k < n; k++) {
    const x = x0 + k * 6 + (rnd() * 3 | 0), h = 10 + (rnd() * 8 | 0);
    for (let r = 0; r < h; r++) {
      const w = Math.floor((r + 2) / 3) + (r % 3 === 0 ? 0 : 1), y = base - h + r;
      for (let dx = -w; dx <= w; dx++) plot(LAND, x + dx, y, dx === w ? TREE_L : dx > 0 ? TREE_M : TREE_D);
    }
    plot(LAND, x, base, POST); plot(LAND, x, base + 1, POST);
  }
}
function lamp(x, y, d) { // a lamp hung from an arm on the cliff; its glow and flicker are live
  const lx = x + d * 6;
  line(LAND, x, y - 6, lx, y - 6, POST); line(LAND, lx, y - 6, lx, y - 4, POST);
  rect(LAND, lx - 1, y - 3, 3, 4, LAMP_M); hline(LAND, lx - 1, lx + 1, y - 4, POST); hline(LAND, lx - 1, lx + 1, y + 1, POST);
  LAMPS.push({ x: lx, y, d });
}
function castle(x0, base) { // three towers and a wall, cone roofs; the windows are live
  rect(LAND, x0, base - 18, 44, 18, ROCK_M);
  for (let x = x0; x < x0 + 44; x += 4) rect(LAND, x, base - 20, 2, 2, ROCK_M);
  for (const [x, w, h] of [[x0, 8, 30], [x0 + 16, 10, 44], [x0 + 34, 8, 34]]) {
    rect(LAND, x, base - h, w, h, ROCK_M); line(LAND, x + w - 1, base - h, x + w - 1, base - 1, ROCK_L);
    for (let r = 0; r < w; r++) hline(LAND, x - 1 + (r >> 1), x + w - (r >> 1), base - h - 1 - r, r === 0 ? ROCK_L : ROCK_D);
    plot(LAND, x + (w >> 1), base - h - w - 1, POST); plot(LAND, x + (w >> 1) + 1, base - h - w - 1, LAMP_D);
    for (let k = 0; k < 3; k++) { const wy = base - h + 5 + k * 8; if (wy < base - 4) WINDOWS.push({ x: x + (w >> 1) - 1, y: wy, lit: (k + x) % 3 ? 1 : 0 }); }
  }
  rect(LAND, x0 + 19, base - 7, 4, 7, INK);
}
