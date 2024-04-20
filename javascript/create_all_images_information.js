let allPictures = [];
// let imageInformationInstances = [];

function getAllImages() {
  createBackgroundArrays();
  createMermaidArrays();
  createBlowfishArrays();
  createClownfishArrays();
  createRedCrabArrays();
  createYellowCrabArrays();
  createLionfishArrays();
  createblueJellyfishArrays();
  createGameItemArrays();
  createMobileItemArrays();
  createValuableItemsArrays();
  createStoneSlabsArrays();
  createSubstituteItemArrays();
  createStatusBarComponentArrays();
}

function showAllImages() {
  let allImagesPaths = [];
  for (let instance of allPictures) {
    allImagesPaths.push(...instance.relatedImages);
  }
 
  console.log('Alle Array-Elemente: ', allPictures);
  return allImagesPaths;
}

function createBackgroundArrays() {
  let backgroundArrays = new ImageInformation('backgroundArrays');
  backgroundArrays.addImageInformation(
    'backgrounds',
    [
      './img/game_backgrounds/PNG/game_background_1/layers/1.png',
      './img/game_backgrounds/PNG/game_background_1/layers/2.png',
      './img/game_backgrounds/PNG/game_background_1/layers/3.png',
      './img/game_backgrounds/PNG/game_background_1/layers/4.png',
      './img/game_backgrounds/PNG/game_background_1/layers/5.png',
      './img/game_backgrounds/PNG/game_background_1/layers/6.png',
    ],
    'background',
    0,
    0,
    '',
    1920,
    1080,
    1920,
    1080
  );
  allPictures.push(backgroundArrays);
}

function createMermaidArrays() {
  let mermaidArrays = new ImageInformation('mermaidArrays');
  mermaidArrays.addImageInformationWithCounter(
    'die',
    [
      './img/mermaid/PNG/mermaid_COUNTER/die_000.png',
      './img/mermaid/PNG/mermaid_COUNTER/die_001.png',
      './img/mermaid/PNG/mermaid_COUNTER/die_002.png',
      './img/mermaid/PNG/mermaid_COUNTER/die_003.png',
      './img/mermaid/PNG/mermaid_COUNTER/die_004.png',
      './img/mermaid/PNG/mermaid_COUNTER/die_005.png',
      './img/mermaid/PNG/mermaid_COUNTER/die_006.png',
      './img/mermaid/PNG/mermaid_COUNTER/die_007.png',
      './img/mermaid/PNG/mermaid_COUNTER/die_008.png',
      './img/mermaid/PNG/mermaid_COUNTER/die_009.png',
    ],
    'mermaid',
    20,
    200,
    './img/mermaid/PNG/mermaid_COUNTER/die_000.png',
    665,
    1028,
    150,
    80,
    1,
    3
  );
  mermaidArrays.addImageInformationWithCounter(
    'hurt',
    [
      './img/mermaid/PNG/mermaid_COUNTER/hurt_000.png',
      './img/mermaid/PNG/mermaid_COUNTER/hurt_001.png',
      './img/mermaid/PNG/mermaid_COUNTER/hurt_002.png',
      './img/mermaid/PNG/mermaid_COUNTER/hurt_003.png',
      './img/mermaid/PNG/mermaid_COUNTER/hurt_004.png',
      './img/mermaid/PNG/mermaid_COUNTER/hurt_005.png',
      './img/mermaid/PNG/mermaid_COUNTER/hurt_006.png',
      './img/mermaid/PNG/mermaid_COUNTER/hurt_007.png',
      './img/mermaid/PNG/mermaid_COUNTER/hurt_008.png',
      './img/mermaid/PNG/mermaid_COUNTER/hurt_009.png',
    ],
    'mermaid',
    20,
    200,
    './img/mermaid/PNG/mermaid_COUNTER/hurt_000.png',
    665,
    1028,
    150,
    80,
    1,
    3
  );
  mermaidArrays.addImageInformationWithCounter(
    'idle',
    [
      `./img/mermaid/PNG/mermaid_COUNTER/idle_000.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/idle_001.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/idle_002.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/idle_003.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/idle_004.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/idle_005.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/idle_006.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/idle_007.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/idle_008.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/idle_009.png`,
    ],
    'mermaid',
    20,
    200,
    './img/mermaid/PNG/mermaid_COUNTER/idle_000.png',
    665,
    1028,
    150,
    80,
    1,
    3
  );
  mermaidArrays.addImageInformationWithCounter(
    'move',
    [
      `./img/mermaid/PNG/mermaid_COUNTER/move_000.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/move_001.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/move_002.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/move_003.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/move_004.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/move_005.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/move_006.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/move_007.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/move_008.png`,
      `./img/mermaid/PNG/mermaid_COUNTER/move_009.png`,
    ],
    'mermaid',
    20,
    200,
    './img/mermaid/PNG/mermaid_COUNTER/move_000.png',
    665,
    1028,
    150,
    80,
    1,
    3
  );
  allPictures.push(mermaidArrays);
}

