// transitions.dev "card hover tilt", mouse only: on touch, touch-action:none would stop the tile grid from scrolling.
const enabled = matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !matchMedia('(prefers-reduced-motion: reduce)').matches;
const MAX = 10; // peak tilt in degrees at the card edges

// Track the pointer on the flat hit area, never on the card that rotates, or its edges slip out from under the cursor.
export function addTilt(hit, card) {
  if (!enabled) return;
  hit.classList.add('has-tilt');
  const glare = document.createElement('div');
  glare.className = 'tile-glare';
  card.append(glare);
  hit.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const r = hit.getBoundingClientRect();
    const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    hit.classList.add('is-hover');
    card.classList.add('is-tilting');
    card.style.setProperty('--tilt-ry', `${((px - 0.5) * MAX).toFixed(2)}deg`);
    card.style.setProperty('--tilt-rx', `${((0.5 - py) * MAX).toFixed(2)}deg`);
    card.style.setProperty('--tilt-gx', `${(px * 100).toFixed(1)}%`);
    card.style.setProperty('--tilt-gy', `${(py * 100).toFixed(1)}%`);
  });
  const reset = () => {
    hit.classList.remove('is-hover');
    card.classList.remove('is-tilting');
    card.style.setProperty('--tilt-rx', '0deg');
    card.style.setProperty('--tilt-ry', '0deg');
  };
  hit.addEventListener('pointerleave', reset);
  addEventListener('pagehide', reset); // a Back navigation restores the page from bfcache mid-hover otherwise
}
