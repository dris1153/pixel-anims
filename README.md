# pixel-anims

A Claude skill that turns one sentence into a polished, looping 16-bit sprite animation. The result is a single self-contained HTML file: vanilla JS and Canvas 2D, no assets, no libraries.

**Live showcase and docs:** https://pixel-anims.drisdev.io/

## Install

**Claude Code plugin marketplace**

```
/plugin marketplace add dris1153/pixel-anims
/plugin install pixel-anims@pixel-anims
```

**npx skills**

```
npx skills add dris1153/pixel-anims
```

**Manual**

```
git clone https://github.com/dris1153/pixel-anims
mkdir -p ~/.claude/skills && cp -r pixel-anims/skills/pixel-anims ~/.claude/skills/
```

## Use

Describe the animation you want. The skill triggers on requests like these:

> Pixel art knight: idle, wind-up, sword slash with an arc trail and sparks, recover. Castle rampart at dusk.

> Pixel art dragon: idle breathing, inhale, fire-breath stream with embers, recover. Rocky cliff, red moon.

You can also invoke it directly: `/pixel-anims:pixel-anims <brief>` after a plugin install, or `/pixel-anims <brief>` after the other two.

## What you get

- One `.html` file that loops a character through its action states.
- The look follows 16-bit rules: a fixed palette, integer scaling, a 60 Hz fixed timestep and pooled particles.
- Claude checks the result itself. It renders chosen ticks to PNG with `scripts/snapshot.mjs` and fixes what it sees. The engine also verifies that the loop seam is seamless.

## Requirements

Node 18 or newer and Chrome, Edge or Chromium, for the snapshot QA step.

## Website

The landing page and showcase live in `site/` as a plain Vite app. Run `npm install`, then `npm run dev` to work on it or `npm run build` to build `dist/`. To add a showcase, put its `.html` in `site/public/anims/` and add one entry to `site/src/showcases.js`.

## License

MIT