function createBlowfishArrays() {
  let blowfishArrays = new ImageInformation('blowfishArrays');
  blowfishArrays.addImageInformation(
    'move',
    [
      './img/fish/PNG/blowfish/move_000.png',
      './img/fish/PNG/blowfish/move_001.png',
      './img/fish/PNG/blowfish/move_002.png',
      './img/fish/PNG/blowfish/move_003.png',
      './img/fish/PNG/blowfish/move_004.png',
      './img/fish/PNG/blowfish/move_005.png',
      './img/fish/PNG/blowfish/move_006.png',
      './img/fish/PNG/blowfish/move_007.png',
      './img/fish/PNG/blowfish/move_008.png',
      './img/fish/PNG/blowfish/move_009.png',
    ],
    'blowfish',
    '',
    '',
    './img/fish/PNG/blowfish/move_000.png',
    208,
    111,
    100,
    80
  );
  allPictures.push(blowfishArrays);
}

function createClownfishArrays() {
  let clownfishArrays = new ImageInformation('clownfishArrays');
  clownfishArrays.addImageInformation(
    'move',
    [
      '/img/fish/PNG/clownfish/move_000.png',
      '/img/fish/PNG/clownfish/move_001.png',
      '/img/fish/PNG/clownfish/move_002.png',
      '/img/fish/PNG/clownfish/move_003.png',
      '/img/fish/PNG/clownfish/move_004.png',
      '/img/fish/PNG/clownfish/move_005.png',
      '/img/fish/PNG/clownfish/move_006.png',
      '/img/fish/PNG/clownfish/move_007.png',
      '/img/fish/PNG/clownfish/move_008.png',
      '/img/fish/PNG/clownfish/move_009.png',
    ],
    'clownfish',
    '',
    '',
    '/img/fish/PNG/clownfish/move_000.png',
    231,
    135,
    60,
    40
  );
  allPictures.push(clownfishArrays);
}

function createRedCrabArrays() {
  let redCrabArrays = new ImageInformation('redCrabArrays');
  redCrabArrays.addImageInformation('idle', [
    './img/fish/PNG/redCrab/idle_000.png',
    './img/fish/PNG/redCrab/idle_001.png',
    './img/fish/PNG/redCrab/idle_002.png',
    './img/fish/PNG/redCrab/idle_003.png',
    './img/fish/PNG/redCrab/idle_004.png',
    './img/fish/PNG/redCrab/idle_005.png',
    './img/fish/PNG/redCrab/idle_006.png',
    './img/fish/PNG/redCrab/idle_007.png',
    './img/fish/PNG/redCrab/idle_008.png',
    './img/fish/PNG/redCrab/idle_009.png',
  ]);
  'redCrab',
    '',
    '',
    './img/fish/PNG/redCrab/idle_000.png',
    594,
    280,
    80,
    60,
    allPictures.push(redCrabArrays);
}

