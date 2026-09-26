// Vite plugin: every showcase gets its own detail page at /showcase/<slug>/ with its own title, description and
// thumbnail in the head, since link previews never run the page's JS. The build writes one copy of the shared detail
// page per slug plus sitemap.xml; dev rewrites those paths to the shared page.
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { readShowcases } from './showcase-data.mjs';

const ORIGIN = 'https://pixel-anims.drisdev.io';
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function showcasePages(siteDir, outDir) {
  return {
    name: 'showcase-pages',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const m = /^\/showcase\/([a-z0-9-]+)\/?(\?.*)?$/.exec(req.url ?? '');
        if (m && m[1] !== 'detail') req.url = `/showcase/detail/index.html${m[2] ?? ''}`;
        next();
      });
    },
    async closeBundle() {
      const { parseStory } = await import(pathToFileURL(join(siteDir, 'src/story/parse.js')).href);
      const shell = readFileSync(join(outDir, 'showcase/detail/index.html'), 'utf8');
      const shows = readShowcases(siteDir);
      for (const s of shows) {
        const url = `${ORIGIN}/showcase/${s.slug}/`, image = `${ORIGIN}/posters/${s.slug}.og.png`;
        const title = `${s.title} · pixel-anims`, desc = describe(s, parseStory);
        const html = shell
          .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(desc)}`)
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(s.title)}`)
          .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(desc)}`)
          .replace(/<meta property="og:image" content="[^"]*">/, [
            `<meta property="og:image" content="${image}">`,
            '<meta property="og:image:width" content="1200">',
            '<meta property="og:image:height" content="630">',
            `<meta property="og:image:alt" content="${esc(`${s.title}, a pixel art animation`)}">`,
            `<meta property="og:url" content="${url}">`,
            `<link rel="canonical" href="${url}">`,
          ].join('\n'));
        mkdirSync(join(outDir, 'showcase', s.slug), { recursive: true });
        writeFileSync(join(outDir, 'showcase', s.slug, 'index.html'), html);
      }
      const urls = ['/', '/showcase/', ...shows.map(s => `/showcase/${s.slug}/`)];
      writeFileSync(join(outDir, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n'
        + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + urls.map(u => `  <url><loc>${ORIGIN}${u}</loc></url>`).join('\n') + '\n</urlset>\n');
      this.info?.(`showcase-pages: ${shows.length} pages and sitemap.xml`);

      function describe(s, parseStory) { // the story's opening sentence, else a line built from the entry
        const a = [8, 11, 18].includes(s.loop) || String(s.loop).startsWith('8') ? 'an' : 'a'; // "an 8-second", "an 11-second"
        const loop = `${a[0].toUpperCase()}${a.slice(1)} ${s.loop}-second seamless pixel-art loop made with the pixel-anims skill.`;
        const file = join(siteDir, 'src/stories', s.slug, 'en.md');
        const para = existsSync(file) ? parseStory(readFileSync(file, 'utf8')).sections.find(x => x.id === 'legend')?.paragraphs[0] : null;
        if (!para) return `${s.title}: ${a} ${s.loop}-second seamless pixel-art loop in ${s.states.length} states, one HTML file made with the pixel-anims skill.`;
        let first = /^.+?[.!?](?=\s|$)/.exec(para)?.[0] ?? para;
        if (first.length > 170) first = `${first.slice(0, 168).replace(/\s+\S*$/, '')}…`;
        return `${first} ${loop}`;
      }
    },
  };
}
