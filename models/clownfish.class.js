/**
 * This class manipulates clownfish that are kept prisoners in the treasure chest.
 */
class Clownfish extends Fish {
  index = allImageObjects.findIndex((item) => {
    return item.type === 'clownfishArrays';
  });

  constructor(id, imgPath, x, y, speed) {
    super();
    super.loadImage(imgPath);
    this.id = id;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.speed = speed;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 60 : 40;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };

    this.loadImagesMoves(allImageObjects[this.index].images.move);
    this.animate(allImageObjects[this.index].images.move);
  }

  /**
   * This function animates the fish.
   * @param {Array} array - This is an array with all images to animate the fish
   */
  animate(array) {
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 60 : 40;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.moveUp();
      this.playAnimation(array);
    }, 1000 / 10);
  }

  /**
   * This function moves the fish up.
   */
  moveUp() {
    this.y -= this.speed;
  }
}
