/**
 * This class manipulates all movable objects.
 */
class MovableObject extends DrawableObject {
  speed = 0.75;
  otherDirection = false;
  speedY = 0;
  acceleration = 1;
  energyCount = 100;
  lastHit = 0;

  constructor() {
    super();
  }

  /**
   * In this function all image paths are transformed into image objects.
   * @param {Array} arr 
   */
  loadImagesMoves(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }


  /**
   * This function checks if objects are colliding with one another.
   * @param {object} mo - This is an instance of a movable object like 
   * for instance the character.
   * @returns - It returns true or false.
   */
  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  /**
   * This function checks whether the character has been hit by an opponent.
   */
  hit() {
    this.energyCount -= 20;
    if (this.energyCount < 0) {
      this.energyCount = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * This function checks whether the character has been hurt due to a collison.
   * @returns - It returns a number.
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    let timePassedSec = timePassed / 1000;
    return timePassedSec < 1;
  }

  /**
   * This function checks if the character is dead.
   * @returns - It returns true or false.
   */
  isDead() {
    return this.energyCount == 0;
  }

  /**
   * This function plays an animation of an object.
   * @param {Array} array - This is an array with all images for an animation.
   */
  playAnimation(array) {
    let i = this.currentImage % array.length;
    let path = array[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * This function clears all intervals after a game has been won or lost.
   */
  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }
}
