class World {
  character;
  crabEnemies = [];
  backgrounds = [];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.backgrounds = createBackground(1);
    this.character = createCharacter();
    this.crabEnemies = createCrabEnemies(4, 3);
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

