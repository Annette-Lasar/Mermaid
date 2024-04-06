class Lionfish extends Fish {
  id = '';
  constructor(imgPath, speed, id, y_axis) {
    super();
    this.x = 3500;
    // this.y = Math.random() * 420;
    this.speed = speed;
    this.id = id;
    this.y = y_axis;
    super.loadImage(imgPath);
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(lionfishArrays.move);
    this.animate(lionfishArrays.move);
    this.moveToAndFro();
  }

  animate(array) {
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.playAnimation(array);
    }, 1000 / 10);
  }

  moveToAndFro() {
    const minX = 2975;
    const maxX = 3615;
    if (this.speed > 0) {
      if (this.x > maxX) {
        this.speed *= -1;
        this.otherDirection = false;
      }
    } else {
      if (this.x < minX) {
        this.speed *= -1;
        this.otherDirection = true;
      }
    }
    this.moveHorizontally();
  }

  moveHorizontally() {
    this.x += this.speed;
    setTimeout(() => {
      this.moveToAndFro();
    }, 1000 / 60);
  }
}
