class MovableObject extends DrawableObject {
  speed = 0.75;
  otherDirection = false;
  speedY = 0;
  acceleration = 1;
  energyCount = 50;
  lastHit = 0;

  constructor() {
    super();
  }

 /*  applyGravity() {
    setInterval(() => {
      this.y = this.speedY;
      this.speedY -= this.acceleration;
    }, 1000 / 25);
  } */

  loadImagesMoves(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }


  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  hit() {
    this.energyCount -= 5;
    if (this.energyCount < 0) {
      this.energyCount = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    let timePassedSec = timePassed / 1000;
    return timePassedSec < 3;
  }

  isDead() {
    return this.energyCount == 0;
  }

  playAnimation(array) {
    let i = this.currentImage % array.length;
    let path = array[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
