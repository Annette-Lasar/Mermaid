class Level {
  world;
  backgroundNumber;
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
  level_end_x = 5000;

  constructor(
    backgroundNumber,
    verticallyMovingObjects,
    numLionfishEnemiesToCreate,
    gameItemsData,
    mobileItemsData,
    valuableItemsData
  ) {
    this.backgroundNumber = backgroundNumber;
    this.verticallyMovingObjects = verticallyMovingObjects;
    this.numLionfishEnemiesToCreate = numLionfishEnemiesToCreate;
    this.backgrounds = createBackground(backgroundNumber);
    this.generateLionfishEnemies(numLionfishEnemiesToCreate);
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
    this.endboss = createEndboss(lionfishArrays.move[0]);
    this.createObjectsMovingUpAndDown();
  }

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

  spawnBlowfishEnemies() {
    this.blowfishEnemies.push(createBlowfishEnemies());

    const timeout = 3000 + Math.random() * 1000;
    setTimeout(this.spawnBlowfishEnemies.bind(this), timeout);
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

  createGoldenKey() {
    let speed = 0.6;
    this.valuableItems.push(
      createValuableItem(
        this.valuableItemsData.golden_key.name,
        this.valuableItemsData.golden_key.x,
        this.valuableItemsData.golden_key.y,
        this.valuableItemsData.golden_key.src,
        this.valuableItemsData.golden_key.width,
        this.valuableItemsData.golden_key.height,
        speed
      )
    );
  }

  generateStarfishSpecimen() {
    for (let i = 0; i < 20; i++) {
      let randomRangeX = Math.random() * 5800 - 800;
      let randomRangeY = Math.random() * 450;
      let randomSpeed = 0.3 + Math.random() * 0.5;

      this.valuableItems.push(
        createValuableItem(
          this.valuableItemsData.yellow_starfish.name,
          randomRangeX,
          randomRangeY,
          this.valuableItemsData.yellow_starfish.src,
          this.valuableItemsData.yellow_starfish.width,
          this.valuableItemsData.yellow_starfish.height,
          randomSpeed
        )
      );
    }
  }

  createPearlItem() {
    for (let i = 0; i < 20; i++) {
      let randomRangeX = Math.random() * 5800 - 800;
      let randomRangeY = Math.random() * 450;
      let randomSpeed = 0.3 + Math.random() * 0.5;

      this.valuableItems.push(
        createValuableItem(
          this.valuableItemsData.pearl_in_a_shell.name,
          randomRangeX,
          randomRangeY,
          this.valuableItemsData.pearl_in_a_shell.src,
          this.valuableItemsData.pearl_in_a_shell.width,
          this.valuableItemsData.pearl_in_a_shell.height,
          randomSpeed
        )
      );
    }
  }

  createIronChains() {
    let x_axis = 600;
    for (let i = 0; i < 2; i++) {
      let timeout = 100 + Math.random() * 100;
      this.decorativeMovingItems.push(
        createDecorativeMovingItem(
          this.mobileItemsData.ironChain.name,
          x_axis,
          this.mobileItemsData.ironChain.y,
          this.mobileItemsData.ironChain.src,
          this.mobileItemsData.ironChain.landscape_width,
          this.mobileItemsData.ironChain.portrait_width,
          this.mobileItemsData.ironChain.array,
          timeout
        )
      );
      x_axis += 750;
    }
  }

  createBombs() {
    for (let i = 0; i < 8; i++) {
      let randomRangeX = Math.random() * 5800 - 800;
      let randomRangeY = Math.random() * 450;
      this.decorativeMovingItems.push(
        createDecorativeMovingItem(
          this.mobileItemsData.dangerousBomb.name,
          randomRangeX,
          randomRangeY,
          this.mobileItemsData.dangerousBomb.src,
          this.mobileItemsData.dangerousBomb.landscape_width,
          this.mobileItemsData.dangerousBomb.portrait_width,
          this.mobileItemsData.dangerousBomb.array,
          200
        )
      );
    }
  }

  generateLionfishEnemies(numLionfishEnemiesToCreate) {
    let y_axis = 10;
    for (let i = 0; i < numLionfishEnemiesToCreate; i++) {
      this.lionfishEnemies.push(createLionfishEnemies(y_axis));
      y_axis += 90;
    }
  }
}
