const backgroundNumber1 = 1;
const verticallyMovingObjects = blueJellyfishArrays.move[0];
const numLionfishEnemiesToCreate = 5;

const gameItemsData = gameItemArrays; // defined in javascript => all_arrays.js
const mobileItemsData = mobileItems; // defined in javascript => all_arrays.js
const valuableItemsData = valuableItems; // defined in javascript => all_arrays.js
  
const level1 = new Level(
  backgroundNumber1,
  verticallyMovingObjects,
  numLionfishEnemiesToCreate,
  gameItemsData, 
  mobileItemsData,
  valuableItemsData
);
