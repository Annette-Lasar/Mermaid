class GameItem extends ImmobileItem {
   /*  x = 4800;
    y = 280; */
    constructor(x_axis, y_axis, imgPath, landscapeWidth, portraitWidth) {
        super(imgPath);
        this.x = x_axis;
        this.y = y_axis;
        this.landscapeWidth = landscapeWidth;
        this.portraitWidth = portraitWidth;
        this.img.onload = () => {
            let currentWidth = this.img.width > this.img.height ? this.landscapeWidth : this.portraitWidth;
            this.setDimensions(currentWidth, this.img.width, this.img.height);
          };
    }
}