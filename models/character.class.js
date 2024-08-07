/**
 * This class manipulates the character.
 */
class Character extends MovableObject {
  world;
  mermaidIndex = allImageObjects.findIndex((item) => {
    return item.type === 'mermaidArrays';
  });
  statusBarIndex = allImageObjects.findIndex((item) => {
    return item.type === 'statusBarComponentArrays';
  });

  keyFound = false;
  ammunitionCount = 0;
  id;

  constructor(imgPath, speed) {
    super();
    this.id = new Date().getTime();
    super.loadImage(imgPath);
    this.currentX = this.x;
    this.y = 200;
    this.speed = speed;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 150 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(
      allImageObjects[this.mermaidIndex].images['idle_' + mermaidType]
    );
    this.loadImagesMoves(
      allImageObjects[this.mermaidIndex].images['move_' + mermaidType]
    );
    this.loadImagesMoves(
      allImageObjects[this.mermaidIndex].images['hurt_' + mermaidType]
    );
    this.loadImagesMoves(
      allImageObjects[this.mermaidIndex].images['die_' + mermaidType]
    );
    this.animate(
      allImageObjects[this.mermaidIndex].images['idle_' + mermaidType]
    );
  }

  /**
   * This function animates the character and checks for different situations (die,
   * hurt, move etc.)
   * @param {Array} array - This is an array with image paths in order to animate
   * the character. The default is 'idle'.
   */
  animate(array) {
    setInterval(() => {
      swimmingSound.pause();
      if (this.isDead()) {
        this.checkCharacterDeath();
      } else if (this.isHurt()) {
        this.checkCharacterHurt();
      } else {
        this.manipulateCharacterMovement(array);
      }
      this.world.camera_x = -this.x + 200;
    }, 40);
  }

  /**
   * This function sets the consequences for the character's death.
   */
  checkCharacterDeath() {
    this.defineImageDimensions();
    this.playAnimation(
      allImageObjects[this.mermaidIndex].images['die_' + mermaidType]
    );
    if (!this.alreadyLost) {
      this.characterDieAndLoseGame();
    }
  }

  /**
   * This function sets the consequences for the character being hurt.
   */
  checkCharacterHurt() {
    this.changeEnergyStatus();
    this.defineImageDimensions();
    this.playAnimation(
      allImageObjects[this.mermaidIndex].images['hurt_' + mermaidType]
    );
    if (noise) {
      mermaidHurtSound.play();
    }
  }

  /**
   * This function enables the player to move the character in four directions
   * @param {Array} array - This is an array with image objects to animate the character.
   */
  manipulateCharacterMovement(array) {
    if (this.keyArrowRightIsPressed()) {
      this.checkCharacterMoveRight();
    } else if (this.keyArrowLeftIsPressed()) {
      this.checkCharacterMoveLeft();
    } else if (this.keyArrowUpIsPressed()) {
      this.moveUp();
    } else if (this.keyArrowDownIsPressed()) {
      this.moveDown();
    } else {
      this.defineImageDimensions();
      this.playAnimation(array);
    }
  }

  /**
   * This function enables the character to move right.
   */
  checkCharacterMoveRight() {
    this.playAnimation(
      allImageObjects[this.mermaidIndex].images['move_' + mermaidType]
    );
    this.moveRight();
  }

  /**
   * This function enables the character to move left.
   */
  checkCharacterMoveLeft() {
    this.playAnimation(
      allImageObjects[this.mermaidIndex].images['move_' + mermaidType]
    );
    this.moveLeft();
  }

  /**
   * This function checks if the right arrow key is pressed.
   * @returns - It returns true or false.
   */
  keyArrowRightIsPressed() {
    return (
      this.world.keyboard.ARROWRIGHT && this.x < this.world.level.level_end_x
    );
  }

  /**
   * This function checks if the left arrow key is pressed.
   * @returns - It returns true or false.
   */
  keyArrowLeftIsPressed() {
    return this.world.keyboard.ARROWLEFT && this.x > -853;
  }

  /**
   * This function checks if the up arrow key is pressed.
   * @returns - It returns true or false.
   */
  keyArrowUpIsPressed() {
    return this.world.keyboard.ARROWUP && this.y > 0;
  }

  /**
   * This function checks if the down arrow key is pressed.
   * @returns - It returns true or false.
   */
  keyArrowDownIsPressed() {
    return this.world.keyboard.ARROWDOWN && this.y < 375;
  }

  /**
   * This function checks if the space key is pressed.
   * @returns - It returns true or false.
   */
  keySpaceIsPressed() {
    return this.world.keyboard.SPACE;
  }

