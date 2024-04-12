class World {
  canvas;
  ctx;
  level = level1;
  character;
  stoneSlabs = [];
  statusBarElements = [];
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.character = createCharacter();
    this.createStoneSlabs();
    this.createStatusBarElements();
    this.checkCollisions();
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
  }

  createStoneSlabs() {
    this.stoneSlabs.push(
      createStoneSlab(-850, 'WESTERN END OF TERRITORY', 20, 'white')
    );
    this.stoneSlabs.push(
      createStoneSlab(5200, 'EASTERN END OF TERRITORY', 20, 'white')
    );
  }

  createStatusBarElements() {
    this.statusBarElements.push(
      createStatusBar(
        statusbarComponents.iconStar.name,
        statusbarComponents.iconStar.x,
        statusbarComponents.iconStar.y,
        statusbarComponents.iconStar.src,
        statusbarComponents.iconStar.width,
        statusbarComponents.iconStar.height
      )
    );

    this.statusBarElements.push(
      createStatusBar(
        statusbarComponents.statusBarBackground1.name,
        statusbarComponents.statusBarBackground1.x,
        statusbarComponents.statusBarBackground1.y,
        statusbarComponents.statusBarBackground1.src,
        statusbarComponents.statusBarBackground1.width,
        statusbarComponents.statusBarBackground1.height
      )
    );

    this.statusBarElements.push(
      createStatusBar(
        statusbarComponents.fillingLevel1.name,
        statusbarComponents.fillingLevel1.x,
        statusbarComponents.fillingLevel1.y,
        statusbarComponents.fillingLevel1.src,
        statusbarComponents.fillingLevel1.width,
        statusbarComponents.fillingLevel1.height
      )
    );

    this.statusBarElements.push(
      createStatusBar(
        statusbarComponents.iconPearl.name,
        statusbarComponents.iconPearl.x,
        statusbarComponents.iconPearl.y,
        statusbarComponents.iconPearl.src,
        statusbarComponents.iconPearl.width,
        statusbarComponents.iconPearl.height
      )
    );

    this.statusBarElements.push(
      createStatusBar(
        statusbarComponents.statusBarBackground2.name,
        statusbarComponents.statusBarBackground2.x,
        statusbarComponents.statusBarBackground2.y,
        statusbarComponents.statusBarBackground2.src,
        statusbarComponents.statusBarBackground2.width,
        statusbarComponents.statusBarBackground2.height
      )
    );

    this.statusBarElements.push(
      createStatusBar(
        statusbarComponents.fillingLevel2.name,
        statusbarComponents.fillingLevel2.x,
        statusbarComponents.fillingLevel2.y,
        statusbarComponents.fillingLevel2.src,
        statusbarComponents.fillingLevel2.width,
        statusbarComponents.fillingLevel2.height
      )
    );

    this.statusBarElements.push(
      createStatusBar(
        statusbarComponents.iconKey.name,
        statusbarComponents.iconKey.x,
        statusbarComponents.iconKey.y,
        statusbarComponents.iconKey.src,
        statusbarComponents.iconKey.width,
        statusbarComponents.iconKey.height
      )
    );

    this.statusBarElements.push(
      createStatusBar(
        statusbarComponents.falseSign.name,
        statusbarComponents.falseSign.x,
        statusbarComponents.falseSign.y,
        statusbarComponents.falseSign.src,
        statusbarComponents.falseSign.width,
        statusbarComponents.falseSign.height
      )
    );
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

  checkCollisions() {
    setInterval(() => {
      this.isCollidingWithBlowfish();
      this.isCollidingWithCrab();
      this.isCollidingWithObjectMovingUpAndDown();
      this.isCollidingWithLionfish();
      this.isCollidingWithValualeItem();
      this.isCollidingWithDecorativeMovingObject();
      this.isCollidingWithEndboss();
      // console.log('Character-Energie:', this.character.energyCount);
    }, 50);
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

    this.ctx.translate(-this.camera_x, 0);
    this.addObjectsToCanvas(this.statusBarElements);
    this.ctx.translate(this.camera_x, 0);

    if (this.character.keyFound) {
      const falseSignIndex = this.statusBarElements.findIndex(
        (element) => element.name === 'false_sign'
      );
      if (falseSignIndex !== -1) {
        this.statusBarElements[falseSignIndex].src =
          './img/game_ui/PNG/settings/true.png';
      }
    }
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
        this.character.bubbles,
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

/*   isCollidingWithBlowfish() {
    const currentTime = Date.now();
    const timeSinceLastCollision = currentTime - this.lastBlowfishCollisionTime;
    if (timeSinceLastCollision < 3000) {
      return;
    }
    this.level.blowfishEnemies.forEach((blowfish) => {
      if (this.character.isColliding(blowfish)) {
        this.character.hit();
        this.character.changeEnergyStatus();
        this.lastBlowfishCollisionTime = currentTime; // Aktualisiere den Zeitpunkt der letzten Kollision
      }
    });
  } */

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
          this.character.energyCount += 10;
          this.removeItemFromCanvas(this.level.valuableItems, valuableItem);
          this.character.changeEnergyStatus();
        }
        if (valuableItem.name === 'pearl') {
          this.character.ammunitionCount += 5;
          this.removeItemFromCanvas(this.level.valuableItems, valuableItem);
          this.character.changeAmmunitionStatus();
        }
        if (valuableItem.name === 'key') {
          this.character.keyFound = true;
          this.removeItemFromCanvas(this.level.valuableItems, valuableItem);
          // this.changeKeyStatus();
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
    if (this.character.isColliding(this.level.endboss)) {
      this.character.hit();
      this.character.changeEnergyStatus();
      this.lastEndbossCollisionTime = currentTime;
    }
  }

  isCollidingWithDecorativeMovingObject() {
    this.level.decorativeMovingItems.forEach((movingItem) => {
      if (this.character.isColliding(movingItem)) {
        if (movingItem.name === 'bomb') {
          this.character.energyCount = 0;
          this.removeItemFromCanvas(
            this.level.decorativeMovingItems,
            movingItem
          );
        }
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
    if (this.character.keyFound) {
      let index = this.statusBarElements.findIndex((element) => {
        return element.name === 'false_sign';
      });
      if (index !== -1) {
        this.statusBarElements[index].src =
          './img/game_ui/PNG/settings/true.png';
      }
    }
  }
}
