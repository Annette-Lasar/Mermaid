/* console.log('Ich bin die Endboss-Datei.'); */
class Endboss extends movableObject {
  constructor(imgPath, speed) {
    super();
    super.loadImage(imgPath);
    this.speed = speed;
    this.x = 4800;
    this.y = 200;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 450 : 240;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(hammerheadArrays.move);
    this.animateMove(hammerheadArrays.move);
  }

  animateMove(array) {
    setInterval(() => {
      let i = this.currentImage % array.length;
      let path = array[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 50);
  }
}
