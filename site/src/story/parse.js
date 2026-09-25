// A story file: optional front matter (`key: value` lines between --- fences), then `## section` blocks holding
// paragraphs (blank-line separated) or `- key: text` items. Text stays plain: the page builds nodes with textContent.
export function parseStory(raw) {
  const meta = {}, sections = [];
  let body = raw.replace(/\r\n/g, '\n');
  const front = /^---\n([\s\S]*?)\n---\n?/.exec(body);
  if (front) {
    for (const line of front[1].split('\n')) {
      const m = /^([\w-]+):\s*(.*)$/.exec(line);
      if (m) meta[m[1]] = m[2].trim();
    }
    body = body.slice(front[0].length);
  }
  let section = null, open = false; // open: the last paragraph still takes lines
  for (const raw of body.split('\n')) {
    const line = raw.trim();
    const head = /^##\s+(.+)$/.exec(line);
    if (head) { section = { id: head[1].trim().toLowerCase(), paragraphs: [], items: [] }; sections.push(section); open = false; continue; }
    if (!line) { open = false; continue; }
    if (!section) { section = { id: 'legend', paragraphs: [], items: [] }; sections.push(section); }
    const item = /^-\s+([^:]+):\s*(.+)$/.exec(line);
    if (item) { section.items.push({ key: item[1].trim(), text: item[2].trim() }); open = false; continue; }
    if (open) section.paragraphs[section.paragraphs.length - 1] += ' ' + line;
    else { section.paragraphs.push(line); open = true; }
  }
  return { meta, sections };
}
