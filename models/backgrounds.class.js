class Background extends movableObject {
    constructor(imgPath, canvasWidth) {
      super();
      this.x = 0;
      this.y = 0;
      this.loadImage(imgPath, canvasWidth);
      this.setDimensions(canvasWidth, originalBackgroundWidth, originalBackgroundHeight);
    }
  }