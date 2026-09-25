import './sky/backdrop.js';
import { SHOWCASES, animUrl, detailUrl, stillOf } from './showcases.js';
import { setupCopy } from './copy.js';
import { addPlayToggle, autoplayInView, calm, featureCard, fitFrame, tile } from './cards.js';

// Repo slug (dris1153/pixel-anims) is written literally in the HTML, README and .claude-plugin/*.json.
setupTabs();
setupCopy();
setupHero();
renderShowcase();
setupReveal();
setupJournal();

// The hero opens on the engine reference; Shuffle swaps in any other showcase.
function setupHero() {
  const frame = document.querySelector('.screen .frame');
  const iframe = frame.querySelector('iframe');
  const caption = document.querySelector('.screen figcaption');
  addPlayToggle(frame, iframe, iframe.getAttribute('src'), frame.dataset.still, 'the wizard animation', !calm);
  fitFrame(frame, [128, 96]);
  let current = SHOWCASES.findIndex(s => s.slug === 'wizard-spellcaster');
  const shuffle = document.createElement('button');
  shuffle.type = 'button';
  shuffle.className = 'play shuffle';
  shuffle.textContent = 'Shuffle';
  shuffle.setAttribute('aria-label', 'Show a random showcase');
  shuffle.addEventListener('click', () => {
    let i = current;
    while (i === current) i = Math.floor(Math.random() * SHOWCASES.length);
    current = i;
    const s = SHOWCASES[i];
    frame.querySelector('.play:not(.shuffle)').remove();
    frame.style.aspectRatio = `${s.res[0]} / ${s.res[1]}`;
    iframe.title = `${s.title}: live pixel art animation`;
    iframe.src = calm ? stillOf(animUrl(s), s.still) : animUrl(s);
    addPlayToggle(frame, iframe, animUrl(s), s.still, s.title, !calm);
    fitFrame(frame, s.res);
    const name = document.createElement('a');
    name.href = detailUrl(s);
    name.textContent = s.title;
    caption.replaceChildren(caption.querySelector('.live'), ` ${s.res[0]}×${s.res[1]} · ${s.loop} s loop · `, name);
  });
  frame.append(shuffle);
}

// Landing keeps it short: the featured entry, the three newest others as tiles, the rest behind "See all".
function renderShowcase() {
  const feature = SHOWCASES.find(s => s.featured) ?? SHOWCASES[0];
  document.getElementById('showcase-feature').append(featureCard(feature));
  const tiles = document.getElementById('showcase-tiles');
  tiles.append(...SHOWCASES.filter(s => s !== feature).slice(0, 3).map(tile));
  autoplayInView(tiles);
  document.getElementById('showcase-all').textContent = `See all ${SHOWCASES.length} showcases`;
}

function setupTabs() {
  const tabs = [...document.querySelectorAll('#install [role="tab"]')];
  const pill = document.querySelector('#install .tabs-pill');
  pill.parentElement.classList.add('has-pill');
  // The pill tweens between measured tab boxes; first paint, font load and resize snap it without a transition.
  const movePill = (tab, animate) => {
    if (!animate) pill.style.transition = 'none';
    pill.style.transform = `translate(${tab.offsetLeft}px, ${tab.offsetTop}px)`;
    pill.style.width = `${tab.offsetWidth}px`;
    pill.style.height = `${tab.offsetHeight}px`;
    if (!animate) {
      void pill.offsetWidth;
      pill.style.transition = '';
    }
  };
  const select = (tab, animate = true) => {
    for (const t of tabs) {
      const on = t === tab;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (on && animate && panel.hidden) { // replay the enter animation on the incoming panel only
        panel.classList.remove('is-entering');
        void panel.offsetWidth;
        panel.classList.add('is-entering');
      }
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      panel.hidden = !on;
    }
    movePill(tab, animate);
  };
  const active = () => tabs.find(t => t.getAttribute('aria-selected') === 'true');
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
  select(tabs[0], false); // panels ship visible so the page reads without JS
  addEventListener('resize', () => movePill(active(), false));
  document.fonts?.ready.then(() => movePill(active(), false)); // Silkscreen changes tab widths once loaded
}

// Journal tabs mark whichever section crosses the middle of the viewport.
function setupJournal() {
  if (!('IntersectionObserver' in window)) return;
  const links = new Map([...document.querySelectorAll('.journal a')].map(a => [a.hash.slice(1), a]));
  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      for (const a of links.values()) a.removeAttribute('aria-current');
      links.get(target.id).setAttribute('aria-current', 'location');
    }
  }, { rootMargin: '-45% 0px -54% 0px' });
  for (const id of links.keys()) observer.observe(document.getElementById(id));
}

// Section headings + ledes rise in the first time they scroll into view.
function setupReveal() {
  if (calm || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('reveal');
  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      target.classList.add('is-shown');
      observer.unobserve(target);
    }
  }, { rootMargin: '0px 0px -10% 0px' });
  for (const section of document.querySelectorAll('main > section:not(.hero)')) observer.observe(section);
}
