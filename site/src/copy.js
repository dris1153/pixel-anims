import { t } from './i18n/i18n.js';

// Every .copy button copies the code/p text of its .cmd or .prompt block.
export function setupCopy() {
  for (const button of document.querySelectorAll('.copy')) { // wrap labels so they can swap in place
    const label = document.createElement('span');
    label.className = 'copy-label';
    label.textContent = button.textContent;
    button.replaceChildren(label);
  }
  document.addEventListener('click', onCopyClick);
}

// Text swap: old label exits up, new one enters from below (transitions.dev "text states swap").
function swapLabel(label, text) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { // no motion: no blank gap either
    label.textContent = text;
    return;
  }
  const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--duration-quick')) || 150;
  clearTimeout(label.swapTimer);
  label.classList.add('is-exit');
  label.swapTimer = setTimeout(() => {
    label.textContent = text;
    label.classList.remove('is-exit');
    label.classList.add('is-enter-start');
    void label.offsetHeight; // reflow so removing the class transitions back to rest
    label.classList.remove('is-enter-start');
  }, dur);
}

async function onCopyClick(e) {
  const button = e.target.closest('.copy');
  const source = button?.closest('.cmd, .prompt')?.querySelector('code, p');
  if (!source) return;
  const ok = await copyText(source.textContent.trim());
  if (!ok) getSelection().selectAllChildren(source); // let the user copy by hand
  const label = button.querySelector('.copy-label');
  button.dataset.label ??= label.textContent;
  swapLabel(label, t(ok ? 'copy.done' : 'copy.selected'));
  const status = document.getElementById('copy-status');
  if (status) status.textContent = t(ok ? 'copy.status.ok' : 'copy.status.fail');
  clearTimeout(button.resetTimer);
  button.resetTimer = setTimeout(() => swapLabel(label, button.dataset.label), 1400);
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
