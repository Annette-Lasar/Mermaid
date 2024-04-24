backgroundNumber = 1;
/**
 * The index for the lion fish array in the array allImageObjects is returned.
 */
let indexLionfish = allImageObjects.findIndex((item) => {
  return item.type == 'lionfishArrays';
});

/**
 * The index for the blue jellyfish array in the array allImageObjects is returned.
 */
let indexBlueJellyfish = allImageObjects.findIndex((item) => {
  return item.type == 'blueJellyfishArrays';
});

/**
 * The index for the game items array in the array allImageObjects is returned.
 */
let indexGameItems = allImageObjects.findIndex((item) => {
  return item.type == 'gameItemArrays';
});

/**
 * The index for the mobile items array in the array allImageObjects is returned.
 */
let indexMobileItems = allImageObjects.findIndex((item) => {
  return item.type == 'mobileItemArrays';
});

/**
 * The index for the valuable items array in the array allImageObjects is returned.
 */
let indexValuableItems = allImageObjects.findIndex((item) => {
  return item.type == 'valuableItemsArrays';
});

/**
 * These are constants that serve as parameters in the Level class.
 */
const endbossArray = allImageObjects[indexLionfish].images.move;
const verticallyMovingObjects =
  allImageObjects[indexBlueJellyfish].images.move[0];
const numLionfishEnemiesToCreate = 5;
const gameItemsData = allImageObjects[indexGameItems].object_information; // defined in javascript => object_information.js
const mobileItemsData = allImageObjects[indexMobileItems]; // defined in javascript => object_information.js
const valuableItemsData =
  allImageObjects[indexValuableItems].object_information; // defined in javascript => object_information.js

let level1;

/**
 * This function initiates the first level of the game. (Currently there is just one level.)
 */
function initLevel() {
  level1 = new Level(
    verticallyMovingObjects,
    numLionfishEnemiesToCreate,
    endbossArray,
    gameItemsData,
    mobileItemsData,
    valuableItemsData
  );
}


