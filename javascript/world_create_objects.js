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
    `./img/Mermaid/PNG/Mermaid_${mermaidType}/Idle_000.png`
  );
  return character;
}

function createCrabEnemies(numYellowCrabs, numRedCrabs) {
  let newYellowEnemies = addYellowCrabs(numYellowCrabs);
  let newRedEnemies = addRedCrabs(numRedCrabs);
  let enemies = newYellowEnemies.concat(newRedEnemies);
  console.log('Alle Krebse 4: ', enemies);

  let newCrabEnemies = addReasonableAmountOfCrabs(enemies);
  console.log('Alle Krebse 3: ', newCrabEnemies);
  return newCrabEnemies;
}

function addReasonableAmountOfCrabs(enemies) {
  let newEnemies = [];
  let addCrabInterval = setInterval(() => {
    let updatedEnemies = addNewCrabEnemies(3, 4, enemies);
    updatedEnemies.forEach((updatedEnemy) => newEnemies.push(updatedEnemy));
  }, 15000);

  checkAmountOfCrabs(addCrabInterval, newEnemies);
  return newEnemies;
}

function checkAmountOfCrabs(addCrabInterval, newEnemies) {
  if (newEnemies.length >= 7) {
    clearInterval(addCrabInterval);
  } else {
    newEnemies = addNewCrabEnemies(1, 1, newEnemies);
  }
}

function filterAndRemoveCrabEnemies(crabEnemies) {
  let filteredEnemies = crabEnemies.filter((enemy) => enemy.y > CANVAS_HEIGHT);
  console.log('Alle Krebse 1: ', crabEnemies);

  filteredEnemies.forEach((filteredEnemy) => {
    let crabIndex = crabEnemies.findIndex(
      (item) => item.id === filteredEnemy.id
    );
    console.log('Krebs-Index: ', crabIndex);
    crabEnemies.splice(crabIndex, 1);
    console.log('Alle Krebse 2: ', crabEnemies);
  });
}

function addNewCrabEnemies(numYellowCrabs, numRedCrabs, currentEnemies) {
  let newYellowEnemies = addYellowCrabs(numYellowCrabs);
  let newRedEnemies = addRedCrabs(numRedCrabs);
  currentEnemies = newYellowEnemies.concat(newRedEnemies);
  return currentEnemies;
}

function addYellowCrabs(numYellowCrabs) {
  let yellowEnemies = [];
  for (let i = 0; i < numYellowCrabs; i++) {
    let id = 'yellow' + crabIDCounter;
    let speed = Math.random() * 0.4 + 0.1;
    let yellowCrab = new yellowCrabFish(
      './img/Fish_crab_jellyfish_shark/PNG/Crab_yellow/Crab_yellow_move_000.png',
      speed,
      id
    );
    yellowEnemies.push(yellowCrab);
    crabIDCounter++;
  }
  return yellowEnemies;
}

function addRedCrabs(numRedCrabs) {
  let redEnemies = [];
  for (let i = 0; i < numRedCrabs; i++) {
    let id = 'red' + crabIDCounter;
    let speed = Math.random() * 0.4 + 0.1;
    let redCrab = new redCrabFish(
      './img/Fish_crab_jellyfish_shark/PNG/Crab_red/Crab_red_idle_000.png',
      speed,
      id
    );
    redEnemies.push(redCrab);
    crabIDCounter++;
  }
  return redEnemies;
}
