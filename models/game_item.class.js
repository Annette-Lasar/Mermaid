/**
 * This class manipulates all decorative items on the canvas.
 */
class GameItem extends ImmobileItem {
  world;
  constructor(
    name,
    id,
    x_axis,
    y_axis,
    imgPath,
    landscapeWidth,
    portraitWidth
  ) {
    super(imgPath);
    this.name = name;
    this.id = id;
    this.x = x_axis;
    this.y = y_axis;
    this.landscapeWidth = landscapeWidth;
    this.portraitWidth = portraitWidth;
    this.img.onload = () => {
      let currentWidth =
        this.img.width > this.img.height
          ? this.landscapeWidth
          : this.portraitWidth;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };
  }
}
