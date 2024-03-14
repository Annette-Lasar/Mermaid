class Level {
  backgroundNumber;
  backgrounds = [];

  constructor(backgroundNumber) {
    this.backgroundNumber = backgroundNumber;
    this.backgrounds = createBackground(backgroundNumber);
  }
}


