// The detail page's Story panel: the showcase's legend in the site's language (else English with a notice, else whatever
// exists), resting on its first line until opened. Its beats feed the state timeline.
import './story.css';
import { LANGS, lang, t } from '../i18n/i18n.js';
import { parseStory } from './parse.js';
import { collapsible } from '../collapse.js';

const files = import.meta.glob('../stories/*/*.md', { query: '?raw', import: 'default' });
const NO_DROPCAP = new Set(['ko', 'ja', 'zh', 'th', 'hi', 'ar']); // scripts without letter case or an initial to raise
const nameOf = code => LANGS.find(l => l.code === code)?.name ?? code;

// { use, meta, sections, beats: Map(state -> text) } or null when the showcase has no story.
export async function loadStory(s) {
  const have = LANGS.map(l => l.code).filter(c => files[`../stories/${s.slug}/${c}.md`]);
  if (!have.length) return null;
  const use = have.includes(lang) ? lang : have.includes('en') ? 'en' : have[0];
  const { meta, sections } = parseStory(await files[`../stories/${s.slug}/${use}.md`]());
  const beats = new Map((sections.find(sec => sec.id === 'beats')?.items ?? []).map(i => [i.key, i.text]));
  return { use, meta, sections, beats };
}

export function mountStory(page, { use, meta, sections }) {
  const box = page.querySelector('.story');
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
  const body = node('div', 'story-body');
  body.lang = use;
  if (use === 'ar') body.dir = 'rtl';
  for (const sec of sections) {
    if (sec.id === 'beats') continue; // they live on the state timeline
    if (sec.id !== 'legend') body.append(node('h3', 'story-sub', sec.id.replace(/^\w/, c => c.toUpperCase())));
    for (const p of sec.paragraphs) body.append(node('p', '', p));
  }
  const first = body.querySelector('p');
  if (first && !NO_DROPCAP.has(use)) first.classList.add('dropcap');
  parts.push(body);
  box.replaceChildren(...parts);
  box.hidden = false;
  collapsible(body);
}
