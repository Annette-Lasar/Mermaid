class CollisionDetector {
  constructor(world) {
    this.world = world;
    this.character = world.character;
    this.bubbles = world.bubbles;
    this.level = world.level;
    this.statusBarElements = world.statusBarElements;
    this.checkForCharacterCollisions();
  }

  checkForCharacterCollisions() {
    setInterval(() => {
      this.characterIsCollidingWithBlowfish();
      this.characterIsCollidingWithCrab();
      this.characterIsCollidingWithObjectMovingUpAndDown();
      this.characterIsCollidingWithLionfish();
      this.characterIsCollidingWithValualeItem();
      this.characterIsCollidingWithDecorativeMovingObject();
      this.characterIsCollidingWithEndboss();
      this.characterIsCollidingWithTreasureChest();
    }, 50);
  }

  /**
   * This function checks if the character is colliding with a blowfish.
   */
  characterIsCollidingWithBlowfish() {
    this.level.blowfishEnemies.forEach((blowfish) => {
      if (this.character.characterCollision(blowfish) && !this.hasAlreadyCollided) {
        this.hasAlreadyCollided = true;
        this.character.hit();
        this.character.changeEnergyStatus();
        setTimeout(() => {
          this.hasAlreadyCollided = false;
        }, 2000);
      }
    });
  }

  /**
   * This function checks if the character has collided with a crab.
   * @returns - false
   */
  characterIsCollidingWithCrab() {
    const currentTime = Date.now();
    const timeSinceLastCollision = currentTime - this.lastCrabCollisionTime;
    if (timeSinceLastCollision < 3000) {
      return;
    }
    this.level.crabEnemies.forEach((crab) => {
      if (this.character.characterCollision(crab)) {
        this.character.hit();
        this.character.changeEnergyStatus();
        this.lastCrabCollisionTime = currentTime;
      }
    });
  }

  /**
   * This function checks if the character has collided with a jellyfish.
   * @returns false
   */
  characterIsCollidingWithObjectMovingUpAndDown() {
    const currentTime = Date.now();
    const timeSinceLastCollision =
      currentTime - this.lastJellyfishCollisionTime;
    if (timeSinceLastCollision < 3000) {
      return;
    }
    this.level.objectsMovingUpAndDown.forEach((objectMoving) => {
      if (this.character.characterCollision(objectMoving)) {
        this.character.hit();
        this.character.changeEnergyStatus();
        this.lastJellyfishCollisionTime = currentTime;
      }
    });
  }

  /**
   * This function checks if the character has collided with a lionfish.
   * @returns false
   */
  characterIsCollidingWithLionfish() {
    const currentTime = Date.now();
    const timeSinceLastCollision = currentTime - this.lastLionfishCollisionTime;
    if (timeSinceLastCollision < 3000) {
      return;
    }
    this.level.lionfishEnemies.forEach((lionfish) => {
      if (this.character.characterCollision(lionfish)) {
        this.character.hit();
        this.character.changeEnergyStatus();
        this.lastLionfishCollisionTime = currentTime;
      }
    });
  }

  /**
   * This function checks if the character has collided with a valuable item.
   */
  characterIsCollidingWithValualeItem() {
    this.level.valuableItems.forEach((valuableItem) => {
      if (this.character.characterCollision(valuableItem)) {
        if (valuableItem.name === 'starfish') {
          this.consequencesForCollisionWithValuableItem(valuableItem);
        }
        if (valuableItem.name === 'pearl') {
          this.consequencesForCollisionWithValuableItem(valuableItem);
        }
        if (valuableItem.name === 'key') {
          this.consequencesForCollisionWithValuableItem(valuableItem);
        }
      }
    });
  }

  /**
   * This function sets the consequences for a collision between the character and
   * a valuable item.
   * @param {object} valuableItem
   */
  consequencesForCollisionWithValuableItem(valuableItem) {
    if (valuableItem.name === 'starfish') {
      if (noise) {
        starSound.play();
      }
      this.character.energyCount += 10;
      this.character.changeEnergyStatus();
    } else if (valuableItem.name === 'pearl') {
      if (noise) {
        pearlSound.play();
      }
      this.character.ammunitionCount += 10;
      this.character.changeAmmunitionStatus();
    } else if (valuableItem.name === 'key') {
      if (noise) {
        keySound.play();
      }
      this.character.keyFound = true;
      this.changeKeyStatus();
    }
    this.removeItemFromCanvas(this.level.valuableItems, valuableItem);
  }

  /**
   * This function checks if the character has collided with a bomb.
   */
  characterIsCollidingWithDecorativeMovingObject() {
    this.level.decorativeMovingItems.forEach((movingItem) => {
      if (this.character.characterCollision(movingItem)) {
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

  /**
   * This function checks if the character has collided with the endboss.
   * @returns false
   */
  characterIsCollidingWithEndboss() {
    const currentTime = Date.now();
    const timeSinceLastCollision = currentTime - this.lastEndbossCollisionTime;
    if (timeSinceLastCollision < 3000) {
      return;
    }
    if (this.level.endboss.endbossHitCounter == 0) {
      if (this.character.characterCollision(this.level.endboss)) {
        this.character.hit();
        this.character.changeEnergyStatus();
        this.lastEndbossCollisionTime = currentTime;
      } else {
        return;
      }
    }
  }

  /**
   * This function checks if the character has collided with the treasure chest.
   */
  characterIsCollidingWithTreasureChest() {
    this.level.gameItems.forEach((oneItem) => {
      if (
        this.character.keyFound === true &&
        this.level.endboss.endbossHitCounter >= 3 &&
        this.character.characterCollision(oneItem)
      ) {
        let chestIndex = findTreasureChestIndex(this.level.gameItems);
        let substituteIndex = findIndexForSubstituteItems();
        let openChestIndex = findIndexForOpenChest(substituteIndex);
        if (!this.chestIsOpened) {
          this.chestIsOpened = true;
          if (noise) {
            mermaidJoySound.play();
          }
          this.level.gameItems[chestIndex].img.src =
            allImageObjects[substituteIndex].object_information[
              openChestIndex
            ].src;
        }
        if (!this.spawned) {
          this.spawned = true;
          this.gameWon = true;
          this.level.spawnClownfishVictims();
          setTimeout(() => {
            this.world.renderWinnerScreenContent();
          }, 5000);
        }
      }
    });
  }

  /**
   * This function removes an item from the canvas after a collision.
   * @param {Array} array - This is the array the item belongs to.
   * @param {Object} object - This is the item to be removed.
   */
  removeItemFromCanvas(array, object) {
    let index = array.findIndex((item) => {
      return item.id === object.id;
    });
    array.splice(index, 1);
  }

  /**
   * This function changes the key status in the status bar after the golden
   * key has been found.
   */
  changeKeyStatus() {
    let substituteIndex = allImageObjects.findIndex((item) => {
      return item.type === 'substituteItemArrays';
    });
    let trueSignIndex = allImageObjects[
      substituteIndex
    ].object_information.findIndex((item) => {
      return item.name === 'true_sign';
    });
    let imgPathTrueSign =
      allImageObjects[substituteIndex].object_information[trueSignIndex].src;
    this.changeIconIfKeyIsFound(imgPathTrueSign);
  }

  /**
   * This function changes the icon in the status bar after the golden key has been found.
   * @param {object} imgPathTrueSign
   */
  changeIconIfKeyIsFound(imgPathTrueSign) {
    if (this.character.keyFound) {
      const falseSignIndex = this.statusBarElements.findIndex(
        (element) => element.name === 'false_sign'
      );
      if (falseSignIndex !== -1) {
        this.statusBarElements[falseSignIndex].img.src = imgPathTrueSign;
        this.world.addObjectsToCanvas(this.statusBarElements);
      }
    }
  }
}
