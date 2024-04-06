class Level {
  backgroundNumber;
  verticallyMovingObjects;
  backgrounds = [];
  lionfishEnemies = [];
  decorativeMovingItems = [];
  endboss;
  objectsMovingUpAndDown = [];
  level_end_x = 5000;

  constructor(
    backgroundNumber,
    verticallyMovingObjects,
    numLionfishEnemiesToCreate
  ) {
    this.backgroundNumber = backgroundNumber;
    this.verticallyMovingObjects = verticallyMovingObjects;
    this.numLionfishEnemiesToCreate = numLionfishEnemiesToCreate;
    this.backgrounds = createBackground(backgroundNumber);
    this.generateLionfishEnemies(numLionfishEnemiesToCreate);
    this.createMobileItems();
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

  createMobileItems() {
    this.decorativeMovingItems.push(
      createIronChain(450, -50, 500, 200, ironChainArrays.move)
    );
    this.decorativeMovingItems.push(
      createIronChain(1200, -50, 500, 200, ironChainArrays.move)
    );
    this.decorativeMovingItems.push(
      createIronChain(180, 180, 80, 80, bombArrays.move)
    );
  }

  generateLionfishEnemies(numLionfishEnemiesToCreate) {
    let y_axis = 10; 
    for (let i = 0; i < numLionfishEnemiesToCreate; i++) {
      this.lionfishEnemies.push(createLionfishEnemies(y_axis));
      y_axis += 90; 
    }
  }
}
