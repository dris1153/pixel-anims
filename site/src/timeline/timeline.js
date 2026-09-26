// The detail page's state timeline: one segment per state, as wide as its share of the loop, like a roadmap. Hover or
// focus shows the state's time and, when the showcase has a story, its beat; a click seeks the preview there, and
// setNow() moves the playhead (the current state lit and filled by its progress, earlier ones filled).
// Below 900px and on touch screens it stands as a vertical list with the beats written out, since touch has no hover.
import './timeline.css';
import { t } from '../i18n/i18n.js';
import { animUrl } from '../showcases.js';

const timings = new Map(); // slug -> promise of the anim's DUR and POSE_STEP, read once from its source
export function animTiming(s) {
  if (!timings.has(s.slug)) {
    timings.set(s.slug, fetch(animUrl(s)).then(r => (r.ok ? r.text() : Promise.reject(r.status))).then(src => ({
      dur: (/const DUR = Uint16Array\.of\(([^)]*)\)/.exec(src)?.[1] ?? '').split(',').map(Number),
      step: +(/const POSE_STEP = (\d+)/.exec(src)?.[1] ?? 6),
    })).catch(e => { timings.delete(s.slug); throw e; })); // a failed fetch is retried next time
  }
  return timings.get(s.slug);
}

// beats: the story's [{ key, text }] in state order, or null (a state repeated in the loop gets its own line); lang: the story's language (the tip reads in it);
// seek({ start, settled }): the state's first tick and its first settled pose.
export function mountTimeline(s, box, { beats, lang, seek }) {
  const node = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; };
  const head = node('h2', 'timeline-h', `${t('dt.states')} · ${t('dt.loop.value', { n: s.loop })}`);
  head.id = 'timeline-h';
  const track = node('ol', 'tl-track');
  const tip = node('div', 'tl-tip');
  tip.id = 'tl-tip';
  tip.setAttribute('role', 'tooltip');
  tip.setAttribute('aria-hidden', 'true');
  const tipName = node('b'), tipTime = node('span', 'tl-tip-time'), tipText = node('span', 'tl-tip-text');
  if (lang) { tipText.lang = lang; if (lang === 'ar') tipText.dir = 'rtl'; }
  tip.append(tipName, tipTime, tipText);

  const items = s.states.map((state, k) => {
    const li = node('li', 'tl-seg');
    const button = node('button', 'tl-node');
    button.type = 'button';
    button.setAttribute('aria-describedby', tip.id);
    button.setAttribute('aria-label', t('story.seek', { state }));
    const label = node('span', 'tl-label');
    label.append(node('span', 'tl-name', state), node('span', 'tl-time'));
    button.append(label);
    li.append(button);
    const text = beats?.[k]?.key === state ? beats[k].text : beats?.find(b => b.key === state)?.text;
    if (text) { const p = node('p', 'tl-desc', text); if (lang) { p.lang = lang; if (lang === 'ar') p.dir = 'rtl'; } li.append(p); }
    button.addEventListener('click', async () => {
      const ticks = await stateTicks(s, k).catch(() => null);
      if (ticks) seek(ticks);
    });
    button.addEventListener('pointerenter', () => show(k));
    button.addEventListener('focus', () => show(k));
    button.addEventListener('blur', hide);
    return { li, button, state, text };
  });
  track.append(...items.map(i => i.li));
  track.addEventListener('pointerleave', () => { if (!track.querySelector(':focus-visible')) hide(); }); // a clicked node keeps focus; only keyboard focus keeps the tip
  box.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
  box.dir = 'ltr'; // time runs left to right in every language
  box.replaceChildren(head, track, tip);
  box.hidden = false;

  let spans = s.states.map(() => [0, 0]);
  animTiming(s).then(({ dur }) => { // size each segment by its duration and write its time range
    let at = 0;
    spans = s.states.map((_, k) => [at, (at += dur[k] ?? 0)]);
    items.forEach(({ li, button }, k) => {
      li.style.flexGrow = String(dur[k] || 1);
      button.querySelector('.tl-time').textContent = `${(spans[k][0] / 60).toFixed(1)}s`;
    });
    if (lastTick >= 0) setNow(lastTick); // a held frame reported before the spans were known
    new ResizeObserver(unclash).observe(track);
    document.fonts.ready.then(unclash);
  }).catch(() => {});

  // A long loop crowds its labels: two that touch in the same row drop their times (the tip still shows them).
  function unclash() {
    items.forEach(({ li }) => li.classList.remove('is-tight'));
    const rects = items.map(({ li }) => li.querySelector('.tl-label').getBoundingClientRect());
    rects.forEach((b, k) => {
      const a = rects[k - 2];
      if (a && a.right + 8 > b.left && a.left < b.right && a.bottom > b.top && a.top < b.bottom) {
        items[k - 2].li.classList.add('is-tight');
        items[k].li.classList.add('is-tight');
      }
    });
  }

  let now = -1, lastTick = -1;
  const setNow = tick => { // the playhead: called with the tick within the loop whenever it moves
    lastTick = tick;
    const k = spans.findIndex(([a, b]) => tick >= a && tick < b);
    if (k < 0) return;
    if (k !== now) {
      items.forEach(({ li, button }, i) => {
        li.classList.toggle('is-past', i < k);
        li.classList.toggle('is-now', i === k);
        if (i === k) button.setAttribute('aria-current', 'step'); else button.removeAttribute('aria-current');
      });
      now = k;
    }
    items[k].li.style.setProperty('--p', ((tick - spans[k][0]) / (spans[k][1] - spans[k][0])).toFixed(3));
  };

  // transitions.dev tooltip: a delayed fade and scale in, an instant out, and a glide between segments while shown.
  function show(k) {
    const { button, state, text } = items[k];
    const showing = tip.dataset.show === 'true';
    tipName.textContent = state;
    tipTime.textContent = spans[k][1] ? `${(spans[k][0] / 60).toFixed(1)}–${(spans[k][1] / 60).toFixed(1)}s` : '';
    tipText.textContent = text ?? '';
    tipText.hidden = !text;
    const b = box.getBoundingClientRect(), r = button.getBoundingClientRect();
    const x = Math.max(0, Math.min(r.left - b.left + r.width / 2 - tip.offsetWidth / 2, b.width - tip.offsetWidth));
    // Above the track by default, below when the viewport (under the sticky header) lacks room; the gap clears the labels.
    const gap = 30, h = tip.offsetHeight, top = document.querySelector('.bar')?.getBoundingClientRect().bottom ?? 0;
    const roomAbove = r.top - gap - top, roomBelow = innerHeight - r.bottom - gap;
    const up = h <= roomAbove || (h > roomBelow && roomAbove > roomBelow);
    const y = up ? r.top - b.top - gap - h : r.bottom - b.top + gap;
    if (!showing) tip.style.transition = 'none';
    tip.style.setProperty('--tt-x', `${x}px`);
    tip.style.setProperty('--tt-y', `${y}px`);
    if (!showing) { void tip.offsetWidth; tip.style.transition = ''; }
    tip.dataset.show = 'true';
    tip.setAttribute('aria-hidden', 'false');
  }
  function hide() {
    tip.dataset.show = 'false';
    tip.setAttribute('aria-hidden', 'true');
  }
  // The state after the playhead's (dir 1) or before it (dir -1), wrapping round the loop.
  const neighbor = dir => {
    const k = Math.max(0, spans.findIndex(([a, b]) => lastTick >= a && lastTick < b));
    return stateTicks(s, (k + dir + items.length) % items.length);
  };
  return { setNow, neighbor };
}

async function stateTicks(s, k) { // the state's first tick, and its first settled pose (for a still)
  const { dur, step } = await animTiming(s);
  const start = dur.slice(0, k).reduce((a, b) => a + b, 0);
  return { start, settled: start + Math.min(step * 2, Math.max(0, (dur[k] ?? 1) - 1)) };
}
