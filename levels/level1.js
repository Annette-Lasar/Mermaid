backgroundNumber = 5;
let indexLionfish = allImages.findIndex((item) => {
  return item.type == 'lionfishArrays';
});

let indexGameItems = allImages.findIndex((item) => {
  return item.type == 'gameItems';
});

let indexMobileItems = allImages.findIndex((item) => {
  return item.type == 'mobileItems';
});

let indexValuableItems = allImages.findIndex((item) => {
  return item.type == 'valuableItems';
});
const endbossArray = allImages[indexLionfish].images.move;
const verticallyMovingObjects = endbossArray[0];
const numLionfishEnemiesToCreate = 5;

const gameItemsData = allImages[indexGameItems].items; // defined in javascript => all_arrays.js
const mobileItemsData = allImages[indexMobileItems].items; // defined in javascript => all_arrays.js
const valuableItemsData = allImages[indexValuableItems].items; // defined in javascript => all_arrays.js

const level1 = new Level(
  verticallyMovingObjects,
  numLionfishEnemiesToCreate,
  endbossArray,
  gameItemsData,
  mobileItemsData,
  valuableItemsData
);
