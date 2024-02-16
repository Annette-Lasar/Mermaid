class Background extends movableObject {
    constructor(imgPath, canvasWidth, originalWidth, originalHeight) {
      super();
      this.x = 0;
      this.y = 0;
      this.loadImage(imgPath);
      this.setDimensions(canvasWidth, originalWidth, originalHeight);
    }
  }