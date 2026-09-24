#!/usr/bin/env node
// Render tick 0 of every site/public/anims page to site/public/posters/<slug>.png at 1x through headless Chrome, so a
// showcase tile has a picture the moment the page loads while its live iframe boots. Run it after adding or changing
// a showcase: `pnpm posters` (all) or `pnpm posters <slug>...`. Needs Node 22+ (global WebSocket) and Chrome or Edge.
// `--art` renders the site's backdrop scenes instead: site/art/<name>.html to site/public/art/<name>.png.
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const site = join(dirname(fileURLToPath(import.meta.url)), '..');
const art = process.argv.includes('--art'), args = process.argv.slice(2).filter(a => a !== '--art');
const anims = join(site, art ? 'art' : 'public/anims'), posters = join(site, art ? 'public/art' : 'public/posters');
const slugs = args.length ? args : readdirSync(anims).filter(f => f.endsWith('.html')).map(f => f.slice(0, -5));
const browser = [
  process.env.CHROME_PATH,
  ...[process.env.PROGRAMFILES, process.env['PROGRAMFILES(X86)'], process.env.LOCALAPPDATA].filter(Boolean)
    .flatMap(r => [join(r, 'Google/Chrome/Application/chrome.exe'), join(r, 'Microsoft/Edge/Application/msedge.exe')]),
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
].find(p => p && existsSync(p));
let proc;
if (!browser) fail('No Chrome/Edge found. Set CHROME_PATH to its executable.');
if (typeof WebSocket === 'undefined') fail('Needs Node 22+ for the global WebSocket.');

// --remote-debugging-port=0 lets Chrome pick a free port and write it to DevToolsActivePort.
const profile = mkdtempSync(join(tmpdir(), 'posters-'));
proc = spawn(browser, ['--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });
proc.on('error', e => fail(`Could not start ${browser}: ${e.message}`));
const sleep = ms => new Promise(r => setTimeout(r, ms));
let port;
for (let i = 0; i < 100 && !port; i++) {
  await sleep(100);
  if (existsSync(join(profile, 'DevToolsActivePort'))) port = readFileSync(join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0];
}
if (!port) fail('Chrome did not start.');
const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r));
let id = 0;
const pending = new Map(), errors = [];
ws.addEventListener('message', e => {
  const m = JSON.parse(e.data);
  if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.exception?.description ?? m.params.exceptionDetails.text);
  pending.get(m.id)?.(m);
});
const send = (method, params = {}) => new Promise(r => { pending.set(++id, r); ws.send(JSON.stringify({ id, method, params })); });
await send('Page.enable');
await send('Runtime.enable');

mkdirSync(posters, { recursive: true });
for (const slug of slugs) {
  const file = join(anims, `${slug}.html`);
  if (!existsSync(file)) fail(`Not found: ${file}`);
  const size = /const W = (\d+), H = (\d+)/.exec(readFileSync(file, 'utf8'));
  if (!size) fail(`${slug}: no literal "const W = <w>, H = <h>"`);
  const [w, h] = [+size[1], +size[2]];
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: false });
  errors.length = 0;
  const loaded = new Promise(r => { const on = e => { if (JSON.parse(e.data).method === 'Page.loadEventFired') { ws.removeEventListener('message', on); r(); } }; ws.addEventListener('message', on); });
  await send('Page.navigate', { url: `${pathToFileURL(file).href}?still#t=0` });
  await loaded;
  await sleep(50);
  if (errors.length) fail(`${slug}: ${errors[0]}`);
  const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: w, height: h, scale: 1 } });
  writeFileSync(join(posters, `${slug}.png`), Buffer.from(shot.result.data, 'base64'));
  console.log(`${slug}.png ${w}x${h}`);
}
ws.close();
proc.kill();
rmSync(profile, { recursive: true, force: true, maxRetries: 5 });

function fail(msg) {
  console.error(msg);
  proc?.kill();
  process.exit(1);
}