function createYellowCrabArrays() {
  let yellowCrabArrays = new ImageInformation('yellowCrabArrays');
  yellowCrabArrays.addImageInformation(
    'move',
    [
      './img/fish/PNG/yellowCrab/move_000.png',
      './img/fish/PNG/yellowCrab/move_001.png',
      './img/fish/PNG/yellowCrab/move_002.png',
      './img/fish/PNG/yellowCrab/move_003.png',
      './img/fish/PNG/yellowCrab/move_004.png',
      './img/fish/PNG/yellowCrab/move_005.png',
      './img/fish/PNG/yellowCrab/move_006.png',
      './img/fish/PNG/yellowCrab/move_007.png',
      './img/fish/PNG/yellowCrab/move_008.png',
      './img/fish/PNG/yellowCrab/move_009.png',
    ],
    'yellowCrab',
    '',
    '',
    './img/fish/PNG/yellowCrab/move_000.png',
    408,
    197,
    80,
    60
  );
  allPictures.push(yellowCrabArrays);
}

function createLionfishArrays() {
  let lionfishArrays = new ImageInformation('lionfishArrays');
  lionfishArrays.addImageInformation(
    'die',
    [
      './img/fish/PNG/lionfish/die_000.png',
      './img/fish/PNG/lionfish/die_001.png',
      './img/fish/PNG/lionfish/die_002.png',
      './img/fish/PNG/lionfish/die_003.png',
      './img/fish/PNG/lionfish/die_004.png',
      './img/fish/PNG/lionfish/die_005.png',
      './img/fish/PNG/lionfish/die_006.png',
      './img/fish/PNG/lionfish/die_007.png',
      './img/fish/PNG/lionfish/die_008.png',
      './img/fish/PNG/lionfish/die_009.png',
      './img/fish/PNG/lionfish/die_010.png',
      './img/fish/PNG/lionfish/die_011.png',
      './img/fish/PNG/lionfish/die_012.png',
      './img/fish/PNG/lionfish/die_013.png',
    ],
    'lionfish_die',
    '',
    '',
    './img/fish/PNG/lionfish/die_000.png',
    612,
    461,
    100,
    80
  );
  lionfishArrays.addImageInformation(
    'move',
    [
      './img/fish/PNG/lionfish/move_000.png',
      './img/fish/PNG/lionfish/move_001.png',
      './img/fish/PNG/lionfish/move_002.png',
      './img/fish/PNG/lionfish/move_003.png',
      './img/fish/PNG/lionfish/move_004.png',
      './img/fish/PNG/lionfish/move_005.png',
      './img/fish/PNG/lionfish/move_006.png',
      './img/fish/PNG/lionfish/move_007.png',
      './img/fish/PNG/lionfish/move_008.png',
      './img/fish/PNG/lionfish/move_009.png',
    ],
    'lionfish_move',
    '',
    '',
    './img/fish/PNG/lionfish/move_000.png',
    423,
    336,
    100,
    80
  );
  allPictures.push(lionfishArrays);
}

function createblueJellyfishArrays() {
  let blueJellyfishArrays = new ImageInformation('blueJellyfishArrays');
  blueJellyfishArrays.addImageInformation(
    'move',
    [
      './img/fish/PNG/blueJellyfish/move_000.png',
      './img/fish/PNG/blueJellyfish/move_001.png',
      './img/fish/PNG/blueJellyfish/move_002.png',
      './img/fish/PNG/blueJellyfish/move_003.png',
      './img/fish/PNG/blueJellyfish/move_004.png',
      './img/fish/PNG/blueJellyfish/move_005.png',
      './img/fish/PNG/blueJellyfish/move_006.png',
      './img/fish/PNG/blueJellyfish/move_007.png',
      './img/fish/PNG/blueJellyfish/move_008.png',
      './img/fish/PNG/blueJellyfish/move_009.png',
    ],
    'blueJellyfish',
    '',
    '',
    './img/fish/PNG/blueJellyfish/move_000.png',
    130,
    87,
    100,
    80
  );
  allPictures.push(blueJellyfishArrays);
}

