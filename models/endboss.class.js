/* console.log('Ich bin die Endboss-Datei.'); */
class Endboss extends MovableObject {
  world;
  constructor(imgPath, speed) {
    super();
    super.loadImage(imgPath);
    this.speed = speed;
    this.x = 4800;
    this.y = 80;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 450 : 240;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(lionfishArrays.move);
    this.animateMove(lionfishArrays.move);
    this.loadImagesMoves(lionfishArrays.attack);
    // this.animateMove(lionfishArrays.attack);
    this.moveToAndFro();
  }

    animateMove(array) {
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 450 : 240;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.playAnimation(array);
    }, 50);
  }

  animateAttack(array) {
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 450 : 240;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.playAnimation(array);
    }, 50);
  }

  moveToAndFro() {
    const minX = 4025;
    const maxX = 4800;
    this.y_axis = Math.random() * 150;
    /* console.log(this.y_axis); */
    if (this.speed > 0) {
      if (this.x > maxX) {
        this.speed *= -1;
        this.y = this.y_axis;
        this.otherDirection = false;
        /*  */
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
