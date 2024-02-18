class Character extends movableObject {
    // aspect ratio: 1.25 (665 x 1028) (width x height)
  constructor(imagePath, originalWidth, originalHeight, canvasWidth) {
    super();
    super.loadImage(imagePath);
    this.setDimensions(canvasWidth / 10, originalWidth, originalHeight);
  }

  moveUp() {
    console.log('Moving up');
  }
  moveDown() {
    console.log('Moving down');
  }
}
