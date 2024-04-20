function createBackground() {
  let index = allImages.findIndex((item) => {
    return item.type === 'backgroundArrays';
  });
  let x_axis = 852;
  const backgroundLayers = [];
  for (let i = -2; i < 10; i++) {
    for (let j = 0; j < allImages[index].array.length; j++) {
      backgroundImagePath = allImages[index].array[j];
      backgroundLayers.push(new Background(backgroundImagePath, x_axis * i - 80));
    }
  }
  return backgroundLayers;
}

/* function createBackground() {
  let index = allPictures.findIndex((item) => {
    return item.type === 'backgroundArrays';
  });
  let x_axis = 852;
  const backgroundLayers = [];
  for (let i = -2; i < 10; i++) {
    for (let j = 0; j < allPictures[index].images.backgrounds.length; j++) {
      backgroundImagePath = allPictures[index].images.backgrounds[j];
      backgroundLayers.push(new Background(backgroundImagePath, x_axis * i - 80));
    }
  }
  return backgroundLayers;
} */

function createCharacter() {
  let index = allImages.findIndex((item) => {
    return item.type === 'mermaidArrays';
  });
  let speed = 10;
  const character = new Character(allImages[index].images.idle[0], speed);
  return character;
}

function createYellowCrab() {
  let index = allImages.findIndex((item) => {
    return item.type == 'yellowCrabArrays';
  });
  let id = 'yellow' + objectIDCounter;
  let speed = Math.random() * 0.4 + 0.1;
  let yellowCrab = new yellowCrabFish(allImages[index].images.move[0], speed, id);
  objectIDCounter++;
  return yellowCrab;
}

function createRedCrab() {
  let index = allImages.findIndex((item) => {
    return item.type == 'redCrabArrays';
  });
  let id = 'red' + objectIDCounter;
  let speed = Math.random() * 0.8 + 0.3;
  let redCrab = new redCrabFish(allImages[index].images.idle[0], speed, id);
  objectIDCounter++;
  return redCrab;
}

function createBlowfishEnemies() {
  let index = allImages.findIndex((item) => {
    return item.type == 'blowfishArrays';
  });
  let id = 'blowfish' + objectIDCounter;
  let speed = Math.random() * 2 + 3;
  let blowFish = new Blowfish(allImages[index].images.move[0], speed, id);
  objectIDCounter++;
  return blowFish;
}

function createLionfishEnemies(y_axis) {
  let index = allImages.findIndex((item) => {
    return item.type == 'lionfishArrays';
  });
  let id = 'lionfish' + objectIDCounter;
  let speed = Math.random() * 2 + 3;
  let lionFish = new Lionfish(allImages[index].images.move[0], speed, id, y_axis);
  objectIDCounter++;
  return lionFish;
}

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

function createEndboss(imgPath) {
  let id = 'endboss' + objectIDCounter;
  let speed = 5;
  const endboss = new Endboss(id, imgPath, speed);
  objectIDCounter++;
  return endboss;
}

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

function createStoneSlab(x_axis, text, textSize, textColor) {
  let index = allImages.findIndex((item) => {
    return item.type == 'stoneSlabs';
  });
  let imgPath = allImages[index].images.src;
  const stoneSlab = new StoneSlab(
    imgPath,
    x_axis,
    text,
    textSize,
    textColor
  );
  return stoneSlab;
}

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

function filterAndRemoveEnemies(enemiesArray) {
  let filteredEnemies = world.checkForCurrentEnemies(enemiesArray);

  filteredEnemies.forEach((filteredEnemy) => {
    let enemyIndex = enemiesArray.findIndex(
      (item) => item.id === filteredEnemy.id
    );
    enemiesArray.splice(enemyIndex, 1);
  });
}

function createNewBubble(x, y) {
  let index = allImages.findIndex((item) => {
    return item.type == 'bubbleWeapon';
  });
  let bubbleImgPath = allImages[index].images.src;
  let id = 'bubble' + objectIDCounter;
  let newBubble = new ThrowableObject(id, bubbleImgPath, x, y);
  objectIDCounter++;
  return newBubble;
}

function createClownFish(imgPath, x_axis, y_axis, speed) {
  let id = 'clownfish' + objectIDCounter;
  let newClownfish = new Clownfish(id, imgPath, x_axis, y_axis, speed);
  objectIDCounter++;
  return newClownfish;
}