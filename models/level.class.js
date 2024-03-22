class Level {
  backgroundNumber;
  backgrounds = [];
  endboss;
  objectsMovingUpAndDown = [];
  level_end_x = 5000;

  constructor(backgroundNumber) {
    this.backgroundNumber = backgroundNumber;
    this.backgrounds = createBackground(backgroundNumber);
    this.endboss = createEndboss(lionfishArrays.move[0]);
    this.objectsMovingUpAndDown = createObjectsMovingUpAndDown();
  }
}


