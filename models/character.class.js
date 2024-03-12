class Character extends movableObject {
  world;
  /* speed = 10;  */
  constructor(imgPath, speed) {
    super();
    super.loadImage(imgPath);
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 150 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };

    this.speed = speed;
    this.loadImagesMoves(animalArrays.arrays.mermaidMove);
    this.animateMoves(animalArrays.arrays.mermaidMove);
  }

  /*   animateMoves(array) {
    setInterval(() => {
      if (this.world.keyboard.ARROWRIGHT) {
        this.x += this.speed;
        this.otherDirection = false;
        for (let x = 0; x < 3; x ++) {
          this.world.drawBackgroundObjects((CANVAS_WIDTH - 1) * x);
        }
        
      }
      if (this.world.keyboard.ARROWLEFT) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.world.drawBackgroundObjects();
      }
      this.world.camera_x = -this.x;
    }, 1000 / 60);
 */

  animateMoves(array) {
    setInterval(() => {
      if (this.world.keyboard.ARROWRIGHT) {
        this.x += this.speed;
        this.otherDirection = false;
        /* this.world.drawBackgroundObjects(); */
      }
      if (this.world.keyboard.ARROWLEFT) {
        this.x -= this.speed;
        this.otherDirection = true;
        /* this.world.drawBackgroundObjects(); */
      }
      this.world.camera_x = -this.x;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.ARROWRIGHT || this.world.keyboard.ARROWLEFT) {
        this.x += 5;
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 50);
  }

  moveUp() {
    console.log('Moving up');
  }
  moveDown() {
    console.log('Moving down');
  }
}
