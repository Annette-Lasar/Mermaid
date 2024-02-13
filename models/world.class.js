class World {
  character = new Character(
    `../img/Mermaid/PNG/${mermaidType}/idle_000.png`,
    665,
    1028
  );

  yellowCrab = new yellowCrabFish(
    '../img/Fish_crab_jellyfish_shark/PNG/Crab_yellow/Crab_yellow_move_000.png',
    408,
    197
  );
  redCrab = new redCrabFish(
    '../img/Fish_crab_jellyfish_shark/PNG/Crab_red/Crab_red_idle_000.png',
    594,
    280
  );
  butterflyFish = new Butterflyfish('../img/Fish_crab_jellyfish_shark/PNG/Butterflyfish/Butterflyfish_move_000.png', 236, 193);
  clownFish = new Clownfish('../img/Fish_crab_jellyfish_shark/PNG/Clownfish/Clownfish_move_000.png', 231, 135);
  blowFish = new Blowfish('../img/Fish_crab_jellyfish_shark/PNG/Blowfish/Blowfish_move_000.png', 208, 111);
  lionFish = new Lionfish('../img/Fish_crab_jellyfish_shark/PNG/Lionfish/Lionfish_move_000.png', 423, 336);
  jellyFishBlue = new JellyfishBlue(
    '../img/Fish_crab_jellyfish_shark/PNG/Jellyfish_blue/Jellyfish_blue_move_000.png',
    130,
    87
  );
  jellyFishPink = new JellyfishBlue(
    '../img/Fish_crab_jellyfish_shark/PNG/Jellyfish_pink/Jellyfish_pink_move_000.png',
    143,
    255
  );
  jellyFishPurple = new JellyfishBlue(
    '../img/Fish_crab_jellyfish_shark/PNG/Jellyfish_purple/Jellyfish_purple_move_000.png',
    196,
    294
  );
  seaUrchin = new seaUrchinFish('../img/Fish_crab_jellyfish_shark/PNG/Sea_urchin/Sea_urchin_idle_000.png', 311, 318);
  shark = new Shark();

  enemies = [
    this.yellowCrab,
    this.redCrab,
    this.butterflyFish,
    this.clownFish,
    this.blowFish,
    this.lionFish,
    this.jellyFishBlue,
    this.jellyFishPink,
    this.jellyFishPurple,
    this.seaUrchin,
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

    this.enemies.forEach((enemy) => {
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
