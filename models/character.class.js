class Character extends MovableObject {
  world;
  mermaidIndex = allImages.findIndex((item) => {
    return item.type === 'mermaidArrays';
  });
  statusBarIndex = allImages.findIndex((item) => {
    return item.type === 'statusbarComponents';
  });
  swimmingSound = new Audio('./audio/underwater_movement.mp3');
  gameFailedSound = new Audio('./audio/game_failed.mp3');
  keyFound = false;
  ammunitionCount = 1000;

  constructor(imgPath, speed) {
    super();
    super.loadImage(imgPath);
    // this.x = 5250;
    this.x = 3890;
    this.currentX = this.x;
    this.y = 100;
    // this.x = 200;
    this.speed = speed;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 150 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };

    this.loadImagesMoves(allImages[this.mermaidIndex].images.idle);
    this.loadImagesMoves(allImages[this.mermaidIndex].images.move);
    this.loadImagesMoves(allImages[this.mermaidIndex].images.hurt);
    this.loadImagesMoves(allImages[this.mermaidIndex].images.die);
    this.animate(allImages[this.mermaidIndex].images.idle);
   
  }

  /*  animate(array) {
    setInterval(() => {
      this.swimmingSound.pause();
      if (this.isDead()) {
        console.log('tot');
        this.defineImageDimensions();
        this.playAnimation(allImages[this.mermaidIndex].images.die);
        this.gameFailedSound.play();
      } else if (this.isHurt()) {
        // this.changeEnergyStatus();
        this.defineImageDimensions();
        this.playAnimation(allImages[this.mermaidIndex].images.hurt);
      } else {
        if (this.keyArrowRightIsPressed()) {
          this.playAnimation(allImages[this.mermaidIndex].images.move);
          this.moveRight();
        } else if (this.keyArrowLeftIsPressed()) {
          this.playAnimation(allImages[this.mermaidIndex].images.move);
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
  } */

  animate(array) {
    setInterval(() => {
      this.swimmingSound.pause();

      if (this.keyArrowRightIsPressed()) {
        this.playAnimation(allImages[this.mermaidIndex].images.move);
        this.moveRight();
      } else if (this.keyArrowLeftIsPressed()) {
        this.playAnimation(allImages[this.mermaidIndex].images.move);
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
  }

  keyArrowRightIsPressed() {
    // console.log(this.world.level.blowfishEnemies);
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
    if (noise) {
      this.swimmingSound.play();
    }
    this.defineImageDimensions();
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    if (noise) {
      this.swimmingSound.play();
    }
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

  changeEnergyStatus() {
    let background1Index = allImages[this.statusBarIndex].items.findIndex((component) => {
      return component.name === 'background_bar1';
    });
    console.log('background-bar1-Index: ', background1Index);
    let statusWidth = allImages[this.statusBarIndex].items[background1Index].width;
    let currentPercentage = (statusWidth * this.energyCount) / 100;
    if (currentPercentage > statusWidth) {
      currentPercentage = statusWidth;
    }
    console.log('Energiestatus', currentPercentage);
    let fillingLevelIndex = this.world.statusBarElements.findIndex(
      (element) => {
        return element.name === 'filling_level1';
      }
    );
    if (fillingLevelIndex !== -1) {
      this.world.statusBarElements[fillingLevelIndex].width = currentPercentage;
    }
  }

  changeAmmunitionStatus() {
    let background2Index = allImages[this.statusBarIndex].items.findIndex((component) => {
      return component.name === 'background_bar2';
    });
    let statusWidth = allImages[this.statusBarIndex].items[background2Index].width;
    let currentPercentage = (statusWidth * this.ammunitionCount) / 100;
    if (currentPercentage > statusWidth) {
      currentPercentage = statusWidth;
    }
    // console.log('Munitionsvorrat:', currentPercentage);
    let fillingLevelIndex = this.world.statusBarElements.findIndex(
      (element) => {
        return element.name === 'filling_level2';
      }
    );
    if (fillingLevelIndex !== -1) {
      this.world.statusBarElements[fillingLevelIndex].width = currentPercentage;
    }
  }
}
