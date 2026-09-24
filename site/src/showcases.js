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
    slug: "jellyfish-electric-pulse",
    tags: ["creature", "lightning", "underwater"],
    title: "Abyss Jellyfish",
    still: 264,
    res: [128, 96],
    loop: 7.2,
    states: ["idle", "charge", "pulse", "drift"],
    kind: "Made with the skill",
    prompt:
      "Pixel art jellyfish: idle drift with swaying tentacles, glow charge, electric pulse with crackling arcs, " +
      "drift back. Deep sea with light rays and bubbles.",
  },
  {
    slug: "blacksmith-anvil-quench",
    tags: ["humanoid", "craft", "interior"],
    title: "Forge Blacksmith",
    still: 210,
    res: [128, 96],
    loop: 7.2,
    states: ["idle", "raise", "strike", "quench", "recover"],
    kind: "Made with the skill",
    prompt:
      "Pixel art blacksmith: idle, raise the hammer, strike glowing steel on the anvil with sparks, quench it in water " +
      "with steam, recover. Forge interior.",
  },
  {
    slug: "samurai-quick-draw",
    tags: ["humanoid", "melee", "day"],
    title: "Sakura Iaido",
    still: 234,
    res: [160, 90],
    loop: 7.2,
    states: ["idle", "stance", "slash", "sheathe", "settle"],
    kind: "Made with the skill",
    prompt:
      "Pixel art samurai: still idle, crouch into a quick-draw stance, one-frame slash across the screen that cuts " +
      "falling petals, sheathe. Cherry blossom hill in daylight, 160×90.",
  },
  {
    slug: "cleric-bloom-channel",
    tags: ["humanoid", "heal", "day"],
    title: "Meadow Cleric",
    still: 312,
    res: [128, 96],
    loop: 7.2,
    states: ["idle", "kneel", "channel", "bloom", "close"],
    kind: "Made with the skill",
    prompt:
      "Pixel art cleric: idle, kneel and channel light into the soil, a sapling sprouts and blooms, the flower " +
      "closes and she rises. Sunny meadow.",
  },
  {
    slug: "cultivator-flying-sword",
    tags: ["humanoid", "magic", "projectile", "dawn"],
    title: "Cloud Peak Immortal",
    still: 282,
    res: [160, 90],
    loop: 8,
    states: ["meditate", "summon", "circle", "launch", "cut", "sheathe"],
    kind: "Made with the skill",
    prompt:
      "Pixel art xianxia sword cultivator: float cross-legged in meditation, a flying sword slips from its sheath and " +
      "orbits in a ribbon of blue qi, streaks off screen and splits a falling rock in two, returns to the sheath. " +
      "Floating peaks above a sea of clouds at dawn, 160×90.",
  },
  {
    slug: "cultivator-heavenly-tribulation",
    tags: ["humanoid", "lightning", "magic", "night"],
    title: "Heavenly Tribulation",
    still: 282,
    res: [128, 96],
    loop: 8,
    states: ["meditate", "gather", "strike", "break", "settle"],
    kind: "Made with the skill",
    prompt:
      "Pixel art cultivator breakthrough: sit on a bare summit, dark clouds spiral overhead, three purple lightning " +
      "bolts strike one after another, a golden core flares in the chest and the clouds part to starlight. " +
      "Mountain peak at night, 128×96.",
  },
  {
    slug: "monkey-king-staff-slam",
    tags: ["humanoid", "melee", "impact", "day"],
    title: "Monkey King Staff",
    still: 294,
    res: [160, 90],
    loop: 8,
    states: ["idle", "grow", "twirl", "slam", "shrink", "settle"],
    kind: "Made with the skill",
    prompt:
      "Pixel art Monkey King: idle on a small cloud, twirl the golden staff, it grows long and slams the ground in a " +
      "ring of dust, shrinks back to a needle tucked behind the ear. Waterfall cliffs of Flower Fruit Mountain in " +
      "daylight, 160×90.",
  },
  {
    slug: "phoenix-ash-rebirth",
    tags: ["creature", "magic", "dusk"],
    title: "Phoenix Rebirth",
    still: 200,
    res: [128, 96],
    loop: 8,
    states: ["perch", "spread", "blaze", "ash", "rebirth", "fold"],
    kind: "Made with the skill",
    prompt:
      "Pixel art phoenix: perched on a stone altar, spread its wings, burst into flame and crumble to glowing ash, an " +
      "ember egg pulses, the phoenix rises from it and folds its wings. Volcanic ridge at dusk, 128×96.",
  },
  {
    slug: "son-tinh-rising-hills",
    tags: ["humanoid", "magic", "day"],
    title: "Son Tinh Mountain God",
    still: 280,
    res: [160, 90],
    loop: 8,
    states: ["rain", "flood", "raise", "drain", "clear"],
    kind: "Made with the skill",
    prompt:
      "Pixel art Vietnamese mountain god Son Tinh: stand on a hilltop in the rain, flood water rises from below, he " +
      "raises both arms and the hills climb higher step by step, the water drains and the rain stops. Misty " +
      "northern Vietnam hills in a storm, 160×90.",
  },
  {
    slug: "frost-witch-ice-spikes",
    tags: ["humanoid", "magic", "day"],
    title: "Frost Witch",
    still: 240,
    res: [160, 90],
    loop: 8,
    states: ["idle", "trace", "cast", "crack", "shatter", "settle"],
    kind: "Made with the skill",
    prompt:
      "Pixel art frost witch: idle in falling snow, trace a rune in the air, a line of ice spikes erupts along the " +
      "ground to the right, they crack and shatter into shards, the snow settles. Frozen pine forest in daylight, " +
      "160×90.",
  },
  {
    slug: "druid-bear-shift",
    tags: ["humanoid", "creature", "magic", "day"],
    title: "Druid Bear Shift",
    still: 240,
    res: [128, 96],
    loop: 8,
    states: ["idle", "swirl", "shift", "roar", "revert", "settle"],
    kind: "Made with the skill",
    prompt:
      "Pixel art druid: idle with a wooden staff, leaves swirl around her, she transforms into a bear in a burst of " +
      "leaves, the bear roars, then swirls back into human form. Ancient forest glade, 128×96.",
  },
  {
    slug: "necromancer-grave-hand",
    tags: ["humanoid", "magic", "night"],
    title: "Graveyard Necromancer",
    still: 264,
    res: [128, 96],
    loop: 8,
    states: ["idle", "chant", "rise", "grasp", "crumble", "settle"],
    kind: "Made with the skill",
    prompt:
      "Pixel art necromancer: idle with a lantern staff, green runes circle a grave, a skeleton hand claws out of the " +
      "soil and grasps at the air, then crumbles back down. Graveyard under a full moon, 128×96.",
  },
  {
    slug: "astronaut-moon-hop",
    tags: ["humanoid", "space"],
    title: "Moon Hopper",
    still: 180,
    res: [160, 90],
    loop: 8,
    states: ["idle", "crouch", "hop", "drift", "land", "wave"],
    kind: "Made with the skill",
    prompt:
      "Pixel art astronaut: idle bobbing in low gravity, jetpack hop across a crater, drift down slowly with dust " +
      "puffs, land with a soft bounce and wave. Cratered moon under a ringed planet, 160×90.",
  },
  {
    slug: "scavenger-sandstorm",
    tags: ["humanoid", "day"],
    title: "Dune Scavenger",
    still: 150,
    res: [160, 90],
    loop: 8,
    states: ["idle", "roll", "hide", "storm", "clear", "wipe"],
    kind: "Made with the skill",
    prompt:
      "Pixel art wasteland scavenger: idle with scarf flapping, a sandstorm rolls in from the left, crouch behind a " +
      "rusted car door as sand streams past, the storm clears, stand and wipe the goggles. Rusted desert ruins, 160×90.",
  },
  {
    slug: "fisherman-pier-catch",
    tags: ["humanoid", "dawn"],
    title: "Dawn Pier Fisher",
    still: 366,
    res: [160, 90],
    loop: 8,
    states: ["idle", "wind up", "cast", "wait", "yank", "reel", "show off", "drop"],
    kind: "Made with the skill",
    prompt:
      "Pixel art fisherman on a wooden pier: idle with a lantern swaying, cast the line, the bobber drifts and dips " +
      "twice, yank and reel in a flopping silver fish, hold it up proudly then drop it in the bucket. Misty lake at " +
      "dawn, 160×90.",
  },
  {
    slug: "mech-missile-volley",
    tags: ["robot", "projectile", "dusk"],
    title: "Ruin Walker Volley",
    still: 204,
    res: [160, 90],
    loop: 8,
    states: ["idle", "open pods", "volley", "impact", "close", "cool down"],
    kind: "Made with the skill",
    prompt:
      "Pixel art bipedal mech: idle venting steam, shoulder pods open, fire a volley of six missiles that arc up and " +
      "off screen right, distant flashes on the horizon, pods close and the barrels cool from orange to grey. Ruined " +
      "city at dusk, 160×90.",
  },
  {
    slug: "netrunner-firewall-breach",
    tags: ["humanoid", "interior", "night"],
    title: "Neon Netrunner",
    still: 282,
    res: [128, 96],
    loop: 8,
    states: ["idle", "type", "firewall", "crack", "shatter", "stretch", "settle"],
    kind: "Made with the skill",
    prompt:
      "Pixel art cyberpunk netrunner: sit at a floating holo keyboard, type faster as green code streams upward, a " +
      "red firewall cube appears and cracks, shatters into data bits, lean back and stretch. Rain-streaked neon " +
      "apartment at night, 128×96.",
  },
  {
    slug: "inventor-clockwork-bird",
    tags: ["humanoid", "craft", "interior"],
    title: "Clockwork Inventor",
    still: 240,
    res: [160, 90],
    loop: 8,
    states: ["idle", "crank", "redline", "whistle", "flight", "land"],
    kind: "Made with the skill",
    prompt:
      "Pixel art steampunk inventor: crank a brass contraption on the workbench, gears spin faster and a pressure " +
      "gauge climbs into the red, steam whistles, a clockwork bird pops out, flutters one loop around the room and " +
      "lands back in its box. Cluttered workshop interior, 160×90.",
  },
  {
    slug: "mermaid-pearl-song",
    tags: ["humanoid", "magic", "underwater"],
    title: "Reef Mermaid Pearl",
    still: 300,
    res: [128, 96],
    loop: 8,
    states: ["idle", "sing", "open", "rise", "catch", "close"],
    kind: "Made with the skill",
    prompt:
      "Pixel art mermaid: idle swimming among swaying kelp, sing with music notes and bubbles rising, a giant clam " +
      "opens and a glowing pearl floats up, catch it and the clam closes. Coral reef with light rays from above, " +
      "128×96.",
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
  { label: 'Action', tags: [['melee', 'Melee'], ['projectile', 'Projectile'], ['magic', 'Magic'], ['breath', 'Breath'], ['impact', 'Impact'], ['lightning', 'Lightning'], ['craft', 'Craft'], ['heal', 'Heal']] },
  { label: 'Setting', tags: [['dawn', 'Dawn'], ['day', 'Day'], ['dusk', 'Dusk'], ['night', 'Night'], ['underwater', 'Underwater'], ['interior', 'Interior'], ['space', 'Space']] },
  { label: 'Resolution', tags: [...new Set(SHOWCASES.map(resTag))].sort().map(t => [t, t.replace('x', '×')]) },
];

export const animUrl = s => `/anims/${s.slug}.html`;
// The ?still#t=N seek mode renders tick N once and stops, so a paused frame costs no loop.
export const stillOf = (file, tick = 60) => `${file}?still#t=${tick}`;
export const detailUrl = s => `/showcase/detail/?s=${s.slug}`;
export const metaLine = s => `${s.res[0]}×${s.res[1]} · ${s.loop} s loop · ${s.states.join(' → ')}`;
