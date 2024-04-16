function createBackground(number) {
  let x_axis = 852;
  const backgroundComponents = [];
  for (let i = -2; i < 10; i++) {
    for (let j = 0; j < backgroundImagesPathBack.length; j++) {
      const backgroundImagePathBack = backgroundImagesPathBack[j];
      const backgroundImagePath =
        backgroundImagesPathFront + number + backgroundImagePathBack;
      backgroundComponents.push(
        new Background(backgroundImagePath, x_axis * i - 80)
      );
    }
  }
  return backgroundComponents;
}

function createCharacter() {
  let speed = 10;
  const character = new Character(mermaidArrays.idle[0], speed);
  /* await character.loadImage(mermaidArrays.idle[0]); */
  return character;
}

function createYellowCrab() {
  let id = 'yellow' + objectIDCounter;
  let speed = Math.random() * 0.4 + 0.1;
  let yellowCrab = new yellowCrabFish(yellowCrabArrays.move[0], speed, id);
  objectIDCounter++;
  /* await yellowCrab.loadImage(yellowCrabMove[0]); */
  return yellowCrab;
}

function createRedCrab() {
  let id = 'red' + objectIDCounter;
  let speed = Math.random() * 0.8 + 0.3;
  let redCrab = new redCrabFish(redCrabArrays.idle[0], speed, id);
  objectIDCounter++;
  /* await redCrab.loadImage(redCrabIdle[0]); */
  return redCrab;
}

function createBlowfishEnemies() {
  let id = 'blowfish' + objectIDCounter;
  let speed = Math.random() * 2 + 3;
  let blowFish = new Blowfish(blowfishArrays.move[0], speed, id);
  objectIDCounter++;
  /* await blowFish.loadImage(blowfishMove[0]); */
  return blowFish;
}

function createLionfishEnemies(y_axis) {
  let id = 'lionfish' + objectIDCounter;
  let speed = Math.random() * 2 + 3;
  let lionFish = new Lionfish(lionfishArrays.move[0], speed, id, y_axis);
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
  /* await objectMovingUpAndDown.loadImage(imgPath); */
  return objectMovingUpAndDown;
}

function createEndboss(imgPath) {
  let id = 'endboss' + objectIDCounter;
  let speed = 5;
  const endboss = new Endboss(id, imgPath, speed);
  /* await endboss.loadImage(imgPath); */
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
  /* await gameItem.loadImage(imgPath); */
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
  /* await valuableItem.loadImage(imgPath); */
  return valuableItem;
}

function createStoneSlab(x_axis, text, textSize, textColor) {
  const stoneSlab = new StoneSlab(
    './img/game_ui/PNG/menu/window.png',
    x_axis,
    text,
    textSize,
    textColor
  );
  /* await stoneSlab.loadImage('./img/game_ui/PNG/menu/window.png'); */
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
  /* await ironChain.loadImage(ironChainArrays.move[0]); */
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
  let id = 'bubble' + objectIDCounter;
  let newBubble = new ThrowableObject(id, x, y);
  objectIDCounter++;
  return newBubble;
}

function createClownFish(imgPath, x_axis, y_axis, speed) {
  let id = 'clownfish' + objectIDCounter;
  let newClownfish = new Clownfish(id, imgPath, x_axis, y_axis, speed);
  objectIDCounter++;
  return newClownfish;
}