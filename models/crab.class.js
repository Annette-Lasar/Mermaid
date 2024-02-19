class Crab extends movableObject {
  constructor(imgPath, originalWidth, originalHeight, speed) {
    super();
    this.x = 280 + (Math.random() * 425 * 2) / 3;
    this.y = Math.random() * 480 - 430; // (canvas.height / 3)
    this.loadImage(imgPath);
    this.setDimensions(80, originalWidth, originalHeight);
    this.speed = speed;
    this.moveDown();
    
  }
  moveDown() {
    setInterval(() => {
      this.y += this.speed;
    }, 1000 / 60);
  }
}
