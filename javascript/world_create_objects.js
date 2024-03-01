function createBackground(backgroundNumber) {
  const backgroundComponents = [];
  for (let i = 0; i < backgroundImagesPathBack.length; i++) {
    const backgroundImagePathBack = backgroundImagesPathBack[i];
    const backgroundImagePath =
      backgroundImagesPathFront + backgroundNumber + backgroundImagePathBack;
    let background = new Background(backgroundImagePath, 853);
    backgroundComponents.push(background);
  }
  return backgroundComponents;
}

function createCharacter() {
  const character = new Character(
    `./img/mermaid/PNG/mermaid_${mermaidType}/move_000.png`
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
  let blowFishArray = [];
  let id = 'blowfish' + animalIDCounter;
  let speed = Math.random() * 0.4 + 0.1;
  let blowFish = new Blowfish(
    './img/fish/PNG/blowfish/move_000.png',
    speed,
    id
  );
  blowFishArray.push(blowFish);
  animalIDCounter++;
  return blowFishArray;
}

function filterAndRemoveCrabEnemies(crabEnemies) {
  let filteredEnemies = crabEnemies.filter((enemy) => enemy.y > CANVAS_HEIGHT);

  filteredEnemies.forEach((filteredEnemy) => {
    let crabIndex = crabEnemies.findIndex(
      (item) => item.id === filteredEnemy.id
    );
    crabEnemies.splice(crabIndex, 1);
  });
}

