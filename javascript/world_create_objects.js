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
    `../img/Mermaid/PNG/Mermaid_${mermaidType}/idle_000.png`);
  return character;
}

function createCrabEnemies(numYellowCrabs, numRedCrabs) {
  let enemies = [];
  let newYellowEnemies = addYellowCrabs(numYellowCrabs);
  let newRedEnemies = addRedCrabs(numRedCrabs);

  enemies = newYellowEnemies.concat(newRedEnemies);
  return enemies;
}

function addYellowCrabs(numYellowCrabs) {
  let yellowEnemies = [];
  for (let i = 0; i < numYellowCrabs; i++) {
    let yellowCrab = new yellowCrabFish(
      './img/Fish_crab_jellyfish_shark/PNG/Crab_yellow/Crab_yellow_move_000.png');
    yellowEnemies.push(yellowCrab);
  }
  return yellowEnemies;
}

function addRedCrabs(numRedCrabs) {
  let redEnemies = [];
  for (let i = 0; i < numRedCrabs; i++) {
    let redCrab = new redCrabFish(
      '../img/Fish_crab_jellyfish_shark/PNG/Crab_red/Crab_red_idle_000.png');
    redEnemies.push(redCrab);
  }
  return redEnemies;
}
