// Pixel icons for the preview controls: 8×8 cells drawn as crisp rects in currentColor, shown at 2× (16px).
const CELLS = {
  play: [[1, 0, 2, 8], [3, 1, 1, 6], [4, 2, 1, 4], [5, 3, 1, 2]],
  pause: [[1, 0, 2, 8], [5, 0, 2, 8]],
  prev: [[1, 0, 2, 8], [4, 3, 1, 2], [5, 2, 1, 4], [6, 1, 1, 6], [7, 0, 1, 8]],
  next: [[0, 0, 1, 8], [1, 1, 1, 6], [2, 2, 1, 4], [3, 3, 1, 2], [5, 0, 2, 8]],
};
const NS = 'http://www.w3.org/2000/svg';

export function icon(name) {
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 8 8');
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '16');
  svg.setAttribute('shape-rendering', 'crispEdges');
  svg.setAttribute('aria-hidden', 'true');
  for (const [x, y, w, h] of CELLS[name]) {
    const r = document.createElementNS(NS, 'rect');
    r.setAttribute('x', x); r.setAttribute('y', y); r.setAttribute('width', w); r.setAttribute('height', h);
    r.setAttribute('fill', 'currentColor');
    svg.append(r);
  }
  return svg;
}
