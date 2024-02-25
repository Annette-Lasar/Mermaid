class Character extends movableObject {
  constructor(imagePath) { 
    super();
    super.loadImage(imagePath);
    this.setDimensions(120, mermaidData[mermaidType].move_width, mermaidData[mermaidType].move_height); 
    this.loadImagesMoves(mermaidMoves);
  }

  moveUp() {
    console.log('Moving up');
  }
  moveDown() {
    console.log('Moving down');
  }
}

