class Crab extends movableObject {
  constructor(imgPath, originalWidth, originalHeight) {
    super();
    this.x = 280 + (Math.random() * 425 * 2) / 3;
    this.y = Math.random() * 160; // (canvas.height / 3)
    this.loadImage(imgPath);
    this.setDimensions(80, originalWidth, originalHeight);
    this.moveDown();
  }
  moveDown() {
    setInterval(() => {
      this.y += 0.1;
    }, 1000 / 60);
  }
}
