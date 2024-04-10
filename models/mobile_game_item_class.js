class MobileGameItem extends MovableObject {
  constructor(name, x_axis, y_axis, imgPath, landscapeWidth, portraitWidth, array, timeout) {
    super();
    super.loadImage(imgPath);
    this.name = name;
    this.x = x_axis;
    this.y = y_axis;
    this.array = array;
    this.landscapeWidth = landscapeWidth;
    this.portraitWidth = portraitWidth;
    this.timeout = timeout;
    this.img.onload = () => {
      let currentWidth =
        this.img.width > this.img.height
          ? this.landscapeWidth
          : this.portraitWidth;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
    this.loadImagesMoves(this.array);
    this.animateMove(this.array);
  }

  animateMove(array) {
    setInterval(() => {
      let currentWidth =
        this.img.width > this.img.height
          ? this.landscapeWidth
          : this.portraitWidth;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.playAnimation(array);
    }, this.timeout);
  }
}
