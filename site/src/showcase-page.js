import { SHOWCASES } from './showcases.js';
import { autoplayInView, tile } from './cards.js';

const tiles = document.getElementById('showcase-tiles');
tiles.append(...SHOWCASES.map(tile));
autoplayInView(tiles);
