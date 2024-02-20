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
    `../img/Mermaid/PNG/Mermaid_${mermaidType}/idle_000.png`
  );
  return character;
}

function createCrabEnemies(numYellowCrabs, numRedCrabs) {
  let newYellowEnemies = addYellowCrabs(numYellowCrabs);
  let newRedEnemies = addRedCrabs(numRedCrabs);
  let enemies = newYellowEnemies.concat(newRedEnemies);
  let filteredEnemies;

  setInterval(() => {
    filteredEnemies = enemies.filter((enemy) => enemy.y > CANVAS_HEIGHT);
    console.log('Alle Krebse 1: ', enemies);

    filteredEnemies.forEach((filteredEnemy) => {
      let crabIndex = enemies.findIndex((item) => item.id === filteredEnemy.id);
      console.log('Krebs-Index: ', crabIndex);
      enemies.splice(crabIndex, 1);
      console.log('Alle Krebse 2: ', enemies);
    });
  }, 3000);

  setInterval(() => {
    let updatedEnemies = addNewCrabEnemies(1, 1, enemies); // Neue Feinde hinzufügen
    enemies = enemies.concat(updatedEnemies);
  }, 5000);
  console.log('Alle Krebse 3: ', enemies);
  return enemies;
}

function addNewCrabEnemies(numYellowCrabs, numRedCrabs, currentEnemies) {
  let newYellowEnemies = addYellowCrabs(numYellowCrabs);
  let newRedEnemies = addRedCrabs(numRedCrabs);
  currentEnemies = newYellowEnemies.concat(newRedEnemies);
  return currentEnemies;
}

function addYellowCrabs(numYellowCrabs) {
  let yellowEnemies = [];
  let idCounter = 1;
  for (let i = 0; i < numYellowCrabs; i++) {
    let id = 'yellow' + idCounter;
    let speed = Math.random() * 0.4 + 0.1; // Zufällige Geschwindigkeit zwischen 0.1 und 0.6
    let yellowCrab = new yellowCrabFish(
      './img/Fish_crab_jellyfish_shark/PNG/Crab_yellow/Crab_yellow_move_000.png',
      speed,
      id
    );
    yellowEnemies.push(yellowCrab);
    idCounter++;
  }
  return yellowEnemies;
}

function addRedCrabs(numRedCrabs) {
  let redEnemies = [];
  let idCounter = 1;
  for (let i = 0; i < numRedCrabs; i++) {
    let id = 'red' + idCounter;
    let speed = Math.random() * 0.4 + 0.1;
    let redCrab = new redCrabFish(
      '../img/Fish_crab_jellyfish_shark/PNG/Crab_red/Crab_red_idle_000.png',
      speed,
      id
    );
    redEnemies.push(redCrab);
    idCounter++;
  }
  return redEnemies;
}
