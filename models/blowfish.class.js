class Blowfish extends Fish {
  id = '';
  constructor(imgPath, speed, id) {
    super();
    this.x = 800 + Math.random() * 200;
    this.y = 200;
    this.id = id;
    /* this.speed = speed; */
    super.loadImage(imgPath);
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(animalArrays.arrays.blowfishMove);
    this.animate(animalArrays.arrays.blowfishMove);
  }

  animate(array) {
    setInterval(() => {
      this.x -= 5;
      let i = this.currentImage % array.length;
      let path = array[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 10);
  }

  moveLeft() {

  }
}
