/**
 * This class is the highest in this game. It mainly provides functions
 * that create images on the canvas.
 */
class DrawableObject {
  x = 20;
  y = 350;
  img;
  imageCache = {};
  currentImage = 0;
  width = 0;
  height = 0;

  constructor() {}

  /**
   * This function defines an image's dimensions.
   */
  defineImageDimensions() {
    let currentWidth = this.img.width > this.img.height ? 150 : 80;
    this.setDimensions(currentWidth, this.img.width, this.img.height);
  }

  /**
   * This function sets an image's dimensions according to its aspect ratio.
   * @param {number} width
   * @param {number} originalWidth
   * @param {number} originalHeight
   */
  setDimensions(width, originalWidth, originalHeight) {
    this.width = width;
    this.height = this.width * (originalHeight / originalWidth);
  }

  /**
   * This function creates an image object from an image path.
   * @param {string} path
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * This function draws images on the canvas.
   * @param {context} ctx
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  
}
