class Character extends movableObject {
  constructor(imagePath) { 
    super();
    super.loadImage(imagePath);
    this.setDimensions(80, mermaidData[mermaidType].idle_width, mermaidData[mermaidType].idle_height); 
  }

  moveUp() {
    console.log('Moving up');
  }
  moveDown() {
    console.log('Moving down');
  }
}

