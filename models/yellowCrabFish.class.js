class yellowCrabFish extends Crab {
  // aspect ratio: 2.1 (408 x 197) (width x height)
  width = 100;
  height = this.width * (197 / 408);

  constructor(imgPath, originalWidth, originalHeight, canvasWidth) {
    super();
    this.x = canvasWidth / 3 + Math.random() * canvasWidth * 2 / 3;
    this.y = Math.random() * (canvas.height / 3);
    this.loadImage(imgPath);
    this.setDimensions(canvasWidth / 10, originalWidth, originalHeight);
  }
}