function createGameItemArrays() {
  let gameItemArrays = new ImageInformation('gameItemArrays');
  gameItemArrays.addImageInformation(
    'treasure_chest_closed',
    ['./img/game_items/PNG/neutral/chest_closed.png'],
    'chest_closed',
    5200,
    250,
    './img/game_items/PNG/neutral/chest_closed.png',
    250,
    80,
    '',
    ''
  );
  gameItemArrays.addImageInformation(
    'smashedBarrel',
    ['./img/game_items/PNG/items/barrel_2.png'],
    'smashed_barrel',
    50,
    350,
    './img/game_items/PNG/items/barrel_2.png',
    200,
    80,
    '',
    ''
  );

  gameItemArrays.addImageInformation(
    'anchor',
    ['./img/game_items/PNG/items/anchor.png'],
    'anchor',
    1200,
    200,
    './img/game_items/PNG/items/anchor.png',
    200,
    200,
    '',
    ''
  );

  gameItemArrays.addImageInformation(
    'steering_wheel',
    ['./img/game_items/PNG/items/steering-wheel.png'],
    'anchor',
    1800,
    200,
    './img/game_items/PNG/items/steering-wheel.png',
    200,
    200,
    '',
    ''
  );

  gameItemArrays.addImageInformation(
    'stalactite_1',
    ['./img/game_items/PNG/items/stone_4.png'],
    'stalactite_1',
    970,
    0,
    './img/game_items/PNG/items/stone_4.png',
    400,
    100,
    '',
    ''
  );

  gameItemArrays.addImageInformation(
    'stalactite_2',
    ['./img/game_items/PNG/items/stone_4.png'],
    'stalactite_2',
    905,
    0,
    './img/game_items/PNG/items/stone_4.png',
    400,
    120,
    '',
    ''
  );

  gameItemArrays.addImageInformation(
    'rock',
    ['./img/game_items/PNG/items/stone_6.png'],
    'rock',
    800,
    80,
    './img/game_items/PNG/items/stone_6.png',
    400,
    150,
    '',
    ''
  );

  gameItemArrays.addImageInformation(
    'flat_rock',
    ['./img/game_items/PNG/items/stone_3.png'],
    'flat_rock',
    800,
    350,
    './img/game_items/PNG/items/stone_3.png',
    300,
    150,
    '',
    ''
  );

  gameItemArrays.addImageInformation(
    'stalactite_3',
    ['./img/game_items/PNG/items/stone_4.png'],
    'flat_rock',
    2900,
    0,
    './img/game_items/PNG/items/stone_4.png',
    400,
    90,
    '',
    ''
  );

  gameItemArrays.addImageInformation(
    'stalagmite_1',
    ['./img/game_items/PNG/items/stone_5.png'],
    'stalagmite_1',
    2860,
    260,
    './img/game_items/PNG/items/stone_5.png',
    400,
    140,
    '',
    ''
  );

  gameItemArrays.addImageInformation(
    'stalactite_4',
    ['./img/game_items/PNG/items/stone_4.png'],
    'stalactite_4',
    3700,
    0,
    './img/game_items/PNG/items/stone_4.png',
    400,
    90,
    '',
    ''
  );

  gameItemArrays.addImageInformation(
    'stalagmite_2',
    ['./img/game_items/PNG/items/stone_5.png'],
    'stalagmite_2',
    3660,
    260,
    './img/game_items/PNG/items/stone_5.png',
    400,
    140,
    '',
    ''
  );
  allPictures.push(gameItemArrays);
}

