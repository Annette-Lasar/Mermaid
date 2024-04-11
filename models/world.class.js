class World {
  canvas;
  ctx;
  level = level1;
  character;
  stoneSlabs = [];
  // crabEnemies = [];
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.character = createCharacter();
    this.createStoneSlabs();
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
  }

  createStoneSlabs() {
    this.stoneSlabs.push(
      createStoneSlab(-850, 'WESTERN END OF TERRITORY', 20, 'white')
    );
    this.stoneSlabs.push(
      createStoneSlab(5200, 'EASTERN END OF TERRITORY', 20, 'white')
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

  isCollidingWithCrab() {
    this.level.crabEnemies.forEach((crab) => {
      if (this.character.isColliding(crab)) {
        this.character.hit();
      }
    });
  }

  isCollidingWithObjectMovingUpAndDown() {
    this.level.objectsMovingUpAndDown.forEach((objectMoving) => {
      if (this.character.isColliding(objectMoving)) {
        this.character.hit();
      }
    });
  }

  isCollidingWithLionfish() {
    this.level.lionfishEnemies.forEach((lionfish) => {
      if (this.character.isColliding(lionfish)) {
        this.character.hit();
      }
    });
  }

  isCollidingWithValualeItem() {
    this.level.valuableItems.forEach((valuableItem) => {
      if (this.character.isColliding(valuableItem)) {
        if (valuableItem.name === 'starfish') {
          this.character.energyCount += 10;
          this.removeItemFromCanvas(this.level.valuableItems, valuableItem);
        } else if (valuableItem.name === 'pearl') {
          this.character.ammunitionCount += 5;
          this.removeItemFromCanvas(this.level.valuableItems, valuableItem);
        } else if (valuableItem.name === 'key') {
          this.character.keyFound = true;
          this.removeItemFromCanvas(this.level.valuableItems, valuableItem);
        }
      }
    });
  }

  isCollidingWithEndboss() {
    if (this.character.isColliding(this.level.endboss)) {
      this.character.hit();
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
}
