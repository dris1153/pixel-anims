// The header cat's frames, 10x6 facing right (X body, E eye), painted with a moonlit rim at 2x on a 12x7 canvas.
export const SW = 10, SH = 6, PX = 2, CW = SW + 2, CH = SH + 1;
const BODY = '#05060f', RIM = '#6f7dff', EYE = '#ffe29a';

export const SIT = [ // the two frames sway the tail
  ['.....X.X..', '.....XEX..', '....XXXX..', 'X..XXXXX..', 'X..XXXXX..', '.XXXXXXX..'],
  ['.....X.X..', '.....XEX..', 'X...XXXX..', 'X..XXXXX..', '.X.XXXXX..', '..XXXXXX..'],
];
export const WALK = [ // tail up, legs apart then together
  ['.......X.X', 'X......XEX', '.XXXXXXXXX', '..XXXXXXX.', '..X.X..X.X', '..X.X..X.X'],
  ['.......X.X', '.X.....XEX', 'X.XXXXXXXX', '..XXXXXXX.', '...XX...XX', '...XX...XX'],
];
export const SLEEP = ['..........', '..........', '.....X.X..', '....XXXXX.', '.XXXXXXXXX', 'XXXXXXXXXX'];

export function paintCat(ctx, rows, blink) { // silhouette, a rim on the top and sides, a gold eye unless blinking
  ctx.clearRect(0, 0, CW, CH);
  const on = (c, r) => r >= 0 && r < SH && c >= 0 && c < SW && rows[r][c] !== '.';
  ctx.fillStyle = RIM;
  for (let r = -1; r < SH; r++) for (let c = -1; c <= SW; c++) {
    if (!on(c, r) && (on(c, r + 1) || on(c - 1, r) || on(c + 1, r))) ctx.fillRect(c + 1, r + 1, 1, 1);
  }
  for (let r = 0; r < SH; r++) for (let c = 0; c < SW; c++) if (on(c, r)) {
    ctx.fillStyle = rows[r][c] === 'E' && !blink ? EYE : BODY;
    ctx.fillRect(c + 1, r + 1, 1, 1);
  }
}
