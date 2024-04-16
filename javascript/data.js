let mermaidType = 1;
let world;
let noise = false;
let music = false;
const MAX_CRAB_ENEMIES = 15;
const CANVAS_HEIGHT = 480;
const CANVAS_WIDTH = 853;
let objectIDCounter = 1;
let randomNumber = Math.random();
let randomRangeX = randomNumber * 5800 - 800;
let randomRangeY = randomNumber * 450;
// keyFound = false;

/* const animalArrays = new AnimalArrays(); */
const allAnimals = [
  'mermaid',
  'blowfish',
  'blueJellyfish',
  'butterflyfish',
  'clownfish',
  'hammerhead',
  'lionfish',
  'pinkJellyfish',
  'purpleJellyfish',
  'redCrab',
  'seaUrchin',
  'shark',
  'yellowCrab',
];

const allActions = [
  'acceleration',
  'attack',
  'die',
  'hurt',
  'idle',
  'joy',
  'move',
];

const mermaidPathPrefix = './img/mermaid/PNG/mermaid_';
const animalPathPrefix = './img/fish/PNG/';
const animalPathSuffix = '.png';

/* const backgroundNumber = 1; */
/* const originalBackgroundWidth = 1920; */
/* const originalBackgroundHeight = 1080; */
const backgroundImagesPathFront = './img/game_backgrounds/PNG/game_background_';
const backgroundImagesPathBack = [
  '/layers/1.png',
  '/layers/2.png',
  '/layers/3.png',
  '/layers/4.png',
  '/layers/5.png',
  '/layers/6.png',
];
