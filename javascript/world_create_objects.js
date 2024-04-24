/**
 * This function creates the background images.
 * @returns - It returns an array with all images for the background layers.
 */
function createBackground() {
  let index = allImageObjects.findIndex((item) => {
    return item.type === 'backgroundArrays';
  });
  let x_axis = 852;
  const backgroundLayers = [];
  for (let i = -2; i < 10; i++) {
    for (let j = 0; j < allImageObjects[index].images.backgrounds.length; j++) {
      backgroundImagePath = allImageObjects[index].images.backgrounds[j];
      backgroundLayers.push(
        new Background(backgroundImagePath, x_axis * i - 80)
      );
    }
  }
  return backgroundLayers;
}

/**
 * This function creates the character.
 * @returns - It returns an instance of the Character class.
 */
function createCharacter() {
  let index = allImageObjects.findIndex((item) => {
    return item.type === 'mermaidArrays';
  });
  let mermaidIndex = allImageObjects[index].object_information.findIndex(
    (item) => {
      return item.name === `mermaid_${mermaidType}`;
    }
  );
  let speed = 10;
  const character = new Character(
    allImageObjects[index].object_information[mermaidIndex].src,
    speed
  );
  return character;
}

/**
 * This function creates an instance of the yellowCrabFish class. 
 * @returns - It returns an instance of the yellowCrabFish class.
 */
function createYellowCrab() {
  let index = allImageObjects.findIndex((item) => {
    return item.type == 'yellowCrabArrays';
  });
  let crabIndex = allImageObjects[index].object_information.findIndex(
    (item) => {
      return item.name === 'yellowCrab';
    }
  );
  let id = 'yellow' + objectIDCounter;
  let speed = Math.random() * 0.4 + 0.1;
  let yellowCrab = new yellowCrabFish(
    allImageObjects[index].object_information[crabIndex].src,
    speed,
    id
  );
  objectIDCounter++;
  return yellowCrab;
}

/**
 * This function creates an instance of the redCrabFish class. 
 * @returns - It returns an instance of the redCrabFish class.
 */
function createRedCrab() {
  let index = allImageObjects.findIndex((item) => {
    return item.type == 'redCrabArrays';
  });
  let crabIndex = allImageObjects[index].object_information.findIndex(
    (item) => {
      return item.name === 'redCrab';
    }
  );
  let id = 'red' + objectIDCounter;
  let speed = Math.random() * 0.8 + 0.3;
  let redCrab = new redCrabFish(
    allImageObjects[index].object_information[crabIndex].src,
    speed,
    id
  );
  objectIDCounter++;
  return redCrab;
}

/**
 * This function creates an instance of the Blowfish class. 
 * @returns - It returns an instance of the Blowfish class.
 */
function createBlowfishEnemies() {
  let index = allImageObjects.findIndex((item) => {
    return item.type == 'blowfishArrays';
  });
  let blowfishIndex = allImageObjects[index].object_information.findIndex(
    (item) => {
      return item.name === 'blowfish';
    }
  );
  let id = 'blowfish' + objectIDCounter;
  let speed = Math.random() * 2 + 3;
  let blowFish = new Blowfish(
    allImageObjects[index].object_information[blowfishIndex].src,
    speed,
    id
  );
  objectIDCounter++;
  return blowFish;
}

/**
 * This function creates an instance of the Lionfish class. 
 * @returns - It returns an instance of the Lionfish class.
 */
function createLionfishEnemies(y_axis) {
  let index = allImageObjects.findIndex((item) => {
    return item.type == 'lionfishArrays';
  });
  let lionfishIndex = allImageObjects[index].object_information.findIndex(
    (item) => {
      return item.name === 'lionfish';
    }
  );
  let id = 'lionfish' + objectIDCounter;
  let speed = Math.random() * 2 + 3;
  let lionFish = new Lionfish(
    allImageObjects[index].object_information[lionfishIndex].src,
    speed,
    id,
    y_axis
  );
  objectIDCounter++;
  return lionFish;
}

/**
 * This function creates an instance of the ObjectMovingUpAndDown class. In level 1 
 * these are blue jellyfish.
 * @returns - It returns an instance of the ObjectMovingUpAndDown class.
 */
