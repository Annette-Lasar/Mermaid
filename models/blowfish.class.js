console.log('Ich bin die blowfish.class-Datei.');
class Blowfish extends Fish {
  id = '';
  constructor(imgPath, speed, id) {
    super();
    this.x = 940;
    this.y = Math.random() * 420;
    this.id = id;
    this.speed = speed;
    super.loadImage(imgPath);
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(blowfishArrays.move);
    this.animate(blowfishArrays.move);
  }

  animate(array) {
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.x -= this.speed;
      this.playAnimation(array);
    }, 1000 / 10);
  }

}
