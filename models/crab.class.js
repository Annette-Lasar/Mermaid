class Crab extends movableObject {
  constructor(imgPath, originalWidth, originalHeight, speed, array) {
    super();
    this.x = 280 + (Math.random() * 425 * 2) / 3;
    this.y = Math.random() * 480 - 430; // (canvas.height / 3)
    this.loadImage(imgPath);
    this.setDimensions(80, originalWidth, originalHeight);
    this.speed = speed;
    this.loadImagesMoves(array);
    this.animate(array);
    this.moveDown();
  }

  animate(array) {
    setInterval(() => {
      let i = this.currentImage % array.length;
      let path = array[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000/10);
  }

  moveDown() {
    setInterval(() => {
      this.y += this.speed;
    }, 1000 / 60);
  }
}
