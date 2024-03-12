/* function createBackground(backgroundNumber) {
  let firstBackground = 852;
  const backgroundComponents = [];
  for (let i = 0; i < backgroundImagesPathBack.length; i++) {
    const backgroundImagePathBack = backgroundImagesPathBack[i];
    const backgroundImagePath =
      backgroundImagesPathFront + backgroundNumber + backgroundImagePathBack;
    let background = new Background(backgroundImagePath, CANVAS_WIDTH);
    backgroundComponents.push(background);   
  }
  return backgroundComponents;
} */

/* function createBackground(backgroundNumber) {
  let firstBackground = 852;
  const backgroundComponents = [];
  let background;
  for (let i = 0; i < backgroundImagesPathBack.length; i++) {
    const backgroundImagePathBack = backgroundImagesPathBack[i];
    const backgroundImagePath =
      backgroundImagesPathFront + backgroundNumber + backgroundImagePathBack;
    background = new Background(backgroundImagePath);
  }
  backgroundComponents.push(
    background,
    firstBackground * -1,
    background,
    firstBackground * 0,
    background,
    firstBackground * 1,
    background,
    firstBackground * 2,
    background,
    firstBackground * 3
  );
  return backgroundComponents;
} */

function createBackground(backgroundNumber) {
  let x_axis = 0;
  const backgroundComponents = [];
  for (let i = 0; i < backgroundImagesPathBack.length; i++) {
    const backgroundImagePathBack = backgroundImagesPathBack[i];
    const backgroundImagePath =
      backgroundImagesPathFront + backgroundNumber + backgroundImagePathBack;
    let background = new Background(backgroundImagePath, x_axis);
    backgroundComponents.push(background);
    x_axis += 852;
  }

  return backgroundComponents;
}

function createCharacter() {
  let speed = 5;
  const character = new Character(
    `./img/mermaid/PNG/mermaid_${mermaidType}/move_000.png`,
    speed
  );
  return character;
}

function createYellowCrab() {
  let id = 'yellow' + animalIDCounter;
  let speed = Math.random() * 0.4 + 0.1;
  let yellowCrab = new yellowCrabFish(
    './img/fish/PNG/yellowCrab/move_000.png',
    speed,
    id
  );
  animalIDCounter++;
  return yellowCrab;
}

function createRedCrab() {
  let id = 'red' + animalIDCounter;
  let speed = Math.random() * 0.4 + 0.1;
  let redCrab = new redCrabFish(
    './img/fish/PNG/redCrab/idle_000.png',
    speed,
    id
  );
  animalIDCounter++;
  return redCrab;
}

function createBlowfishEnemies() {
  let id = 'blowfish' + animalIDCounter;
  let speed = Math.random() * 0.4 + 0.1;
  let blowFish = new Blowfish(
    './img/fish/PNG/blowfish/move_000.png',
    speed,
    id
  );
  animalIDCounter++;
  return blowFish;
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
