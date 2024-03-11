function createBackground(backgroundNumber) {
  const backgroundComponents = [];
  for (let i = 0; i < backgroundImagesPathBack.length; i++) {
    const backgroundImagePathBack = backgroundImagesPathBack[i];
    const backgroundImagePath =
      backgroundImagesPathFront + backgroundNumber + backgroundImagePathBack;
    let background = new Background(backgroundImagePath, CANVAS_WIDTH);
    backgroundComponents.push(background);   
  }
  return backgroundComponents;
}

/* function moveX_AxisRight(i, backgroundImagesPathBack) {
  let new_x_axis = 0;
  if (i % backgroundImagesPathBack.length === 0) {
    new_x_axis = CANVAS_WIDTH;
  }
  return new_x_axis;
} */

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
