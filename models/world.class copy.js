class World {
  character = new Character(
    `../img/Mermaid/PNG/${mermaidType}/idle_000.png`,
    665,
    1028
  );
  
  crabEnemies = [];
  backgrounds = [];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    /* this.backgrounds = createBackground(canvas, 1); */
    this.crabEnemies = createCrabEnemies(4, 3);
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

 /*    this.backgrounds.forEach((background1) => {
      this.ctx.drawImage(
        background1.img,
        background1.x,
        background1.y,
        background1.width,
        background1.height
      );
    }); */

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

/* function createBackground(canvas, backgroundNumber) {
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
} */

/* function createBackground(canvas) {
  const backgroundComponents = [];
  for (let i = 0; i < backgroundImagesPathBack.length; i++) {
    const backgroundImagePathBack = backgroundImagesPathBack[i];
    const backgroundImagePath = backgroundImagePathBack;
    let background = new Background(
      backgroundImagePath,
      canvas.width,
      canvas.width,
      canvas.height
    );
    backgroundComponents.push(background);
  }
  return backgroundComponents;
} */

function createCrabEnemies(numYellowCrabs, numRedCrabs) {
  const enemies = [];
  for (let i = 0; i < numYellowCrabs; i++) {
    let yellowCrab = new yellowCrabFish(
      '../img/Fish_crab_jellyfish_shark/PNG/Crab_yellow/Crab_yellow_move_000.png',
      408,
      197
    );
    enemies.push(yellowCrab);
  }
  for (let i = 0; i < numRedCrabs; i++) {
    let redCrab = new redCrabFish(
      '../img/Fish_crab_jellyfish_shark/PNG/Crab_red/Crab_red_idle_000.png',
      594,
      280
    );
    enemies.push(redCrab);
  }
  return enemies;
}
