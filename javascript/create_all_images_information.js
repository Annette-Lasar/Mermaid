let allPictures = [];
let imageInformationInstances = [];
function getAllImages() {
  createBackgroundArrays();
  createMermaidArrays();
  createBlowfishArrays();
  createClownfishArrays();
  createRedCrabArrays();
  createYellowCrabArrays();
  createLionfishArrays();
  createblueJellyfishArrays();
  showAllImages();
}

function showAllImages() {
  let allImages = [];
  for (let instance of allPictures) {
    allImages.push(...instance.relatedImages);
  }
  //console.log('Alle Bilderpfade:', allImages);
  console.log('Alle Array-Elemente: ', allPictures);
}

function createBackgroundArrays() {
  let backgroundArrays = new ImageInformation('backgroundArrays');
  backgroundArrays.addImages('backgrounds', [
    './img/game_backgrounds/PNG/game_background_1/layers/1.png',
    './img/game_backgrounds/PNG/game_background_1/layers/2.png',
    './img/game_backgrounds/PNG/game_background_1/layers/3.png',
    './img/game_backgrounds/PNG/game_background_1/layers/4.png',
    './img/game_backgrounds/PNG/game_background_1/layers/5.png',
    './img/game_backgrounds/PNG/game_background_1/layers/6.png',
  ], 'background', 0, 0, 1920, 1080, 1920, 1080);
  allPictures.push(backgroundArrays);
}

function createMermaidArrays() {
  let mermaidArrays = new ImageInformation('mermaidArrays');
  mermaidArrays.addImagesWithCounter(
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
  mermaidArrays.addImagesWithCounter(
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
  mermaidArrays.addImagesWithCounter(
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
  mermaidArrays.addImagesWithCounter(
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

function createBlowfishArrays() {
  let blowfishArrays = new ImageInformation('blowfishArrays');
  blowfishArrays.addImages('move', [
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

function createClownfishArrays() {
  let clownfishArrays = new ImageInformation('clownfishArrays');
  clownfishArrays.addImages('move', [
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
  ]);
  allPictures.push(clownfishArrays);
}

function createRedCrabArrays() {
  let redCrabArrays = new ImageInformation('redCrabArrays');
  redCrabArrays.addImages('idle', [
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

function createYellowCrabArrays() {
  let yellowCrabArrays = new ImageInformation('yellowCrabArrays');
  yellowCrabArrays.addImages('move', [
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

function createLionfishArrays() {
  let lionfishArrays = new ImageInformation('lionfishArrays');
  lionfishArrays.addImages('die', [
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
  lionfishArrays.addImages('move', [
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

function createblueJellyfishArrays() {
  let blueJellyfishArrays = new ImageInformation('blueJellyfishArrays');
  blueJellyfishArrays.addImages('move', [
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

// './img/game_items/PNG/neutral/chest_closed.png'
