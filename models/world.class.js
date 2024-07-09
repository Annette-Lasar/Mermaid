/**
 * This class manipulates the general logic of the game.
 */
class World {
  canvas;
  ctx;
  level = level1;
  character;
  stones;
  stoneSlabs = [];
  statusBarElements = [];
  bubbles = [];
  keyboard;
  alreadyShot = false;
  camera_x = 0;
  gameWon = false;
  collisionDetector;

  constructor(canvas, keyboard) {
    this.initializeMusic();
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.keyboard.linkButtonsToPressEvents();
    this.character = createCharacter();
    this.createStoneSlabs();
    this.createStatusBarElements();
    this.checkIncidents();
    this.draw();
    this.removeCertainEnemies();
    this.setWorld();
    this.collisionDetector = new CollisionDetector(this);
    this.character.changeEnergyStatus();
    this.character.changeAmmunitionStatus();
  }

  /**
   * This function initializes the music.
   */
  initializeMusic() {
    this.playMusic();
    this.setupMusicInterval();
  }

  /**
   * This function plays music in a loop.
   */
  playMusic() {
    if (music) {
      musicSound.play();
      setTimeout(this.playMusic.bind(this), 100);
    }
  }

  /**
   * This function sets up an interval that regularly
   * checks whether the music status is still true.
   */
  setupMusicInterval() {
    this.checkForSoundInterval = setInterval(() => {
      this.checkForMusic();
    }, 500);
  }

  /**
   * This function checks calls a stopMusic function if
   * the global variable music is false.
   */
  checkForMusic() {
    if (!music) {
      this.stopMusic();
    } else {
      this.playMusic();
      if (!this.alreadyChecked) {
        this.alreadyChecked = true;
        this.setupMusicInterval();
      }
    }
  }

  /**
   * This function stops the music.
   */
  stopMusic() {
    musicSound.pause();
    clearInterval(this.checkForSoundInterval);
  }

  /**
   * This function establishes a link between different classes that are not
   * in a hierarchical structure to one another.
   */
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

  /**
   * This function removes enemies that have left the visible realm of the canvas.
   */
  removeCertainEnemies() {
    setInterval(() => {
      filterAndRemoveEnemies(this.level.crabEnemies);
      filterAndRemoveEnemies(this.level.blowfishEnemies);
    }, 3000);
  }

  /**
   * This function creates stone slabs that mark the borders of the playing area.
   */
  createStoneSlabs() {
    let index = findStoneSlabArrayIndex();
    let stoneSlabIndex1 = findStoneSlabIndex('stone_slab_1', index);
    let stoneSlabIndex2 = findStoneSlabIndex('stone_slab_2', index);
    this.stoneSlabs.push(
      createStoneSlab(
        allImageObjects[index].object_information[stoneSlabIndex1].src,
        allImageObjects[index].object_information[stoneSlabIndex1].x,
        'WESTERN END OF TERRITORY'
      )
    );
    this.stoneSlabs.push(
      createStoneSlab(
        allImageObjects[index].object_information[stoneSlabIndex2].src,
        allImageObjects[index].object_information[stoneSlabIndex2].x,
        'EASTERN END OF TERRITORY'
      )
    );
  }

