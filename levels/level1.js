const backgroundNumber1 = 1;
const verticallyMovingObjects = blueJellyfishArrays.move[0];
const numLionfishEnemiesToCreate = 5;
let randomNumber = Math.random();
let randomRangeX = randomNumber * 5800 - 800;
let randomRangeY = randomNumber * 450;
const gameItemsData = [
  {
    name: 'chest_closed',
    x: 4800,
    y: 280,
    src: './img/game_items/PNG/neutral/chest_closed.png',
    width: 250,
    height: 80,
  },
  {
    name: 'smashed_barrel',
    x: 50,
    y: 350,
    src: './img/game_items/PNG/items/barrel_2.png',
    width: 200,
    height: 80,
  },
  {
    name: 'anchor',
    x: 1200,
    y: 200,
    src: './img/game_items/PNG/items/anchor.png',
    width: 200,
    height: 200,
  },
  {
    name: 'steering_wheel',
    x: 1800,
    y: 200,
    src: './img/game_items/PNG/items/steering-wheel.png',
    width: 200,
    height: 200,
  },
  {
    name: 'stalagtite',
    x: 970,
    y: 0,
    src: './img/game_items/PNG/items/stone_4.png',
    width: 400,
    height: 100,
  },
  {
    name: 'stalagtite',
    x: 905,
    y: 0,
    src: './img/game_items/PNG/items/stone_4.png',
    width: 400,
    height: 120,
  },
  {
    name: 'rock',
    x: 800,
    y: 80,
    src: './img/game_items/PNG/items/stone_6.png',
    width: 400,
    height: 150,
  },
  {
    name: 'flat_rock',
    x: 800,
    y: 350,
    src: './img/game_items/PNG/items/stone_3.png',
    width: 300,
    height: 150,
  },
  {
    name: 'stalagtite',
    x: 2900,
    y: 0,
    src: './img/game_items/PNG/items/stone_4.png',
    width: 400,
    height: 90,
  },
  {
    name: 'stalagmite',
    x: 2860,
    y: 260,
    src: './img/game_items/PNG/items/stone_5.png',
    width: 400,
    height: 140,
  },
  {
    name: 'stalagtite',
    x: 3700,
    y: 0,
    src: './img/game_items/PNG/items/stone_4.png',
    width: 400,
    height: 90,
  },
  {
    name: 'stalagmite',
    x: 3660,
    y: 260,
    src: './img/game_items/PNG/items/stone_5.png',
    width: 400,
    height: 140,
  },
  {
    name: 'key',
    x: randomRangeX,
    y: randomRangeY,
    src: './img/game_items/PNG/items/key.png',
    width: 50,
    height: 80,
  },
];
const level1 = new Level(
  backgroundNumber1,
  verticallyMovingObjects,
  numLionfishEnemiesToCreate,
  gameItemsData
);
