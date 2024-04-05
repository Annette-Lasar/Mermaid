console.log('Ich bin die background.class-Datei.');
class Background extends MovableObject {
  constructor(imgPath, x) {
    super();
    this.y = 0;
    this.x = x;
    this.loadImage(imgPath, CANVAS_WIDTH);
    this.img.onload = () => {
      this.setDimensions(
        CANVAS_WIDTH,
        this.img.width,
        this.img.height
      );
    };
  }
}
