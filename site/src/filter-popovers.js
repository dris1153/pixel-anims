import { TAG_GROUPS } from './showcases.js';
import { el } from './cards.js';
import { flag } from './flags.js';

// One badge per tag group opens a native popover of checkboxes with live counts; picked tags also show as
// removable chips. countFor(g, id) says how many showcases would show with that option on.
export function setupFacets(bar, active, { picked, onChange, countFor }) {
  const groups = TAG_GROUPS.map((group, g) => {
    const pop = el('div', 'facet-pop');
    pop.id = `facet-${g}`;
    pop.popover = 'auto';
    pop.setAttribute('role', 'group');
    pop.setAttribute('aria-label', group.label);
    const badge = el('button', 'facet');
    badge.type = 'button';
    badge.setAttribute('popovertarget', pop.id);
    const count = el('span', 'facet-count');
    badge.append(el('span', '', group.label), count, el('span', 'facet-caret'));
    const options = group.tags.map(([id, name]) => {
      const row = el('label', 'facet-option');
      const box = el('input');
      box.type = 'checkbox';
      box.value = id;
      box.addEventListener('change', () => {
        if (box.checked) picked.add(id); else picked.delete(id);
        onChange();
      });
      const n = el('span', 'facet-n');
      row.append(box);
      if (group.flags) row.append(flag(id));
      row.append(el('span', 'facet-name', name), n);
      return { id, row, box, n };
    });
    const clear = el('button', 'facet-clear', `Clear ${group.label.toLowerCase()}`);
    clear.type = 'button';
    clear.addEventListener('click', () => {
      for (const [id] of group.tags) picked.delete(id);
      onChange();
    });
    pop.append(el('p', 'facet-title', group.label), ...options.map(o => o.row), clear);
    pop.addEventListener('toggle', e => { if (e.newState === 'open') place(pop, badge); });
    bar.append(badge, pop);
    return { group, g, pop, badge, count, options, clear };
  });

  // The popover sits in the top layer (position: fixed), so it follows its badge on scroll and resize.
  const follow = () => groups.forEach(({ pop, badge }) => pop.matches(':popover-open') && place(pop, badge));
  addEventListener('scroll', follow, { passive: true });
  addEventListener('resize', follow);

  function update() {
    for (const { group, g, badge, count, options, clear } of groups) {
      const on = group.tags.filter(([id]) => picked.has(id)).length;
      badge.classList.toggle('is-on', on > 0);
      count.textContent = on ? ` · ${on}` : '';
      badge.setAttribute('aria-label', on ? `${group.label}, ${on} selected` : group.label);
      clear.hidden = !on;
      for (const o of options) {
        const n = countFor(g, o.id);
        o.box.checked = picked.has(o.id);
        o.n.textContent = n;
        o.row.classList.toggle('is-empty', n === 0 && !o.box.checked);
      }
    }
    const chips = groups.flatMap(({ group }) => group.tags.filter(([id]) => picked.has(id)).map(([id, name]) => {
      const chip = el('button', 'active-chip');
      chip.type = 'button';
      chip.setAttribute('aria-label', `Remove ${name} filter`);
      if (group.flags) chip.append(flag(id));
      chip.append(el('span', '', name), el('span', 'active-x', '✕'));
      chip.addEventListener('click', () => {
        picked.delete(id);
        onChange();
      });
      return chip;
    }));
    active.querySelector('.active-chips').replaceChildren(...chips);
  }
  return { update };
}

// Below the badge, clamped to the viewport; above it when there is no room below.
function place(pop, badge) {
  const r = badge.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight, pad = 12;
  const left = Math.max(pad, Math.min(r.left, innerWidth - w - pad));
  const top = r.bottom + 8 + h > innerHeight - pad && r.top - 8 - h > pad ? r.top - 8 - h : r.bottom + 8;
  pop.style.left = `${left}px`;
  pop.style.top = `${top}px`;
}
