/**
 * This function calls all other functions that
 * create image paths for preloading images.
 */
function getAllImages() {
  createBackgroundImagePaths();
  createMermaidImagePaths();
  createBlowfishImagePaths();
  createClownfishImagePaths();
  createRedCrabImagePaths();
  createYellowCrabImagePaths();
  createLionfishImagePaths();
  createblueJellyfishImagePaths();
  createGameItemImagePaths();
  createMobileItemImagePaths();
  createValuableItemImagePaths();
  createStoneSlabsImagePaths();
  createSubstituteItemImagePaths();
  createStatusBarComponentImagePaths();
  createStartScreenImagePaths();
}

/**
 *
 * @returns The function returns an array of all images paths for preloading
 * images before game starts.
 */
function showAllImages() {
  let allImagesPaths = [];
  for (let instance of allPictures) {
    allImagesPaths.push(...instance.relatedImages);
  }
  return allImagesPaths;
}

/**
 * Creates all image paths for preloading background images.
 */
function createBackgroundImagePaths() {
  let backgroundArrays = new ImageInformation('backgroundArrays');
  backgroundArrays.addImageInformation('backgrounds', [
    './img/game_backgrounds/PNG/game_background_1/layers/1.png',
    './img/game_backgrounds/PNG/game_background_1/layers/2.png',
    './img/game_backgrounds/PNG/game_background_1/layers/3.png',
    './img/game_backgrounds/PNG/game_background_1/layers/4.png',
    './img/game_backgrounds/PNG/game_background_1/layers/5.png',
    './img/game_backgrounds/PNG/game_background_1/layers/6.png',
  ]);
  allPictures.push(backgroundArrays);
}

/**
 * Creates all image paths for preloading mermaid images.
 * */
function createMermaidImagePaths() {
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
    1,
    3
  );
  allPictures.push(mermaidArrays);
}

/**
 * Creates all image paths for preloading blowfish images.
 * */
function createBlowfishImagePaths() {
  let blowfishArrays = new ImageInformation('blowfishArrays');
  blowfishArrays.addImageInformation('move', [
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
  ]);
  allPictures.push(blowfishArrays);
}

/**
 * Creates all image paths for preloading clownfish images.
 * */
function createClownfishImagePaths() {
  let clownfishArrays = new ImageInformation('clownfishArrays');
  clownfishArrays.addImageInformation('move', [
    './img/fish/PNG/clownfish/move_000.png',
    './img/fish/PNG/clownfish/move_001.png',
    './img/fish/PNG/clownfish/move_002.png',
    './img/fish/PNG/clownfish/move_003.png',
    './img/fish/PNG/clownfish/move_004.png',
    './img/fish/PNG/clownfish/move_005.png',
    './img/fish/PNG/clownfish/move_006.png',
    './img/fish/PNG/clownfish/move_007.png',
    './img/fish/PNG/clownfish/move_008.png',
    './img/fish/PNG/clownfish/move_009.png',
  ]);
  allPictures.push(clownfishArrays);
}

/**
 * Creates all image paths for preloading red crab images.
 * */
function createRedCrabImagePaths() {
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
  allPictures.push(redCrabArrays);
}

/**
 * Creates all image paths for preloading yellow crab images.
 * */
function createYellowCrabImagePaths() {
  let yellowCrabArrays = new ImageInformation('yellowCrabArrays');
  yellowCrabArrays.addImageInformation('move', [
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
  ]);
  allPictures.push(yellowCrabArrays);
}

/**
 * Creates all image paths for preloading lionfish images.
 * */
function createLionfishImagePaths() {
  let lionfishArrays = new ImageInformation('lionfishArrays');
  lionfishArrays.addImageInformation('die', [
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
  ]);
  lionfishArrays.addImageInformation('move', [
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
  ]);
  allPictures.push(lionfishArrays);
}

/**
 * Creates all image paths for preloading blue jellyfish images.
 * */
function createblueJellyfishImagePaths() {
  let blueJellyfishArrays = new ImageInformation('blueJellyfishArrays');
  blueJellyfishArrays.addImageInformation('move', [
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
  ]);
  allPictures.push(blueJellyfishArrays);
}

/**
 * Creates all image paths for preloading decorative item images.
 * */
function createGameItemImagePaths() {
  let gameItemArrays = new ImageInformation('gameItemArrays');
  gameItemArrays.addImageInformation('treasure_chest_closed', [
    './img/game_items/PNG/neutral/chest_closed.png',
  ]);
  gameItemArrays.addImageInformation('smashedBarrel', [
    './img/game_items/PNG/items/barrel_2.png',
  ]);

  gameItemArrays.addImageInformation('anchor', [
    './img/game_items/PNG/items/anchor.png',
  ]);

  gameItemArrays.addImageInformation('steering_wheel', [
    './img/game_items/PNG/items/steering-wheel.png',
  ]);

  gameItemArrays.addImageInformation('stalactite_1', [
    './img/game_items/PNG/items/stone_4.png',
  ]);

  gameItemArrays.addImageInformation('stalactite_2', [
    './img/game_items/PNG/items/stone_4.png',
  ]);

  gameItemArrays.addImageInformation('rock', [
    './img/game_items/PNG/items/stone_6.png',
  ]);

  gameItemArrays.addImageInformation('flat_rock', [
    './img/game_items/PNG/items/stone_3.png',
  ]);

  gameItemArrays.addImageInformation('stalactite_3', [
    './img/game_items/PNG/items/stone_4.png',
  ]);

  gameItemArrays.addImageInformation('stalagmite_1', [
    './img/game_items/PNG/items/stone_5.png',
  ]);

  gameItemArrays.addImageInformation('stalactite_4', [
    './img/game_items/PNG/items/stone_4.png',
  ]);

  gameItemArrays.addImageInformation('stalagmite_2', [
    './img/game_items/PNG/items/stone_5.png',
  ]);
  allPictures.push(gameItemArrays);
}

