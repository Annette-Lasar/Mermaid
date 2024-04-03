class Level {
  backgroundNumber;
  verticallyMovingObjects;
  backgrounds = [];
  decorativeMovingItems = [];
  endboss;
  objectsMovingUpAndDown = [];
  level_end_x = 5000;

  constructor(backgroundNumber, verticallyMovingObjects) {
    this.backgroundNumber = backgroundNumber;
    this.verticallyMovingObjects = verticallyMovingObjects;
    this.backgrounds = createBackground(backgroundNumber);
    this.createMobileItems();
    this.endboss = createEndboss(lionfishArrays.move[0]);
    this.createObjectsMovingUpAndDown();
  }

  createObjectsMovingUpAndDown() {
   this.objectsMovingUpAndDown.push(createObjectMovingUpAndDown(2200, 200, this.verticallyMovingObjects)); 
   this.objectsMovingUpAndDown.push(createObjectMovingUpAndDown(2300, 350, this.verticallyMovingObjects)); 
   this.objectsMovingUpAndDown.push(createObjectMovingUpAndDown(2400, 150, this.verticallyMovingObjects)); 
   this.objectsMovingUpAndDown.push(createObjectMovingUpAndDown(2500, 80, this.verticallyMovingObjects)); 
  }

  createMobileItems() {
    this.decorativeMovingItems.push(createIronChain(450, -50, 500, 200, ironChainArrays.move));
    this.decorativeMovingItems.push(createIronChain(1200, -50, 500, 200, ironChainArrays.move));
    this.decorativeMovingItems.push(createIronChain(180, 180, 80, 80, bombArrays.move));
  }
}


