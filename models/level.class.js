class Level {
  backgroundNumber;
  backgrounds = [];
  endboss;
  level_end_x = 2500;

  constructor(backgroundNumber) {
    this.backgroundNumber = backgroundNumber;
    this.backgrounds = createBackground(backgroundNumber);
    this.endboss = createEndboss();
    console.log('Endboss: ', this.endboss);
  }
}


