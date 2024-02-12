class World {
  character = new Character();

  yellowCrab = new yellowCrabFish('../img/Fish_crab_jellyfish_shark/PNG/Crab_2/Crab_idle_2_000.png');
  redCrab = new redCrabFish('../img/Fish_crab_jellyfish_shark/PNG/Crab_1/Crab_move_1_000.png');
  butterflyFish = new Fish();
  clownFish = new Fish();
  blowFish = new Fish();
  lionFish = new Fish();
  jellyFish = new Jellyfish();
  seaUrchin = new seaUrchinFish();
  shark = new Shark();

  enemies = [
    this.yellowCrab,
    this.redCrab,
    this.butterflyFish,
    this.clownFish,
    this.blowFish,
    this.lionFish,
    this.jellyFish,
    this.seaUrchin,
    this.shark,
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }


  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );


    this.enemies.forEach(enemy => {
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
