// Every .copy button copies the code/p text of its .cmd or .prompt block.
export function setupCopy() {
  document.addEventListener('click', onCopyClick);
}

async function onCopyClick(e) {
  const button = e.target.closest('.copy');
  const source = button?.closest('.cmd, .prompt')?.querySelector('code, p');
  if (!source) return;
  const ok = await copyText(source.textContent.trim());
  if (!ok) getSelection().selectAllChildren(source); // let the user copy by hand
  button.dataset.label ??= button.textContent;
  button.textContent = ok ? 'Copied' : 'Selected';
  const status = document.getElementById('copy-status');
  if (status) status.textContent = ok ? 'Copied to clipboard' : 'Copy failed, text selected';
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