function createObjectMovingUpAndDown(x_axis, y_axis, imgPath) {
  let speed = 1 + Math.random() * 0.8 + 0.1;
  const objectMovingUpAndDown = new ObjectMovingUpAndDown(
    x_axis,
    y_axis,
    imgPath,
    speed
  );
  return objectMovingUpAndDown;
}

/**
 * This function creates an instance of the Endboss class. In level 1 this is a
 * lionfish.
 * @param {string} imgPath - This is the image path.
 * @returns - It returns an instance of the Endbosss class. 
 */
function createEndboss(imgPath) {
  let id = 'endboss' + objectIDCounter;
  let speed = 5;
  const endboss = new Endboss(id, imgPath, speed);
  objectIDCounter++;
  return endboss;
}

/**
 * This function creates an instance of the GameItem class. It is a decorative element
 * to place on the canvas. The parameters are taken from the array 
 * in the file object_information.js
 * @param {string} name - This is the item's name.
 * @param {number} x_axis - This is the x value on the canvas for the corresponding item.
 * @param {number} y_axis - This is the y value on the canvas for the corresponding item.
 * @param {string} imgPath - This is the image path for the corresponding item.
 * @param {number} landscapeWidth - This is the landscape width for the corresponding item.
 * @param {number} portraitWidth - This is the portrait width for the corresponding item.
 * @returns 
 */
function createGameItem(
  name,
  x_axis,
  y_axis,
  imgPath,
  landscapeWidth,
  portraitWidth
) {
  let id = 'gameItem' + objectIDCounter;
  const gameItem = new GameItem(
    name,
    id,
    x_axis,
    y_axis,
    imgPath,
    landscapeWidth,
    portraitWidth
  );
  objectIDCounter++;
  return gameItem;
}

/**
 * This function creates an instance of the ValuableGameItem class. It is a valuable element
 * to place on the canvas like the golden key, starfish and pearls. These items provide a 
 * necessary item to open the treasure chest and items to gain energy and ammunition.
 * The parameters are taken from the array in the file object_information.js
 * @param {string} name - This ist the item's name.
 * @param {number} x_axis 
 * @param {number} y_axis 
 * @param {string} imgPath 
 * @param {number} landscapeWidth 
 * @param {number} portraitWidth 
 * @param {number} speed 
 * @returns 
 */
function createValuableItem(
  name,
  x_axis,
  y_axis,
  imgPath,
  landscapeWidth,
  portraitWidth,
  speed
) {
  let id = 'valuableItem' + objectIDCounter;
  const valuableItem = new ValuableGameItem(
    name,
    id,
    x_axis,
    y_axis,
    imgPath,
    landscapeWidth,
    portraitWidth,
    speed
  );
  objectIDCounter++;
  return valuableItem;
}

/**
 * This function creates an instance of the StonSlab class. These items are placed on either
 * side of the canvas to inform the player of the borders of the canvas.
 * @param {string} imgPath 
 * @param {number} x_axis 
 * @param {text} text - This is the text chiselled at a stone slab.
 * @returns 
 */
function createStoneSlab(imgPath, x_axis, text) {
  let textSize = 20;
  let textColor = 'white';
  const stoneSlab = new StoneSlab(imgPath, x_axis, text, textSize, textColor);
  return stoneSlab;
}

/**
 * This function creates an instance of the MobileGameItem class. These are in level 1
 * the iron chains and the bombs.
 * @param {string} name 
 * @param {number} x_axis 
 * @param {number} y_axis 
 * @param {string} imgPath 
 * @param {number} landscapeWidth 
 * @param {number} portraitWidth 
 * @param {Array} array - This is the array with image paths necessary to move the items.
 * @param {number} timeout - This is the timeout value for the interval so that the items
 * can be animated with different speed.
 * @returns 
 */
function createDecorativeMovingItem(
  name,
  x_axis,
  y_axis,
  imgPath,
  landscapeWidth,
  portraitWidth,
  array,
  timeout
) {
  let id = 'decorativeItem' + objectIDCounter;
  const ironChain = new MobileGameItem(
    name,
    id,
    x_axis,
    y_axis,
    imgPath,
    landscapeWidth,
    portraitWidth,
    array,
    timeout
  );
  objectIDCounter++;
  return ironChain;
}

