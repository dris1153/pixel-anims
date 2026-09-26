import './sky/backdrop.js';
import './hud/hud.js';
import { COUNTRIES, SHOWCASES, TAG_GROUPS, animUrl, countryOf, detailUrl } from './showcases.js';
import { flag } from './flags.js';
import { calm, fitFrame } from './cards.js';
import { mountPlayer } from './player.js';
import { setupCopy } from './copy.js';
import { t } from './i18n/i18n.js';
import './i18n/switcher.js';
import { loadStory, mountStory } from './story/story.js';
import { mountTimeline } from './timeline/timeline.js';
import { collapsible } from './collapse.js';

setupCopy();
const fromPath = /^\/showcase\/([a-z0-9-]+)\/?$/.exec(location.pathname)?.[1]; // /showcase/<slug>/; ?s= is the old form
const slug = fromPath && fromPath !== 'detail' ? fromPath : new URLSearchParams(location.search).get('s');
const index = SHOWCASES.findIndex(s => s.slug === slug);
if (index < 0) {
  document.title = t('dt.nf.title');
  document.getElementById('not-found').hidden = false;
} else {
  render(SHOWCASES[index], index);
}

function render(s, i) {
  const page = document.getElementById('detail');
  document.title = t('dt.title', { title: s.title });

  const frame = page.querySelector('.frame');
  frame.style.aspectRatio = `${s.res[0]} / ${s.res[1]}`;
  const iframe = frame.querySelector('iframe');
  iframe.title = t('anim.title', { title: s.title });
  let timeline = null; // mounted once the story settles; the step buttons do nothing before that
  const step = dir => timeline?.neighbor(dir).then(ticks => player.seekTo(ticks, { keep: true, jump: dir < 0 })).catch(() => {});
  const player = mountPlayer(frame, iframe, animUrl(s), s.still, s.title, step);
  fitFrame(frame, s.res);

  const kind = page.querySelector('.kind');
  kind.textContent = s.kind;
  kind.classList.toggle('kind-ref', Boolean(s.ref));
  page.querySelector('h1').textContent = s.title;
  page.querySelector('[data-spec="res"]').textContent = `${s.res[0]}×${s.res[1]}`;
  page.querySelector('[data-spec="loop"]').textContent = t('dt.loop.value', { n: s.loop });
  const names = new Map(TAG_GROUPS.flatMap(g => g.tags)); // each tag opens the showcase list filtered to it
  page.querySelector('[data-spec="tags"]').append(...s.tags.map(id => {
    const a = document.createElement('a');
    a.href = `/showcase/?tags=${id}`;
    a.textContent = names.get(id) ?? id;
    return a;
  }));
  const country = document.createElement('a');
  country.href = `/showcase/?tags=${countryOf(s)}`;
  country.append(flag(countryOf(s)), new Map(COUNTRIES).get(countryOf(s)));
  page.querySelector('[data-spec="country"]').append(country);
  page.querySelector('.prompt p').textContent = s.prompt;
  const note = page.querySelector('.note');
  if (s.note) note.textContent = s.note;
  else note.remove();
  page.querySelector('.open').href = animUrl(s);

  const n = SHOWCASES.length;
  link(page.querySelector('[rel="prev"]'), SHOWCASES[(i - 1 + n) % n]);
  link(page.querySelector('[rel="next"]'), SHOWCASES[(i + 1) % n]);
  page.hidden = false;
  collapsible(page.querySelector('.brief-body')); // after unhiding: it measures whether the prompt needs clamping

  const toState = ticks => { player.seekTo(ticks); frame.scrollIntoView({ block: 'nearest', behavior: calm ? 'auto' : 'smooth' }); };
  loadStory(s).catch(() => null).then(story => { // the story is optional: without it the timeline shows states only
    timeline = mountTimeline(s, page.querySelector('.timeline'), { beats: story?.beats, lang: story?.use, seek: toState });
    player.onTick(timeline.setNow);
    if (story) mountStory(page, story);
  }).catch(() => {}); // a broken timeline or story leaves its panel hidden, never the page
}

function link(a, s) {
  a.href = detailUrl(s);
  a.querySelector('.pager-name').textContent = s.title;
}
