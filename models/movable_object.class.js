class MovableObject {
  x = 20;
  y = 350;
  img;
  imageCache = {};
  currentImage = 0;
  speed = 0.75;
  otherDirection = false;
  speedY = 0;
  acceleration = 1;
  energyCount = 100;
  lastHit = 0;

  constructor() {
    this.width = 0;
    this.height = 0;
  }

  defineImageDimensions() {
    let currentWidth = this.img.width > this.img.height ? 150 : 80;
    this.setDimensions(currentWidth, this.img.width, this.img.height);
  }

  setDimensions(width, originalWidth, originalHeight) {
    this.width = width;
    this.height = this.width * (originalHeight / originalWidth);
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImagesMoves(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Endboss ||
      this instanceof ValuableGameItem ||
      this instanceof MobileGameItem ||
      this instanceof Blowfish ||
      this instanceof Crab ||
      this instanceof ObjectMovingUpAndDown ||
      this instanceof Lionfish
    ) {
      ctx.beginPath();
      ctx.lineWidth = '3';
      ctx.strokeStyle = 'red';
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  isColliding(mo) {
    return this.x + this.width > mo.x &&
    this.y + this.height > mo.y &&
    this.x < mo.x &&
    this.y < mo.y + mo.height
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
    return timePassedSec < 1;
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


