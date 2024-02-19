class World {
  character;
  crabEnemies = [];
  backgrounds = [];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.backgrounds = createBackground(canvas, 1);
    this.character = createCharacter(canvas);
    this.crabEnemies = createCrabEnemies(canvas, 4, 3);
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToCanvas(this.backgrounds);
    this.drawOnCanvas(this.character);
    this.addObjectsToCanvas(this.crabEnemies);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToCanvas(objects) {
    objects.forEach((o) => {
      this.drawOnCanvas(o);
    });
  }

  drawOnCanvas(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
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
