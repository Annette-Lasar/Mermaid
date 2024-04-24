/**
 * This class manipulates crab enemies.
 */
class Crab extends MovableObject {
  constructor(imgPath, speed, array) {
    super();
    this.x = 1600 + (Math.random() * 425 * 2) / 3;
    this.y = -20;
    super.loadImage(imgPath);
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 80 : 60;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.speed = speed;
    this.loadImagesMoves(array);
    this.animate(array);
    this.moveDown();
  }

  /**
   * This function animates the crabs.
   * @param {Array} array - This is an array with all the images to animate the crabs.
   */
  animate(array) {
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 80 : 60;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.playAnimation(array);
    }, 1000 / 10);
  }

  /**
   * This function moves the crabs down.
   */
  moveDown() {
    setInterval(() => {
      this.y += this.speed;
    }, 1000 / 60);
  }
}
