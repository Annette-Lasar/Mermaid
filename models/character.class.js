class Character extends MovableObject {
  world;
  swimming_sound = new Audio('audio/underwater_movement_02.mp3');
  bubbles = [];

  constructor(imgPath, speed) {
    super();
    super.loadImage(imgPath);
    this.x = 1500;
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
    this.animate(mermaidArrays.move);
  }

  animateIdle(array) {
    setInterval(() => {
      if (!this.world.keyboard.ARROWRIGHT && !this.world.keyboard.ARROWLEFT) {
        this.defineImageDimensions();
        this.playAnimation(array);
      }
      if (this.isColliding(this.world.level.endboss)) {
        console.log('Kollision mit Endgegner');
      }

      this.isCollidingWithBlowfish();
      this.isCollidingWithCrab();
      this.isCollidingWithObjectMovingUpAndDown();
      this.isCollidingWithLionfish();
      this.isCollidingWithDecorativeMovingObject();
      this.isCollidingWithValualeItem();
    }, 50);
  }

  animate(array) {
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

      if (this.isColliding(this instanceof Blowfish)) {
        console.log('Nochmal Kollision mit Kugelfisch');
      }

      if (this.keySpaceIsPressed()) {
        this.shoot();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.ARROWRIGHT || this.world.keyboard.ARROWLEFT) {
        this.playAnimation(array);
        this.defineImageDimensions();
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
    this.swimming_sound.play();
    this.defineImageDimensions();
  }
  moveDown() {
    this.y += this.speed;
    this.swimming_sound.play();
    this.defineImageDimensions();
  }

  isCollidingWithBlowfish() {
    this.world.level.blowfishEnemies.forEach((blowfish) => {
      if (this.isColliding(blowfish)) {
        console.log('Kollision mit Kugelfisch');
        // Hier kannst du weitere Aktionen für eine Kollision mit einem Kugelfisch ausführen
      }
    });
  }

  isCollidingWithCrab() {
    this.world.level.crabEnemies.forEach((crabEnemy) => {
      if (this.isColliding(crabEnemy)) {
        console.log('Kollision mit Krabbe');
      }
    });
  }

  isCollidingWithObjectMovingUpAndDown() {
    this.world.level.objectsMovingUpAndDown.forEach((object) => {
      if (this.isColliding(object)) {
        console.log('Kollision mit blauer Qualle');
        // Hier kannst du weitere Aktionen für eine Kollision mit einem Kugelfisch ausführen
      }
    });
  }

  isCollidingWithLionfish() {
    this.world.level.lionfishEnemies.forEach((lionfish) => {
      if (this.isColliding(lionfish)) {
        console.log('Kollision mit Feuerfisch');
        // Hier kannst du weitere Aktionen für eine Kollision mit einem Kugelfisch ausführen
      }
    });
  }

  isCollidingWithValualeItem() {
    this.world.level.valuableItems.forEach((valuableItem) => {
      if (this.isColliding(valuableItem)) {
        if (valuableItem.name === 'starfish') {
          console.log('Kollision mit Seestern');  
        } else if (valuableItem.name === 'pearl') {
          console.log('Kollision mit Perle');
        } else if (valuableItem.name === 'key') {
          console.log('Kollision mit Schlüssel');
        }
        
        
      }
    });
  }

  isCollidingWithDecorativeMovingObject() {
    this.world.level.decorativeMovingItems.forEach((item) => {
      if (this.isColliding(item)) {
        if (item.name === 'bomb') {
          console.log('Kollision mit Bombe');
        }

        // Hier kannst du weitere Aktionen für eine Kollision mit einem Kugelfisch ausführen
      }
    });
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
