// The detail page's Story panel: the showcase's legend in the reader's language (else English, else whatever exists),
// the beats of the animation (each one seeks the preview to its state), and links to the other languages.
import './story.css';
import { LANGS, lang, langUrl, t } from '../i18n/i18n.js';
import { animUrl } from '../showcases.js';
import { parseStory } from './parse.js';

const files = import.meta.glob('../stories/*/*.md', { query: '?raw', import: 'default' });
const NO_DROPCAP = new Set(['ko', 'ja', 'zh', 'th', 'hi', 'ar']); // scripts without letter case or an initial to raise
const nameOf = code => LANGS.find(l => l.code === code)?.name ?? code;

export async function mountStory(s, page, seek) {
  const box = page.querySelector('.story');
  const have = LANGS.map(l => l.code).filter(c => files[`../stories/${s.slug}/${c}.md`]);
  if (!box || !have.length) return;
  const use = have.includes(lang) ? lang : have.includes('en') ? 'en' : have[0];
  const { meta, sections } = parseStory(await files[`../stories/${s.slug}/${use}.md`]());
  if (use === lang) { // the story file may carry this language's title and note
    if (meta.title) page.querySelector('h1').textContent = meta.title;
    const note = page.querySelector('.note');
    if (meta.note && note) note.textContent = meta.note;
  }

  const node = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; };
  const head = node('h2', 'story-h', t('story.h'));
  head.id = 'story-h';
  const parts = [head];
  if (meta.origin) parts.push(node('p', 'story-origin', meta.origin));
  if (use !== lang) parts.push(node('p', 'story-fallback', t('story.fallback', { lang: nameOf(lang), shown: nameOf(use) })));
  if (have.length > 1) { // links to every language this story exists in
    const langs = node('p', 'story-langs', t('story.also') + ' ');
    for (const code of have) {
      const a = node('a', '', nameOf(code));
      a.href = langUrl(code);
      a.hreflang = a.lang = code;
      if (code === use) a.setAttribute('aria-current', 'true');
      langs.append(a);
    }
    parts.push(langs);
  }
  const body = node('div', 'story-body');
  body.lang = use;
  if (use === 'ar') body.dir = 'rtl';
  for (const sec of sections) {
    if (sec.id === 'beats') { body.append(beats(sec.items)); continue; }
    if (sec.id !== 'legend') body.append(node('h3', 'story-sub', sec.id.replace(/^\w/, c => c.toUpperCase())));
    for (const p of sec.paragraphs) body.append(node('p', '', p));
  }
  const first = body.querySelector('p');
  if (first && !NO_DROPCAP.has(use)) first.classList.add('dropcap');
  parts.push(body);
  box.replaceChildren(...parts);
  box.hidden = false;

  function beats(items) {
    const wrap = node('div', 'story-beats');
    wrap.append(node('h3', 'story-sub', t('story.beats')));
    const list = node('ol', 'beats');
    for (const { key, text } of items) {
      const li = node('li');
      const k = s.states.indexOf(key);
      const tag = node(k < 0 ? 'span' : 'button', 'beat-key', key);
      if (k >= 0) {
        tag.type = 'button';
        tag.setAttribute('aria-pressed', 'false');
        tag.setAttribute('aria-label', t('story.seek', { state: key }));
        tag.addEventListener('click', async () => {
          const tick = await startTick(s, k).catch(() => null);
          if (tick === null) return;
          list.querySelector('[aria-pressed="true"]')?.setAttribute('aria-pressed', 'false');
          tag.setAttribute('aria-pressed', 'true');
          seek(tick);
        });
      }
      li.append(tag, node('span', 'beat-text', text));
      list.append(li);
    }
    wrap.append(list);
    return wrap;
  }
}

let timing = null; // the page's DUR and POSE_STEP, read once from its source
async function startTick(s, k) {
  timing ??= fetch(animUrl(s)).then(r => (r.ok ? r.text() : Promise.reject(r.status))).then(src => ({
    dur: (/const DUR = Uint16Array\.of\(([^)]*)\)/.exec(src)?.[1] ?? '').split(',').map(Number),
    step: +(/const POSE_STEP = (\d+)/.exec(src)?.[1] ?? 6),
  })).catch(e => { timing = null; throw e; }); // a failed fetch is retried on the next click
  const { dur, step } = await timing;
  const start = dur.slice(0, k).reduce((a, b) => a + b, 0);
  return start + Math.min(step * 2, Math.max(0, (dur[k] ?? 1) - 1)); // the state's first settled pose
}
