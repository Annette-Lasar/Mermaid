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

/* function createBackground(number) {
  let x_axis = CANVAS_WIDTH -1;
  const backgroundComponents = [];
  for (let i = -2; i < 10; i++) {
    if (i % 3 === 0) {
      number = 3;
    } else {
      number = 1;
    }
    backgroundImagesPathBack.forEach((backgroundImagePathBack) => {
      const backgroundImagePath =
        backgroundImagesPathFront + number + backgroundImagePathBack;
      backgroundComponents.push(new Background(backgroundImagePath, x_axis * i - 80));
    });
  }
  return backgroundComponents;
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
