/**
 * This class manipulates objects that are moving up and down like blue
 * jellyfish in level 1.
 */
class ObjectMovingUpAndDown extends MovableObject {
  index = allImageObjects.findIndex((item) => {
    return item.type == 'blueJellyfishArrays';
  });
  x = 300;
  y = 300;

  constructor(x_axis, y_axis, imgPath, speed) {
    super();
    super.loadImage(imgPath);
    this.x = x_axis;
    this.y = y_axis;
    this.speed = speed;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(allImageObjects[this.index].images.move);
    this.animateMove(allImageObjects[this.index].images.move);
    this.moveUpAndDown();
  }


  /**
   * This function animates the objects. 
   * @param {Array} array - This is an array with all images necessaray 
   * to animate the objects.
   */
  animateMove(array) {
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 100 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.playAnimation(array);
    }, 50);
  }

  /**
   * This function moves the objects up and down.
   */
  moveUpAndDown() {
    if (this.y > 0 && this.y < 430) {
      this.moveVertically();
    } else {
      this.speed *= -1;
      this.moveVertically();
    }
  }

  /**
   * This functions sets the speed for the vertical movement.
   */
  moveVertically() {
    this.y -= this.speed;
    setTimeout(() => {
      this.moveUpAndDown();
    }, 1000 / 60);
  }
}
