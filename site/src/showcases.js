// Gallery data. To add a showcase: drop <slug>.html into public/anims/, run `pnpm posters <slug>`, and add one entry.
// Array order is display order: [0] is the landing hero, [1..3] the landing tiles.
// Required: slug, tags (ids from TAG_GROUPS), title, res [w, h] (logical px), loop (sum(DUR) / 60, seconds), states, kind, prompt.
// Optional: note, still (tick shown while paused, default 60), ref (true for the engine reference),
// country (an id from COUNTRIES, for subjects from one culture's myth or history; default other).
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
    country: "jp",
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
    country: "cn",
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
    country: "cn",
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
    country: "cn",
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
    country: "vn",
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
    slug: "vampire-bat-cloak",
    tags: ["humanoid", "magic", "night"],
    title: "Vampire Bat Cloak",
    still: 260,
    res: [128, 96],
    loop: 8,
    states: ["idle", "spread", "burst", "swarm", "return", "collar"],
    kind: "Made with the skill",
    prompt:
      "Pixel art vampire lord: stand on a castle balcony, spread the cape wide, it bursts into a swarm of bats that " +
      "circles the full moon, the bats stream back and knit into the cape, adjust the collar. Gothic castle at night, " +
      "128×96.",
  },
  {
    slug: "medusa-stone-gaze",
    tags: ["humanoid", "magic", "dusk"],
    country: "gr",
    title: "Medusa Stone Gaze",
    still: 222,
    res: [128, 96],
    loop: 8,
    states: ["idle", "crow", "gaze", "fall", "settle"],
    kind: "Made with the skill",
    prompt:
      "Pixel art Medusa: idle with snake hair writhing, a crow flies in from the right, her eyes flash green, the crow " +
      "turns to stone mid-flight, drops and shatters on the temple steps, the snakes settle. Ruined Greek temple at " +
      "dusk, 128×96.",
  },
  {
    slug: "oni-taiko-drummer",
    tags: ["creature", "impact", "night"],
    country: "jp",
    title: "Oni Taiko Drummer",
    still: 336,
    res: [160, 90],
    loop: 8,
    states: ["idle", "raise", "hit", "lift", "hit", "lift", "hit", "wind up", "double", "shout", "recover"],
    kind: "Made with the skill",
    prompt:
      "Pixel art oni taiko drummer: idle with two drumsticks, raise both arms high, pound the big taiko three times, " +
      "each hit sends a ring of sound rippling out and swings the paper lanterns, a final double strike and a shout. " +
      "Shrine festival at night, 160×90.",
  },
  {
    slug: "cuoi-banyan-moon",
    tags: ["humanoid", "magic", "space"],
    country: "vn",
    title: "Chu Cuoi on the Moon",
    still: 240,
    res: [128, 96],
    loop: 8,
    states: ["idle", "slip", "rise", "jump", "pull", "pat", "sit"],
    kind: "Made with the skill",
    prompt:
      "Pixel art Chu Cuoi on the moon: sit under the magic banyan tree, its roots slip free and the tree starts " +
      "drifting upward, jump and grab a hanging root, pull the tree back down and pat the soil, sit again. Moon " +
      "surface with the Earth low on the horizon and star lanterns drifting past, Mid-Autumn night, 128×96.",
  },
  {
    slug: "sun-priest-ankh",
    tags: ["humanoid", "magic", "dusk"],
    country: "eg",
    title: "Sun Priest of Ra",
    still: 246,
    res: [128, 96],
    loop: 8,
    states: ["idle", "raise", "dawn", "beam", "fade", "bow"],
    kind: "Made with the skill",
    prompt:
      "Pixel art Egyptian sun priest: kneel before an obelisk, raise a golden ankh, the sun disc rises behind the " +
      "pyramids and the hieroglyphs on the obelisk light up one by one, a beam strikes the ankh, then the glow fades as " +
      "the priest bows. Desert temple at dusk, 128×96.",
  },
  {
    slug: "thanh-giong-ascension",
    tags: ["humanoid", "breath", "magic", "dawn"],
    country: "vn",
    title: "Thanh Giong Rises",
    still: 440,
    res: [160, 90],
    loop: 10,
    states: ["still", "call", "grow", "forge", "charge", "bamboo", "ascend", "return"],
    kind: "Made with the skill",
    note: "The longest brief so far: eight beats, a hero drawn at three sizes, an iron horse, and a village that puts itself back together for the loop.",
    prompt:
      "Pixel art Thánh Gióng, the Vietnamese boy-hero who grew into a giant, 160×90, one fixed shot, 10-second " +
      "seamless loop. Scene: the edge of a Văn Lang village at dawn: a thatched stilt hut on the left with a dense " +
      "bamboo grove beside it, rice paddies across the middle, Sóc Sơn mountain on the right horizon under slow " +
      "clouds, and dark invader smoke with torn banners rising beyond the paddies. " +
      "1. still: a three-year-old boy lies silent on a straw mat in the hut doorway; the bamboo sways and the smoke " +
      "creeps closer. " +
      "2. call: a war drum booms from off-screen left, rings of sound rolling across the paddies; the boy's eyes open, " +
      "he sits up and lifts a small fist toward the smoke. " +
      "3. grow: he grows in three jolts, each with a pulse of golden light and thatch bursting off the hut roof, until " +
      "he stands a giant twice the height of the hut. " +
      "4. forge: iron armor clamps onto him plate by plate in showers of sparks, an iron staff drops into his hand, and " +
      "an iron horse slams down beside him, eyes glowing red and fire curling from its nostrils; he vaults onto its back. " +
      "5. charge: the horse rears and breathes a long jet of flame across the paddies toward the smoke; he whirls the " +
      "staff overhead and strikes, and the staff snaps in a burst of sparks. " +
      "6. bamboo: without stopping he tears a whole bamboo clump out of the grove, roots and all, and sweeps it in one " +
      "huge arc; the horse's fire scorches the stalks gold as the sweep blows the smoke and banners apart. " +
      "7. ascend: he gallops toward the mountain, sheds the armor piece by piece, each plate glinting as it falls, and " +
      "horse and rider climb into the clouds on a trail of golden light. " +
      "8. return: light drifts down like pollen, the golden bamboo fades back to green, the hut's roof is whole again, " +
      "the smoke begins to gather on the horizon, and a small boy lies silent on the mat, the legend ready to begin again.",
  },
  {
    slug: "lac-long-quan-sea-demon",
    tags: ["humanoid", "creature", "projectile", "magic", "dusk"],
    country: "vn",
    title: "Lac Long Quan Slays Ngu Tinh",
    still: 312,
    res: [160, 90],
    loop: 12,
    states: ["watch", "rise", "forge", "hurl", "dragon", "cleave", "islands", "return"],
    kind: "Made with the skill",
    note: "A hero who changes shape mid-loop: the dragon's body trails its own head along one path, and a bank of sea mist hides the islets and the mended boat before the loop closes.",
    prompt:
      "Pixel art Lạc Long Quân, the Dragon Lord of Vietnamese legend, slaying the sea demon Ngư Tinh, 160×90, one " +
      "fixed shot, 12-second seamless loop. Scene: a rocky shore of the East Sea at stormy dusk: a jagged cliff on the " +
      "left with a driftwood fire in a ring of stones, a small fishing boat moored in the shallows below, dark green " +
      "waves across the middle and right, low hills on the far horizon, and heavy clouds churning overhead. " +
      "1. watch: Lạc Long Quân, a tall young lord in a scale-patterned tunic with a dragon crest on his headband, " +
      "stands on the cliff beside the fire gazing out to sea; the waves roll, the fire flickers, the empty boat bobs. " +
      "2. rise: the sea bulges and boils on the right and Ngư Tinh surfaces, a monstrous fish-demon with ragged fins, " +
      "a spined back and a cave-like jaw full of teeth; it snaps the fishing boat in half and a wall of spray slaps the cliff. " +
      "3. forge: he thrusts a block of iron into the fire and breathes on the flames; the iron glows red, orange, then " +
      "white-hot while sparks and embers swirl up into the wind. " +
      "4. hurl: the demon lunges at the cliff with its jaws wide; he hurls the white-hot iron straight into its mouth, " +
      "steam and fire blast out of its gills and it thrashes, lighting the waves from inside. " +
      "5. dragon: he leaps from the cliff and in a flash becomes a long golden-green dragon, sinuous and wingless with " +
      "a wavy crest and streaming whiskers, and the storm clouds split in a ring of light around him. " +
      "6. cleave: the dragon coils once around the demon and with one lash of his tail cuts it into three pieces that " +
      "fly apart in a spray of dark water. " +
      "7. islands: the three pieces crash into the sea and harden into three rocky islets; the storm breaks, the clouds " +
      "part to show the first stars, and the waves settle into gentle swells. " +
      "8. return: sea mist rolls in and swallows the islets, the dragon spirals down onto the cliff and becomes a man " +
      "again beside the rekindled fire, a whole fishing boat bobs at its mooring, and the clouds gather again, the " +
      "legend ready to begin anew.",
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
    country: "jp",
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

// Filter groups on /showcase/ (a badge + popover each): OR within a group, AND across groups. Resolution tags come from `res`.
export const resTag = s => `${s.res[0]}x${s.res[1]}`;
export const COUNTRIES = [['vn', 'Vietnam'], ['cn', 'China'], ['jp', 'Japan'], ['gr', 'Greece'], ['eg', 'Egypt'], ['other', 'Other']];
export const countryOf = s => s.country ?? 'other';
export const TAG_GROUPS = [
  { label: 'Character', tags: [['humanoid', 'Humanoid'], ['creature', 'Creature'], ['robot', 'Robot']] },
  { label: 'Action', tags: [['melee', 'Melee'], ['projectile', 'Projectile'], ['magic', 'Magic'], ['breath', 'Breath'], ['impact', 'Impact'], ['lightning', 'Lightning'], ['craft', 'Craft'], ['heal', 'Heal']] },
  { label: 'Setting', tags: [['dawn', 'Dawn'], ['day', 'Day'], ['dusk', 'Dusk'], ['night', 'Night'], ['underwater', 'Underwater'], ['interior', 'Interior'], ['space', 'Space']] },
  { label: 'Country', flags: true, tags: COUNTRIES.filter(([id]) => SHOWCASES.some(s => countryOf(s) === id)) },
  { label: 'Resolution', tags: [...new Set(SHOWCASES.map(resTag))].sort().map(t => [t, t.replace('x', '×')]) },
];

export const animUrl = s => `/anims/${s.slug}.html`;
export const posterUrl = s => `/posters/${s.slug}.png`;
// The ?still#t=N seek mode renders tick N once and stops, so a paused frame costs no loop.
export const stillOf = (file, tick = 60) => `${file}?still#t=${tick}`;
export const detailUrl = s => `/showcase/detail/?s=${s.slug}`;
export const metaLine = s => `${s.res[0]}×${s.res[1]} · ${s.loop} s loop · ${s.states.join(' → ')}`;