/**
 * Creates all image paths for preloading bomb images and chain images.
 * */
function createMobileItemImagePaths() {
  let mobileItemArrays = new ImageInformation('mobileItemArrays');
  mobileItemArrays.addImageInformation('dangerous_bomb', [
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
  ]);

  mobileItemArrays.addImageInformation('iron_chain', [
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
  ]);
  allPictures.push(mobileItemArrays);
}

/**
 * Creates all image paths for preloading golden key, starfish and pearl images.
 * */
function createValuableItemImagePaths() {
  let valuableItemsArrays = new ImageInformation('valuableItemsArrays');
  valuableItemsArrays.addImageInformation('golden_key', [
    './img/game_items/PNG/items/key.png',
  ]);

  valuableItemsArrays.addImageInformation('yellow_starfish', [
    './img/game_items/PNG/items/starfish.png',
  ]);

  valuableItemsArrays.addImageInformation('pearl_in_a_shell', [
    './img/game_items/PNG/items/pearl.png',
  ]);
  allPictures.push(valuableItemsArrays);
}

/**
 * Creates all image paths for preloading stone slab images.
 * */
function createStoneSlabsImagePaths() {
  let stoneSlabsArrays = new ImageInformation('stoneSlabsArrays');
  stoneSlabsArrays.addImageInformation('stone_slab_1', [
    './img/game_ui/PNG/menu/window.png',
  ]);

  stoneSlabsArrays.addImageInformation('stone_slab_2', [
    './img/game_ui/PNG/menu/window.png',
  ]);
  allPictures.push(stoneSlabsArrays);
}

/**
 * Creates all image paths for preloading images that substitute other images.
 * */
function createSubstituteItemImagePaths() {
  let substituteItemArrays = new ImageInformation('substituteItemArrays');
  substituteItemArrays.addImageInformation('bubble_weapon', [
    './img/game_items/PNG/neutral/bubble_1.png',
  ]);

  substituteItemArrays.addImageInformation('open_treasure_chest', [
    './img/game_items/PNG/neutral/chest_open.png',
  ]);

  substituteItemArrays.addImageInformation('true_sign', [
    './img/game_ui/PNG/settings/true.png',
  ]);
  allPictures.push(substituteItemArrays);
}

/**
 * Creates all image paths for preloading status bar images.
 * */
function createStatusBarComponentImagePaths() {
  let statusBarComponentArrays = new ImageInformation(
    'statusBarComponentArrays'
  );
  statusBarComponentArrays.addImageInformation('background_bar_1', [
    './img/game_ui/PNG/settings/window_6.png',
  ]);

  statusBarComponentArrays.addImageInformation('filling_level_1', [
    './img/game_ui/PNG/settings/btn_1.png',
  ]);

  statusBarComponentArrays.addImageInformation('background_bar_2', [
    './img/game_ui/PNG/settings/window_6.png',
  ]);

  statusBarComponentArrays.addImageInformation('filling_level_2', [
    './img/game_ui/PNG/settings/btn_3.png',
  ]);

  statusBarComponentArrays.addImageInformation('star_icon', [
    './img/game_items/PNG/items/starfish.png',
  ]);

  statusBarComponentArrays.addImageInformation('pearl_icon', [
    './img/game_items/PNG/items/pearl.png',
  ]);

  statusBarComponentArrays.addImageInformation('key_icon', [
    './img/game_items/PNG/items/key.png',
  ]);

  statusBarComponentArrays.addImageInformation('false_sign', [
    './img/game_ui/PNG/settings/false.png',
  ]);

  allPictures.push(statusBarComponentArrays);
}

/**
 * Creates all image paths for preloading images for start screen.
 * */
function createStartScreenImagePaths() {
  let startScreenComponentArrays = new ImageInformation(
    'startScreenComponentArrays'
  );
  startScreenComponentArrays.addImageInformation('startScreenBackground', [
    './img/game_ui/PNG/basic_window/start_screen_bg.png',
    './img/game_ui/PNG/menu/screen_bg.png',
    './img/game_ui/PNG/basic_window/wooden_panel.png',
    './img/game_ui/PNG/registration/window_4.png',
    './img/game_ui/PNG/basic_window/chain_1.png',
    './img/game_ui/PNG/settings/window_4.png',
    './img/mermaid/PNG/mermaid_1/idle_000.png',
    './img/mermaid/PNG/mermaid_2/idle_000.png',
    './img/mermaid/PNG/mermaid_3/idle_000.png',
    './img/game_ui/PNG/buttons/prew.png',
    './img/game_ui/PNG/you_win/window_1.png',
    './img/game_ui/PNG/you_win/star_1.png',
    './img/game_ui/PNG/you_win/header.png',
    './img/game_ui/PNG/you_win/restart.png',
    './img/game_ui/PNG/you_lose/star.png',
    './icons/arrow.svg',
    './icons/space_bar_icon.png',
  ]);
  allPictures.push(startScreenComponentArrays);
}
