/**
 * This class manipulates the endboss.
 */
class Endboss extends MovableObject {
  world;
  index = allImageObjects.findIndex((item) => {
    return item.type == 'lionfishArrays';
  });
  endbossHitCounter = 0;
  deathInterval;

  constructor(id, imgPath, speed) {
    super();
    super.loadImage(imgPath);
    this.id = id;
    this.speed = speed;
    this.x = 4800;
    this.y = 80;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 450 : 240;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(allImageObjects[this.index].images.move);
    this.loadImagesMoves(allImageObjects[this.index].images.die);
    this.animateMove(allImageObjects[this.index].images.move);
  }

  /**
   * This function animates the endboss.
   * @param {Array} array - This is an array with all images to animate the endboss.
   */
  animateMove(array) {
    this.moveToAndFro();
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 450 : 240;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.playAnimation(array);
      this.checkIfDead();
    }, 50);
  }

  /**
   * This function checks whether the endboss is dead.
   */
  checkIfDead() {
    endbossDeathSound.pause();
    if (this.endbossHitCounter >= 3) {
      this.speed = 0;
      this.playAnimation(allImageObjects[this.index].images.die);
      if (noise) {
        endbossDeathSound.play();
      }
      if (this.world.gameWon && noise) {
        endbossDeathSound.pause();
      }
    }
  }

  /**
   * This function moves the endboss to and fro.
   */
  moveToAndFro() {
    const minX = 4025;
    const maxX = 4800;
    this.y_axis = Math.random() * 150;
    if (this.speed > 0) {
      if (this.x > maxX) {
        this.endbossMoveLeft();
      }
    } else {
      if (this.x < minX) {
        this.endbossMoveRight();
      }
    }
    this.moveHorizontally();
  }

  /**
   * This function moves the endboss left.
   */
  endbossMoveLeft() {
    this.speed *= -1;
    this.y = this.y_axis;
    this.otherDirection = false;
  }

  /**
   * This function moves the endboss right.
   */
  endbossMoveRight() {
    this.speed *= -1;
    this.otherDirection = true;
  }

  /**
   * This function set the speed for the horizontal movement.
   */
  moveHorizontally() {
    this.x += this.speed;
    setTimeout(() => {
      this.moveToAndFro();
    }, 1000 / 60);
  }
}
