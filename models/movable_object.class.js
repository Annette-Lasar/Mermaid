class movableObject {
  x = 20;
  y = 350;
  img;
  imageCache = {};
  currentImage = 0;
  speed = 0.75;
  otherDirection = false;
  speedY = 0;
  acceleration = 1;

  constructor() {
    this.width = 0;
    this.height = 0;
  }

/*   applyGravity() {
    setInterval(() => {
      if (this.y < 350) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  } */

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

  playAnimation(array) {
    let i = this.currentImage % array.length;
    let path = array[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    console.log('Moving right');
  }

  /*  moveLeft() {
    console.log('Moving left');
  } */
}
