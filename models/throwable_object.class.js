class ThrowableObject extends MovableObject {
  world;
  constructor(id, imgPath, x, y) {
    super();
    this.id = id;
    this.x = x;
    this.y = y;
    super.loadImage(imgPath);
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 15 : 15;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.shoot();
  }

  shoot() {
    setInterval(() => {
      this.speedX = 10;
      this.x += this.speedX;
    }, 1000 / 25);
  }
}
