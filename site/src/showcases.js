// Gallery data, newest first. To add a showcase: drop <slug>.html into public/anims/, run `pnpm posters <slug>`, and add one
// entry at the top: /showcase/ lists this order (Oldest first just reverses it) and the landing's tiles are the newest three.
// Required: slug, tags (ids from TAG_GROUPS), title, res [w, h] (logical px), loop (sum(DUR) / 60, seconds), states, kind, prompt.
// Optional: note, still (tick shown while paused, default 60), ref (true for the engine reference), featured (true on one
// entry: the landing's feature card, default the newest),
// country (an id from COUNTRIES, for subjects from one culture's myth or history; default other).
export const SHOWCASES = [
  {
    slug: "obatala-shapes-the-world",
    tags: ["humanoid", "creature", "magic", "dawn"],
    country: "ng",
    title: "Obatala Shapes the World",
    still: 800,
    res: [160, 90],
    loop: 16,
    states: ["waters", "chain", "descend", "sand", "hen", "palm", "clay", "breath", "ife", "olokun"],
    kind: "Made with the skill",
    note: "The land is one distance field grown out from the first mound of sand, so the hen's scratching spreads hills and valleys with a single radius, and Olokun's wave takes them back by masking everything behind its crest.",
    prompt:
      "Pixel art the Yoruba creation myth of Obatala, who made the land at Ile-Ife, 160×90, one fixed shot, " +
      "16-second seamless loop, 10 states. Scene: a world with only water below and sky above: a wide primordial " +
      "marsh of shimmering water in the lower half, and in the upper half the realm of Olorun in golden clouds with " +
      "a palace of light; later a green land and the city of Ile-Ife spread across the water; the light runs from a " +
      "soft violet dawn through gold day to a deep dusk and back. Keep the frame readable: Obatala and one wonder " +
      "at a time. 1. waters: violet dawn over the endless marsh, mist drifting, only the glints of the sea goddess " +
      "Olokun moving below. 2. chain: from the clouds Obatala, in white robes with white beads, lowers a golden " +
      "chain that uncoils link by link down to the water. 3. descend: he climbs down it carrying a snail shell, a " +
      "five-toed hen and a palm nut, the chain swaying. 4. sand: hanging just above the water, he pours sand from " +
      "the snail shell and a small golden mound rises. 5. hen: the hen hops down and scratches, flinging sand in " +
      "every direction, and the land spreads across the frame into hills and valleys. 6. palm: he plants the palm " +
      "nut; a palm tree shoots up, then a forest of palms and kola trees, birds bursting from them. 7. clay: by a " +
      "pond he shapes figures of clay, rows of small people drying in the sun. 8. breath: the sky god Olodumare " +
      "breathes; a swirl of light flows over the figures and they stand up, stretch and dance to talking drums. 9. " +
      "ife: the city of Ile-Ife grows, with red earth walls, thatched roofs, a market of indigo and orange cloth, " +
      "drummers and a palace courtyard. 10. olokun: at dusk the jealous sea goddess Olokun raises great waves that " +
      "wash over the land, the city sinks back into the marsh, and the golden chain slides up into the clouds, " +
      "ready to fall again.",
  },
  {
    slug: "maui-fishes-the-island",
    tags: ["humanoid", "creature", "magic", "dawn"],
    country: "nz",
    title: "Maui Fishes Up the Island",
    still: 800,
    res: [160, 90],
    loop: 16,
    states: ["shore", "reveal", "hook", "bait", "bite", "haul", "island", "carve", "green", "return"],
    kind: "Made with the skill",
    note: "The fish and the island are one skyline: the same silhouette rises as scales, dithers into rock, takes a carved mountain profile and then a forest that sweeps across it before the mist sinks it again.",
    prompt:
      "Pixel art the Māori legend of Māui fishing up the North Island of New Zealand, 160×90, one fixed shot, " +
      "16-second seamless loop, 10 states. Scene: the open Pacific at the edge of the world: a big carved waka " +
      "canoe with a red prow in the middle of the sea, a low shore of pōhutukawa trees with red blossoms at the " +
      "left, and a wide empty ocean at the right where the island will rise; the light runs from dawn through " +
      "blazing noon and golden dusk to a night of Matariki stars, and back. Keep the frame readable: Māui, his " +
      "brothers in the canoe, and one wonder at a time. 1. shore: at dawn Māui's brothers push the waka off from " +
      "the shore, not seeing Māui hidden under the floorboards. 2. reveal: far out at sea Māui pops up from under " +
      "the boards and the brothers shake their paddles at him. 3. hook: he holds up his magic fishhook carved from " +
      "his grandmother's jawbone; it gleams with a pearly light. 4. bait: he baits the hook with a spark of his own " +
      "blood and casts the line far into the deep, glowing as it sinks. 5. bite: the line goes taut, the waka tips " +
      "and the sea around it bubbles and swirls. 6. haul: Māui hauls, chanting, his brothers pull with him, and a " +
      "vast fish rises, its back breaking the surface across the whole horizon. 7. island: the fish becomes an " +
      "island; water pours off it in waterfalls and it lies still under the setting sun. 8. carve: while Māui is " +
      "away, the brothers leap onto the fish and hack at it, carving valleys, mountains and lakes, and a volcano " +
      "steams. 9. green: forest spreads over it in a wave, silver ferns unfurl and tūī birds fly as the island " +
      "glows under the Matariki stars. 10. return: sea mist rolls in at dawn, the island sinks back into legend " +
      "beneath the waves, and the waka rests on the shore again.",
  },
  {
    slug: "oisin-tir-na-nog",
    tags: ["humanoid", "creature", "magic", "dusk"],
    country: "ie",
    title: "Oisin in Tir na nOg",
    still: 150,
    res: [160, 90],
    loop: 12,
    states: ["hunt", "niamh", "ride", "youth", "years", "home", "fall", "return"],
    kind: "Made with the skill",
    note: "The ring fort is one sprite with a baked ruin beside it, so three hundred years are a dither between the two, while the seasons whirl through the orchard of Tír na nÓg as a palette cycle on the island alone.",
    prompt:
      "Pixel art the Irish legend of Oisín in Tír na nÓg, the Land of Youth, 160×90, one fixed shot, 12-second " +
      "seamless loop, 8 states. Scene: the wild west coast of Ireland: green cliffs and a round stone fort at the " +
      "left, the Atlantic across the middle, and far out on the right horizon a glowing island of apple blossoms " +
      "with a castle of white stone; the light runs from gold dusk through a shimmering summer and a grey rain, and " +
      "back. Keep the frame readable: Oisín and one wonder at a time. 1. hunt: the warriors of the Fianna hunt " +
      "along the clifftop with their hounds, Oisín with his harp on his back. 2. niamh: Niamh of the Golden Hair " +
      "rides out of the sea on the white horse Embarr, galloping over the waves, and holds out her hand. 3. ride: " +
      "Oisín leaps up behind her and they gallop across the sea, the hooves throwing spray, while a ghostly deer " +
      "and hound run beside them on the water. 4. youth: on Tír na nÓg it is endless summer; apple blossoms fall, a " +
      "feast glows in the castle, and Oisín plays his harp. 5. years: the seasons whirl past in a blur of blossom, " +
      "sun and snow: three hundred years in the blink of an eye. 6. home: Oisín rides Embarr back alone to Ireland " +
      "and finds the fort in ruins, overgrown with grass, and small farmers struggling to lift a stone. 7. fall: he " +
      "leans from the saddle to help, the girth snaps, he falls to the ground and in a flash turns into an old man " +
      "with a long white beard. 8. return: the old man fades into the mist, Embarr gallops back across the waves " +
      "into the sunset toward Niamh's glowing island, and on the cliff the Fianna's hunting horns sound again.",
  },
  {
    slug: "selkie-skin",
    tags: ["humanoid", "creature", "magic", "night"],
    country: "gb-sct",
    title: "The Selkie's Skin",
    still: 160,
    res: [160, 90],
    loop: 12,
    states: ["seals", "shed", "hide", "bride", "found", "sea", "farewell", "return"],
    kind: "Made with the skill",
    note: "The cottage years are palette sweeps on the land only while the sea stays put, and every change between seal and woman happens on a one-frame flash, so the same figures swap sprites without an in-between.",
    prompt:
      "Pixel art the Scottish folk tale of the selkie wife, 160×90, one fixed shot, 12-second seamless loop, 8 " +
      "states. Scene: an Orkney shore under the midsummer twilight: at the left a stone cottage with a turf roof " +
      "and peat smoke, a sandy beach in the middle, dark skerries and the grey-green North Sea at the right, under " +
      "a sky that stays pale pink and violet at midnight. Keep the frame readable: the selkie and one other figure " +
      "at a time. 1. seals: seals haul out on the skerries, barking, the sea shining. 2. shed: they slip off their " +
      "silver sealskins and become women with long dark hair, dancing in a ring on the sand. 3. hide: a young " +
      "fisherman creeps out of the cottage and hides one sealskin in the thatch; the others pull on their skins and " +
      "dive, leaving one woman alone. 4. bride: the seasons pass by the cottage; she hangs nets and walks the " +
      "shore, always gazing at the sea. 5. found: a gust of wind lifts the thatch and the skin falls, glowing " +
      "silver; she holds it to her face. 6. sea: she runs to the shore, pulls on the skin and dives in as a seal. " +
      "7. farewell: a great bull seal rises beside her; she looks back once, and a fresh fish lands on the cottage " +
      "step. 8. return: midsummer comes round again and the seals haul out on the skerries as before.",
  },
  {
    slug: "wayang-kulit-ramayana",
    tags: ["humanoid", "projectile", "night"],
    country: "id",
    title: "Wayang Kulit: the Ramayana",
    still: 230,
    res: [160, 90],
    loop: 12,
    states: ["gunungan", "forest", "abduct", "army", "battle", "victory", "close", "dawn"],
    kind: "Made with the skill",
    note: "Every puppet is drawn into one shadow mask, so its edges soften against the screen, its carved lace lets the lamp shine through, and only the golden deer keeps its gilt.",
    prompt:
      "Pixel art the Javanese shadow play, wayang kulit, telling the Ramayana, 160×90, one fixed shot, 12-second " +
      "seamless loop, 8 states. Scene: a night performance in a village pavilion: a big white screen fills the " +
      "middle, lit from behind by a flickering oil lamp so the carved leather puppets cast crisp, lacy shadows with " +
      "a warm halo; in front, a row of gamelan musicians with bronze gongs and metallophones; carved banana trunks " +
      "at the base of the screen hold the waiting puppets; a starry sky and palm silhouettes above. Keep the frame " +
      "readable: two shadow puppets at a time on the screen, the lamp flicker always alive. 1. gunungan: the " +
      "leaf-shaped tree-of-life puppet quivers in the center of the screen, opening the play. 2. forest: Prince " +
      "Rama and Sita walk through a shadow forest and a golden deer leaps past. 3. abduct: the demon king Rahwana, " +
      "huge with bulging eyes and a crown, swoops in and carries Sita away. 4. army: monkey warriors leap across " +
      "the screen, building a bridge of rocks. 5. battle: Rama and Rahwana clash, arrows flying as shadow streaks, " +
      "the gongs pounding. 6. victory: Rama's arrow strikes, Rahwana topples off the screen, and Sita returns. 7. " +
      "close: the gunungan returns and spins, closing the story, and the gamelan players bow. 8. dawn: the lamp " +
      "burns low, the sky pales to dawn over the palms, and the lamp flares up again for the next night.",
  },
  {
    slug: "gilgamesh-uruk-epic",
    tags: ["humanoid", "creature", "melee", "dusk"],
    country: "iq",
    title: "The Epic of Gilgamesh",
    still: 440,
    res: [160, 90],
    loop: 20,
    states: ["uruk", "wild", "wrestle", "forest", "humbaba", "cedar", "bull", "grief", "waters", "plant", "serpent", "return"],
    kind: "Made with the skill",
    note: "The Waters of Death are the same frame drowned: a black sea rises over the plain, then deep water covers everything, and draining it back reveals the morning pool where the serpent steals the plant.",
    prompt:
      "Pixel art the Epic of Gilgamesh, the oldest story ever written, 160×90, one fixed shot, 20-second seamless " +
      "loop, 12 states. Scene: ancient Mesopotamia: at the right the mud-brick walls of Uruk with a blue glazed " +
      "gate and a stepped ziggurat, the Euphrates winding through date palms in the middle, and at the left a hill " +
      "where the dark giants of the Cedar Forest rise into mist; the light runs from a copper dusk through night, " +
      "blazing noon and a storm, and back to dusk. Keep the frame readable: Gilgamesh and one companion or foe at a " +
      "time. 1. uruk: at dusk Gilgamesh, king of Uruk, paces the rampart in a lion-fringed robe with a curled " +
      "beard. 2. wild: out by a waterhole the wild man Enkidu, covered in hair, drinks beside gazelles. 3. wrestle: " +
      "Enkidu comes to the gate and they wrestle; the doorposts shake and dust bursts, until they clasp arms and " +
      "laugh as friends. 4. forest: the two walk into the Cedar Forest, trunks towering past the top of the frame. " +
      "5. humbaba: the guardian Humbaba bursts out, his face a maze of coils and seven auras flaring around him " +
      "like halos of fire; the sun god sends thirteen winds that pin him to the ground. 6. cedar: they fell the " +
      "tallest cedar and float it down the river as a raft to make a gate for Uruk. 7. bull: the Bull of Heaven " +
      "stamps down from the clouds, each snort cracking the earth into pits; Enkidu seizes its horns and Gilgamesh " +
      "drives his blade between its shoulders. 8. grief: under a night of stars Enkidu lies still and Gilgamesh " +
      "kneels over him, tearing his robe. 9. waters: Gilgamesh crosses the Waters of Death with the boatman " +
      "Urshanabi, poling across a black sea toward a far glowing island. 10. plant: he ties stones to his feet and " +
      "sinks to the seabed, where he plucks a thorny flower that glows green: the plant of youth. 11. serpent: as " +
      "he bathes in a pool on the way home, a serpent slides out, swallows the plant and sheds its skin in a flash " +
      "of light, young again. 12. return: at dawn Gilgamesh stands on the walls of Uruk again and looks out over " +
      "the city he built, and the sky warms back into copper dusk.",
  },
  {
    slug: "tenochtitlan-eagle-lake",
    tags: ["humanoid", "creature", "craft", "dawn"],
    country: "mx",
    title: "Founding of Tenochtitlan",
    still: 186,
    res: [160, 90],
    loop: 16,
    states: ["wander", "omen", "island", "chinampas", "causeway", "temple", "market", "newfire", "city", "return"],
    kind: "Made with the skill",
    note: "The city is four reveal layers baked at boot, chinampas, causeways, houses and the temple, each shown by its own growth threshold, so the morning mist takes the whole island back with one dither.",
    prompt:
      "Pixel art the founding of Tenochtitlan, the Aztec city on the lake, 160×90, one fixed shot, 16-second " +
      "seamless loop, 10 states. Scene: a wide view across Lake Texcoco from the reedy western shore: a small rocky " +
      "island in the middle of the blue lake, the snow volcanoes Popocatépetl (smoking) and Iztaccíhuatl on the far " +
      "horizon, reeds and white herons in the foreground; the day turns from dawn to noon, dusk, a black night and " +
      "back to dawn. Keep the frame readable: the island is the stage and grows from bare rock to a city while the " +
      "shore stays the same. 1. wander: at dawn a line of Mexica travelers in white cotton and feather mantles " +
      "walks the shore, a priest carrying the sacred bundle of their god Huitzilopochtli. 2. omen: on the island a " +
      "nopal cactus heavy with red fruit catches the light; a golden eagle swoops down, lands on it and grips a " +
      "writhing serpent in its beak, wings spread wide against the sun. 3. island: the travelers pole reed canoes " +
      "across and plant a banner beside the cactus. 4. chinampas: they weave floating gardens of reeds and mud " +
      "around the island; rows of maize, beans and orange marigolds sprout in grids of green. 5. causeway: stone " +
      "causeways and canals reach out to the shores, and canoes loaded with goods glide along them. 6. temple: the " +
      "Templo Mayor rises step by step in white stone with twin shrines on top, one red and one blue, smoke curling " +
      "from both. 7. market: at noon the Tlatelolco market fills with colored cloth, cacao, feathers and pottery, " +
      "drummers and dancers in green quetzal headdresses whirling. 8. newfire: at night every fire in the city goes " +
      "out and the lake goes black, then priests kindle the New Fire on a far hill and torches race across the " +
      "causeways until every house glows. 9. city: at dawn the whole island city gleams white and red on the blue " +
      "lake below the volcanoes. 10. return: morning mist rolls over the lake, the city melts back into bare rock " +
      "and reeds, and the eagle lifts off from the cactus as the travelers appear on the shore again.",
  },
  {
    slug: "rostam-white-div",
    tags: ["humanoid", "creature", "melee", "heal", "night"],
    country: "ir",
    title: "Rostam and the White Div",
    still: 400,
    res: [160, 90],
    loop: 12,
    states: ["ride", "dragon", "witch", "cave", "duel", "heart", "heal", "return"],
    kind: "Made with the skill",
    note: "The miniature look comes from flat pinnacles with spongy cells traced in gold, gold-edged ribbon clouds and rosette stars; the night keeps a turquoise horizon under the indigo as the old painters did.",
    prompt:
      "Pixel art the Persian epic Shahnameh: Rostam and the White Div, 160×90, one fixed shot, 12-second seamless " +
      "loop, 8 states. Scene: the wild mountains of Mazandaran: a rocky pass in front, a spring with a cypress tree " +
      "at the left, jagged peaks and a black cave mouth at the right, and a Persian-miniature sky of turquoise, " +
      "gold and deep indigo with bright stars. Keep the frame readable: Rostam and one foe at a time. 1. ride: at " +
      "dusk the hero Rostam rides in on his red-roan horse Rakhsh, wearing his leopard-skin coat and helmet, the " +
      "ox-headed mace on his saddle. 2. dragon: he sleeps by the spring; a dragon slides out of the dark, Rakhsh " +
      "rears and neighs, and Rostam wakes and cuts it down as it bursts into smoke. 3. witch: a lovely woman in " +
      "silk brings him wine and sings; when he speaks the name of God she twists into a hag, and he strikes her " +
      "away. 4. cave: at night he rolls away the stone and enters the White Div's cave, the gloom lit by glowing " +
      "eyes. 5. duel: the White Div, a white-furred giant with horns and a huge millstone, rises and they wrestle; " +
      "rocks crack and dust flies until Rostam heaves him down. 6. heart: Rostam draws out the div's glowing heart. " +
      "7. heal: he brings it to the blind King Kay Kavus; three drops touch the king's eyes, they shine as his " +
      "sight returns, and the soldiers cheer. 8. return: at dawn Rostam rides Rakhsh out of the mountains, the cave " +
      "dark and empty, and the sky turns back to dusk.",
  },
  {
    slug: "manco-capac-cusco",
    tags: ["humanoid", "magic", "craft", "dawn"],
    country: "pe",
    title: "Manco Capac Founds Cusco",
    still: 580,
    res: [160, 90],
    loop: 12,
    states: ["titicaca", "emerge", "journey", "sink", "cusco", "teach", "raymi", "night"],
    kind: "Made with the skill",
    note: "Cusco and its terraces are baked bitmaps revealed row by row from the ground up, and the Milky Way wheels about a pole below the horizon, drawn only where the sky has turned to night.",
    prompt:
      "Pixel art the Inca legend of Manco Capac and Mama Ocllo, founders of Cusco, 160×90, one fixed shot, " +
      "12-second seamless loop, 8 states. Scene: the high Andes: at the left the deep blue Lake Titicaca with reed " +
      "boats and the Island of the Sun, snowy peaks behind, and at the right a green valley under the mountains " +
      "where Cusco will rise; the sky runs from a gold dawn through a deep blue noon and a purple dusk to a starry " +
      "night with the Milky Way, and back. Keep the frame readable: the two founders and one wonder at a time. 1. " +
      "titicaca: at dawn the sun god Inti rises from behind the Island of the Sun, its rays spreading over the " +
      "lake. 2. emerge: from the sparkling foam Manco Capac and Mama Ocllo rise, dressed in bright woven cloth with " +
      "gold ear discs, Manco holding a golden staff. 3. journey: they walk over the mountains past grazing llamas, " +
      "testing the staff in the ground, but it will not sink. 4. sink: in the green valley the staff sinks into the " +
      "earth to its tip in a flash of gold, and the land glows. 5. cusco: fitted stone walls with trapezoid doors " +
      "rise, and the golden Temple of the Sun gleams at the center. 6. teach: stepped terraces of maize and " +
      "potatoes climb the hills as Manco teaches farming and Mama Ocllo weaves a bright striped cloth. 7. raymi: at " +
      "the Inti Raymi festival dancers in red and gold spin, a great gold sun disc flashes, and a condor soars " +
      "overhead. 8. night: the stars and the Milky Way wheel over the quiet city, which fades into the mist as dawn " +
      "breaks over the lake again.",
  },
  {
    slug: "harbor-titan",
    tags: ["creature", "robot", "breath", "impact", "night"],
    title: "Harbor Titan",
    still: 470,
    res: [160, 90],
    loop: 12,
    states: ["harbor", "boil", "rise", "roar", "drop", "clash", "retreat", "dawn"],
    kind: "Made with the skill",
    note: "The blackout is a per-window block threshold: every lit window belongs to one of twelve city blocks, so the dark sweeps across the skyline and the lights come back the same way at dawn.",
    prompt:
      "Pixel art a giant-monster movie night: a sea titan against a giant robot in a harbor city, 160×90, one fixed " +
      "shot, 12-second seamless loop, 8 states. Scene: a neon port city at night: container cranes and stacked " +
      "colored containers at the left, a lighthouse on a breakwater, skyscrapers with lit windows along the bay at " +
      "the back, the dark harbor water across the front; the sky is navy with a low moon. The titan is an original " +
      "creature, not any film monster: an abyssal beast with crab-armored forearms, a crest of glowing blue vents " +
      "down its back, four eyes and barnacle-crusted plates. Keep the frame readable: the titan and the robot each " +
      "fill half the frame height, ships and buildings small. 1. harbor: a ferry crosses, cranes swing, and the " +
      "lighthouse sweeps its beam. 2. boil: the water bubbles, sonar rings pulse out, ships rock and sirens flash " +
      "red along the pier. 3. rise: the titan rises from the harbor, water streaming off its plates, its vents " +
      "lighting up one by one. 4. roar: it roars and fires a cyan beam from its jaws across the sky, and the city " +
      "lights go dark block by block. 5. drop: a giant robot drops from the clouds on burning thrusters and lands " +
      "on the breakwater in a wall of spray. 6. clash: they grapple; the robot's shoulder shield blocks the beam in " +
      "a spray of sparks, then the robot lands a rocket punch. 7. retreat: the titan sinks back under the waves, " +
      "its vents dimming. 8. dawn: the city lights flicker back on block by block, the robot lifts off into the " +
      "dawn clouds, and night returns to the quiet harbor.",
  },
  {
    slug: "ra-night-barque",
    tags: ["humanoid", "creature", "magic", "night"],
    country: "eg",
    title: "Ra's Night Voyage",
    still: 560,
    res: [160, 90],
    loop: 20,
    states: ["sunset", "gate", "souls", "reeds", "apep", "spear", "bound", "osiris", "tunnel", "khepri", "sunrise", "day"],
    kind: "Made with the skill",
    note: "The whole night is one river under Nut's arch: the caverns of the Duat keep their own darkness while the west and east change light, and the barque is one prop that sinks, runs aground, vanishes inside a serpent and sails back across the sky.",
    prompt:
      "Pixel art the Egyptian sun god Ra's night journey through the underworld, 160×90, one fixed shot, 20-second " +
      "seamless loop, 12 states. Scene: the sky goddess Nut arches over everything as a band of stars; beneath her " +
      "a river flows left to right past the desert cliffs of the west, through the dark caverns of the Duat with " +
      "their rough cave mouths and a great pylon gate, to the green Nile valley of the east with palms and a " +
      "pyramid; Ra's solar barque, a golden papyrus boat with a sun disc on its shrine, Set at the prow, Isis " +
      "amidships and Horus at the steering oar, travels the river through the night; the west and east skies run " +
      "from day through a red sunset and night to dawn and day again. Keep the frame readable: the barque is always " +
      "the center of attention and one danger or wonder at a time meets it. 1. sunset: the barque sinks out of the " +
      "western sky to the river as the sky turns red and violet. 2. gate: it passes the pylon gate, where a rearing " +
      "cobra spits an arc of fire across the water. 3. souls: in the dark river, golden ba birds with human heads " +
      "flutter up to greet the sun's light. 4. reeds: the Field of Reeds glows gold in the dark and the blessed " +
      "dead harvest it. 5. apep: the colossal chaos serpent Apep heaves its coils out of the river and drinks it " +
      "dry, and the barque runs aground on a sandbank. 6. spear: Set drives his spear into Apep's rearing head " +
      "again and again while Isis raises her arms and bands of light bind the coils. 7. bound: knives stand in the " +
      "coils, Apep sinks away, the river flows back, and the barque floats free. 8. osiris: in the deepest hour " +
      "green-faced Osiris lies on his bier by the river, and his light and Ra's merge in a burst of gold. 9. " +
      "tunnel: the barque slides into the tail of a great golden serpent and its glow travels through the body. 10. " +
      "khepri: it bursts out of the serpent's mouth, and the scarab Khepri rolls a new red sun up out of the east. " +
      "11. sunrise: baboons on the pyramid raise their arms to greet the dawn as the valley floods with light. 12. " +
      "day: the barque rises into the blue day sky and sails back west beneath Nut's arch, ready to sink again.",
  },
  {
    slug: "nautilus-twenty-thousand-leagues",
    tags: ["humanoid", "creature", "lightning", "underwater"],
    country: "fr",
    title: "Twenty Thousand Leagues Under the Sea",
    still: 730,
    res: [160, 90],
    loop: 16,
    states: ["hunt", "salon", "forest", "pearl", "atlantis", "ice", "squid", "maelstrom", "calm", "dive"],
    kind: "Made with the skill",
    note: "The Nautilus is one rotating, scaling hull, so the same code swells it to show the salon window, surfaces it for the squid and spins it down into a Maelstrom drawn as a spiral warp of the sea itself.",
    prompt:
      "Pixel art Jules Verne's Twenty Thousand Leagues Under the Sea, 160×90, one fixed shot, 16-second seamless " +
      "loop, 10 states. Scene: a cut view of the ocean with the waterline a quarter from the top: sky above, and " +
      "below it the sea stepping down into darker blues to a seabed with a swaying kelp forest on the left, coral " +
      "in the middle, and on the right the columns and stairs of a sunken city beside an undersea volcano; the " +
      "Nautilus, a long iron cigar with a spur on its bow, a raised pilothouse and a bright lantern eye, cruises " +
      "through the whole loop, and the light runs from night through day, the deep, polar white and a grey storm to " +
      "dawn and night again. Keep the frame readable: the Nautilus and one wonder at a time, divers and creatures " +
      "small against the big sea. 1. hunt: at night a sailing frigate hunts a 'sea monster' on the surface; below " +
      "it the Nautilus's lantern glows, and it dives away. 2. salon: the Nautilus swells close, and through its " +
      "oval salon window Captain Nemo plays his organ while bright fish swirl outside. 3. forest: divers in round " +
      "brass helmets, with air tanks and electric guns, walk the kelp forest as bubbles rise. 4. pearl: a giant " +
      "oyster opens on a glowing pearl; a shark lunges at the divers and a harpoon drives it off. 5. atlantis: the " +
      "sea darkens and the columns of Atlantis glow as the volcano beside them streams lava. 6. ice: polar ice " +
      "closes over the sea and traps the ship; boiling jets rise until the ice cracks open. 7. squid: the Nautilus " +
      "surfaces in a grey storm, a giant squid wraps its arms round the hull, electric charge crackles through the " +
      "plates, the crew fight with axes on deck, and the squid flees in a cloud of ink. 8. maelstrom: the whole sea " +
      "spins into the Maelstrom and the Nautilus is sucked down, spinning. 9. calm: at dawn the whirlpool is gone " +
      "and the ship rests on the seabed as bubbles rise to a glassy surface. 10. dive: its lantern glows again and " +
      "it glides up as night falls on the surface and the frigate returns.",
  },
  {
    slug: "snow-queen-ice-palace",
    tags: ["humanoid", "creature", "magic", "day"],
    country: "dk",
    title: "The Snow Queen",
    still: 400,
    res: [160, 90],
    loop: 12,
    states: ["mirror", "roses", "sleigh", "search", "north", "palace", "tear", "spring"],
    kind: "Made with the skill",
    note: "The town takes the seasons as palette swaps while the north stays frozen under its own aurora, and the word Eternity is a 3×5 pixel font that the ice shards spell out.",
    prompt:
      "Pixel art Hans Christian Andersen's The Snow Queen, 160×90, one fixed shot, 12-second seamless loop, 8 " +
      "states. Scene: a split world: at the left two old town houses with a gutter of rose boxes between their " +
      "attics and a little square below; snowy mountains in the middle; at the right a frozen plain and a frozen " +
      "lake below an ice palace of spires, under an arctic night sky where the aurora hangs in curtains; the town's " +
      "season runs from summer to deep winter and back through spring. Keep the frame readable: Kai, Gerda and one " +
      "wonder at a time. 1. mirror: goblins fly a huge magic mirror up into the sky; it slips and bursts into " +
      "splinters that sparkle down over the town, while Kai and Gerda sit among the rooftop roses. 2. roses: a " +
      "splinter strikes Kai's eye; he frowns and turns away, and the roses droop and drop their petals. 3. sleigh: " +
      "winter falls; the Snow Queen, tall in white fur with a crown of ice, sweeps into the square in her white " +
      "sleigh, Kai ties his little sled behind it, and they are whirled away north in snowflakes as big as hens. 4. " +
      "search: Gerda sets out barefoot across the snow, a crow flies with her, and a reindeer bounds up to meet " +
      "her. 5. north: she rides the reindeer across the frozen plain as the aurora flares green and violet. 6. " +
      "palace: at the ice palace Kai sits blue with cold on the frozen lake, fitting shards of ice together, and " +
      "Gerda runs to him. 7. tear: she hugs him and her warm tears fall; the splinter melts out of his eye in a " +
      "flash, and the ice shards spell the word ETERNITY. 8. spring: they walk home as the reindeer bounds away, " +
      "the snow melts into spring, and they sit among the blooming rooftop roses again.",
  },
  {
    slug: "rio-carnival-night",
    tags: ["humanoid", "night"],
    country: "br",
    title: "Carnival Night in Rio",
    still: 300,
    res: [160, 90],
    loop: 12,
    states: ["bateria", "frontline", "float", "feathers", "flag", "confetti", "fireworks", "dawn"],
    kind: "Made with the skill",
    note: "Each parade group has its own start and speed on one loop clock, so the drums, the float and the dancers overlap as they pass, and the sweeper clears the avenue just before the loop closes.",
    prompt:
      "Pixel art a Carnival night in Rio de Janeiro, 160×90, one fixed shot, 12-second seamless loop, 8 states. " +
      "Scene: the samba parade avenue at night: packed stands of faces with camera flashes and banners along the " +
      "back, floodlight towers at each end, and beyond them Sugarloaf Mountain with its cable car over a moonlit " +
      "bay; the parade crosses the frame from left to right in saturated gold, magenta, emerald and turquoise. Keep " +
      "the frame readable: one parade group at a time, entering at the left and leaving at the right. 1. bateria: " +
      "the drum corps marches in, white and green, beating big surdo drums so the frame pulses on the beat. 2. " +
      "frontline: the front commission dances in sequins, capes flaring open in a wave. 3. float: a float rolls " +
      "through with a scarlet macaw spreading blue and gold mechanical wings, dancers on its tiers and sparkles in " +
      "the air. 4. feathers: samba dancers pass under towering fans of turquoise and emerald feathers. 5. flag: the " +
      "flag bearer spins in a gold hoop gown with the school's flag whirling above her, her partner bowing around " +
      "her. 6. confetti: baianas pass in huge spinning skirts as confetti and streamers rain down. 7. fireworks: " +
      "fireworks burst over Sugarloaf and the bay. 8. dawn: the sky pinks over the bay, a sweeper in orange pushes " +
      "the confetti away, and night falls again for the next school.",
  },
  {
    slug: "pied-piper-hamelin",
    tags: ["humanoid", "creature", "magic", "dusk"],
    country: "de",
    title: "The Pied Piper of Hamelin",
    still: 530,
    res: [160, 90],
    loop: 12,
    states: ["rats", "piper", "tune", "river", "refuse", "children", "mountain", "return"],
    kind: "Made with the skill",
    note: "Sixteen rats run on one rule set: they scurry on a looping path, file out of the doors behind the Piper and are swept down the river, and the children reuse the same follower line.",
    prompt:
      "Pixel art the German legend of the Pied Piper of Hamelin, 160×90, one fixed shot, 12-second seamless loop, 8 " +
      "states. Scene: medieval Hamelin: half-timbered houses with steep red roofs along a cobbled street, a stone " +
      "church with a spire and a round-topped window, the river Weser running past the town wall at the left, and " +
      "the green Koppen hill with a rock face at the right; the light runs from gold afternoon through dusk and " +
      "night to a cold morning, and back. Keep the frame readable: the Piper and one crowd, rats or children, at a " +
      "time. 1. rats: rats pour through the street and out of barrels and doors while a baker chases them with a " +
      "broom. 2. piper: a tall stranger in a coat of red and yellow patches and a feathered hat walks in, and the " +
      "fat mayor in purple with his chain of office shakes his hand, holding up a bag of gold. 3. tune: he plays " +
      "his pipe, notes float out, and the rats stream out of every door behind him in a long line as he walks to " +
      "the river. 4. river: he leads them into the Weser and they are swept away downstream. 5. refuse: the mayor " +
      "laughs and holds out an empty purse, and the Piper's face darkens as dusk falls. 6. children: he plays a " +
      "new, glowing tune, and the children skip out of the houses and follow him up the street toward the hill. 7. " +
      "mountain: a doorway of light opens in the hill, the Piper and the children go in and it closes as night " +
      "falls, leaving one small boy with a crutch outside. 8. return: under a cold dawn the church's stained-glass " +
      "window of the story glows, the lame boy limps home, and the rats creep back into the street.",
  },
  {
    slug: "wonderful-wizard-of-oz",
    tags: ["humanoid", "creature", "magic", "day"],
    country: "us",
    title: "The Wonderful Wizard of Oz",
    still: 800,
    res: [160, 90],
    loop: 20,
    states: ["kansas", "cyclone", "munchkin", "road", "tin", "lion", "poppies", "emerald", "monkeys", "bucket", "balloon", "shoes"],
    kind: "Made with the skill",
    note: "One road carries the whole journey across lands that change color, and Kansas is a greyscale palette map laid over the frame, so the color floods in when the house lands and drains away when Dorothy clicks her heels home.",
    prompt:
      "Pixel art L. Frank Baum's The Wonderful Wizard of Oz (the 1900 book), 160×90, one fixed shot, 20-second " +
      "seamless loop, 12 states. Scene: a yellow brick road running from a little farmhouse at the left across a " +
      "land that changes color: prairie, then blue Munchkin country with domed houses, a cornfield, a dark wood and " +
      "a field of red poppies, toward the green towers and walls of the Emerald City on the right horizon; in " +
      "Kansas the whole world is grey, and the sky runs from grey to bright blue, a stormy yellow west, gold, and " +
      "back to grey. Keep the frame readable: Dorothy and one new friend or foe at a time, the friends then " +
      "following her in a line. 1. kansas: on the grey prairie Dorothy, in a blue-and-white gingham dress with " +
      "brown braids, claps as her little black dog Toto runs circles round her by the farmhouse. 2. cyclone: a " +
      "black funnel cloud twists across the plain, Dorothy runs inside with Toto, and the house lifts off and spins " +
      "up out of frame with her face at the window. 3. munchkin: the house drops with a thump, the color floods in, " +
      "the Wicked Witch of the East's striped legs and silver shoes stick out from under it, Munchkins peek from " +
      "their domes, and the Good Witch of the North kisses Dorothy's forehead with a glowing mark as she takes the " +
      "silver shoes. 4. road: she walks the yellow brick road and helps the Scarecrow down from his pole in the " +
      "cornfield. 5. tin: she oils the rusted Tin Woodman, who swings his axe again. 6. lion: the Cowardly Lion " +
      "bounds out roaring, Dorothy slaps his nose, and he cries. 7. poppies: in the red poppy field Dorothy and the " +
      "Lion fall asleep, and a team of field mice haul the Lion out on a cart. 8. emerald: at the Emerald City, " +
      "everyone in green spectacles, the Wizard appears as a giant floating head over the towers. 9. monkeys: the " +
      "sky turns a stormy yellow, the Wicked Witch of the West, one-eyed with an umbrella, puts on the Golden Cap " +
      "before her dark castle, and the Winged Monkeys swoop down and carry the friends away. 10. bucket: Dorothy " +
      "throws a bucket of water and the witch melts into a puddle, leaving the Golden Cap behind. 11. balloon: the " +
      "friends come back together as the humbug Wizard waves goodbye from his striped hot-air balloon, drifting " +
      "away over the city. 12. shoes: Dorothy clicks the silver heels three times, spins through the air in a whirl " +
      "of color, the shoes falling away, and lands back on the grey prairie by the new farmhouse, hugging Toto.",
  },
  {
    slug: "yamata-no-orochi",
    tags: ["humanoid", "creature", "melee", "night"],
    country: "jp",
    title: "Susanoo and Yamata no Orochi",
    still: 470,
    res: [160, 90],
    loop: 16,
    states: ["river", "elders", "comb", "sake", "orochi", "drink", "strike", "tail", "clouds", "palace"],
    kind: "Made with the skill",
    note: "The eight necks are one curve routine called eight times: they rise over four lava-bellied coils, dip into eight vats, and are cut one by one on the rhythm of the sword.",
    prompt:
      "Pixel art the Japanese myth of Susanoo and Yamata no Orochi, the eight-headed serpent, 160×90, one fixed " +
      "shot, 16-second seamless loop, 10 states. Scene: the river Hi in the land of Izumo: a grassy bank in front " +
      "with a thatched hut at the left, pines, the river running down to the right, and eight green hills and " +
      "valleys stacked into the mist; the sky runs from dusk to a deep night lit by red serpent eyes, then to a " +
      "dawn of eightfold clouds, and back to dusk. Keep the frame readable: Susanoo and one new arrival at a time. " +
      "1. river: at dusk the storm god Susanoo, wild-haired in a white robe with a long sword, strides down to the " +
      "river and points at chopsticks floating downstream. 2. elders: an old man and woman weep at the hut door " +
      "beside their last daughter, Kushinada, as seven ghostly outlines of her lost sisters rise and fade. 3. comb: " +
      "Susanoo touches Kushinada and she turns into a lacquered comb in a flash of light; he slides it into his " +
      "hair, and the elders go inside. 4. sake: he builds a fence with eight red gates and sets a vat of strong " +
      "sake in each; night falls and the vats steam. 5. orochi: the serpent comes over the hills: four great coils " +
      "mossed with pines, a belly glowing like lava, and eight heads rising high on long necks, eyes red as winter " +
      "cherries. 6. drink: each head plunges into a vat and gulps; the heads sway, droop and fall asleep one by " +
      "one, snoring. 7. strike: Susanoo draws his sword and runs along the fence, cutting through the necks one " +
      "after another, each in a burst of sparks. 8. tail: his blade chips on something hard in the middle tail; he " +
      "splits it open and pulls out the shining sword Kusanagi, raising it high. 9. clouds: the serpent dissolves " +
      "into mist, eightfold clouds boil up over Izumo at dawn, and Kushinada steps free from the comb beside him. " +
      "10. palace: a new palace rises at Suga, with crossed roof beams and red pillars; the two walk inside as the " +
      "light fades back to dusk and the palace becomes the old hut again.",
  },
  {
    slug: "hoan-kiem-returned-sword",
    tags: ["humanoid", "creature", "magic", "melee", "dawn"],
    country: "vn",
    title: "The Returned Sword of Hoan Kiem",
    still: 1036,
    res: [160, 90],
    loop: 20,
    states: ["lend", "net", "hilt", "join", "rally", "battle", "fort", "crown", "boat", "ask", "return", "named"],
    kind: "Made with the skill",
    note: "The whole legend in three acts in one transforming shot: the far bank turns from a Ming fort into Thang Long and, for one night, into the lake of today, while Long Quan's golden shimmer under the water lends the sword at the start and takes it home at the end.",
    prompt:
      "Pixel art the Vietnamese legend of the Returned Sword of Hoan Kiem Lake, 160×90, one fixed shot, 20-second " +
      "seamless loop, 12 states. Scene: a stretch of water with a great banyan with hanging roots on the left bank, " +
      "two small reedy islets and a lakeside path in front. The far bank changes with the story: a Ming fort with a " +
      "palisade, a watchtower and black banners while the land is occupied; the roofs, pagoda and red gate of Thang " +
      "Long after the victory; and the Turtle Tower with the red The Huc bridge only in the closing night, as the " +
      "lake is today. The light runs from a cold grey dawn under the occupation through a warm dawn and bright day, " +
      "one fast turn of day and night for the year that passes, and gold dusk into night. Keep the frame readable: " +
      "one hero and one wonder at a time. 1. lend: in the mist, the Dragon King Long Quan glides as a golden " +
      "shimmer under the water and lets go of two lights: one sinks where the fisherman will cast, the other flies " +
      "to the top of the banyan. 2. net: the fisherman Le Than casts his net from a sampan and hauls up a glowing " +
      "blade, holding it high. 3. hilt: Le Loi runs in with only two ragged followers, sees a light at the top of " +
      "the banyan, climbs and takes down a jade hilt while the fisherman poles ashore. 4. join: the fisherman " +
      "kneels and offers the blade; it fits the hilt exactly in a flash, a ring of light spreads across the water, " +
      "the inscription Thuan Thien glints on the blade and the followers kneel. 5. rally: Le Loi raises the blazing " +
      "sword and soldiers with spears and red banners stream in to join him. 6. battle: the Lam Son army charges; " +
      "dark-armoured Ming soldiers with black banners meet them, break and flee off the frame. 7. fort: the fort's " +
      "black banners fall one by one, red banners rise and the sun breaks through. 8. crown: the fort fades and " +
      "Thang Long rises behind the trees; in a burst of light Le Loi appears in a yellow robe and crown under a " +
      "golden parasol as his men kneel, then the sky turns once through dusk, night and dawn: a year goes by. 9. " +
      "boat: the king rides a dragon boat out onto the green lake, oarsmen rowing, the sword at his belt. 10. ask: " +
      "the lake swirls gold and the Golden Turtle rises beside the boat, raising its head toward the king; it " +
      "speaks in rings of light and the sword trembles at his belt. 11. return: the king draws the sword and holds " +
      "it out; it glides into the turtle's jaws, the turtle sinks, and deep below the golden shimmer of Long Quan " +
      "passes to take it home. 12. named: night on the lake of the returned sword: lotus lanterns float, the Turtle " +
      "Tower and the red bridge glimmer into view, the dragon boat rows away, and the dawn mist brings back the " +
      "fort for the story to begin again.",
  },
  {
    slug: "trip-to-the-moon-1902",
    tags: ["humanoid", "projectile", "space"],
    country: "fr",
    title: "A Trip to the Moon, 1902",
    still: 340,
    res: [160, 90],
    loop: 12,
    states: ["congress", "cannon", "fire", "eye", "dream", "selenites", "fall", "parade"],
    kind: "Made with the skill",
    note: "The rooftop, the lunar ground and the sea are stage flats that slide in and out like Méliès' own scene changes, and the whole frame is printed through a sepia palette with a stencil tint, grain, scratches and a vignette.",
    prompt:
      "Pixel art Georges Méliès' film A Trip to the Moon (1902), in the style of its hand-colored prints, 160×90, " +
      "one fixed shot, 12-second seamless loop, 8 states. Scene: a theatrical painted set: a Paris rooftop with " +
      "chimneys at the left, a giant cannon on a wooden scaffold aimed up to the right, a painted starry sky with " +
      "the Moon as a round face with a crooked smile; the palette is sepia and cream with soft stencil colors, film " +
      "grain, scratches and a dark vignette, and the scenery changes like stage flats sliding in and out. Keep the " +
      "frame readable: one gag at a time, like a stage. 1. congress: four astronomers in starry robes and pointed " +
      "hats argue on the rooftop and wave telescopes, which turn into stools in a puff so two of them sit down. 2. " +
      "cannon: chorus girls in sailor suits roll the bullet-shaped capsule across the roof, the astronomers climb " +
      "in, and the girls push it into the cannon. 3. fire: a girl waves the signal flag, the cannon fires in a " +
      "flash and a huge cloud of smoke, and the capsule streaks up toward the Moon. 4. eye: the Moon's face swells " +
      "closer until the capsule plunges into its right eye; the Moon grimaces and cream oozes from the wound. 5. " +
      "dream: the Moon slides away as the lunar ground rises like a stage flat; the explorers sleep under blankets " +
      "while stars with women's faces look down, Saturn peers out of his ring, and snow falls. 6. selenites: " +
      "insect-like Selenites leap out of a mushroom grotto; the explorers bop them with umbrellas and each bursts " +
      "into a puff of smoke, and the explorers run for the capsule. 7. fall: the capsule tips over the Moon's edge " +
      "and falls past streaming stars into the sea, splashing down and sinking among fish and bubbles. 8. parade: " +
      "the rooftop returns with the capsule garlanded, the explorers bow in laurel crowns under falling confetti, " +
      "the Moon slides back to its place smiling, and the capsule is towed away.",
  },
  {
    slug: "cappadocia-balloons",
    tags: ["humanoid", "craft", "dawn"],
    country: "tr",
    title: "Balloons over Cappadocia",
    still: 330,
    res: [160, 90],
    loop: 10,
    states: ["predawn", "inflate", "liftoff", "sunrise", "drift", "land"],
    kind: "Made with the skill",
    note: "Each envelope is one teardrop test rotated up off the ground and scaled from flat to full, so the same code lays it out on the field, stands it up in the burner's glow and flies it.",
    prompt:
      "Pixel art hot-air balloons over Cappadocia at sunrise, 160×90, one fixed shot, 10-second seamless loop, 6 " +
      "states. Scene: the valleys of central Turkey: tall fairy chimneys of pink and cream tuff with dark basalt " +
      "caps and little cave windows, flat mesas on the horizon, vineyard rows and apricot trees in the valley, and " +
      "a dusty launch field in front; the sky runs from a deep blue pre-dawn through a pink-gold sunrise to a clear " +
      "morning, and back. Keep the frame readable: three near balloons large and detailed, many far ones as specks. " +
      "1. predawn: in the blue hour three striped envelopes lie flat on the field beside their wicker baskets, and " +
      "lamps glow in the cave windows. 2. inflate: fans blow them half full, then the burners roar with blue and " +
      "orange flames and the envelopes stand upright, glowing from inside like lanterns. 3. liftoff: the balloons " +
      "lift one by one, passengers waving from the baskets, as the sky begins to blush. 4. sunrise: the sun breaks " +
      "over the mesas, the rocks glow pink and gold, dozens of far balloons rise from behind the land and drift " +
      "across the sky, and long shadows sweep the valley. 5. drift: the middle balloon dips low over the apricot " +
      "trees, brushing leaves loose, then flares its burner and climbs back up. 6. land: the balloons settle back " +
      "onto the field and the envelopes sigh flat as the light cools back to the blue hour.",
  },
  {
    slug: "ragnarok-twilight-gods",
    tags: ["creature", "lightning", "breath", "impact", "dusk"],
    country: "no",
    title: "Ragnarök, Twilight of the Gods",
    still: 560,
    res: [160, 90],
    loop: 20,
    states: ["yggdrasil", "winter", "horn", "unchained", "serpent", "thunder", "fire", "burning", "sinking", "silence", "rising", "return"],
    kind: "Made with the skill",
    note: "The whole world is one composed backdrop that the scene sinks, floods and regrows: the land shifts down under a rising sea, the world tree burns from the roots up and grows back as a scaled sapling, and the rainbow bridge is rebuilt arc by arc.",
    prompt:
      "Pixel art the Norse twilight of the gods, Ragnarök, 160×90, one fixed shot, 20-second seamless loop, 12 " +
      "states. Scene: a wide view across a northern sea from a rocky shore: the world tree Yggdrasil towers at the " +
      "left edge with its crown in the clouds, the rainbow bridge Bifröst arcs from the top right down to a " +
      "watchtower on a crag, snow peaks and a fjord behind; the sky runs from golden dusk through blizzard, black " +
      "night and fire to a clean green dawn. Keep the frame readable: one great arrival at a time, each giant shown " +
      "in part so it fills the frame without hiding the rest, each gone before the next. 1. yggdrasil: golden dusk; " +
      "the tree sways, two ravens circle its crown, and the watchman Heimdall stands guard at the foot of the " +
      "bridge. 2. winter: the Fimbulwinter falls, snow blasts sideways, the sea ices over, and two shadow wolves " +
      "chase the sun and the moon across the sky until both go dark. 3. horn: Heimdall lifts the Gjallarhorn and " +
      "blows; rings of sound roll out across the ice and the bridge shivers. 4. unchained: on the shore the giant " +
      "wolf Fenrir strains at the silk ribbon Gleipnir, it snaps in a burst of sparks, and his jaws gape from the " +
      "sea to the clouds. 5. serpent: the world serpent Jörmungandr heaves its coils out of the sea and rears its " +
      "head, spraying green venom over the rocks. 6. thunder: Thor lands on the crag in a bolt of lightning and " +
      "hurls Mjölnir again and again, lightning striking the serpent's head until its coils slump into the sea, " +
      "while Thor staggers nine steps and falls. 7. fire: the fire giant Surtr rises beyond the fjord with a crown " +
      "of flame and a blazing sword, sweeps it across the sky, and Bifröst shatters into falling colored shards. 8. " +
      "burning: flames race up Yggdrasil to its crown; embers and ash stream across the red sky. 9. sinking: the " +
      "burning land sinks into the sea in a line of steam, and the stars fall in streaks. 10. silence: only dark " +
      "calm water and a few slow stars. 11. rising: new land rises green out of the sea, waterfalls pouring from " +
      "its cliffs, and a sea eagle dives for a fish. 12. return: a young sun climbs, a sapling of the world tree " +
      "grows back to its full height, the rainbow bridge rebuilds arc by arc, two survivors step out from the " +
      "roots, golden game pieces glint in the grass, Heimdall returns to his post, and the sky warms into the " +
      "golden dusk of the start.",
  },
  {
    slug: "hou-yi-ten-suns",
    tags: ["humanoid", "projectile", "magic", "day"],
    country: "cn",
    title: "Hou Yi and the Ten Suns",
    still: 396,
    res: [160, 90],
    loop: 20,
    states: ["fusang", "ten", "scorch", "archer", "volley", "rain", "elixir", "thief", "flight", "moon", "lanterns", "return"],
    kind: "Made with the skill",
    note: "Ten suns share one sprite routine with a three-legged crow inside; each is shot on a pose frame, falls as a crow, and flies home at dawn to relight on its own branch, so the loop closes on the Fusang tree.",
    prompt:
      "Pixel art the Chinese myth of Hou Yi, who shot down nine suns, and Chang'e, who flew to the moon, 160×90, " +
      "one fixed shot, 20-second seamless loop, 12 states. Scene: a wide view from a mountain ridge: at the right " +
      "the Fusang mulberry tree rising from the eastern sea at the edge of the world, a river valley with rice " +
      "terraces and a village of curved tiled roofs in the middle, and at the left a high ridge with a red " +
      "pavilion; the sky runs from dawn through a blinding white-gold noon of ten suns, a cool rain and a deep blue " +
      "Mid-Autumn night with a full moon, and back to dawn. Keep the frame readable: Hou Yi or Chang'e and one " +
      "wonder at a time. 1. fusang: at dawn ten suns, each a golden three-legged crow in a ring of fire, perch in " +
      "the branches of the Fusang tree while farmers work the terraces; one sun flies up to cross the sky. 2. ten: " +
      "all ten fly up at once and the sky blazes white-gold. 3. scorch: the river dries to cracked mud, the rice " +
      "and the tree turn brown, the valley shimmers in heat haze, and the farmers run inside. 4. archer: Hou Yi " +
      "strides up the ridge with a red bow and a quiver of white arrows, draws, and aims at the sky. 5. volley: he " +
      "shoots again and again; each arrow hits a sun that bursts in sparks and falls as a black three-legged crow, " +
      "until only one sun is left and the sky turns blue. 6. rain: dark clouds roll in, rain pours, the river runs " +
      "again, the terraces turn green, and Hou Yi raises his arms. 7. elixir: the Queen Mother of the West descends " +
      "on a cloud and hands Hou Yi a glowing jade gourd of the elixir of immortality, and he carries it to his wife " +
      "Chang'e at the pavilion door. 8. thief: night falls and Hou Yi goes out; a thief creeps up the ridge, and " +
      "Chang'e swallows the elixir so he cannot take it, glowing as she does. 9. flight: she floats up from the " +
      "pavilion with her long sleeves and ribbons streaming, rising toward the full moon while the thief shakes his " +
      "fist and runs. 10. moon: the moon swells close: the cold Palace of Guanghan, the osmanthus tree, the Jade " +
      "Rabbit pounding medicine at its mortar, and Chang'e waving. 11. lanterns: Hou Yi sets out a table of " +
      "mooncakes and fruit with a curl of incense, and red lanterns drift up from the village toward the moon. 12. " +
      "return: the moon sets, dawn breaks, the nine crows fly home to the Fusang tree and relight one by one, the " +
      "tenth sun rises from the sea to its branch, and the farmers go back to their fields.",
  },
  {
    slug: "bakunawa-moon-eater",
    tags: ["creature", "humanoid", "magic", "night"],
    country: "ph",
    title: "Bakunawa Swallows the Moon",
    still: 222,
    res: [160, 90],
    loop: 12,
    states: ["moon", "rise", "swallow", "gongs", "spit", "dive", "festival", "calm"],
    kind: "Made with the skill",
    note: "The serpent's neck is one curve that the swallowed moon travels down as a glowing bulge and back up before the spit, while the eclipse is a dithered palette swap that bleeds the sky and sea red.",
    prompt:
      "Pixel art the Philippine legend of the Bakunawa, the sea serpent that swallows the moon, 160×90, one fixed " +
      "shot, 12-second seamless loop, 8 states. Scene: a Visayan fishing village of nipa huts on bamboo stilts at " +
      "the left with lit windows, an outrigger boat pulled up on the sand, leaning palms, and a wide dark sea to " +
      "the right under a huge full moon; the sky is a deep indigo night that turns blood red during the eclipse. " +
      "Keep the frame readable: the serpent and the moon are the actors, the villagers small. 1. moon: the full " +
      "moon shines, its light path glitters on the sea, and faint ghosts of six more moons shimmer in the sky, " +
      "memories of the seven the god Bathala made. 2. rise: the sea bulges and the Bakunawa bursts up in a spray of " +
      "foam: a giant sea dragon with sail fins, red gills, horns and a mouth as wide as a lake. 3. swallow: it " +
      "arches up, opens its jaws around the moon and snaps them shut; the sky and sea bleed red, and the moon glows " +
      "inside its throat as it slides down. 4. gongs: the villagers pour out and bang pots and gongs; rings of " +
      "sound roll up at the serpent, which shakes its head. 5. spit: the glowing lump rises back up its throat, the " +
      "Bakunawa spits the moon out, and it flies back to its place in a trail of sparks as the red drains from the " +
      "sky. 6. dive: the serpent sinks back under the waves, its fins glowing as it goes, with a great splash and " +
      "spreading ripples. 7. festival: the villagers dance on the beach with torches, and sky lanterns drift up " +
      "into the night. 8. calm: the villagers wave goodnight and go home, the sea goes still, and the ghost moons " +
      "shimmer again.",
  },
  {
    slug: "hanuman-leaps-to-lanka",
    tags: ["humanoid", "creature", "magic", "night"],
    country: "in",
    title: "Hanuman Leaps to Lanka",
    still: 560,
    res: [160, 90],
    loop: 12,
    states: ["crouch", "leap", "surasa", "grove", "captive", "blaze", "douse", "return"],
    kind: "Made with the skill",
    note: "Hanuman is one pose-keyed rig that scales from a speck to a giant: he grows on the peak, shrinks to slip through Surasa's jaws, and his burning tail lights five rooftop fires that burn on until dawn.",
    prompt:
      "Pixel art the Ramayana's Hanuman leaping to Lanka, 160×90, one fixed shot, 12-second seamless loop, 8 " +
      "states. Scene: the southern tip of India at the left, a green mountain with a rocky summit and palms on the " +
      "shore; a wide stormy ocean across the middle; and at the right the golden island city of Lanka with domed " +
      "palaces and towers above a rampart, an Ashoka tree in a grove below; the sky runs from purple dusk to a " +
      "night lit red by fire, and back to dusk. Keep the frame readable: Hanuman and one foe or wonder at a time. " +
      "1. crouch: on the mountaintop Hanuman, the monkey hero with a golden mace and crown, crouches and grows " +
      "until the mountain trembles under him. 2. leap: he springs into the air and streaks across the ocean in a " +
      "long arc as night falls and the clouds part around him. 3. surasa: the sea serpent Surasa rises with a " +
      "jeweled hood and opens her jaws wide as a bay; he shrinks tiny as a fly, darts in and out of her mouth, " +
      "grows back and flies on. 4. grove: in the Ashoka grove of Lanka he kneels before Sita, in a red sari under " +
      "the flowering tree, and shows her Rama's ring, which glows. 5. captive: demon guards with a spear and a " +
      "torch bind him and wrap his tail in cloth, setting it alight. 6. blaze: he snaps the ropes and bounds from " +
      "roof to roof, his burning tail setting the golden roofs of Lanka ablaze until flames and embers roll up into " +
      "the night. 7. douse: he leaps down to the shore and dips his tail into the sea in a hiss of steam. 8. " +
      "return: he leaps back across the ocean to the mountain with a jewel from Sita in his hand as Lanka's fires " +
      "fade and the sky turns to purple dusk again.",
  },
  {
    slug: "don-quixote-windmills",
    tags: ["humanoid", "melee", "impact", "day"],
    country: "es",
    title: "Don Quixote and the Windmills",
    still: 240,
    res: [160, 90],
    loop: 10,
    states: ["plain", "giants", "charge", "sail", "fall", "ride"],
    kind: "Made with the skill",
    note: "The knight is drawn in a rotating frame, so one rig rides, is swung round the sail feet first, tumbles through the air and lies flat on his back, while the giants are dithered over the turning sails.",
    prompt:
      "Pixel art Cervantes' Don Quixote charging the windmills, 160×90, one fixed shot, 10-second seamless loop, 6 " +
      "states. Scene: the plain of La Mancha: a ridge of whitewashed windmills with dark conical caps and turning " +
      "lattice sails across the right, golden fields and olive trees, a dusty road across the front; the sky runs " +
      "from a pink dawn to a hot blue noon and back. Keep the frame readable: the knight, his squire and the " +
      "nearest windmill. 1. plain: the lanky knight Don Quixote, in dented armor with a barber's basin for a helmet " +
      "and his lance upright, rides in on his bony horse Rocinante, with round Sancho Panza behind on his donkey. " +
      "2. giants: he lowers his lance at the mills, and in his eyes they shimmer into giants with glaring red eyes, " +
      "bearded faces and long arms ending in grasping hands, while Sancho points and shakes his head. 3. charge: he " +
      "couches his lance and gallops, dust flying, while Sancho waves his arms and shouts. 4. sail: the lance jams " +
      "in a turning sail, which hoists the knight out of the saddle and swings him round a full circle while " +
      "Rocinante rears below; the lance shatters and flings him down. 5. fall: he tumbles through the air and lands " +
      "flat on his back in the dust, seeing stars, and Sancho trots up. 6. ride: the giants are windmills again; he " +
      "dusts himself off, raises his broken lance, blames an enchanter, climbs back on Rocinante and gallops away " +
      "with Sancho as dawn returns.",
  },
  {
    slug: "jack-beanstalk",
    tags: ["humanoid", "creature", "magic", "day"],
    country: "gb-eng",
    title: "Jack and the Beanstalk",
    still: 620,
    res: [160, 90],
    loop: 16,
    states: ["market", "thrown", "sprout", "climb", "giant", "treasure", "chase", "axe", "fall", "return"],
    kind: "Made with the skill",
    note: "One spiral carries the whole tale: the beanstalk is a single twisted chain that grows by one parameter, carries Jack up and the giant down at points along its length, then topples about its root while the clouds close over the castle.",
    prompt:
      "Pixel art the English fairy tale of Jack and the Beanstalk, 160×90, one fixed shot, 16-second seamless loop. " +
      "Scene: a tall view from a farm cottage up into the sky: at the bottom left a thatched cottage with a window " +
      "and a little vegetable garden, a lane winding off to the left, rolling green hills behind; above them open " +
      "sky with a thick bank of clouds across the top right where a giant's stone castle stands hidden in the mist; " +
      "the day turns from morning to dusk, night, dawn and back to morning. Keep the frame readable: Jack and one " +
      "new arrival at a time, each leaving before the next appears. 1. market: in the morning Jack leads the " +
      "family's thin old cow down the lane, meets a strange old man in a hooded cloak, and trades the cow for five " +
      "glowing beans. 2. thrown: at dusk his furious mother flings the beans out of the cottage window, and they " +
      "glint in the dark garden. 3. sprout: at night a green shoot bursts from the soil and the beanstalk spirals " +
      "up past the moon, leaves unfurling as it climbs, until it pierces the clouds and they part to reveal the " +
      "giant's castle. 4. climb: at dawn Jack climbs the beanstalk hand over hand, up through the cloud bank to the " +
      "castle gate. 5. giant: the giant stomps out of the castle, sniffing the air (\"Fee-fi-fo-fum!\"), the clouds " +
      "shaking under each step, while Jack hides behind a huge boot. 6. treasure: the giant dozes off; Jack " +
      "snatches the hen that lays golden eggs, a golden egg popping out, and the golden harp, which sings as notes " +
      "float up. 7. chase: the harp cries out, the giant wakes with a roar, and Jack slides down the beanstalk with " +
      "the giant climbing down after him, the stalk shaking and leaves falling. 8. axe: Jack reaches the ground, " +
      "grabs an axe and chops at the stalk while his mother watches from the door; wood chips fly. 9. fall: the " +
      "beanstalk cracks and topples in a great arc, the giant tumbles off into the clouds with a crash and a cloud " +
      "of dust, and the castle vanishes as the clouds close. 10. return: golden eggs heap up by the door, the harp " +
      "plays, and Jack leads his old cow home again, bought back with the gold, as the sun rises on the cottage, " +
      "the tale ready to begin anew.",
  },
  {
    slug: "bach-dang-938",
    tags: ["humanoid", "projectile", "impact", "dusk"],
    country: "vn",
    title: "The Battle of Bach Dang, 938",
    still: 760,
    res: [160, 90],
    loop: 20,
    states: ["stakes", "flood tide", "drums", "fleet", "feint", "ebb", "trapped", "fire", "charge", "victory", "centuries", "return"],
    kind: "Made with the skill",
    note: "The whole battle runs on one number, the tide: it hides the stakes as dark shapes under the surface, lifts the junks over them, then drains away until their keels sit on the iron tips, before a time-lapse of fast tides wears the stakes back into the mud.",
    prompt:
      "Pixel art the Battle of Bạch Đằng River, 938, from Vietnamese history, 160×90, one fixed shot, 20-second " +
      "seamless loop. Scene: the wide Bạch Đằng estuary seen side-on: limestone karst peaks rising on both banks, a " +
      "tall karst on the left where the general keeps watch, mangroves along the shore, the river running across " +
      "the frame out to the sea on the right, and its muddy bed visible whenever the tide runs out; the day passes " +
      "from night to dawn, noon, a burning dusk and a new sunrise. Keep the frame readable: the tide, the stakes " +
      "and one new arrival at a time. 1. stakes: a moonlit night at low tide; soldiers wade through the mud by " +
      "torchlight, hammering rows of iron-tipped wooden stakes into the riverbed while General Ngô Quyền watches " +
      "from the karst. 2. flood tide: at misty dawn the tide rises and swallows the stakes until the river lies " +
      "calm and empty, and a heron lifts off the water. 3. drums: small Vietnamese boats row down the river under " +
      "red banners while bronze drums boom on the bank. 4. fleet: the great war junks of the Southern Han sail in " +
      "from the sea on the high tide, battened sails and black banners filling the river. 5. feint: the small boats " +
      "skirmish with the junks, then turn and flee upstream, and the junks give chase right over the hidden stakes. " +
      "6. ebb: the tide turns and drains fast; the iron tips of the stakes rise out of the water among the junks. " +
      "7. trapped: the junks run onto the stakes; hulls crack, masts lean, sails flap loose, the whole fleet jammed " +
      "in a forest of stakes. 8. fire: burning bamboo rafts drift down on the current and fire arrows arc from " +
      "behind the karsts; the junks catch fire and the dusk river glows red. 9. charge: Vietnamese boats surge out " +
      "from both banks with drums and flags, and the Southern Han prince's black banner falls into the water. 10. " +
      "victory: at sunrise Ngô Quyền raises his sword on the karst, red and gold banners unfurl, and the smoke " +
      "drifts away. 11. centuries: the tide returns over the sinking wrecks; days, seasons and years flash past, " +
      "the stakes wear down into the mud, and fishing boats and lotus come back. 12. return: night falls at low " +
      "tide and torches appear on the bank once more, the tale ready to begin anew.",
  },
  {
    slug: "king-arthur-avalon",
    tags: ["humanoid", "melee", "magic", "night"],
    country: "gb-eng",
    title: "King Arthur, Once and Future",
    still: 660,
    res: [160, 90],
    loop: 20,
    states: ["stone", "trial", "arthur", "crowned", "excalibur", "camelot", "grail", "mordred", "camlann", "bedivere", "avalon", "return"],
    kind: "Made with the skill",
    note: "Twelve states over twenty seconds and four seasons in one valley: snow is a palette remap of the spring grass, Camelot rises and falls part by part, the barge shrinks into the mist, and a mote of light carries the sword back to the stone.",
    prompt:
      "Pixel art the legend of King Arthur, the once and future king, 160×90, one fixed shot, 20-second seamless " +
      "loop. Scene: a legendary English valley: on the left a snowy churchyard on a hill with a small stone chapel " +
      "and a sword thrust through an anvil into a great stone; in the middle a still, misty lake; far across the " +
      "water the Isle of Avalon, a lone green tor crowned with a tower, half-hidden in mist; on the right an empty " +
      "green hill where Camelot will rise. The seasons turn with the tale, from winter snow through spring and " +
      "summer to a stormy dusk and back to winter. Keep the frame readable: Arthur and one new arrival at a time, " +
      "each leaving before the next appears. 1. stone: a winter night, snow drifting down, the sword in the anvil " +
      "glowing faintly silver in the churchyard while candlelight flickers in the chapel window. 2. trial: armored " +
      "knights come one after another, heave at the hilt with all their strength, and stagger back; the sword does " +
      "not move. 3. arthur: a boy squire in a plain tunic runs up, grips the hilt and draws the sword out in one " +
      "easy pull; a pillar of white light bursts from the stone, the snow swirls upward and the chapel bell swings. " +
      "4. crowned: Merlin, in a blue robe scattered with stars, appears in a puff of smoke and sets a golden crown " +
      "on the boy's head as he grows into a young king. 5. excalibur: Arthur rows out onto the lake; an arm clothed " +
      "in white samite rises from the water holding Excalibur in its scabbard; he takes the sword and the arm sinks " +
      "back without a ripple. 6. camelot: spring comes, the snow melts into green and flowers, and on the right " +
      "hill the white walls and towers of Camelot rise stone by stone, with red banners and gold pennants " +
      "unfurling. 7. grail: on a summer evening the sky opens above Camelot and the Holy Grail appears, a golden " +
      "cup floating in a beam of light, rays sweeping across the valley. 8. mordred: storm clouds roll in at dusk; " +
      "Mordred, in black armor under a red and black banner, rides up out of the valley toward the king. 9. " +
      "camlann: Arthur and Mordred clash on the hillside, Excalibur against Mordred's blade, sparks flying, until " +
      "Mordred falls and Arthur sinks to one knee, wounded. 10. return of the sword: a knight, Sir Bedivere, hurls " +
      "Excalibur spinning out over the lake; the white arm rises, catches it, brandishes it three times and draws " +
      "it under. 11. avalon: a black barge with three veiled queens glides out of the mist, carries the king away " +
      "across the lake to the Isle of Avalon, and fades into the fog, while Camelot crumbles into grey ruins. 12. " +
      "return: winter falls again, snow covers the ruins until they fade into the hill, and from the lake a silver " +
      "light rises and settles into the stone as a sword in the anvil once more, the tale ready to begin anew.",
  },
  {
    slug: "koschei-deathless",
    tags: ["humanoid", "creature", "magic", "lightning", "night"],
    country: "ru",
    title: "The Death of Koschei",
    still: 666,
    res: [160, 90],
    loop: 16,
    states: ["voyage", "bear", "hare", "duck", "egg", "pike", "koschei", "needle", "break", "return"],
    kind: "Made with the skill",
    note: "A nesting-doll chain in one shot: the oak tips over on its own frame of reference, each creature is born from the last, the egg falls and bounces by real physics, and a storm that breaks into sunrise gathers again for Koschei, who cannot stay dead.",
    prompt:
      "Pixel art the death of Koschei the Deathless from Russian folklore, 160×90, one fixed shot, 16-second " +
      "seamless loop. Scene: the island of Buyan in a cold northern sea at night: a rocky shore on the left where a " +
      "boat can land, a colossal old oak in the middle with an iron chest hanging from its branches on heavy " +
      "chains, open sea to the right, and on the far horizon the black spires of Koschei's castle on a crag under " +
      "storm clouds. Keep the frame readable: Ivan and one new creature at a time, each one bursting out of the " +
      "last like nesting dolls. 1. voyage: in a storm Ivan Tsarevich, in a red kaftan and fur hat, rows a small " +
      "boat through the waves and lands on the shore while lightning lights up the oak and its hanging chest. 2. " +
      "bear: a great brown bear he once spared lumbers up, wraps its arms round the oak and tears it out by the " +
      "roots; the iron chest crashes down and bursts open. 3. hare: a grey hare bolts out of the chest and zigzags " +
      "across the island, until a second hare, Ivan's friend, runs it down and they tumble in a cloud of fur. 4. " +
      "duck: out of the torn hare a duck bursts into the air, and a drake dives from the storm and strikes it in an " +
      "explosion of feathers. 5. egg: a glowing egg falls from the duck, bounces off the rocks and drops into the " +
      "sea with a splash. 6. pike: a huge pike leaps out of the waves with the egg in its jaws and lays it at " +
      "Ivan's feet. 7. koschei: the storm howls and Koschei the Deathless, a skeletal sorcerer in black armor with " +
      "a crown of green fire, rides down out of the clouds on a black horse and raises his sword over Ivan. 8. " +
      "needle: Ivan cracks the egg and draws out a shining needle; as he bends it Koschei writhes and green " +
      "lightning crackles around him. 9. break: the needle snaps; Koschei crumbles into dust that blows away, the " +
      "castle on the horizon collapses, and the storm clouds tear open onto a golden sunrise. 10. return: the calm " +
      "day turns to dusk, Ivan rows away, the fallen oak rises again, a new iron chest locks shut in its chains, " +
      "and storm clouds gather as night falls, the tale ready to begin anew.",
  },
  {
    slug: "jumong-goguryeo",
    tags: ["humanoid", "creature", "projectile", "magic", "dawn"],
    country: "kr",
    title: "Jumong Founds Goguryeo",
    still: 864,
    res: [160, 90],
    loop: 16,
    states: ["descent", "river daughter", "sun egg", "guardians", "hatch", "archery", "pursuit", "bridge", "goguryeo", "return"],
    kind: "Made with the skill",
    note: "One day and night over one river: the sun crosses the sky with the story, five dragons of five colors pull a chariot down, turtles and fish surface one by one into a bridge, and the city that rises at sunrise dissolves back into the dawn it started from.",
    prompt:
      "Pixel art the founding legend of Jumong and Goguryeo from Korean myth, 160×90, one fixed shot, 16-second " +
      "seamless loop. Scene: a wide river valley in the ancient north: the left bank with the fields and wooden " +
      "palisade of Buyeo, a broad river cutting down through the middle of the frame between steep banks, and the " +
      "green hills of Jolbon on the right bank where a kingdom will stand; mountains fade into mist behind, and the " +
      "sky passes from dawn through day, dusk and night to a new sunrise. Keep the frame readable: one hero and one " +
      "new arrival at a time, each arrival leaving before the next appears. 1. descent: at dawn the clouds part and " +
      "Haemosu, son of Heaven, comes down in a chariot drawn by five dragons, trailed by white swans, a crown of " +
      "crow feathers on his head, and lands on the left bank. 2. river daughter: Yuhwa, daughter of the river god, " +
      "rises out of the water in a pale blue robe; they meet on the bank, the river churns in anger, and Haemosu " +
      "mounts his chariot and soars away, leaving her alone. 3. sun egg: a beam of sunlight breaks through the " +
      "clouds and follows her wherever she walks; in its light a great glowing egg appears in her arms, and she " +
      "lays it in the grass. 4. guardians: a cold wind sweeps the field, and a flock of white birds circles down " +
      "and spreads their wings over the egg to keep it warm while Yuhwa fades back into the river. 5. hatch: the " +
      "egg cracks in a burst of golden light and a boy steps out; in a few beats he grows into a young archer with " +
      "a bow taller than himself: Jumong. 6. archery: he looses arrow after arrow at a jade ring hung from a far " +
      "pine; each shot flashes straight through the ring and sets it spinning. 7. pursuit: at dusk a line of Buyeo " +
      "horsemen with torches and spears pours over the left ridge; Jumong runs to the river's edge with nowhere " +
      "left to go. 8. bridge: under the rising moon he strikes the water with his bow and calls on his grandfather " +
      "the river god; silver fish and great turtles surge up and lock shell to shell into a glowing bridge, and he " +
      "races across. 9. goguryeo: behind him the bridge scatters back into the current and the riders rein up at " +
      "the water's edge; at sunrise walls and tiled roofs rise on the right hills, banners unfurl, and a " +
      "three-legged crow appears in the rising sun. 10. return: Jumong rides a white kirin up into the morning sky, " +
      "the new city fades into the mist, the riders vanish from the ridge, and the valley lies empty and quiet at " +
      "dawn, the tale ready to begin anew.",
  },
  {
    slug: "nezha-east-sea",
    tags: ["humanoid", "creature", "projectile", "magic", "dusk"],
    country: "cn",
    title: "Nezha Conquers the East Sea",
    still: 828,
    res: [160, 90],
    loop: 16,
    states: ["play", "quake", "yaksha", "prince", "duel", "flood", "sacrifice", "lotus", "reborn", "return"],
    kind: "Made with the skill",
    note: "A cutaway sea: the sky and the Crystal Palace share one frame, a single red sash chain swirls, coils round a dragon made of water and streams behind the Wind Fire Wheel, and the storm sweeps down the frame and lifts again.",
    prompt:
      "Pixel art Nezha conquering the East Sea from Chinese legend, 160×90, one fixed shot, 16-second seamless " +
      "loop. Scene: the coast below Chentang Pass: a walled gate-tower fortress on a cliff on the left, the East " +
      "Sea stretching to a far horizon on the right, and the water cut away below the surface to show the Dragon " +
      "King's Crystal Palace glowing far down on the seabed, coral spires and jade roofs among swaying weed. Keep " +
      "the frame readable: Nezha and one new arrival at a time, each leaving before the next appears. 1. play: " +
      "Nezha, a small boy with twin hair buns, a red silk sash floating round his shoulders and a golden ring on " +
      "his arm, splashes in the shallows at the foot of the cliff; he swirls the sash through the water and the " +
      "waves start to churn. 2. quake: down below, the Crystal Palace shakes: coral spires sway, pearls roll across " +
      "the floor, bubbles stream up, and the sea glows red wherever the sash sweeps. 3. yaksha: a blue-faced yaksha " +
      "with a trident bursts up out of the waves; Nezha hurls the golden ring, it streaks across the water in a " +
      "flash and knocks the yaksha tumbling back down into the depths. 4. prince: the sea heaves open and Ao Bing, " +
      "the Dragon King's third son, rises in silver armor riding a water dragon, a halberd in hand, walls of waves " +
      "towering round him. 5. duel: Nezha leaps from wave to wave; his red sash coils round the water dragon and " +
      "binds it, the ring strikes once, and Ao Bing falls back into the sea as a small white dragon that dives away " +
      "to the palace. 6. flood: the sky darkens to storm; the Dragon King Ao Guang, a colossal azure dragon, rears " +
      "over the horizon and drives a towering wall of water at the walls of Chentang Pass. 7. sacrifice: to save " +
      "the city, Nezha stands on the wall facing the wave and dissolves into a burst of red light and lotus petals " +
      "that scatter over the water, and the great wave stops and falls back. 8. lotus: a giant lotus rises from the " +
      "sea, its pink petals opening in golden light, while lotus leaves and roots weave together at its heart into " +
      "a new body. 9. reborn: Nezha steps out of the lotus reborn, riding the flaming Wind Fire Wheels with the " +
      "Fire-tipped Spear, his sash streaming; he circles the Dragon King in a ring of fire and drives him back " +
      "beneath the waves, and the storm breaks. 10. return: at sunset the sea calms, the wheels' fire dies away, " +
      "the lotus petals sink toward the palace, and the boy splashes in the shallows again, the tale ready to begin " +
      "anew.",
  },
  {
    slug: "than-tru-troi-sky-pillar",
    tags: ["humanoid", "magic", "impact", "dawn"],
    country: "vn",
    title: "Than Tru Troi Pillars the Sky",
    still: 820,
    res: [160, 90],
    loop: 16,
    states: ["chaos", "wake", "dig", "pillar", "light", "break", "mountains", "waters", "first day", "return"],
    kind: "Made with the skill",
    note: "A creation myth in one frame: the sky is a single bowl whose height is one parameter, the pillar's rocks fly on arcs timed to land as mountains and islands, and a bank of mist hides the world while it unmakes itself for the loop.",
    prompt:
      "Pixel art the Vietnamese creation myth of Thần Trụ Trời, the giant who pillared the sky, 160×90, one fixed shot, " +
      "16-second seamless loop. Scene: the beginning of the world: heaven and earth pressed together into one dark, " +
      "churning mass of cloud and clay, with only a thin seam of faint light between them; by the end the same frame " +
      "holds a whole new world, a sky rounded like an upturned bowl over a broad flat earth, mountains on the left, a " +
      "winding river through the middle and a new sea on the right. Keep the frame readable: the giant and the one " +
      "change happening at a time. 1. chaos: heaven and earth are one dark mass, slowly churning, with a thin seam of " +
      "light across the middle, dust swirling and embers of light drifting; a giant sleeps curled inside the seam. 2. " +
      "wake: the giant wakes and rises to his knees, bronze-skinned, long black hair, a loincloth of leaves, his broad " +
      "back pressing up against the sky; the seam of light widens around him. 3. dig: bracing the sky on his shoulders, " +
      "he scoops up earth with his great hands, leaving deep pits in the ground, and heaps rocks and clay into a rough " +
      "pillar beside him. 4. pillar: block by block the pillar grows taller and he heaves the sky up on top of it; the " +
      "dark mass above lifts and curves into a great dome, and cracks of pale light race across its underside. 5. " +
      "light: the sky lifts clear of the earth for the first time; light floods in, a dawn band opens along the " +
      "horizon, the dome turns from black to deep blue and the first stars scatter across it. 6. break: with the sky " +
      "set high, he raises both fists and smashes the pillar; it shatters from the top down into a storm of flying " +
      "rocks and clay. 7. mountains: the rocks arc across the world and land as mountains, hills and a chain of small " +
      "islands, each one thudding down in a puff of dust. 8. waters: the pits he dug fill up, springs burst from the " +
      "ground, and a river snakes out through the land to pour into a newborn sea that spreads to the right. 9. first " +
      "day: the sun rises for the first time between the mountains, green spreads over the hills, a flock of Lạc birds " +
      "wheels across the new sky, and the giant straightens and watches, his work done. 10. return: dusk falls, a mist " +
      "rolls back over the land, the sky sinks slowly toward the earth until heaven and earth press together again, and " +
      "the giant curls up to sleep in the last seam of light, the tale ready to begin anew.",
  },
  {
    slug: "co-loa-magic-crossbow",
    tags: ["humanoid", "creature", "projectile", "magic", "day"],
    country: "vn",
    title: "The Magic Crossbow of Co Loa",
    still: 366,
    res: [160, 90],
    loop: 16,
    states: ["build", "haunt", "kim quy", "volley", "swap", "fall", "flight", "pearls", "part", "return"],
    kind: "Made with the skill",
    note: "Four times of day in one fixed shot, each one sweeping down the frame; the ramparts rise, fall, burn and rise again, and one shot of the claw-triggered crossbow becomes a hundred arcing arrows.",
    prompt:
      "Pixel art the legend of An Dương Vương and the magic crossbow of Cổ Loa, 160×90, one fixed shot, 16-second " +
      "seamless loop. Scene: the Red River plain seen from a low hill: on the left the spiral citadel of Cổ Loa, three " +
      "rings of earthen ramparts winding up a mound to a small bronze-roofed palace, a river curving through the " +
      "foreground and out to the sea on the right, where a pale beach with an oyster bed meets the waves, and rice " +
      "fields and a far line of hills between; the sky passes from day to night and back to dawn as the tale unfolds. " +
      "Keep the frame readable: the citadel, the king and one new arrival at a time, each arrival leaving before the " +
      "next appears. 1. build: by day the spiral ramparts rise ring by ring as baskets of earth are tipped onto them, " +
      "and An Dương Vương, in a red robe and a tall bronze headdress, watches from the palace steps. 2. haunt: night " +
      "falls and a ghostly giant white rooster, the spirit Bạch Kê, swoops over the ramparts shrieking; its wings beat " +
      "and the fresh walls crumble in sliding earth and dust. 3. kim quy: at dawn a colossal Golden Turtle rises from " +
      "the river in a burst of light; the rooster spirit bursts into a storm of white feathers and is gone, the walls " +
      "rise whole again, and the turtle gives the king one golden claw, which he fits to the trigger of a great " +
      "crossbow that begins to glow. 4. volley: an army of small dark soldiers with spears and red banners marches in " +
      "from the right; the king raises the magic crossbow on the rampart and a single shot becomes a rain of hundreds " +
      "of golden arrows that arcs over the river, and the column breaks and flees. 5. swap: night; a figure in a blue " +
      "robe, Trọng Thủy, creeps into the palace, lifts the glowing claw from the crossbow and leaves a dull copy; he " +
      "slips away down the ramparts and the crossbow's glow fades out. 6. fall: at dusk the army returns with torches; " +
      "the king fires, but the arrows tumble limp into the river; flames climb the ramparts and smoke pours over the " +
      "citadel. 7. flight: the king gallops out along the road on a black horse with princess Mỵ Châu behind him, her " +
      "white goose-feather cloak shedding a trail of drifting feathers toward the sea. 8. pearls: at the shore under " +
      "the moon the Golden Turtle rises and cries that the enemy sits behind him; the king's sword flashes once and Mỵ " +
      "Châu dissolves into light and feathers, her drops of light falling into the shallows to become glowing pearls in " +
      "the oysters. 9. part: the king takes a seven-inch rhinoceros horn and follows the Golden Turtle into the sea; " +
      "the water parts before them in two glassy walls and closes behind them in a rush of foam. 10. return: the sea " +
      "smooths, the last feathers drift away on the wind, dawn breaks, the fire is gone, and the spiral ramparts of Cổ " +
      "Loa rise again ring by ring, the legend ready to begin anew.",
  },
  {
    slug: "samudra-manthan-churning",
    tags: ["humanoid", "creature", "magic", "projectile", "dawn"],
    country: "in",
    title: "Churning of the Ocean of Milk",
    still: 846,
    res: [160, 90],
    loop: 16,
    states: ["churn", "kurma", "halahala", "neelakantha", "treasures", "lakshmi", "amrita", "rahu", "eclipse", "return"],
    kind: "Made with the skill",
    note: "The biggest cast yet, kept readable by letting one arrival in at a time: the coils slide as the tug swings, the whole sky turns twice, and the moon that rises from the milk is the thread that closes the loop.",
    prompt:
      "Pixel art the Churning of the Ocean of Milk (Samudra Manthan) from Hindu myth, 160×90, one fixed shot, 16-second " +
      "seamless loop. Scene: the cosmic Ocean of Milk at dawn: a deep indigo sky fading through violet to rose-gold at " +
      "the horizon with the last stars going out, the sun's rim just below the horizon, a calm ivory sea with pale blue " +
      "shadows across the whole bottom, and Mount Mandara rising from the middle of the sea as the churning rod, a tall " +
      "grey peak with a few trees on its shoulders, wrapped three times by the great serpent Vasuki, emerald green with " +
      "a golden hood. On the left, Indra, king of the devas, fair-skinned in a gold crown and a white-and-gold dhoti, " +
      "holds Vasuki's tail with a line of small deva silhouettes behind him; on the right, a dark-red asura lord with " +
      "curved horns and a spiked mace on his back holds the serpent's neck, with a line of horned asura silhouettes " +
      "behind him. Keep the frame readable: the mountain, the two leaders and one new arrival at a time, each arrival " +
      "leaving before the next appears. 1. churn: the two sides heave back and forth in a tug of war; the mountain " +
      "spins, Vasuki's coils sliding around it, milk foam boiling at its foot, and each time the serpent is yanked " +
      "toward the asuras its fiery breath scorches their leader. 2. kurma: the mountain tilts and sinks into a groaning " +
      "whirlpool and both sides stagger forward; then the whole sea bulges as a colossal tortoise rises beneath it, a " +
      "bronze-green shell patterned with glowing blue hexagons, lifts the mountain back up on its back, and the " +
      "churning resumes faster. 3. halahala: a column of violet-black poison erupts from the churn and spreads into a " +
      "choking cloud; the milk stains violet outward from the mountain, the dawn dims, the last stars go out, and both " +
      "leaders drop the serpent and cower. 4. neelakantha: Shiva appears on a cloud high on the left, blue-grey skin, " +
      "matted hair in a topknot, a tiger skin, a cobra round his neck and a trident in hand; he draws the whole cloud " +
      "into a reverse vortex that spirals into his mouth, his throat blazes deep blue, the milk turns white again, and " +
      "he fades back into the clouds with his throat still glowing. 5. treasures: the foam boils white and the " +
      "treasures rise one after another: Airavata, a white elephant with four tusks, bursts out trumpeting and wades " +
      "off to the left; then the crescent moon lifts from the milk, dripping light, and floats up to hang in the sky. " +
      "6. lakshmi: a giant pink lotus unfolds on the water in front of the mountain and Lakshmi rises on it in a " +
      "red-and-gold sari, gold coins spilling from her open hand; then the lotus closes into a bud around her and " +
      "sinks. 7. amrita: Dhanvantari, the physician of the gods, rises holding a golden pot of amrita blazing with " +
      "light; the asura lord lunges and snatches it, but Mohini, an enchantress in shimmering blue silk, comes dancing " +
      "over the waves, charms him until he hands her the pot, and pours the nectar in a golden stream toward the devas. " +
      "8. rahu: an asura disguised with a false gold crown slips into the devas' line and sips the nectar; the rising " +
      "sun and the moon flare on him and expose him, and Mohini hurls the Sudarshana discus, a spinning wheel of " +
      "blazing golden blades that cuts off his head in a flash of gold before the nectar passes his throat. 9. eclipse: " +
      "the immortal head of Rahu, dark and smoky with burning eyes, flies up and swallows the moon; the sky turns " +
      "copper, the sea goes dark and a thin ring of light flickers where the moon was; then the moon slips out through " +
      "his severed neck and shines again as the head dissolves into smoke. 10. return: the moon sinks back into the " +
      "milk, the tortoise slides beneath the waves, the sky pales to dawn again, and the devas and asuras take up the " +
      "serpent to begin the churning anew.",
  },
  {
    slug: "phra-aphai-mani-sea-ogress",
    tags: ["humanoid", "creature", "projectile", "magic", "night"],
    country: "th",
    title: "Phra Aphai Mani and the Sea Ogress",
    still: 498,
    res: [160, 90],
    loop: 12,
    states: ["song", "lure", "reveal", "escape", "chase", "last song", "stone", "return"],
    kind: "Made with the skill",
    note: "One rig swells from a slender woman into a giant, and the prince and the mermaid slip in front of her and behind her as they cross the sea; her stone islet sinks out of sight so the loop closes on the song.",
    prompt:
      "Pixel art Phra Aphai Mani, the prince with the magic pipe from Sunthorn Phu's Thai epic, facing the giant sea " +
      "ogress Phisuea Samut, 160×90, one fixed shot, 12-second seamless loop. Scene: the Gulf of Siam on a moonlit night " +
      "off Koh Samet: a pale sand beach and a hermit's rock under a leaning frangipani tree on the left, a calm dark-teal " +
      "sea across the middle and right, a full moon laying a silver path on the water, and a small jagged islet on the " +
      "far horizon. " +
      "1. song: Phra Aphai Mani, a slender prince in a gold-trimmed jacket and a tall pointed Thai crown, sits on the " +
      "hermit's rock playing his magic pipe; soft rings of golden notes roll out across the water and fireflies drift " +
      "over the sand. " +
      "2. lure: a beautiful woman in a shimmering sea-green sabai rises out of the moon path and glides toward the " +
      "shore, charmed by the music, foam curling around her. " +
      "3. reveal: halfway to the beach she swells into the towering sea ogress, blue-black skin, wild seaweed hair, " +
      "fangs and blazing eyes, her gold jewelry snapping apart; the waves heave and the moon turns blood red. " +
      "4. escape: a mermaid with a golden-green tail bursts from the surf, the prince leaps onto her back and they " +
      "speed out along the moon path in a spray of silver foam. " +
      "5. chase: the ogress wades after them, each stride throwing up walls of water, then tears a boulder from the " +
      "reef and hurls it so it crashes beside the fleeing pair. " +
      "6. last song: the prince turns on the mermaid's back and plays the final sorrowful song; rings of golden light " +
      "pour from the pipe and wrap around the ogress, who stops and clutches her heart. " +
      "7. stone: she sinks to her knees and hardens into a jagged stone islet, cracks glowing gold then fading; the " +
      "red drains from the moon and the waves smooth to silver. " +
      "8. return: the mermaid carries the prince back to the hermit's rock, the fireflies return, the stone islet " +
      "slowly sinks beneath the tide until only a faint glow under the water remains, and he lifts the pipe to play " +
      "again, the tale ready to begin anew.",
  },
  {
    slug: "lac-long-quan-sea-demon",
    featured: true,
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
export const COUNTRIES = [['vn', 'Vietnam'], ['cn', 'China'], ['jp', 'Japan'], ['kr', 'Korea'], ['th', 'Thailand'], ['ph', 'Philippines'], ['id', 'Indonesia'], ['in', 'India'], ['ru', 'Russia'], ['gr', 'Greece'], ['tr', 'Turkey'], ['eg', 'Egypt'], ['ng', 'Nigeria'], ['iq', 'Iraq'], ['ir', 'Iran'], ['gb-eng', 'England'], ['gb-sct', 'Scotland'], ['ie', 'Ireland'], ['no', 'Norway'], ['dk', 'Denmark'], ['de', 'Germany'], ['es', 'Spain'], ['fr', 'France'], ['us', 'USA'], ['mx', 'Mexico'], ['br', 'Brazil'], ['pe', 'Peru'], ['nz', 'New Zealand'], ['other', 'Other']];
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
