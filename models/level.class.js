/**
 * This class manipulates the items of the first level.
 */
class Level {
  world;
  verticallyMovingObjects;
  backgrounds = [];
  blowfishEnemies = [];
  lionfishEnemies = [];
  crabEnemies = [];
  gameItems = [];
  valuableItems = [];
  decorativeMovingItems = [];
  endboss;
  objectsMovingUpAndDown = [];
  clownfishVictims = [];
  level_end_x = 5500;

  constructor(
    verticallyMovingObjects,
    numLionfishEnemiesToCreate,
    endbossArray,
    gameItemsData,
    mobileItemsData,
    valuableItemsData
  ) {
    this.verticallyMovingObjects = verticallyMovingObjects;
    this.numLionfishEnemiesToCreate = numLionfishEnemiesToCreate;
    this.backgrounds = createBackground(backgroundNumber);
    this.generateLionfishEnemies(numLionfishEnemiesToCreate);
    this.endbossArray = endbossArray;
    this.gameItemsData = gameItemsData;
    this.mobileItemsData = mobileItemsData;
    this.valuableItemsData = valuableItemsData;
    this.spawnBlowfishEnemies();
    this.spawnCrabEnemies();
    this.createGameItems();
    this.createGoldenKey();
    this.generateStarfishSpecimen();
    this.createPearlItem();
    this.createIronChains();
    this.createBombs();
    this.endboss = createEndboss(endbossArray[0]);
    this.createObjectsMovingUpAndDown();
  }

  /**
   * This function creates objects that constantly move up and down. In level 1 these
   * are blue jellyfish.
   */
  createObjectsMovingUpAndDown() {
    this.objectsMovingUpAndDown.push(
      createObjectMovingUpAndDown(2200, 200, this.verticallyMovingObjects)
    );
    this.objectsMovingUpAndDown.push(
      createObjectMovingUpAndDown(2300, 350, this.verticallyMovingObjects)
    );
    this.objectsMovingUpAndDown.push(
      createObjectMovingUpAndDown(2400, 150, this.verticallyMovingObjects)
    );
    this.objectsMovingUpAndDown.push(
      createObjectMovingUpAndDown(2500, 80, this.verticallyMovingObjects)
    );
  }

  /**
   * This function spawns blowfish. The createBlowfishEnemies function is defined
   * in the file world_create_objects.js
   */
  spawnBlowfishEnemies() {
    this.blowfishEnemies.push(createBlowfishEnemies());

    const timeout = 3000 + Math.random() * 1000;
    setTimeout(this.spawnBlowfishEnemies.bind(this), timeout);
  }

  /**
   * This function spawns crab enemies. The createYellowCrab and createRedCrab functions
   * are defined in the file world_create_objects.js.
   */
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

  /**
   * This function creates decorative game items. The function create gameItem is
   * defined in the file world_create_objects.js.
   */
  createGameItems() {
    this.gameItemsData.forEach((item) =>
      this.gameItems.push(
        createGameItem(
          item.name,
          item.x,
          item.y,
          item.src,
          item.width,
          item.height
        )
      )
    );
  }

    /**
   * This function creates the golden key that is necessary to open the treasure chest in
   * the end. The function createValuableItem is defined in the file world_create_objects.js.
   */
  createGoldenKey() {
    let keyIndex = this.valuableItemsData.findIndex((item) => {
      return item.name === 'key';
    });
    let speed = 0.6;
    this.valuableItems.push(
      createValuableItem(
        this.valuableItemsData[keyIndex].name,
        this.valuableItemsData[keyIndex].x,
        this.valuableItemsData[keyIndex].y,
        this.valuableItemsData[keyIndex].src,
        this.valuableItemsData[keyIndex].width,
        this.valuableItemsData[keyIndex].height,
        speed
      )
    );
  }

    /**
   * This function creates starfish for the character to replenish her energy stock. 
   * The function createValuableItem is defined in the file world_create_objects.js.
   */
  generateStarfishSpecimen() {
    let starfishIndex = this.valuableItemsData.findIndex((item) => {
      return item.name === 'starfish';
    });
    for (let i = 0; i < 15; i++) {
      let randomRangeX = Math.random() * 5800 - 800;
      let randomRangeY = Math.random() * 450;
      let randomSpeed = 0.3 + Math.random() * 0.5;

      this.valuableItems.push(
        createValuableItem(
          this.valuableItemsData[starfishIndex].name,
          randomRangeX,
          randomRangeY,
          this.valuableItemsData[starfishIndex].src,
          this.valuableItemsData[starfishIndex].width,
          this.valuableItemsData[starfishIndex].height,
          randomSpeed
        )
      );
    }
  }

