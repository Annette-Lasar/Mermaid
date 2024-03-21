class Level {
  backgroundNumber;
  backgrounds = [];
  endboss;
  level_end_x = 5000;

  constructor(backgroundNumber) {
    this.backgroundNumber = backgroundNumber;
    this.backgrounds = createBackground(backgroundNumber);
    this.endboss = createEndboss(lionfishArrays.move[0]);
    console.log('Endboss: ', this.endboss);
  }
}


