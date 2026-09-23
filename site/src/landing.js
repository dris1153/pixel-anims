import { SHOWCASES } from './showcases.js';
import { setupCopy } from './copy.js';
import { addPlayToggle, autoplayInView, calm, featureCard, tile } from './cards.js';

// Repo slug (dris1153/pixel-anims) is written literally in the HTML, README and .claude-plugin/*.json.
setupTabs();
setupCopy();
setupHero();
renderShowcase();

function setupHero() {
  const frame = document.querySelector('.screen .frame');
  const iframe = frame.querySelector('iframe');
  addPlayToggle(frame, iframe, iframe.getAttribute('src'), frame.dataset.still, 'the wizard animation', !calm);
}

// Landing keeps it short: the first entry as the hero, the next three as tiles, the rest behind "See all".
function renderShowcase() {
  document.getElementById('showcase-feature').append(featureCard(SHOWCASES[0]));
  const tiles = document.getElementById('showcase-tiles');
  tiles.append(...SHOWCASES.slice(1, 4).map(tile));
  autoplayInView(tiles);
  document.getElementById('showcase-all').textContent = `See all ${SHOWCASES.length} showcases`;
}

function setupTabs() {
  const tabs = [...document.querySelectorAll('#install [role="tab"]')];
  const select = tab => {
    for (const t of tabs) {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    }
  };
  const keys = { ArrowRight: i => i + 1, ArrowLeft: i => i - 1, Home: () => 0, End: () => tabs.length - 1 };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', e => {
      if (!keys[e.key]) return;
      e.preventDefault();
      const next = tabs[(keys[e.key](i) + tabs.length) % tabs.length];
      select(next);
      next.focus();
    });
  });
  select(tabs[0]); // panels ship visible so the page reads without JS
}
