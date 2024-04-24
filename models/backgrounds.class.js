/**
 * This class manipulates the background layers.
 */
class Background extends MovableObject {
  constructor(imgPath, x) {
    super();
    this.y = 0;
    this.x = x;
    this.loadImage(imgPath, CANVAS_WIDTH);
    this.img.onload = () => {
      this.setDimensions(
        CANVAS_WIDTH,
        this.img.width,
        this.img.height
      );
    };
  }
}