function createMobileItemArrays() {
  let mobileItemArrays = new ImageInformation('mobileItemArrays');
  mobileItemArrays.addImageInformation(
    'dangerous_bomb',
    [
      './img/game_items/PNG/bomb/move_000.png',
      './img/game_items/PNG/bomb/move_001.png',
      './img/game_items/PNG/bomb/move_002.png',
      './img/game_items/PNG/bomb/move_003.png',
      './img/game_items/PNG/bomb/move_004.png',
      './img/game_items/PNG/bomb/move_005.png',
      './img/game_items/PNG/bomb/move_006.png',
      './img/game_items/PNG/bomb/move_007.png',
      './img/game_items/PNG/bomb/move_008.png',
      './img/game_items/PNG/bomb/move_009.png',
      './img/game_items/PNG/bomb/move_010.png',
      './img/game_items/PNG/bomb/move_011.png',
      './img/game_items/PNG/bomb/move_012.png',
      './img/game_items/PNG/bomb/move_013.png',
      './img/game_items/PNG/bomb/move_014.png',
      './img/game_items/PNG/bomb/move_015.png',
      './img/game_items/PNG/bomb/move_016.png',
      './img/game_items/PNG/bomb/move_017.png',
      './img/game_items/PNG/bomb/move_018.png',
      './img/game_items/PNG/bomb/move_019.png',
      './img/game_items/PNG/bomb/move_020.png',
      './img/game_items/PNG/bomb/move_021.png',
      './img/game_items/PNG/bomb/move_022.png',
      './img/game_items/PNG/bomb/move_023.png',
    ],
    'bomb',
    180,
    180,
    './img/game_items/PNG/bomb/move_000.png',
    '',
    '',
    40,
    40
  );

  mobileItemArrays.addImageInformation(
    'iron_chain',
    [
      './img/game_items/PNG/chain/chain_000.png',
      './img/game_items/PNG/chain/chain_001.png',
      './img/game_items/PNG/chain/chain_002.png',
      './img/game_items/PNG/chain/chain_003.png',
      './img/game_items/PNG/chain/chain_004.png',
      './img/game_items/PNG/chain/chain_005.png',
      './img/game_items/PNG/chain/chain_006.png',
      './img/game_items/PNG/chain/chain_007.png',
      './img/game_items/PNG/chain/chain_008.png',
      './img/game_items/PNG/chain/chain_009.png',
      './img/game_items/PNG/chain/chain_010.png',
      './img/game_items/PNG/chain/chain_011.png',
    ],
    'chain',
    600,
    -2,
    'img/game_items/PNG/chain/chain_000.png',
    '',
    '',
    200,
    90
  );
  allPictures.push(mobileItemArrays);
}

function createValuableItemsArrays() {
  let valuableItemsArrays = new ImageInformation('valuableItemsArrays');
  valuableItemsArrays.addImageInformation(
    'golden_key',
    ['./img/game_items/PNG/items/key.png'],
    'key',
    3850,
    100,
    './img/game_items/PNG/items/key.png',
    20,
    50,
    '',
    ''
  );

  valuableItemsArrays.addImageInformation(
    'yellow_starfish',
    ['./img/game_items/PNG/items/starfish.png'],
    'starfish',
    '',
    '',
    './img/game_items/PNG/items/starfish.png',
    50,
    80,
    '',
    ''
  );

  valuableItemsArrays.addImageInformation(
    'pearl_in_a_shell',
    ['./img/game_items/PNG/items/pearl.png'],
    'pearl',
    '',
    '',
    './img/game_items/PNG/items/pearl.png',
    40,
    50,
    '',
    ''
  );
  allPictures.push(valuableItemsArrays);
}

