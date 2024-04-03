class ObjectMovingUpAndDown extends MovableObject {
  x = 300;
  y = 300;

  constructor(x_axis, y_axis, imgPath, speed) {
    super();
    super.loadImage(imgPath);
    this.x = x_axis;
    this.y = y_axis;
    this.speed = speed;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(blueJellyfishArrays.move);
    this.animateMove(blueJellyfishArrays.move);
    this.moveUpAndDown();
  }

  animateMove(array) {
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.playAnimation(array);
    }, 50);
  }

  moveUpAndDown() {
    if (this.y > 0 && this.y < 430) {
      this.moveVertically();
    } else {
      this.speed *= -1;
      this.moveVertically();
    }
  }

  moveVertically() {
    this.y -= this.speed;
    setTimeout(() => {
      this.moveUpAndDown();
    }, 1000 / 60);
  }
}
