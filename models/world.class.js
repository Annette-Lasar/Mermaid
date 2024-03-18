/* console.log('Ich bin die world.class.js-Datei'); */
class World {
  canvas;
  ctx;
  level = level1;
  character;
  crabEnemies = [];
  blowfishEnemies = [];
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
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
      let enemies = enemiesArray.filter((enemy) => enemy.x < -100);
      return enemies;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToCanvas(this.level.backgrounds);
    this.drawOnCanvas(this.character);
    this.drawOnCanvas(this.level.endboss);
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
