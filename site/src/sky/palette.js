// The backdrop's palette and pixel helpers: an indexed 400x180 image, drawn the pixel-anims way.
export const W = 400, H = 180, N = W * H, EMPTY = 255;

// Index 0 is the darkest ink. BG is the site's page color, so the art fades into the page.
export const PAL = [
  '#05060f', '#070a1c',
  '#0a0f2e', '#0f1640', '#151f55', '#1d2a6c',
  '#182056', '#252f74', '#37439a', '#6572c6',
  '#8a88cc', '#b9b8ee', '#eceaff',
  '#fff4c8', '#6d76c0',
  '#121942', '#0c1233',
  '#0a0e26', '#161e4a', '#263070', '#4452a2',
  '#0a1a2c', '#12304a', '#245a70',
  '#a8642a', '#f2b84b', '#ffe29a',
  '#3a2a3a',
];
export const INK = 0, BG = 1, SKY_A = 2, SKY_B = 3, SKY_C = 4, SKY_D = 5, CLD_D = 6, CLD_M = 7, CLD_L = 8, CLD_HI = 9,
  MOON_D = 10, MOON_M = 11, MOON_L = 12, STAR = 13, STAR_D = 14, HILL_F = 15, HILL_N = 16,
  ROCK_D = 17, ROCK_M = 18, ROCK_L = 19, ROCK_HI = 20, TREE_D = 21, TREE_M = 22, TREE_L = 23,
  LAMP_D = 24, LAMP_M = 25, LAMP_L = 26, POST = 27;
// One step brighter per ramp: lamp light pools and flicker climb these.
export const LIGHTEN = Uint8Array.of(BG, SKY_A, SKY_B, SKY_C, SKY_D, CLD_L, CLD_M, CLD_L, CLD_HI, MOON_D,
  MOON_M, MOON_L, MOON_L, STAR, CLD_HI, ROCK_M, HILL_F, ROCK_M, ROCK_L, ROCK_HI, CLD_HI,
  TREE_M, TREE_L, TREE_L, LAMP_M, LAMP_L, LAMP_L, ROCK_L);
export const AIR = new Uint8Array(256); // colors a halo may tint: the sky and the cloud shadows
AIR[BG] = AIR[SKY_A] = AIR[SKY_B] = AIR[SKY_C] = AIR[SKY_D] = AIR[CLD_D] = AIR[CLD_M] = 1;
export const PAL32 = Uint32Array.from(PAL, hex => { // little-endian RGBA for an ImageData view
  const v = parseInt(hex.slice(1), 16);
  return 0xff000000 | (v & 0xff) << 16 | (v & 0xff00) | (v >> 16);
});
export const BAYER = Uint8Array.of(0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5); // 4x4 ordered dither, 0-15

export const dith = (x, y, v) => v * 16 > BAYER[(y & 3) * 4 + (x & 3)];
export function plot(t, x, y, c) {
  if (x >= 0 && x < W && y >= 0 && y < H) t[y * W + x] = c;
}
export function hline(t, x0, x1, y, c) {
  for (let x = x0; x <= x1; x++) plot(t, x, y, c);
}
export function rect(t, x, y, w, h, c) {
  for (let j = 0; j < h; j++) hline(t, x, x + w - 1, y + j, c);
}
export function line(t, x0, y0, x1, y1, c) {
  const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) || 1;
  for (let s = 0; s <= n; s++) plot(t, Math.round(x0 + (x1 - x0) * s / n), Math.round(y0 + (y1 - y0) * s / n), c);
}
export function disc(t, cx, cy, r, c) {
  const k = Math.ceil(r);
  for (let dy = -k; dy <= k; dy++) for (let dx = -k; dx <= k; dx++) if (dx * dx + dy * dy <= r * r) plot(t, cx + dx, cy + dy, c);
}
export function halo(t, cx, cy, r, core, mid) { // a dithered glow that tints only AIR colors
  r = Math.round(r);
  const r1 = r * r * 0.09, r2 = r * r * 0.36;
  for (let dy = -r; dy <= r; dy++) {
    const y = cy + dy;
    if (y < 0 || y >= H) continue;
    for (let dx = -r; dx <= r; dx++) {
      const x = cx + dx, d2 = dx * dx + dy * dy, i = y * W + x;
      if (x < 0 || x >= W || d2 > r * r || !AIR[t[i]]) continue;
      if (d2 <= r1) t[i] = core;
      else if (d2 <= r2 || (x + y) & 1) t[i] = mid;
    }
  }
}
export function lighten(t, cx, cy, r) { // a light pool on any surface: two LIGHTEN steps at the core, one around it
  r = Math.round(r);
  const r1 = r * r * 0.16, r2 = r * r * 0.5;
  for (let dy = -r; dy <= r; dy++) {
    const y = cy + dy;
    if (y < 0 || y >= H) continue;
    for (let dx = -r; dx <= r; dx++) {
      const x = cx + dx, d2 = dx * dx + dy * dy, i = y * W + x;
      if (x < 0 || x >= W || d2 > r * r) continue;
      if (d2 <= r1) t[i] = LIGHTEN[LIGHTEN[t[i]]];
      else if (d2 <= r2 || (x + y) & 1) t[i] = LIGHTEN[t[i]];
    }
  }
}
