class World {
  character;
  crabEnemies = [];
  backgrounds = [];
  canvas;
  keyboard;
  ctx;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.backgrounds = createBackground(1);
    this.character = createCharacter();
    this.spawnCrabEnemies();
    this.draw();
    setInterval(() => {
      filterAndRemoveCrabEnemies(this.crabEnemies);
    }, 3000);
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  spawnCrabEnemies() {
    let random = Math.floor(Math.random() * 2);
    if (random == 0) {
      this.crabEnemies.push(createYellowCrab());
    } else {
      this.crabEnemies.push(createRedCrab());
    }
    const timeout = 2000 + Math.random() * 2000;
    setTimeout(this.spawnCrabEnemies.bind(this), timeout);
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
