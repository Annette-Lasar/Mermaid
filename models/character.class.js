class Character extends MovableObject {
  world;
  swimming_sound = new Audio('audio/underwater_movement_02.mp3');
  bubbles = [];

  constructor(imgPath, speed) {
    super();
    super.loadImage(imgPath);
    // this.x = 4015;
    this.currentX = this.x;
    this.y = 200;
    this.speed = speed;
    this.bubbleSpeed = this.speed + 2;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 150 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };

    this.loadImagesMoves(mermaidArrays.idle);
    this.animateIdle(mermaidArrays.idle);
    this.loadImagesMoves(mermaidArrays.move);
    this.animateMoves(mermaidArrays.move);
  }

  animateIdle(array) {
    setInterval(() => {
      if (!this.world.keyboard.ARROWRIGHT && !this.world.keyboard.ARROWLEFT) {
        let currentWidth = this.img.width > this.img.height ? 150 : 80;
        this.setDimensions(currentWidth, this.img.width, this.img.height);
        this.playAnimation(array);
      }
    }, 50);
  }

  animateMoves(array) {
    setInterval(() => {
      this.swimming_sound.pause();
      if (this.keyArrowRightIsPressed()) {
        this.moveRight();
      }

      if (this.keyArrowLeftIsPressed()) {
        this.moveLeft();
      }

      if (this.keyArrowUpIsPressed()) {
        this.moveUp();
      }

      if (this.keyArrowDownIsPressed()) {
        this.moveDown();
      }

      /* if (this.keySpaceIsPressed()) {
        this.shoot();
      } */
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.ARROWRIGHT || this.world.keyboard.ARROWLEFT) {
        this.playAnimation(array);
        let currentWidth = this.img.width > this.img.height ? 150 : 80;
        this.setDimensions(currentWidth, this.img.width, this.img.height);
      }
    }, 50);
  }

  keyArrowRightIsPressed() {
    return (
      this.world.keyboard.ARROWRIGHT && this.x < this.world.level.level_end_x
    );
  }

  keyArrowLeftIsPressed() {
    return this.world.keyboard.ARROWLEFT && this.x > -853;
  }

  keyArrowUpIsPressed() {
    return this.world.keyboard.ARROWUP && this.y > 0;
  }

  keyArrowDownIsPressed() {
    return this.world.keyboard.ARROWDOWN && this.y < 375;
  }

  keySpaceIsPressed() {
    return this.world.keyboard.SPACE;
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
    this.swimming_sound.play();
    let currentWidth = this.img.width > this.img.height ? 150 : 80;
    this.setDimensions(currentWidth, this.img.width, this.img.height);
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    this.swimming_sound.play();
    let currentWidth = this.img.width > this.img.height ? 150 : 80;
    this.setDimensions(currentWidth, this.img.width, this.img.height);
  }

  moveUp() {
    this.y -= this.speed;
    this.swimming_sound.play();
    let currentWidth = this.img.width > this.img.height ? 150 : 80;
    this.setDimensions(currentWidth, this.img.width, this.img.height);
  }
  moveDown() {
    this.y += this.speed;
    this.swimming_sound.play();
    let currentWidth = this.img.width > this.img.height ? 150 : 80;
    this.setDimensions(currentWidth, this.img.width, this.img.height);
  }

  shoot() {
    this.generateDangerousBubbles();
    this.moveBubbles();
  }


  generateDangerousBubbles() {
    let src = './img/game_items/PNG/neutral/bubble_1.png';
    for (let i = 0; i < 3; i++) {
      let bubble = createGameItem('bubble', this.x, this.y, src, 30, 30);
      this.bubbles.push(bubble);
    }
  }

  moveBubbles() {
    setInterval(() => {
      this.bubbles.forEach((bubble) => {
        bubble.moveBubble(this.bubbleSpeed);
      });
    }, 1000 / 60); // Ändere die Zeitintervalle nach Bedarf
  }

  moveBubble(speed) {
    this.x += speed;
    this.y -= speed;
  }
}
