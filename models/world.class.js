class World {
  canvas;
  ctx;
  level = level1;
  character;
  stoneSlabs = [];
  statusBarElements = [];
  bubbles = [];
  keyboard;
  alreadyShot = false;
  camera_x = 0;

  constructor(canvas, keyboard) {
    if (music) {
      this.playMusic();
    }
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.character = createCharacter();
    this.bubbles;
    this.createStoneSlabs();
    this.createStatusBarElements();
    this.checkIncidents();
    this.draw();
    setInterval(() => {
      filterAndRemoveEnemies(this.level.crabEnemies);
      filterAndRemoveEnemies(this.level.blowfishEnemies);
    }, 3000);
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
    this.level.endboss.world = this;
    this.stoneSlabs.forEach((stoneSlab) => {
      stoneSlab.world = this;
    });
    this.level.gameItems.forEach((gameItem) => {
      gameItem.world = this;
    });
    this.level.valuableItems.forEach((valuableItem) => {
      valuableItem.world = this;
    });
    this.statusBarElements.forEach((element) => {
      element.world = this;
    });
    this.bubbles.forEach((element) => {
      element.world = this;
    });
  }

  createStoneSlabs() {
    this.stoneSlabs.push(
      createStoneSlab(-850, 'WESTERN END OF TERRITORY', 20, 'white')
    );
    this.stoneSlabs.push(
      createStoneSlab(5500, 'EASTERN END OF TERRITORY', 20, 'white')
    );
  }

  createStatusBarElements() {
    const statusBarIndex = allImages.findIndex((item) => {
      return item.type === 'statusbarComponents';
    });

    for (const component of allImages[statusBarIndex].items) {
      this.statusBarElements.push(
        createStatusBar(
          component.name,
          component.x,
          component.y,
          component.src,
          component.width,
          component.height
        )
      );
    }
  }

  checkForCurrentEnemies(enemiesArray) {
    if (enemiesArray === this.level.crabEnemies) {
      let enemies = enemiesArray.filter((enemy) => enemy.y > CANVAS_HEIGHT);
      return enemies;
    } else if (enemiesArray === this.level.blowfishEnemies) {
      let enemies = enemiesArray.filter((enemy) => enemy.x < -1100);
      return enemies;
    }
  }

  playMusic() {
    this.musicSound.play();
    setTimeout(this.playMusic.bind(this), 100);
  }

  checkIncidents() {
    setInterval(() => {
      this.checkCollisions();
      this.checkKeyboard();
      this.checkBubbleCollisions();
    }, 50);
  }

  checkCollisions() {
    this.isCollidingWithBlowfish();
    this.isCollidingWithCrab();
    this.isCollidingWithObjectMovingUpAndDown();
    this.isCollidingWithLionfish();
    this.isCollidingWithValualeItem();
    this.isCollidingWithDecorativeMovingObject();
    this.isCollidingWithEndboss();
    this.isCollidingWithTreasureChest();
    // console.log('Character-Energie:', this.character.energyCount);
  }

  checkKeyboard() {
    if (this.keyboard.SPACE && !this.alreadyShot) {
      this.alreadyShot = true;
      let bubble = createNewBubble(
        this.character.x + this.character.width,
        this.character.y + this.character.height - 100
      );
      this.bubbles.push(bubble);
      if (noise) {
        ploppSound.play();
      }
      this.character.ammunitionCount -= 5;
      setTimeout(() => {
        this.alreadyShot = false;
      }, 500);
      // this.character.changeAmmunitionStatus();
    }
  }

  // && this.character.ammunitionCount > 0

  checkBubbleCollisions() {
    this.bubbleIsCollidingWithFish(this.level.blowfishEnemies);
    this.bubbleIsCollidingWithFish(this.level.crabEnemies);
    this.bubbleIsCollidingWithFish(this.level.lionfishEnemies);
    this.bubbleIsCollidingWithEndboss();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    const arraysToDraw = this.defineArrays('nestedArrays');
    arraysToDraw.forEach((array) => {
      this.addObjectsToCanvas(array);
    });
    this.stoneSlabs.forEach((stone) => {
      stone.drawText();
    });
    const objectsToDraw = this.defineArrays('singleArrays');
    objectsToDraw.forEach((object) => {
      this.drawOnCanvas(object);
    });
    /* ------------------- space for fixed objects ---------------- */
    this.ctx.translate(-this.camera_x, 0);
    this.addObjectsToCanvas(this.statusBarElements);
    this.ctx.translate(this.camera_x, 0);
    /* ------------------- space for fixed objects ---------------- */

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
      this.flipImage(mo);
    }
    mo.draw(this.ctx);

    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  defineArrays(arrayType) {
    if (arrayType === 'nestedArrays') {
      const nestedArrays = [
        this.level.backgrounds,
        this.level.blowfishEnemies,
        this.level.gameItems,
        this.level.valuableItems,
        this.stoneSlabs,
        this.level.crabEnemies,
        this.level.decorativeMovingItems,
        this.level.objectsMovingUpAndDown,
        this.level.lionfishEnemies,
        this.bubbles,
        this.level.clownfishVictims,
      ];
      return nestedArrays;
    } else {
      const singleArrays = [this.character, this.level.endboss];
      return singleArrays;
    }
  }

  isCollidingWithBlowfish() {
    this.level.blowfishEnemies.forEach((blowfish) => {
      if (this.character.isColliding(blowfish)) {
        this.character.hit();
      }
    });
  }

  bubbleIsCollidingWithFish(array) {
    array.forEach((fish) => {
      this.bubbles.forEach((bubble) => {
        if (bubble.isColliding(fish)) {
          this.removeFishAndBubble(array, bubble, fish);
        } else {
          this.removeBubbleAfterTimeout(bubble);
        }
      });
    });
  }

  removeFishAndBubble(array, bubble, fish) {
    let fishIndex = array.findIndex((oneFish) => {
      return oneFish.id === fish.id;
    });
    if (fishIndex !== -1) {
      array.splice(fishIndex, 1);
      squelchSound.play();
    }
    let bubbleIndex = this.bubbles.findIndex((oneBubble) => {
      return oneBubble.id === bubble.id;
    });
    if (bubbleIndex !== -1) {
      this.bubbles.splice(bubbleIndex, 1);
    }
  }

  removeBubbleAfterTimeout(bubble) {
    let bubbleIndex = this.bubbles.findIndex((oneBubble) => {
      return oneBubble.id === bubble.id;
    });
    if (bubbleIndex !== -1) {
      setTimeout(() => {
        this.bubbles.splice(bubbleIndex, 1);
      }, 3000);
    }
  }

  bubbleIsCollidingWithEndboss() {
    this.bubbles.forEach((bubble) => {
      if (bubble.isColliding(this.level.endboss)) {
        console.log('Getroffen!');
        this.level.endboss.endbossHitCounter++;
      }
    });
  }

  isCollidingWithCrab() {
    const currentTime = Date.now();
    const timeSinceLastCollision = currentTime - this.lastCrabCollisionTime;
    if (timeSinceLastCollision < 3000) {
      return;
    }
    this.level.crabEnemies.forEach((crab) => {
      if (this.character.isColliding(crab)) {
        this.character.hit();
        this.character.changeEnergyStatus();
        this.lastCrabCollisionTime = currentTime;
      }
    });
  }

  isCollidingWithObjectMovingUpAndDown() {
    const currentTime = Date.now();
    const timeSinceLastCollision =
      currentTime - this.lastJellyfishCollisionTime;
    if (timeSinceLastCollision < 3000) {
      return;
    }
    this.level.objectsMovingUpAndDown.forEach((objectMoving) => {
      if (this.character.isColliding(objectMoving)) {
        this.character.hit();
        this.character.changeEnergyStatus();
        this.lastJellyfishCollisionTime = currentTime;
      }
    });
  }

  isCollidingWithLionfish() {
    const currentTime = Date.now();
    const timeSinceLastCollision = currentTime - this.lastLionfishCollisionTime;
    if (timeSinceLastCollision < 3000) {
      return;
    }
    this.level.lionfishEnemies.forEach((lionfish) => {
      if (this.character.isColliding(lionfish)) {
        this.character.hit();
        this.character.changeEnergyStatus();
        this.lastLionfishCollisionTime = currentTime;
      }
    });
  }

  isCollidingWithValualeItem() {
    this.level.valuableItems.forEach((valuableItem) => {
      if (this.character.isColliding(valuableItem)) {
        if (valuableItem.name === 'starfish') {
          if (noise) {
            starSound.play();
          }
          this.character.energyCount += 10;
          this.removeItemFromCanvas(this.level.valuableItems, valuableItem);
          this.character.changeEnergyStatus();
        }
        if (valuableItem.name === 'pearl') {
          if (noise) {
            pearlSound.play();
          }
          this.character.ammunitionCount += 10;
          this.removeItemFromCanvas(this.level.valuableItems, valuableItem);
          this.character.changeAmmunitionStatus();
        }
        if (valuableItem.name === 'key') {
          if (noise) {
            keySound.play();
          }
          this.character.keyFound = true;
          this.removeItemFromCanvas(this.level.valuableItems, valuableItem);
          this.changeKeyStatus();
        }
      }
    });
  }

  isCollidingWithEndboss() {
    const currentTime = Date.now();
    const timeSinceLastCollision = currentTime - this.lastEndbossCollisionTime;
    if (timeSinceLastCollision < 3000) {
      return;
    }
    if (this.level.endboss.endbossHitCounter == 0) {
      if (this.character.isColliding(this.level.endboss)) {
        this.character.hit();
        this.character.changeEnergyStatus();
        this.lastEndbossCollisionTime = currentTime;
      } else {
        return;
      }
    }
  }

  isCollidingWithDecorativeMovingObject() {
    this.level.decorativeMovingItems.forEach((movingItem) => {
      if (this.character.isColliding(movingItem)) {
        if (movingItem.name === 'bomb') {
          if (noise) {
            bombSound.play();
          }
          this.character.energyCount = 0;
          this.removeItemFromCanvas(
            this.level.decorativeMovingItems,
            movingItem
          );
        }
      }
    });
  }

  isCollidingWithTreasureChest() {
    this.level.gameItems.forEach((oneItem) => {
      if (
        this.character.keyFound === true &&
        this.level.endboss.endbossHitCounter >= 3 &&
        this.character.isColliding(oneItem)
      ) {
        let chestIndex = this.level.gameItems.findIndex((item) => {
          return item.name === 'chest_closed';
        });
        let openChestIndex = allImages.findIndex((item) => {
          return item.type === 'openTreasureChest';
        });
        this.level.gameItems[chestIndex].img.src =
          allImages[openChestIndex].images.src;
        successSound.play();
        this.level.spawnClownfishVictims();
      }
    });
  }

  removeItemFromCanvas(array, object) {
    let index = array.findIndex((item) => {
      return item.id === object.id;
    });
    array.splice(index, 1);
  }

  changeKeyStatus() {
    let index = allImages.findIndex((item) => {
      return item.type === 'trueSign';
    });
    let imgPathTrueSign = allImages[index].images.src;
    if (this.character.keyFound) {
      const falseSignIndex = this.statusBarElements.findIndex(
        (element) => element.name === 'false_sign'
      );
      if (falseSignIndex !== -1) {
        this.statusBarElements[falseSignIndex].img.src = imgPathTrueSign;
        this.addObjectsToCanvas(this.statusBarElements);
      }
    }
  }
}
