class Statusbar extends DrawableObject {
  world;
  constructor(name, x_axis, y_axis, imgPath, width, height) {
    super();
    super.loadImage(imgPath);
    this.name = name;
    this.x = x_axis;
    this.y = y_axis;
    this.width = width;
    this.height = height;
  }
}
