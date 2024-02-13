class yellowCrabFish extends Crab {
  // aspect ratio: 2.1 (408 x 197) (width x height)
  width = 100;
  height = this.width * (197 / 408);

  constructor(imgPath, originalWidth, originalHeight) {
    super();
    this.loadImage(imgPath);
    this.setDimensions(100, originalWidth, originalHeight);
  }
}
