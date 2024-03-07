class World {
  canvas;
  backgrounds = [];
  character;
  crabEnemies = [];
  blowfishEnemies = [];
  keyboard;
  ctx;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    createAllAnimalsArrays();
    this.backgrounds = createBackground(1);
    this.character = createCharacter();
    this.spawnCrabEnemies();
    this.spawnBlowfishEnemies();
    this.draw();
    setInterval(() => {
      filterAndRemoveEnemies(this.crabEnemies);
      filterAndRemoveEnemies(this.blowfishEnemies);
      console.log('this.crabEnemies: ', this.crabEnemies);
    }, 3000);
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  /*   spawnCrabEnemies() {
    let random = Math.floor(Math.random() * 2);
    if (random == 0) {
      this.crabEnemies.push(createYellowCrab());
    } else {
      this.crabEnemies.push(createRedCrab());
    }
    const timeout = 2000 + Math.random() * 2000;
    setTimeout(this.spawnCrabEnemies.bind(this), timeout);
  } */

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

    /*  console.log('currentTimeout', timeout); */
    setTimeout(this.spawnCrabEnemies.bind(this), timeout);
  }

  spawnBlowfishEnemies() {
    this.blowfishEnemies.push(createBlowfishEnemies());

    const timeout = 4000 + Math.random() * 10000;
    setTimeout(this.spawnBlowfishEnemies.bind(this), timeout);
    /* console.log('Kugelfisch-Array: ', this.blowfishEnemies); */
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
    this.addObjectsToCanvas(this.backgrounds);
    this.drawOnCanvas(this.character);
    this.addObjectsToCanvas(this.blowfishEnemies);
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
