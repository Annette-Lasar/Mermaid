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
    `./img/Mermaid/PNG/Mermaid_${mermaidType}/Move_000.png`
  );
  return character;
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

function createYellowCrab() {
  let id = 'yellow' + crabIDCounter;
  let speed = Math.random() * 0.4 + 0.1;
  let yellowCrab = new yellowCrabFish(
    './img/Fish_crab_jellyfish_shark/PNG/Crab_yellow/Crab_yellow_move_000.png',
    speed,
    id
  );
  crabIDCounter++;
  return yellowCrab;
}

function createRedCrab() {
  let id = 'red' + crabIDCounter;
  let speed = Math.random() * 0.4 + 0.1;
  let redCrab = new redCrabFish(
    './img/Fish_crab_jellyfish_shark/PNG/Crab_red/Crab_red_idle_000.png',
    speed,
    id
  );
  crabIDCounter++;
  return redCrab;
}
