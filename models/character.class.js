class Character extends movableObject {
  world;
  /* speed = 10;  */
  // Ich habe noch keine Funktion moveRight, sodass speed keine Wirkung hat!
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

  animateMoves(array) {
    console.log(this.x);
    setInterval(() => {
      if (this.world.keyboard.ARROWRIGHT) {
        this.x += 5;
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 350 / 10);
  }

  moveUp() {
    console.log('Moving up');
  }
  moveDown() {
    console.log('Moving down');
  }
}
