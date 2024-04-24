/**
 * This file provides global variables for the whole game.
 */
let allPictures = [];
let mermaidType = 1;
let backgroundNumber = 1;
let world;
let intervalIDs = [];
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
const swimmingSound = new Audio('./audio/underwater_movement.mp3');
const mermaidHurtSound = new Audio('./audio/mermaid_hurt.mp3');
const mermaidJoySound = new Audio('./audio/whooping.mp3');
const mermaidDyingSound = new Audio('./audio/mermaid_dying.mp3');
const starSound = new Audio('./audio/ping_stars.mp3');
const pearlSound = new Audio('./audio/ping_pearl.mp3');
const keySound = new Audio('./audio/ping_key.mp3');
const bombSound = new Audio('./audio/explosion.mp3');
const ploppSound = new Audio('./audio/plopp.mp3');
const squelchSound = new Audio('./audio/squelch.mp3');
const successSound = new Audio('./audio/success_fanfare_trumpets.mp3');
const endbossDeathSound = new Audio('./audio/zombie_death.mp3');
const gameFailedSound = new Audio('./audio/game_failed.mp3');
