# Changelog

All notable changes to pixel-anims are recorded here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-09-26

The first public release: the skill, its engine, a Claude Code plugin, and a showcase site with 81 animations in nine languages.

### Added

#### Skill

- An [Agent Skill](https://agentskills.io/) that turns one sentence into a single self-contained HTML file. The file loops a 16-bit sprite animation in vanilla JS and Canvas 2D, with no assets or libraries.
- It works with Claude Code, Codex, OpenCode and any other agent that reads Agent Skills.
- **Workflow:**
  - a short design note (palette ramps, states and timings, the key event and its effects);
  - a scaffold from the reference template;
  - scene code written against a fixed engine contract;
  - self-QA through per-tick snapshots (`snapshot.mjs`), which catch engine edits, runtime errors and seam mismatches.
- A Claude Code plugin marketplace manifest, so the skill installs with `/plugin`.

#### Engine

- A locked palette of 16 to 32 colours, integer scaling, a fixed 60 Hz step with rAF rendering, and pose frames at 8 to 12 fps.
- A state machine with eased pose targets, springs for cloth and hair, pooled particles (burst, trail, mote, orbit), rim light, halos, Bayer dither, screen shake and flash.
- A seamless loop checked at boot, with a `#t=N` mode that renders any tick for QA.
- The `window.pixelAnims` control API, so an embedding page can pause, resume and seek the loop.
- `prefers-reduced-motion` turns shake and flash off.

#### Showcase

- 81 animations, each one unedited HTML file written by the skill from a short brief. They range from single characters (knight, wizard, dragon, ninja) to 16- and 18-state legends from 31 countries, including:
  - Children of the Dragon and the Fairy, with a gliding camera;
  - Pangu Separates Heaven and Earth;
  - Sadko and the Sea Tsar;
  - Durga Slays Mahishasura;
  - The Twelve Labors of Heracles.

#### Site ([pixel-anims.drisdev.io](https://pixel-anims.drisdev.io/))

- A landing page with a live hero, install tabs per agent, and a featured showcase.
- A showcase gallery with tag, country and resolution filters, search suggestions, sorting and pagination.
- **Detail pages:**
  - a live preview with pixel icon controls: play, pause, and previous and next state;
  - a state timeline with a playhead and beat descriptions;
  - the legend behind each story;
  - the prompt that made it.
- The full site in nine languages: English, Vietnamese, Korean, Japanese, Chinese, Thai, Hindi, Arabic (right to left) and Spanish. Every legend is told in all nine.
- A page for every showcase with its own title, description and 1200×630 preview image, plus a sitemap.

[1.0.0]: https://github.com/dris1153/pixel-anims/releases/tag/v1.0.0
