// The backdrop's black cat on the header's menu buttons: it sits on one, blinks and sways its tail, and hops to another.
const SIT = [ // 12x10, facing right: X body, E eye; the two frames sway the tail
  ['.......X..X.', '.......XXXX.', '.......XXEX.', '.......XXXX.', '......XXXX..', '.....XXXXXX.', '....XXXXXXX.', '....XXXXXXX.', 'X...XXXXXXX.', '.XXXXXXXXXX.'],
  ['.......X..X.', '.......XXXX.', '.......XXEX.', '.......XXXX.', '......XXXX..', '.....XXXXXX.', '....XXXXXXX.', 'X...XXXXXXX.', 'X...XXXXXXX.', '.XXXXXXXXXX.'],
];
const SW = 12, SH = 10, PX = 2, CW = SW + 2, CH = SH + 1, BODY = '#05060f', RIM = '#6f7dff', EYE = '#ffe29a', HOP_MS = 320;

export function startCat(nav, home) {
  const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
  canvas.width = CW; canvas.height = CH;
  canvas.className = 'hud-cat';
  canvas.setAttribute('aria-hidden', 'true');
  nav.append(canvas);
  let at = home, x = 0, y = 0, facing = 1, tail = 0, blink = false, hop = 0, tick = 0, wander = 0;

  function paint() { // silhouette with a moonlit rim on top and sides, gold eye unless blinking
    const rows = SIT[tail];
    ctx.clearRect(0, 0, CW, CH);
    const on = (c, r) => r >= 0 && r < SH && c >= 0 && c < SW && rows[r][c] !== '.';
    for (let r = -1; r < SH; r++) for (let c = -1; c <= SW; c++) {
      if (!on(c, r) && (on(c, r + 1) || on(c - 1, r) || on(c + 1, r))) { ctx.fillStyle = RIM; ctx.fillRect(c + 1, r + 1, 1, 1); }
    }
    for (let r = 0; r < SH; r++) for (let c = 0; c < SW; c++) if (on(c, r)) {
      ctx.fillStyle = rows[r][c] === 'E' && !blink ? EYE : BODY;
      ctx.fillRect(c + 1, r + 1, 1, 1);
    }
  }
  const spot = a => [a.offsetLeft + a.offsetWidth - CW * PX - 6, a.offsetTop - CH * PX + 2]; // on the button's top edge, right side
  const put = () => { canvas.style.translate = `${Math.round(x / PX) * PX}px ${Math.round(y / PX) * PX}px`; canvas.style.scale = `${facing} 1`; };
  function place() { [x, y] = spot(at); put(); }

  function go(a) {
    if (!a || a === at) return;
    const [x0, y0] = [x, y], [x1, y1] = spot(a), t0 = performance.now();
    at = a; facing = x1 < x0 ? -1 : 1; wander = 0;
    cancelAnimationFrame(hop);
    const fly = now => { // an arc, snapped to the sprite's pixel grid
      const u = Math.min(1, (now - t0) / HOP_MS);
      x = x0 + (x1 - x0) * u; y = y0 + (y1 - y0) * u - Math.sin(Math.PI * u) * 14;
      put();
      if (u < 1) hop = requestAnimationFrame(fly);
    };
    hop = requestAnimationFrame(fly);
  }

  setInterval(() => { // idle life at about 6 fps: a tail sway every second, a blink every few seconds, a stroll now and then
    if (document.hidden) return;
    tick++;
    const was = tail * 2 + blink;
    tail = (tick >> 3) & 1;
    blink = tick % 23 === 0 || tick % 37 === 0;
    if (was !== tail * 2 + blink) paint();
    if (at === home && ++wander > 6 * 25 && !nav.matches(':hover')) {
      const others = [...nav.querySelectorAll('a')].filter(a => a !== home), dest = others[Math.floor(Math.random() * others.length)];
      go(dest);
      setTimeout(() => { if (at === dest && !nav.matches(':hover')) go(home); }, 3000); // unless someone sent it elsewhere
    }
  }, 160);

  paint(); place();
  new ResizeObserver(place).observe(nav);
  return { go };
}
