class redCrabFish extends Crab {
  // aspect ratio: 2.1 (594 x 280) (width x height)
  width = 100;
  height = this.width * (280 / 594);

  constructor(imgPath, originalWidth, originalHeight) {
    super();
    this.x = 200 + Math.random() * 500;
    this.y = Math.random() * (canvas.height - this.height - 100) - 100;
    this.loadImage(imgPath);
    this.setDimensions(100, originalWidth, originalHeight);
  }
}