  /**
   * This function moves the character to the right.
   */
  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
    if (noise) {
      swimmingSound.play();
    }
    this.defineImageDimensions();
  }

  /**
   * This function moves the character to the left.
   */
  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    if (noise) {
      swimmingSound.play();
    }
    this.defineImageDimensions();
  }

  /**
   * This function moves the character up.
   */
  moveUp() {
    this.y -= this.speed;
    this.defineImageDimensions();
  }

  /**
   * This function moves the character down.
   */
  moveDown() {
    this.y += this.speed;
    this.defineImageDimensions();
  }

  /**
   * This function updates the character's energy status in the status bar.
   */
  changeEnergyStatus() {
    let backgroundBar1Index = this.getBarIndex1();
    let statusWidth = this.getStatusWidth(backgroundBar1Index);
    let fillingLevelIndex = this.getFillingIndex1();
    let fillingLevelIndex2 = this.getFillingIndex2();
    let currentPercentage = (statusWidth * this.energyCount) / 100;
    if (this.energyCount <= 100) {
      this.removeGreenAndAdaptYellowEnergyBar(
        fillingLevelIndex2,
        fillingLevelIndex,
        currentPercentage
      );
    } else {
      this.addGreenEnergyBar(
        fillingLevelIndex,
        statusWidth,
        fillingLevelIndex2
      );
    }
  }

  /**
   * This function calculates how much energy above 100% the character has.
   * @returns - It returns a number which is the plus of energy over 100%.
   */
  calculateEnergyDifference() {
    let difference = this.energyCount - 100;
    return difference;
  }

  /**
   * This function updates the character's ammunition status in the status bar.
   */
  changeAmmunitionStatus() {
    let backgroundBar2Index = allImageObjects[
      this.statusBarIndex
    ].object_information.findIndex((component) => {
      return component.name === 'background_bar_2';
    });
    let statusWidth =
      allImageObjects[this.statusBarIndex].object_information[
        backgroundBar2Index
      ].width;
    let currentPercentage = (statusWidth * this.ammunitionCount) / 100;
    if (currentPercentage > statusWidth) {
      currentPercentage = statusWidth;
    }
    let fillingLevelIndex = this.world.statusBarElements.findIndex(
      (element) => {
        return element.name === 'filling_level_2';
      }
    );
    if (fillingLevelIndex !== -1) {
      this.world.statusBarElements[fillingLevelIndex].width = currentPercentage;
    }
  }

  /**
   * This function gets the index of an object in the general array
   * @returns - It returns an index number.
   */
  getBarIndex1() {
    let index = allImageObjects[
      this.statusBarIndex
    ].object_information.findIndex((component) => {
      return component.name === 'background_bar_1';
    });
    return index;
  }

   /**
   * This function gets the index of an object in the general array
   * @returns - It returns an index number.
   */
  getStatusWidth(backgroundBar1Index) {
    let index =
      allImageObjects[this.statusBarIndex].object_information[
        backgroundBar1Index
      ].width;
    return index;
  }

   /**
   * This function gets the index of an object in the general array
   * @returns - It returns an index number.
   */
  getFillingIndex1() {
    let index = this.world.statusBarElements.findIndex((element) => {
      return element.name === 'filling_level_1';
    });
    return index;
  }

   /**
   * This function gets the index of an object in the general array
   * @returns - It returns an index number.
   */
  getFillingIndex2() {
    let index = this.world.statusBarElements.findIndex((element) => {
      return element.name === 'filling_level_3';
    });
    return index;
  }

  /**
   * This function removes the green index bar if the energy level is lower than 100%.
   * @param {number} fillingLevelIndex2 
   * @param {number} fillingLevelIndex 
   * @param {number} currentPercentage 
   */
  removeGreenAndAdaptYellowEnergyBar(
    fillingLevelIndex2,
    fillingLevelIndex,
    currentPercentage
  ) {
    if (fillingLevelIndex2 !== -1) {
      this.world.statusBarElements[fillingLevelIndex2].width = 0;
    }
    if (fillingLevelIndex !== -1) {
      this.world.statusBarElements[fillingLevelIndex].width = currentPercentage;
    }
  }

  /**
   * This function adds a green energy bar on top of the yellow one if the
   * energy level is above 100%.
   * @param {number} fillingLevelIndex 
   * @param {number} statusWidth 
   * @param {number} fillingLevelIndex2 
   */
  addGreenEnergyBar(fillingLevelIndex, statusWidth, fillingLevelIndex2) {
    if (fillingLevelIndex !== -1) {
      this.world.statusBarElements[fillingLevelIndex].width = statusWidth;
    }
    let energyDifference = this.calculateEnergyDifference();
    let percentagePlus = (statusWidth * energyDifference) / 100;
    if (fillingLevelIndex2 !== -1) {
      this.world.statusBarElements[fillingLevelIndex2].width = percentagePlus;
    }
  }

  /**
   * This function creates the consequences for the character's death and
   * for losing the game.
   */
  characterDieAndLoseGame() {
    this.alreadyLost = true;
    if (noise) {
      mermaidDyingSound.play();
    }
    setTimeout(() => {
      if (noise) {
        gameFailedSound.play();
      }
      this.renderLoserScreenContent();
    }, 3000);
  }

  /**
   * This function renders the loser screen.
   */
  renderLoserScreenContent() {
    clearAllIntervals();
    const outerStartScreen = document.getElementById(
      'start_screen_outer_wrapper'
    );
    outerStartScreen.innerHTML = generateLoserScreenContentHTML();
  }
}
