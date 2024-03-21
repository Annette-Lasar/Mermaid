/* console.log('Ich bin die Endboss-Datei.'); */
class Endboss extends movableObject {
  constructor(imgPath, speed) {
    super();
    super.loadImage(imgPath);
    this.speed = speed;
    this.x = 4300
    this.y = 80;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 450 : 240;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(lionfishArrays.die);
    this.animateMove(lionfishArrays.die);
  }

  animateMove(array) {
    setInterval(() => {
      this.playAnimation(array);
    }, 50);
  }
}
