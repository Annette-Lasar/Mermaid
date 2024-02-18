class movableObject {
  x = 20;
  y = 380;
  img;

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

  moveRight() {
    console.log('Moving right');
  }

  moveLeft() {
    console.log('Moving left');
  }
}
