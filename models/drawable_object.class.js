class DrawableObject {
  x = 20;
  y = 350;
  img;
  imageCache = {};
  currentImage = 0;
  width = 0;
  height = 0;

  constructor() {}

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
}
