class Endboss extends MovableObject {
  world;
  index = allImages.findIndex((item) => {
    return item.type == 'lionfishArrays';
  });
  endbossHitCounter = 0;
  endbossDeath = new Audio('./audio/zombie_death.mp3');
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
    this.loadImagesMoves(allImages[this.index].images.move);
    this.loadImagesMoves(allImages[this.index].images.die);
    this.animateMove(allImages[this.index].images.move);
  }

  animateMove(array) {
    this.moveToAndFro();
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 450 : 240;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.playAnimation(array);
      this.checkIfDead();
    }, 50);
  }

  checkIfDead() {
    this.endbossDeath.pause();
    if (this.endbossHitCounter >= 3) {
      this.speed = 0;
      this.playAnimation(allImages[this.index].images.die);
      if (noise) {
        setInterval(() => this.endbossDeath.play(), 500);
      }
    }
  }

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

  endbossMoveLeft() {
    this.speed *= -1;
    this.y = this.y_axis;
    this.otherDirection = false;
  }

  endbossMoveRight() {
    this.speed *= -1;
    this.otherDirection = true;
  }

  moveHorizontally() {
    this.x += this.speed;
    setTimeout(() => {
      this.moveToAndFro();
    }, 1000 / 60);
  }


}