/**
 * This function creates an instance of the Statusbar class. Here the player finds information
 * about energy and ammunition stock and whether the golden key has been found yet.
 * @param {string} name 
 * @param {number} x_axis 
 * @param {number} y_axis 
 * @param {string} imgPath 
 * @param {number} width 
 * @param {number} height 
 * @returns 
 */
function createStatusBar(name, x_axis, y_axis, imgPath, width, height) {
  const statusBarElement = new Statusbar(
    name,
    x_axis,
    y_axis,
    imgPath,
    width,
    height
  );
  return statusBarElement;
}

/**
 * This function removes the blowfish and the crabs from their arrays as soon as they have
 * left the visible realm of the canvas. 
 * @param {Array} enemiesArray - This is an array with the created blowfish or crabs.
 */
function filterAndRemoveEnemies(enemiesArray) {
  let filteredEnemies = world.checkForCurrentEnemies(enemiesArray);

  filteredEnemies.forEach((filteredEnemy) => {
    let enemyIndex = enemiesArray.findIndex(
      (item) => item.id === filteredEnemy.id
    );
    enemiesArray.splice(enemyIndex, 1);
  });
}

/**
 * This function creates an instance of the ThrowableObject class. A throwable object is
 * a bubble that serves as ammunition for the character.
 * @param {number} x 
 * @param {number} y 
 * @returns - It returns an instance of the ThrowableObject class.
 */
function createNewBubble(x, y) {
  let index = allImageObjects.findIndex((item) => {
    return item.type == 'substituteItemArrays';
  });
  let bubbleIndex = allImageObjects[index].object_information.findIndex(
    (item) => {
      return item.name == 'bubble';
    }
  );
  let bubbleImgPath =
    allImageObjects[index].object_information[bubbleIndex].src;
  let id = 'bubble' + objectIDCounter;
  let newBubble = new ThrowableObject(id, bubbleImgPath, x, y);
  objectIDCounter++;
  return newBubble;
}

/**
 * This function creates an instance of the Clownfish class. In level 1 these are the 
 * victims kept prisoners in the treasure chest that need to be freed by the character.
 * @param {string} imgPath 
 * @param {number} x_axis 
 * @param {number} y_axis 
 * @param {number} speed 
 * @returns 
 */
function createClownFish(imgPath, x_axis, y_axis, speed) {
  let id = 'clownfish' + objectIDCounter;
  let newClownfish = new Clownfish(id, imgPath, x_axis, y_axis, speed);
  objectIDCounter++;
  return newClownfish;
}

/**
 * This function searches for the index of the stone slabs in the array 
 * allImageObjects in the file object_information.js.
 * @returns - It returns the index for the stone slabs.
 */
function findStoneSlabArrayIndex() {
  let index = allImageObjects.findIndex((item) => {
    return item.type === 'stoneSlabsArrays';
  });
  return index;
}

/**
 * This function searches for the index of an individual stone slab in the array
 * allImageObjects in the file object_information.js.
 * @param {string} stoneName 
 * @param {number} stoneIndex 
 * @returns - It returns an index number.
 */
function findStoneSlabIndex(stoneName, stoneIndex) {
  let index = allImageObjects[stoneIndex].object_information.findIndex(
    (item) => {
      if (stoneName === 'stone_slab_1') {
        return item.name === 'stone_slab_1';
      } else {
        return item.name === 'stone_slab_2';
      }
    }
  );
  return index;
}

/**
 * This function searches for the index of the treasure chest in the array
 * gameItems that has been filled in the Level class.
 * @param {Array} items - An array with the current game items on the canvas.
 * @returns - It returns an index number.
 */
function findTreasureChestIndex(items) {
  let index = items.findIndex((item) => {
    return item.name === 'chest_closed';
  });
  return index;
}

/**
 * This function searches for the substituteItemArray in the array
 * allImageObjects in the file object_information.js.
 * @returns - It returns an index number. 
 */
function findIndexForSubstituteItems() {
  let index = allImageObjects.findIndex((item) => {
    return item.type === 'substituteItemArrays';
  });
  return index;
}

/**
 * This function searches for the open chest item in the array
 * allImageObjects in the file object_information.js.
 * @param {number} substituteIndex 
 * @returns - It returns an index number.
 */
function findIndexForOpenChest(substituteIndex) {
  let index = allImageObjects[substituteIndex].object_information.findIndex(
    (item) => {
      return item.name === 'chest_open';
    }
  );
  return index;
}
