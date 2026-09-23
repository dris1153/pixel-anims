'use strict';
// Repo slug (dris1153/pixel-anims) is written literally in the HTML, README and .claude-plugin/*.json.
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

setupTabs();
document.addEventListener('click', onCopyClick);
setupHero();
renderShowcases();

// Paused frames load the showcase in its #t=N seek mode, which renders one still frame and stops.
function addPlayToggle(frame, iframe, file, still, title, playing) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'play';
  const set = (on, load = true) => {
    if (load) iframe.src = on ? file : `${file}?still#t=${still}`;
    button.textContent = on ? 'Pause' : 'Play';
    button.setAttribute('aria-label', `${on ? 'Pause' : 'Play'} ${title}`);
  };
  button.addEventListener('click', () => set(button.textContent === 'Play'));
  frame.append(button);
  set(playing, !(playing && iframe.getAttribute('src')));
}

function setupHero() {
  const frame = document.querySelector('.screen .frame');
  const iframe = frame.querySelector('iframe');
  addPlayToggle(frame, iframe, iframe.getAttribute('src'), frame.dataset.still, 'the wizard animation', !calm);
}

function renderShowcases() {
  const gallery = document.getElementById('gallery');
  const template = document.getElementById('card');
  for (const s of window.SHOWCASES || []) {
    try {
      const card = template.content.firstElementChild.cloneNode(true);
      const frame = card.querySelector('.frame');
      frame.style.aspectRatio = `${s.res[0]} / ${s.res[1]}`;
      const iframe = frame.querySelector('iframe');
      iframe.title = `${s.title}: live pixel art animation`;
      card.querySelector('.kind').textContent = s.kind;
      card.querySelector('h3').textContent = s.title;
      card.querySelector('.meta').textContent = `${s.res[0]}×${s.res[1]} · ${s.loop} s loop · ${s.states.join(' → ')}`;
      card.querySelector('.prompt p').textContent = s.prompt;
      const note = card.querySelector('.note');
      if (s.note) note.textContent = s.note;
      else note.remove();
      card.querySelector('.open').href = s.file;
      if (s.ref) card.classList.add('card-ref');
      addPlayToggle(frame, iframe, s.file, s.still ?? 60, s.title, !calm);
      gallery.append(card);
    } catch (err) {
      console.error('Skipped bad showcase entry', s, err); // one broken entry must not take the page down
    }
  }
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

async function onCopyClick(e) {
  const button = e.target.closest('.copy');
  const source = button?.closest('.cmd, .prompt')?.querySelector('code, p');
  if (!source) return;
  const ok = await copyText(source.textContent.trim());
  if (!ok) getSelection().selectAllChildren(source); // let the user copy by hand
  button.dataset.label ??= button.textContent;
  button.textContent = ok ? 'Copied' : 'Selected';
  document.getElementById('copy-status').textContent = ok ? 'Copied to clipboard' : 'Copy failed, text selected';
  clearTimeout(button.resetTimer);
  button.resetTimer = setTimeout(() => { button.textContent = button.dataset.label; }, 1400);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API is unavailable on file:// and in some embeds; fall back to a hidden textarea.
    const prev = document.activeElement;
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.cssText = 'position:fixed;opacity:0';
    document.body.append(area);
    area.select();
    try {
      return document.execCommand('copy');
    } catch {
      return false;
    } finally {
      area.remove();
      prev?.focus();
    }
  }
}