  /**
   * This function creates status bar elements.
   */
  createStatusBarElements() {
    const statusBarIndex = allImageObjects.findIndex((item) => {
      return item.type === 'statusBarComponentArrays';
    });
    for (const component of allImageObjects[statusBarIndex]
      .object_information) {
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

  /**
   * This function checks if certain enemies have left the visible realm of the canvas.
   * @param {Array} enemiesArray - This is an array of crabs or blowfish.
   * @returns - It returns the enemies that have left the canvas.
   */
  checkForCurrentEnemies(enemiesArray) {
    if (enemiesArray === this.level.crabEnemies) {
      let enemies = enemiesArray.filter((enemy) => enemy.y > CANVAS_HEIGHT);
      return enemies;
    } else if (enemiesArray === this.level.blowfishEnemies) {
      let enemies = enemiesArray.filter((enemy) => enemy.x < -1100);
      return enemies;
    } else {
      let enemies = [];
      return enemies;
    }
  }

  /**
   * This function pauses the music.
   */
  pauseMusic() {
    musicSound.pause();
  }

  /**
   * This function calls other functions that check for collisions and keyboard events.
   */
  checkIncidents() {
    setInterval(() => {
      this.checkKeyboard();
      this.checkBubbleCollisions();
    }, 50);
  }

  /**
   * This function checks if the player shoots bubbles.
   */
  checkKeyboard() {
    if (
      this.keyboard.SPACE &&
      !this.alreadyShot &&
      this.character.ammunitionCount > 0
    ) {
      this.alreadyShot = true;
      let bubble = createNewBubble(
        this.character.x + this.character.width,
        this.character.y + this.character.height - 100
      );
      this.bubbles.push(bubble);
      if (noise) {
        ploppSound.play();
      }
      this.character.ammunitionCount -= 10;
      setTimeout(() => {
        this.alreadyShot = false;
      }, 500);
      this.character.changeAmmunitionStatus();
    }
  }

  /**
   * This function checks if bubbles are colliding with enemies.
   */
  checkBubbleCollisions() {
    this.bubbleIsCollidingWithFish(this.level.blowfishEnemies);
    this.bubbleIsCollidingWithFish(this.level.crabEnemies);
    this.bubbleIsCollidingWithFish(this.level.lionfishEnemies);
    this.bubbleIsCollidingWithEndboss();
  }

  /**
   * This function draws elements on the canvas.
   */
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

  /**
   * This function adds objects to the canvas.
   * @param {Objects} objects - All objects that need to be drawn on the canvas.
   */
  addObjectsToCanvas(objects) {
    objects.forEach((o) => {
      this.drawOnCanvas(o);
    });
  }

  /**
   * This function draws objects on the canvas.
   * @param {Object} mo - All objects that need to be drawn on the canvas.
   */
  drawOnCanvas(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * This function flips images when the moving direction changes.
   * @param {Object} mo - Any object that might change direction while moving.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * This function flips back when the moving direction changes back to original.
   * @param {Object} mo - Any object that might change direction while moving.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  /**
   * This function creates an array containing all arrays with objects
   * that need to be drawn on the canvas.
   * @param {Array} arrayType - All arrays with objects that need to be drawn on the canvas.
   * @returns - It returns an array containing other arrays or containing objects.
   */
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

  /**
   * This function checks if a bubble is colliding with a fish, jellyfish or a crab.
   * @param {Array} array - This is an array with fish objects.
   */
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

  /**
   * This function removes a bubble and a fish after a collision.
   * @param {Array} array
   * @param {object} bubble
   * @param {object} fish
   */
  removeFishAndBubble(array, bubble, fish) {
    let fishIndex = array.findIndex((oneFish) => {
      return oneFish.id === fish.id;
    });
    if (fishIndex !== -1) {
      array.splice(fishIndex, 1);
      if (noise) {
        squelchSound.play();
      }
    }
    let bubbleIndex = this.bubbles.findIndex((oneBubble) => {
      return oneBubble.id === bubble.id;
    });
    if (bubbleIndex !== -1) {
      this.bubbles.splice(bubbleIndex, 1);
    }
  }

  /**
   * This function removes a bubble after a certain time if no collision has occurred.
   * @param {object} bubble
   */
  removeBubbleAfterTimeout(bubble) {
    if (!this.isNotCollided) {
      this.isNotCollided = true;
      let bubbleIndex = this.bubbles.findIndex((oneBubble) => {
        return oneBubble.id === bubble.id;
      });
      if (bubbleIndex !== -1) {
        setTimeout(() => {
          this.bubbles.splice(bubbleIndex, 1);
        }, 2000);
      }
    }
  }

  /**
   * This function checks if a bubble has collided with the endboss.
   */
  bubbleIsCollidingWithEndboss() {
    this.bubbles.forEach((bubble) => {
      let bubbleIndex = this.bubbles.findIndex((oneBubble) => {
        return oneBubble.id === bubble.id;
      });
      if (bubble.isColliding(this.level.endboss)) {
        this.level.endboss.endbossHitCounter++;
        if (bubbleIndex !== -1) {
          this.bubbles.splice(bubbleIndex, 1);
        }
        this.changeIconIfEndbossIsHit();
      }
    });
  }

  /**
   * This function changes the number icon in the status bar that
   * counts the number of hits to the endboss.
   */
  changeIconIfEndbossIsHit() {
    let counterIndex = this.statusBarElements.findIndex((element) => {
      return element.name === 'endboss_hit_icon';
    });
    const imgPathOne = 'img/game_ui/PNG/number/number_01.png';
    const imgPathTwo = 'img/game_ui/PNG/number/number_02.png';
    const imgPathThree = 'img/game_ui/PNG/number/number_03.png';

    if (this.level.endboss.endbossHitCounter === 1) {
      this.statusBarElements[counterIndex].img.src = imgPathOne;
    }
    if (this.level.endboss.endbossHitCounter === 2) {
      this.statusBarElements[counterIndex].img.src = imgPathTwo;
    }
    if (this.level.endboss.endbossHitCounter > 2) {
      this.statusBarElements[counterIndex].img.src = imgPathThree;
    }
  }

  /**
   * This function renders the winner screen.
   */
  renderWinnerScreenContent() {
    clearAllIntervals();
    if (noise) {
      successSound.play();
    }
    const outerStartScreen = document.getElementById(
      'start_screen_outer_wrapper'
    );
    outerStartScreen.innerHTML = generateWinnerScreenContentHTML();
  }
}
