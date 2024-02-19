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
    addNewCrabEnemies(8, 8, filteredEnemies); // Neue Feinde hinzufügen
    console.log('Alle Krebse 3: ', enemies);
  }, 3000);

  return enemies;
}

/* function addNewCrabEnemies(numYellowCrabs, numRedCrabs, currentEnemies) {
  let newYellowEnemies = addYellowCrabs(numYellowCrabs);
  let newRedEnemies = addRedCrabs(numRedCrabs);
  let newEnemies = newYellowEnemies.concat(newRedEnemies);

  // Füge neue Krebse hinzu
  const updatedEnemies = currentEnemies.concat(newEnemies);

  // Aktualisiere die Liste der Feinde in der Klasse World
  currentEnemies.splice(0, currentEnemies.length, ...updatedEnemies);
} */

function addNewCrabEnemies(numYellowCrabs, numRedCrabs, currentEnemies) {
    let newYellowEnemies = addYellowCrabs(numYellowCrabs);
    let newRedEnemies = addRedCrabs(numRedCrabs);
    let newEnemies = newYellowEnemies.concat(newRedEnemies);
  
    // Kopie des aktuellen Enemies-Arrays erstellen
    let updatedEnemies = [...currentEnemies];
  
    // Neue Krebse zu der Kopie hinzufügen
    updatedEnemies = updatedEnemies.concat(newEnemies);
  
    return updatedEnemies;
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
