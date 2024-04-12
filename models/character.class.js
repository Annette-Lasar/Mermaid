class Character extends MovableObject {
  world;
  swimming_sound = new Audio('audio/underwater_movement_02.mp3');
  keyFound = false;
  ammunitionCount = 0;
  bubbles = [];

  constructor(imgPath, speed) {
    super();
    super.loadImage(imgPath);
    // this.x = 1500;
    this.currentX = this.x;
    this.y = 200;
    this.speed = speed;
    this.bubbleSpeed = this.speed + 2;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 150 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };

    this.loadImagesMoves(mermaidArrays.idle);
    this.loadImagesMoves(mermaidArrays.move);
    this.loadImagesMoves(mermaidArrays.hurt);
    this.loadImagesMoves(mermaidArrays.die);
    this.loadImagesMoves(mermaidArrays.dead);
    this.animate(mermaidArrays.idle);
  }

   animate(array) {
    setInterval(() => {
      this.swimming_sound.pause();
      if (this.isDead()) {
        console.log('tot');
        this.defineImageDimensions();
        this.playAnimation(mermaidArrays.die);
      } else if (this.isHurt()) {
        // this.changeEnergyStatus();
        this.defineImageDimensions();
        this.playAnimation(mermaidArrays.hurt);
      } else {
        if (this.keyArrowRightIsPressed()) {
          this.playAnimation(mermaidArrays.move);
          this.moveRight();
        } else if (this.keyArrowLeftIsPressed()) {
          this.playAnimation(mermaidArrays.move);
          this.moveLeft();
        } else if (this.keyArrowUpIsPressed()) {
          this.moveUp();
        } else if (this.keyArrowDownIsPressed()) {
          this.moveDown();
        } else {
          this.defineImageDimensions();
          this.playAnimation(array);
        }
      }
      this.world.camera_x = -this.x + 200;
    }, 40);
  }

/*   animate(array) {
    setInterval(() => {
      this.swimming_sound.pause();

      if (this.keyArrowRightIsPressed()) {
        this.playAnimation(mermaidArrays.move);
        this.moveRight();
      } else if (this.keyArrowLeftIsPressed()) {
        this.playAnimation(mermaidArrays.move);
        this.moveLeft();
      } else if (this.keyArrowUpIsPressed()) {
        this.moveUp();
      } else if (this.keyArrowDownIsPressed()) {
        this.moveDown();
      } else {
        this.defineImageDimensions();
        this.playAnimation(array);
      }
      this.world.camera_x = -this.x + 200;
    }, 50);
  } */

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
    this.defineImageDimensions();
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    this.swimming_sound.play();
    this.defineImageDimensions();
  }

  moveUp() {
    this.y -= this.speed;
    this.defineImageDimensions();
  }
  moveDown() {
    this.y += this.speed;
    this.defineImageDimensions();
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
    }, 1000 / 60);
  }

  moveBubble(speed) {
    this.x += speed;
    this.y -= speed;
  }

  
  changeEnergyStatus() {
    let statusWidth = statusbarComponents.statusBarBackground1.width;
    let currentPercentage = (statusWidth * this.energyCount) / 100;
    if (currentPercentage > 200) {
      currentPercentage = 200;
    }
    console.log('Balkenlänge', currentPercentage);
    let fillingLevelIndex = this.world.statusBarElements.findIndex((element) => {
      return element.name === 'filling_level1';
    });
    if (fillingLevelIndex !== -1) {
      this.world.statusBarElements[fillingLevelIndex].width = currentPercentage;
    }
}

changeAmmunitionStatus() {
    let statusWidth = statusbarComponents.statusBarBackground2.width;
    let currentPercentage = (statusWidth * this.ammunitionCount) / 100;
    console.log('Balkenlänge', currentPercentage);
    let fillingLevelIndex = this.world.statusBarElements.findIndex((element) => {
      return element.name === 'filling_level2';
    });
    if (fillingLevelIndex !== -1) {
      this.world.statusBarElements[fillingLevelIndex].width = currentPercentage;
    }
}

}
