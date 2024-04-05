console.log('Ich bin die world_create_objects-Datei!');

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
  let speed = 5;
  const character = new Character(mermaidArrays.idle[0], speed);
  /* await character.loadImage(mermaidArrays.idle[0]); */
  return character;
}



function createYellowCrab() {
  let id = 'yellow' + animalIDCounter;
  let speed = Math.random() * 0.4 + 0.1;
  let yellowCrab = new yellowCrabFish(yellowCrabArrays.move[0], speed, id);
  animalIDCounter++;
  /* await yellowCrab.loadImage(yellowCrabMove[0]); */
  return yellowCrab;
}

function createRedCrab() {
  let id = 'red' + animalIDCounter;
  let speed = Math.random() * 0.8 + 0.3;
  let redCrab = new redCrabFish(redCrabArrays.idle[0], speed, id);
  animalIDCounter++;
  /* await redCrab.loadImage(redCrabIdle[0]); */
  return redCrab;
}

function createBlowfishEnemies() {
  let id = 'blowfish' + animalIDCounter;
  let speed = Math.random() * 2 + 3;
  let blowFish = new Blowfish(blowfishArrays.move[0], speed, id);
  animalIDCounter++;
  /* await blowFish.loadImage(blowfishMove[0]); */
  return blowFish;
}

function createLionfishEnemies(y_axis) {
  let id = 'lionfish' + animalIDCounter;
  let speed = Math.random() * 2 + 3;
  let lionFish = new Lionfish(lionfishArrays.move[0], speed, id, y_axis);
  animalIDCounter++;
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
  let speed = 5;
  const endboss = new Endboss(imgPath, speed);
  /* await endboss.loadImage(imgPath); */
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
  const gameItem = new GameItem(
    name,
    x_axis,
    y_axis,
    imgPath,
    landscapeWidth,
    portraitWidth
  );
  /* await gameItem.loadImage(imgPath); */
  return gameItem;
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

function createIronChain(x_axis, y_axis, landscapeWidth, portraitWidth, array) {
  const ironChain = new MobileGameItem(
    x_axis,
    y_axis,
    ironChainArrays.move[0],
    landscapeWidth,
    portraitWidth,
    array
  );
  /* await ironChain.loadImage(ironChainArrays.move[0]); */
  return ironChain;
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

