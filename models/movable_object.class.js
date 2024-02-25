class movableObject {
  x = 20;
  y = 350;
  img;
  imageCache = {};

  constructor() {
    this.width = 0;
    this.height = 0;
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
      this.imageCache[path] = path;
    });
  }

  moveRight() {
    console.log('Moving right');
  }

  moveLeft() {
    console.log('Moving left');
  }
}