function createStoneSlabsArrays() {
  let stoneSlabsArrays = new ImageInformation('stoneSlabsArrays');
  stoneSlabsArrays.addImageInformation(
    'stone_slab_1',
    ['./img/game_ui/PNG/menu/window.png'],
    'WESTERN END OF TERRITORY',
    -850,
    350,
    './img/game_ui/PNG/menu/window.png',
    1332,
    684,
    '',
    ''
  );

  stoneSlabsArrays.addImageInformation(
    'stone_slab_2',
    ['./img/game_ui/PNG/menu/window.png'],
    'EASTERN END OF TERRITORY',
    5500,
    350,
    './img/game_ui/PNG/menu/window.png',
    1332,
    684,
    '',
    ''
  );
  allPictures.push(stoneSlabsArrays);
}

function createSubstituteItemArrays() {
  let substituteItemArrays = new ImageInformation('substituteItemArrays');
  substituteItemArrays.addImageInformation(
    'bubble_weapon',
    ['./img/game_items/PNG/neutral/bubble_1.png'],
    'bubble',
    '',
    '',
    './img/game_items/PNG/neutral/bubble_1.png',
    85,
    85,
    '',
    ''
  );

  substituteItemArrays.addImageInformation(
    'open_treasure_chest',
    ['./img/game_items/PNG/neutral/chest_open.png'],
    'chest_open',
    '',
    '',
    './img/game_items/PNG/neutral/chest_open.png',
    317,
    283,
    '',
    ''
  );

  substituteItemArrays.addImageInformation(
    'true_sign',
    ['./img/game_ui/PNG/settings/true.png'],
    'true_sign',
    '',
    '',
    './img/game_ui/PNG/settings/true.png',
    317,
    283,
    '',
    ''
  );
  allPictures.push(substituteItemArrays);
}

function createStatusBarComponentArrays() {
  let statusBarComponentArrays = new ImageInformation(
    'statusBarComponentArrays'
  );
  statusBarComponentArrays.addImageInformation(
    'background_bar_1',
    ['./img/game_ui/PNG/settings/window_6.png'],
    'background_bar_1',
    40,
    25,
    './img/game_ui/PNG/settings/window_6.png',
    250,
    15,
    '',
    ''
  );

  statusBarComponentArrays.addImageInformation(
    'filling_level_1',
    ['./img/game_ui/PNG/settings/btn_1.png'],
    'filling_level_1',
    40,
    25,
    './img/game_ui/PNG/settings/btn_1.png',
    125, // später auf 0 ändern!!
    15,
    '',
    ''
  );

  statusBarComponentArrays.addImageInformation(
    'background_bar_2',
    ['./img/game_ui/PNG/settings/window_6.png'],
    'background_bar_2',
    330,
    25,
    './img/game_ui/PNG/settings/window_6.png',
    200,
    15,
    '',
    ''
  );

  statusBarComponentArrays.addImageInformation(
    'filling_level_2',
    ['./img/game_ui/PNG/settings/btn_3.png'],
    'filling_level_2',
    330,
    25,
    './img/game_ui/PNG/settings/btn_3.png',
    0,
    15,
    '',
    ''
  );

  statusBarComponentArrays.addImageInformation(
    'star_icon',
    ['./img/game_items/PNG/items/starfish.png'],
    'star_icon',
    10,
    17,
    './img/game_items/PNG/items/starfish.png',
    25,
    25,
    '',
    ''
  );

  statusBarComponentArrays.addImageInformation(
    'pearl_icon',
    ['./img/game_items/PNG/items/pearl.png'],
    'pearl_icon',
    300,
    20,
    './img/game_items/PNG/items/pearl.png',
    25,
    25,
    '',
    ''
  );

  statusBarComponentArrays.addImageInformation(
    'key_icon',
    ['./img/game_items/PNG/items/key.png'],
    'key_icon',
    540,
    10,
    './img/game_items/PNG/items/key.png',
    40,
    40,
    '',
    ''
  );

  statusBarComponentArrays.addImageInformation(
    'false_sign',
    ['./img/game_ui/PNG/settings/false.png'],
    'false_sign',
    590,
    22,
    './img/game_ui/PNG/settings/false.png',
    20,
    20,
    '',
    ''
  );

  allPictures.push(statusBarComponentArrays);
}
