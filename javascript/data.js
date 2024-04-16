let mermaidType = 1;
let backgroundNumber = 1;
let world;
let noise = true;
let music = false;
const MAX_CRAB_ENEMIES = 15;
const CANVAS_HEIGHT = 480;
const CANVAS_WIDTH = 853;
let objectIDCounter = 1;
let randomNumber = Math.random();
let randomRangeX = randomNumber * 5800 - 800;
let randomRangeY = randomNumber * 450;
const musicSound = new Audio('./audio/atlantis.mp3');
const starSound = new Audio('./audio/ping_stars.mp3');
const pearlSound = new Audio('./audio/ping_pearl.mp3');
const keySound = new Audio('./audio/ping_key.mp3');
const bombSound = new Audio('./audio/explosion.mp3');
const ploppSound = new Audio('./audio/plopp.mp3');
const squelchSound = new Audio('./audio/squelch.mp3');
const successSound = new Audio('./audio/success_fanfare_trumpets.mp3');


/* const animalArrays = new AnimalArrays(); */
/* const allAnimals = [
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
]; */

/* const allActions = [
  'acceleration',
  'attack',
  'die',
  'hurt',
  'idle',
  'joy',
  'move',
]; */

/* const mermaidPathPrefix = './img/mermaid/PNG/mermaid_';
const animalPathPrefix = './img/fish/PNG/';
const animalPathSuffix = '.png'; */

/* const backgroundNumber = 1; */
/* const originalBackgroundWidth = 1920; */
/* const originalBackgroundHeight = 1080; */
/* const backgroundImagesPathFront = './img/game_backgrounds/PNG/game_background_';
const backgroundImagesPathBack = [
  '/layers/1.png',
  '/layers/2.png',
  '/layers/3.png',
  '/layers/4.png',
  '/layers/5.png',
  '/layers/6.png',
]; */