      /**
   * This function creates shells with pearls for the character to replenish her ammunition stock. 
   * The function createValuableItem is defined in the file world_create_objects.js.
   */
  createPearlItem() {
    let pearlIndex = this.valuableItemsData.findIndex((item) => {
      return item.name === 'pearl';
    });
    for (let i = 0; i < 20; i++) {
      let randomRangeX = Math.random() * 5800 - 800;
      let randomRangeY = Math.random() * 450;
      let randomSpeed = 0.3 + Math.random() * 0.5;

      this.valuableItems.push(
        createValuableItem(
          this.valuableItemsData[pearlIndex].name,
          randomRangeX,
          randomRangeY,
          this.valuableItemsData[pearlIndex].src,
          this.valuableItemsData[pearlIndex].width,
          this.valuableItemsData[pearlIndex].height,
          randomSpeed
        )
      );
    }
  }

      /**
   * This function creates iron chains as decorative elements on the canvas. 
   * The function createcreateDecorativeMovingItem is defined in the file world_create_objects.js.
   */
  createIronChains() {
    let chainIndex = this.mobileItemsData.object_information.findIndex(
      (item) => {
        return item.name === 'chain';
      }
    );
    let x_axis = 600;
    for (let i = 0; i < 2; i++) {
      let timeout = 100 + Math.random() * 100;
      this.decorativeMovingItems.push(
        createDecorativeMovingItem(
          this.mobileItemsData.object_information[chainIndex].name,
          x_axis,
          this.mobileItemsData.object_information[chainIndex].y,
          this.mobileItemsData.object_information[chainIndex].src,
          this.mobileItemsData.object_information[chainIndex].landscapeWidth,
          this.mobileItemsData.object_information[chainIndex].portraitWidth,
          this.mobileItemsData.images.iron_chain,
          timeout
        )
      );
      x_axis += 750;
    }
  }

  /**
   * This function creates bombs on the canvas that kill the character instantly. 
   * The function createcreateDecorativeMovingItem is defined in the file world_create_objects.
   */
  createBombs() {
    let bombIndex = this.mobileItemsData.object_information.findIndex(
      (item) => {
        return item.name === 'bomb';
      }
    );
    for (let i = 0; i < 8; i++) {
      let randomRangeX = this.generateRandomXForBombs();
      let randomRangeY = Math.random() * 450;
      this.decorativeMovingItems.push(
        createDecorativeMovingItem(
          this.mobileItemsData.object_information[bombIndex].name,
          randomRangeX,
          randomRangeY,
          this.mobileItemsData.object_information[bombIndex].src,
          this.mobileItemsData.object_information[bombIndex].landscapeWidth,
          this.mobileItemsData.object_information[bombIndex].portraitWidth,
          this.mobileItemsData.images.dangerous_bomb,
          200
        )
      );
    }
  }

    /**
   * This function generates lionfish. The createLionfishEnemies function is defined
   * in the file world_create_objects.js
   */
  generateLionfishEnemies(numLionfishEnemiesToCreate) {
    let y_axis = 10;
    for (let i = 0; i < numLionfishEnemiesToCreate; i++) {
      this.lionfishEnemies.push(createLionfishEnemies(y_axis));
      y_axis += 90;
    }
  }

    /**
   * This function spawns clownfish. The createBlowfishEnemies function is defined
   * in the file world_create_objects.js
   */
  spawnClownfishVictims() {
    let index = allImageObjects.findIndex((item) => {
      return item.type === 'clownfishArrays';
    });
    let clownfishIndex = allImageObjects[index].object_information.findIndex(
      (item) => {
        return item.name === 'clownfish';
      }
    );
    for (let i = 0; i < 10; i++) {
      let x_axis = Math.random() * (5360 - 5220 + 1) + 5220;
      let y_axis = Math.random() * (400 - 350 + 1) + 350;
      let randomSpeed = 0.75 + Math.random() * 3;
      this.clownfishVictims.push(
        createClownFish(
          allImageObjects[index].object_information[clownfishIndex].src,
          x_axis,
          y_axis,
          randomSpeed
        )
      );
    }
  }

    /**
   * This function generates a random x value for bombs. If a bomb would be placed next
   * to the character's starting position it is replaced by another x value so that the
   * character isn't killed before the player had a chance to start playing.
   */
  generateRandomXForBombs() {
    let randomNumber;
    do {
      randomNumber = Math.random() * (5000 - -800) + -800;
    } while (randomNumber >= -10 && randomNumber <= 130);
    return randomNumber;
  }
}
