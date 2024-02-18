class World {
  /*  character = new Character(
    `../img/Mermaid/PNG/${mermaidType}/idle_000.png`, 665, 1028);
 */
  character;
  crabEnemies = [];
  backgrounds = [];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    updateCanvasSize(canvas);
    this.backgrounds = createBackground(canvas, 1);
    this.character = createCharacter(canvas);
    this.crabEnemies = createCrabEnemies(canvas, 4, 3);
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.backgrounds.forEach((background) => {
      this.ctx.drawImage(
        background.img,
        background.x,
        background.y,
        background.width,
        background.height
      );
    });

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );

    this.crabEnemies.forEach((enemy) => {
      this.ctx.drawImage(
        enemy.img,
        enemy.x,
        enemy.y,
        enemy.width,
        enemy.height
      );
    });

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}

function updateCanvasSize() {
  const aspectRatio = 16 / 9;
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;
  /* const availableWidth = maxWidth; */
  const availableHeight = maxWidth / aspectRatio;

  if (availableHeight > maxHeight) {
    this.canvas.width = maxHeight * aspectRatio;
    this.canvas.height = maxHeight;
  } else {
    this.canvas.width = maxWidth;
    this.canvas.height = maxWidth / aspectRatio;
  }
}

function createBackground(canvas, backgroundNumber) {
  const backgroundComponents = [];
  for (let i = 0; i < backgroundImagesPathBack.length; i++) {
    const backgroundImagePathBack = backgroundImagesPathBack[i];
    const backgroundImagePath =
      backgroundImagesPathFront + backgroundNumber + backgroundImagePathBack;
    let background = new Background(
      backgroundImagePath,
      canvas.width,
      canvas.width,
      canvas.height
    );
    backgroundComponents.push(background);
  }
  return backgroundComponents;
}

function createCharacter(canvas) {
  const character = new Character(
    `../img/Mermaid/PNG/Mermaid_1/idle_000.png`,
    665,
    1028,
    canvas.width
  );
  return character;
}

function createCrabEnemies(canvas, numYellowCrabs, numRedCrabs) {
  const enemies = [];
  for (let i = 0; i < numYellowCrabs; i++) {
    let yellowCrab = new yellowCrabFish(
      './img/Fish_crab_jellyfish_shark/PNG/Crab_yellow/Crab_yellow_move_000.png',
      408,
      197,
      canvas.width
    );
    enemies.push(yellowCrab);
  }
  for (let i = 0; i < numRedCrabs; i++) {
    let redCrab = new redCrabFish(
      '../img/Fish_crab_jellyfish_shark/PNG/Crab_red/Crab_red_idle_000.png',
      594,
      280,
      canvas.width
    );
    enemies.push(redCrab);
  }
  return enemies;
}
