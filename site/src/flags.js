// Country flags are the pixel-flags SVGs in public/flags/ (16×12, MIT). "other" is a pixel globe on the same grid and palette.
const GLOBE = {
  b: '#3273d3', g: '#2b9f5a', rows: [
    '......bbbb......', '....bbggbbbb....', '...bgggggbbbb...', '...bbgggbbbgg...',
    '..bbbggbbbgggb..', '..bbbbgbbggggb..', '..bbbbbbbbgggb..', '..bbbbbbbbbggb..',
    '...bbbbbbbbgb...', '...bbbgbbbbbb...', '....bbggbbbb....', '......bbbb......',
  ],
};
const NS = 'http://www.w3.org/2000/svg';

// Decorative: callers pair it with the country's name.
export function flag(code) {
  if (code !== 'other') {
    const img = document.createElement('img');
    img.className = 'flag';
    img.src = `/flags/${code}.svg`;
    img.width = 16; img.height = 12;
    img.alt = '';
    return img;
  }
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 16 12');
  svg.setAttribute('class', 'flag flag-globe');
  svg.setAttribute('aria-hidden', 'true');
  GLOBE.rows.forEach((row, y) => {
    for (let x = 0; x < 16;) { // one rect per run of the same colour
      let end = x + 1;
      while (end < 16 && row[end] === row[x]) end++;
      if (row[x] !== '.') {
        const r = document.createElementNS(NS, 'rect');
        r.setAttribute('x', x); r.setAttribute('y', y); r.setAttribute('width', end - x); r.setAttribute('height', 1);
        r.setAttribute('fill', GLOBE[row[x]]);
        svg.append(r);
      }
      x = end;
    }
  });
  return svg;
}
