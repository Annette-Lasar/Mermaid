class MobileGameItem extends MovableObject {
  constructor(x_axis, y_axis, imgPath, landscapeWidth, portraitWidth, array) {
    super();
    super.loadImage(imgPath);
    this.x = x_axis;
    this.y = y_axis;
    this.array = array;
    this.landscapeWidth = landscapeWidth;
    this.portraitWidth = portraitWidth;
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
    }, 200);
  }
}
