// Gallery data. To add a showcase: drop <slug>.html into public/anims/ and add one entry.
// Array order is display order: [0] is the landing hero, [1..3] the landing tiles.
// Required: slug, tags (ids from TAG_GROUPS), title, res [w, h] (logical px), loop (sum(DUR) / 60, seconds), states, kind, prompt.
// Optional: note, still (tick shown while paused, default 60), ref (true for the engine reference).
export const SHOWCASES = [
  {
    slug: "robot-cannon-blast",
    tags: ["robot", "projectile", "night"],
    title: "Neon Alley Blaster",
    still: 267,
    res: [160, 90],
    loop: 7,
    states: ["idle", "charge", "blast", "cool down"],
    kind: "Made with the skill",
    prompt:
      "Pixel art robot: idle hum, charge the arm cannon, blast with recoil and smoke, cool down. " +
      "Neon alley in the rain, 160×90.",
  },
  {
    slug: "archer-bow-shot",
    tags: ["humanoid", "projectile", "dawn"],
    title: "Dawnwood Archer",
    still: 270,
    res: [160, 90],
    loop: 6.4,
    states: ["idle", "draw", "release", "recover"],
    kind: "Made with the skill",
    prompt: "Pixel art archer: idle, draw the bow, release an arrow across the screen, recover. Misty forest at dawn.",
  },
  {
    slug: "golem-ground-slam",
    tags: ["creature", "impact", "day"],
    title: "Canyon Golem",
    still: 270,
    res: [160, 90],
    loop: 7.2,
    states: ["idle", "raise", "slam", "recover"],
    kind: "Made with the skill",
    prompt:
      "Pixel art stone golem: idle breathing with drifting pebbles, raise both fists, ground slam with a shockwave " +
      "and flying rocks, recover. Desert canyon at noon, 160×90.",
  },
  {
    slug: "fox-mage-orb-cast",
    tags: ["humanoid", "magic", "projectile", "dusk"],
    title: "Fox Mage Orb Cast",
    still: 258,
    res: [160, 90],
    loop: 6.5,
    states: ["idle", "channel", "cast", "recover"],
    kind: "Made with the skill",
    prompt:
      "Pixel art fox mage: idle tail swish, channel a green orb, fire it at a scarecrow, recover. Autumn field at sunset.",
  },
  {
    slug: "ninja-shuriken-throw",
    tags: ["humanoid", "projectile", "night"],
    title: "Rooftop Shuriken",
    still: 228,
    res: [160, 90],
    loop: 5.6,
    states: ["idle", "wind-up", "throw", "recover"],
    kind: "Made with the skill",
    prompt:
      "Pixel art ninja: idle stance, crouching wind-up, throws a spinning shuriken that flies across the scene, " +
      "recover. Tiled rooftop at night with paper lanterns.",
  },
  {
    slug: "dragon-fire-breath",
    tags: ["creature", "breath", "night"],
    title: "Red Moon Drake",
    still: 301,
    res: [160, 90],
    loop: 7.6,
    states: ["idle", "inhale", "breath", "recover"],
    kind: "Made with the skill",
    prompt:
      "Pixel art dragon: idle breathing, inhale, fire-breath stream with embers, recover. Rocky cliff, red moon.",
  },
  {
    slug: "knight-sword-slash",
    tags: ["humanoid", "melee", "dusk"],
    title: "Rampart Knight",
    still: 223,
    res: [128, 96],
    loop: 5.4,
    states: ["idle", "wind-up", "slash", "recover"],
    kind: "Made with the skill",
    prompt:
      "Pixel art knight: idle, wind-up, sword slash with an arc trail and sparks, recover. Castle rampart at dusk.",
  },
  {
    slug: "wizard-spellcaster",
    tags: ["humanoid", "magic", "projectile", "night"],
    title: "Moonlit Spellcaster",
    res: [128, 96],
    loop: 5.8,
    states: ["idle", "charge", "cast", "recover"],
    kind: "Engine reference",
    ref: true,
    still: 236,
    note: "Built from the original long-form spec before the skill existed. Its engine became the skill template.",
    prompt:
      "A pixel art wizard casting a spell: idle bob with beard sway, staff raises while sparks spiral into the gem, " +
      "bright burst and a projectile across the scene with a 1-2px screen shake, settle back. Night sky, moon, stone floor.",
  },
];

// Filter chips on /showcase/: OR within a group, AND across groups. Resolution tags come from `res`.
export const resTag = s => `${s.res[0]}x${s.res[1]}`;
export const TAG_GROUPS = [
  { label: 'Character', tags: [['humanoid', 'Humanoid'], ['creature', 'Creature'], ['robot', 'Robot']] },
  { label: 'Action', tags: [['melee', 'Melee'], ['projectile', 'Projectile'], ['magic', 'Magic'], ['breath', 'Breath'], ['impact', 'Impact']] },
  { label: 'Setting', tags: [['dawn', 'Dawn'], ['day', 'Day'], ['dusk', 'Dusk'], ['night', 'Night']] },
  { label: 'Resolution', tags: [...new Set(SHOWCASES.map(resTag))].sort().map(t => [t, t.replace('x', '×')]) },
];

export const animUrl = s => `/anims/${s.slug}.html`;
// The ?still#t=N seek mode renders tick N once and stops, so a paused frame costs no loop.
export const stillOf = (file, tick = 60) => `${file}?still#t=${tick}`;
export const detailUrl = s => `/showcase/detail/?s=${s.slug}`;
export const metaLine = s => `${s.res[0]}×${s.res[1]} · ${s.loop} s loop · ${s.states.join(' → ')}`;
