console.log('Ich bin die world.class-Datei.');
class World {
  canvas;
  ctx;
  level = level1;
  character;
  stoneSlabs = [];
  gameItems = [];
  crabEnemies = [];
  blowfishEnemies = [];
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.character = createCharacter();
    this.createGameItems();
    this.createStoneSlabs();
    this.spawnCrabEnemies();
    this.spawnBlowfishEnemies();
    this.draw();
    setInterval(() => {
      filterAndRemoveEnemies(this.crabEnemies);
      filterAndRemoveEnemies(this.blowfishEnemies);
    }, 3000);
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
    this.level.endboss.world = this;
    this.stoneSlabs.forEach((stoneSlab) => {
      stoneSlab.world = this;
    });
    this.gameItems.forEach((gameItem) => {
      gameItem.world = this;
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

  createGameItems() {
    this.gameItems.push(createGameItem('chest_closed', 4800, 280, './img/game_items/PNG/neutral/chest_closed.png', 250, 80));
    this.gameItems.push(createGameItem('smashed_barrel', 50, 350, './img/game_items/PNG/items/barrel_2.png', 200, 80));
    this.gameItems.push(createGameItem('anchor', 1200, 200, './img/game_items/PNG/items/anchor.png', 200, 200));
    this.gameItems.push(createGameItem('steering_wheel', 1800, 200, './img/game_items/PNG/items/steering-wheel.png', 200, 200));
    this.gameItems.push(createGameItem('stalagtite', 970, 0, './img/game_items/PNG/items/stone_4.png', 400, 100));
    this.gameItems.push(createGameItem('stalagtite', 905, 0, './img/game_items/PNG/items/stone_4.png', 400, 120));
    this.gameItems.push(createGameItem('rock', 800, 80, './img/game_items/PNG/items/stone_6.png', 400, 150));
    this.gameItems.push(createGameItem('flat_rock', 800, 350, './img/game_items/PNG/items/stone_3.png', 300, 150));
    this.gameItems.push(createGameItem('stalagtite', 2900, 0, './img/game_items/PNG/items/stone_4.png', 400, 90));
    this.gameItems.push(createGameItem('stalagmite', 2860, 260, './img/game_items/PNG/items/stone_5.png', 400, 140));
    this.gameItems.push(createGameItem('stalagtite', 3700, 0, './img/game_items/PNG/items/stone_4.png', 400, 90));
    this.gameItems.push(createGameItem('stalagmite', 3660, 260, './img/game_items/PNG/items/stone_5.png', 400, 140));
  }

  spawnCrabEnemies() {
    let random = Math.floor(Math.random() * 2);
    let timeout = 0;
    if (random == 0) {
      this.crabEnemies.push(createYellowCrab());
    } else {
      this.crabEnemies.push(createRedCrab());
    }
    if (!this.spawnFirst) {
      timeout = 0;
      this.spawnFirst = true;
    } else {
      timeout = 2000 + Math.random() * 2000;
    }
    setTimeout(this.spawnCrabEnemies.bind(this), timeout);
  }

  spawnBlowfishEnemies() {
    this.blowfishEnemies.push(createBlowfishEnemies());

    const timeout = 3000 + Math.random() * 1000;
    setTimeout(this.spawnBlowfishEnemies.bind(this), timeout);
  }

  checkForCurrentEnemies(enemiesArray) {
    if (enemiesArray === this.crabEnemies) {
      let enemies = enemiesArray.filter((enemy) => enemy.y > CANVAS_HEIGHT);
      return enemies;
    } else if (enemiesArray === this.blowfishEnemies) {
      let enemies = enemiesArray.filter((enemy) => enemy.x < -1100);
      return enemies;
    }
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
      if (objects == this.level.lionfishEnemies && this.otherDirection == true) {
        debugger;
      }
      this.drawOnCanvas(o);
    });
  }

  drawOnCanvas(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }

  defineArrays(arrayType) {
    if (arrayType === 'nestedArrays') {
      const nestedArrays = [
        this.level.backgrounds,
        this.blowfishEnemies,
        this.gameItems,
        this.stoneSlabs,
        this.crabEnemies,
        this.level.decorativeMovingItems,
        this.level.objectsMovingUpAndDown,
        this.level.lionfishEnemies
      ];
      return nestedArrays;
    } else {
      const singleArrays = [this.character, this.level.endboss];
      return singleArrays;
    }
  }
}
