// Reads SHOWCASES from site/src/showcases.js as plain data for Node scripts, which cannot import that module (it pulls
// in the browser-only i18n). It relies on the file's one-field-per-line entry layout.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export function readShowcases(siteDir) {
  const src = readFileSync(join(siteDir, 'src/showcases.js'), 'utf8');
  const start = src.indexOf('export const SHOWCASES = [');
  const list = src.slice(start, src.indexOf('\n];', start));
  return list.split('\n  {\n').slice(1).map(entry => {
    const field = (key, value) => new RegExp(`^    ${key}: (${value})`, 'm').exec(entry)?.[1];
    const json = (key, value) => { const v = field(key, value); return v === undefined ? undefined : JSON.parse(v); };
    return {
      slug: json('slug', '"[^"]*"'),
      title: json('title', '"(?:[^"\\\\]|\\\\.)*"'),
      loop: json('loop', '\\d+'),
      still: json('still', '\\d+') ?? 60, // the default the site uses too
      res: json('res', '\\[[^\\]]*\\]'),
      states: json('states', '\\[[^\\]]*\\]'),
    };
  });
}
