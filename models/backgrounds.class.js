class Background extends movableObject {
  constructor(imgPath, x) {
    super();
    this.y = 0;
    this.x = x;
    this.loadImage(imgPath, CANVAS_WIDTH);
    this.setDimensions(
      CANVAS_WIDTH,
      originalBackgroundWidth,
      originalBackgroundHeight
    );
    /* this.loadImagesMoves(); */
    /* console.log('Background-Array: ', backgrounds); */
    /* console.log('Keyboard', world.backgrounds); */
  }
}
