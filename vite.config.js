import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { showcasePages } from './site/scripts/showcase-pages.mjs';

// Config sits at the repo root so Vercel detects Vite with default settings; the site lives in site/.
const root = resolve(import.meta.dirname, 'site');
const outDir = resolve(import.meta.dirname, 'dist');

export default defineConfig({
  root,
  appType: 'mpa', // unknown paths 404 in dev/preview, as on Vercel
  plugins: [showcasePages(root, outDir)],
  build: {
    outDir,
    emptyOutDir: true, // outDir is outside root, so Vite would not clear it otherwise
    rolldownOptions: {
      input: {
        main: resolve(root, 'index.html'),
        showcase: resolve(root, 'showcase/index.html'),
        detail: resolve(root, 'showcase/detail/index.html'),
      },
    },
  },
});
