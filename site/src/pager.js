import { el } from './cards.js';

export const PER_PAGE = 12;

// 1 … 4 5 6 … 9: the first and last pages and the current page's neighbours; gaps collapse to an ellipsis.
export function pageList(page, pages) {
  const keep = new Set([1, pages, page - 1, page, page + 1]);
  const out = [];
  for (let p = 1; p <= pages; p++) {
    if (keep.has(p)) out.push(p);
    else if (out[out.length - 1] !== '…') out.push('…');
  }
  return out;
}

// Fills the <nav> with Prev, page numbers and Next; hidden when everything fits on one page.
export function renderPager(nav, page, pages, onPage) {
  nav.hidden = pages < 2;
  const button = (label, target, cls, aria) => {
    const b = el('button', cls, label);
    b.type = 'button';
    if (aria) b.setAttribute('aria-label', aria);
    b.disabled = target < 1 || target > pages || target === page;
    b.addEventListener('click', () => onPage(target));
    return b;
  };
  const numbers = pageList(page, pages).map(p => {
    if (p === '…') return el('span', 'pagination-gap', '…');
    const b = button(String(p), p, 'pagination-page', `Page ${p}`);
    if (p === page) b.setAttribute('aria-current', 'page');
    return b;
  });
  nav.replaceChildren(
    button('Prev', page - 1, 'pagination-step', 'Previous page'),
    ...numbers,
    button('Next', page + 1, 'pagination-step', 'Next page'),
  );
}
