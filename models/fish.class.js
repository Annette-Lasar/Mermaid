class Fish extends movableObject {
  constructor(imgPath, originalWidth, originalHeight) {
    super();
    this.x = 400 + Math.random() * 400;
    console.log(this.x);
    this.y = 200;
    this.loadImage(imgPath);
    this.setDimensions(100, originalWidth, originalHeight);
    /* this.speed = speed; */
  }
}
