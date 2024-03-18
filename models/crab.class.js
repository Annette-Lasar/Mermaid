class Crab extends movableObject {
  constructor(imgPath, speed, array) {
    super();
    this.x = 1600 + (Math.random() * 425 * 2) / 3;
    /* this.y = Math.random() * 480 - 430; // (canvas.height / 3) */
    this.y = -20
    super.loadImage(imgPath);
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 80 : 60;
      this.setDimensions(
        currentWidth,
        this.img.width,
        this.img.height
      );
    };
    this.speed = speed;
    this.loadImagesMoves(array);

    this.animate(array);
    this.moveDown();
  }

  animate(array) {
    setInterval(() => {
      this.playAnimation(array);
    }, 1000 / 10);
  }

  moveDown() {
    setInterval(() => {
      this.y += this.speed;
    }, 1000 / 60);
  }
}
