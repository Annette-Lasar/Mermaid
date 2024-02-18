class redCrabFish extends Crab {
  // aspect ratio: 2.1 (594 x 280) (width x height)
  width = 100;
  height = this.width * (280 / 594);

  constructor(imgPath, originalWidth, originalHeight, canvasWidth) {
    super();
    this.x = canvasWidth / 4 + Math.random() * 500;
    this.y = Math.random() * (canvas.height / 3);
    this.loadImage(imgPath);
    this.setDimensions(canvasWidth / 12, originalWidth, originalHeight);
  }
}
