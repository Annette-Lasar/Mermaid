/**
 * This class manipulates lionfish.
 */
class Lionfish extends Fish {
  index = allImageObjects.findIndex((item) => {
    return item.type == 'lionfishArrays';
  });
  constructor(imgPath, speed, id, y_axis) {
    super();
    this.x = 3500;
    this.speed = speed;
    this.id = id;
    this.y = y_axis;
    super.loadImage(imgPath);
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(allImageObjects[this.index].images.move);
    this.animate(allImageObjects[this.index].images.move);
    this.moveToAndFro();
  }

  /**
   * This function animates lionfish. 
   * @param {Array} array - This is an array with all necessary images to animate the fish.
   */
  animate(array) {
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.playAnimation(array);
    }, 1000 / 10);
  }

  /**
   * This function moves the lionfish to and fro within a certain area and with 
   * different speed for each fish.
   */
  moveToAndFro() {
    const minX = 2975;
    const maxX = 3615;
    if (this.speed > 0) {
      if (this.x > maxX) {
        this.speed *= -1;
        this.otherDirection = false;
      }
    } else {
      if (this.x < minX) {
        this.speed *= -1;
        this.otherDirection = true;
      }
    }
    this.moveHorizontally();
  }

  /**
   * This function defines the speed for the horizontal movement.
   */
  moveHorizontally() {
    this.x += this.speed;
    setTimeout(() => {
      this.moveToAndFro();
    }, 1000 / 60);
  }
}
