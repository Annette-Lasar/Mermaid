class World {
  canvas;
  ctx;
  backgrounds = [];
  backgroundObjects = [];
  character;
  crabEnemies = [];
  blowfishEnemies = [];
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    createAllAnimalsArrays();
    this.backgrounds = createBackground(1);
    console.log('Backgrounds Konstruktor: ', this.backgrounds);
    this.character = createCharacter();
    this.spawnCrabEnemies();
    this.spawnBlowfishEnemies();
    this.draw();
    setInterval(() => {
      filterAndRemoveEnemies(this.crabEnemies);
      filterAndRemoveEnemies(this.blowfishEnemies);
    }, 3000);
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  /*   drawBackgroundObjects() {
    console.log('Hintergründe Character', this.backgrounds);
    this.backgrounds.forEach((bg) => {
      bg.x = x_axis;
      console.log('Hintergründe -x: ', this.backgrounds);
    })
  } */

/*   drawBackgroundObjects() {
    console.log('Hintergründe Character', this.backgrounds);
    for (let i = 0; i < 3; i++) {
      let x_axis = 852;
      this.backgrounds.forEach((bg) => {
        bg.x = x_axis * i;
      })
    }
  } */

  /*  drawBackgroundObjects() {
    let firstBackground = CANVAS_WIDTH;
    let imageCounter = 0;
    for (let i = -1; i < 10; i++) {
      imageCounter++;
      if (imageCounter == 3) {
        imageCounter = 1;
      }

      for (let j = 0; j < this.backgrounds.length && j < 6; j++) {
        const bg = this.backgrounds[j];
        this.backgroundObjects.push(
          new Background(`${bg}`)
          );
      }
      console.log('backgroundObjects', this.backgroundObjects);
    }
  } */

  /*  drawBackgroundObjects() {
    let firstBackground = 852;
    let imageCounter = 0;
    for (let i = -1; i < 10; i++) {
      imageCounter++;
      if (imageCounter == 3) {
        imageCounter = 1;
      }
      this.backgroundObjects.push(
        new Background(`img/Game_backgrounds/PNG/game_background_1/layers/${imageCounter}.png`, firstBackground * i, 0, this),
        new Background(`img/Game_backgrounds/PNG/game_background_1/layers/${imageCounter}.png`, firstBackground * i, 0.75, this),
        new Background(`img/Game_backgrounds/PNG/game_background_1/layers/${imageCounter}.png`, firstBackground * i, 2, this),
        new Background(`img/Game_backgrounds/PNG/game_background_1/layers/${imageCounter}.png`, firstBackground * i, 5, this),
        new Background(`img/Game_backgrounds/PNG/game_background_1/layers/${imageCounter}.png`, firstBackground * i, 7, this),
        new Background(`img/Game_backgrounds/PNG/game_background_1/layers/${imageCounter}.png`, firstBackground * i, 9, this),
      );
    }
    console.log('backgroundObjects', this.backgroundObjects);
  } */

  // constructor(imgPath, canvasWidth, x, y) {

  spawnCrabEnemies() {
    let random = Math.floor(Math.random() * 2);
    let timeout = 0;
    if (random == 0) {
      this.crabEnemies.push(createYellowCrab());
    } else {
      this.crabEnemies.push(createRedCrab());
    }
    if (!this.spawnFirst) {
      timeout = 0;
      this.spawnFirst = true;
    } else {
      timeout = 2000 + Math.random() * 2000;
    }
    setTimeout(this.spawnCrabEnemies.bind(this), timeout);
  }

  spawnBlowfishEnemies() {
    this.blowfishEnemies.push(createBlowfishEnemies());

    const timeout = 4000 + Math.random() * 10000;
    setTimeout(this.spawnBlowfishEnemies.bind(this), timeout);
  }

  checkForCurrentEnemies(enemiesArray) {
    if (enemiesArray === this.crabEnemies) {
      let enemies = enemiesArray.filter((enemy) => enemy.y > CANVAS_HEIGHT);
      return enemies;
    } else if (enemiesArray === this.blowfishEnemies) {
      let enemies = enemiesArray.filter((enemy) => enemy.x < 0);
      return enemies;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToCanvas(this.backgrounds);
    this.drawOnCanvas(this.character);
    this.addObjectsToCanvas(this.blowfishEnemies);
    this.addObjectsToCanvas(this.crabEnemies);
    this.ctx.translate(-this.camera_x, 0);

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
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }
}
