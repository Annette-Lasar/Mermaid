class World {
  canvas;
  ctx;
  level = level1;
  character;
  treasureBox;
  stoneSlabs = [];
  crabEnemies = [];
  blowfishEnemies = [];
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.character = createCharacter();
    this.treasureBox = createTreasureBox();
    this.createStoneSlabs();
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
    this.stoneSlabs.world = this;
  }

  createStoneSlabs() {
    this.stoneSlabs.push(
      createStoneSlab(-850, 'WESTERN END OF TERRITORY', 20, 'white')
    );
    this.stoneSlabs.push(
      createStoneSlab(5200, 'EASTERN END OF TERRITORY', 20, 'white')
    );
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
      let enemies = enemiesArray.filter((enemy) => enemy.x < -1100);
      return enemies;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToCanvas(this.level.backgrounds);
    this.addObjectsToCanvas(this.stoneSlabs);
    this.stoneSlabs.forEach((stone) => {
      this.ctx.font = `${stone.textSize}px Josefin Slab`;
      this.ctx.fillStyle = stone.textColor;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(
        stone.text,
        stone.x + stone.width / 2,
        stone.y + stone.height / 2
      );
    });
    this.drawOnCanvas(this.character);
    this.drawOnCanvas(this.treasureBox);
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

  /*   drawText() {
    // Zeichne den Text auf die Steinplatte
    this.ctx.font = `${this.textSize}px Arial`; // Schriftart und -größe festlegen
    this.ctx.fillStyle = this.textColor; // Textfarbe festlegen
    this.ctx.textAlign = 'center'; // Zentriere den Text horizontal
    this.ctx.fillText(
      this.text,
      this.x + this.width / 2 + this.width / 4,
      this.y + this.height / 2,
    ); // Platzieren Sie den Text in der Mitte der Steinplatte
    let self = this;
    requestAnimationFrame(function () {
      self.drawText();
    });
  } */
}
