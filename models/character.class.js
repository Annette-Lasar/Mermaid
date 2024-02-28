class Character extends movableObject {
  world;
  constructor(imagePath) {
    super();
    super.loadImage(imagePath);
    this.setDimensions(
      120,
      mermaidData[mermaidType].move_width,
      mermaidData[mermaidType].move_height
    );
    this.loadImagesMoves(mermaidMoves);
    this.animate(mermaidMoves);
  }

  animate(array) {
    setInterval(() => {
      if (this.world.keyboard.ARROWRIGHT) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 1000 / 10);
  }

  moveUp() {
    console.log('Moving up');
  }
  moveDown() {
    console.log('Moving down');
  }
}
