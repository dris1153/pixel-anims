// The detail page's preview: the live anim driven through its engine control (window.pixelAnims, same origin). Pause
// holds the frame and Play resumes it; seekTo() fast-forwards to a state and plays on, faster the farther it has to go.
// Reduced motion starts on the still frame and jumps instead of fast-forwarding.
import { calm, el } from './cards.js';
import { stillOf } from './showcases.js';
import { t } from './i18n/i18n.js';

export function mountPlayer(frame, iframe, file, still, title) {
  const button = el('button', 'play');
  button.type = 'button';
  const badge = el('span', 'ff-badge');
  badge.hidden = true;
  badge.setAttribute('aria-hidden', 'true');
  frame.append(button, badge);

  let playing = !calm, live = false, stillTick = still, pending = null; // pending: a seek waiting for the live page
  let hold = false; // pause again once a seek lands (a seek always sets the loop running)
  const api = () => (live ? iframe.contentWindow?.pixelAnims : null);
  const label = () => {
    button.textContent = t(playing ? 'pause' : 'play');
    button.setAttribute('aria-label', t(playing ? 'pause.label' : 'play.label', { title }));
  };
  const goLive = () => { live = true; iframe.src = file; };
  const showStill = tick => { live = false; stillTick = tick; iframe.src = stillOf(file, tick); };
  iframe.addEventListener('load', () => {
    const a = api();
    if (!a) return;
    if (pending !== null) run(a, pending, calm);
    else if (!playing) a.pause();
    pending = null;
  });

  function run(a, tick, jump) {
    const dist = ((tick - a.tick) % a.loop + a.loop) % a.loop;
    const rate = jump ? a.loop : dist <= 240 ? 5 : dist <= 720 ? 10 : Math.ceil(dist / 72); // long ways finish in ~1.2s
    a.seek(tick, rate);
    hold = !playing;
    if (!jump && dist > rate) { badge.textContent = `▶︎▶︎ ×${rate}`; badge.hidden = false; } // text glyphs, not emoji
  }

  button.addEventListener('click', () => {
    playing = !playing;
    label();
    if (!live) { pending = stillTick; goLive(); return; } // from the still: pick up at the same frame
    const a = api();
    hold = !playing && Boolean(a?.seeking); // paused mid fast-forward: land on the state first, then hold
    if (playing) a?.play(); else if (!hold) a?.pause();
  });
  label();
  if (playing) goLive(); else showStill(still);

  const watchers = [];
  let last = -2;
  (function watch() { // one poll a frame: the fast-forward badge and the timeline playhead
    requestAnimationFrame(watch);
    const a = api();
    if (a && !a.seeking) { badge.hidden = true; if (hold) { hold = false; a.pause(); } }
    const now = a ? (a.tick % a.loop + a.loop) % a.loop : stillTick;
    if (now === last) return; // held or paused: nothing moved
    last = now;
    for (const w of watchers) w(now);
  })();

  return {
    onTick: fn => { watchers.push(fn); if (last >= 0) fn(last); }, // a late watcher still gets the current tick
    // start: the state's first tick (live); settled: its first settled pose (the still shown under reduced motion)
    seekTo({ start, settled }) {
      if (calm && !live) { showStill(settled); return; }
      if (!calm) { playing = true; label(); }
      const a = api();
      if (a) { run(a, calm && !playing ? settled : start, calm); return; } // a held frame shows the settled pose
      pending = start;
      if (!live) goLive(); // a load already under way picks the seek up
    },
  };
}
