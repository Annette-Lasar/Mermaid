class TreasureBox extends ImmobileItem {
    x = 4800;
    y = 280;
    constructor(imgPath) {
        super(imgPath);
        this.img.onload = () => {
            let currentWidth = this.img.width > this.img.height ? 250 : 80;
            this.setDimensions(currentWidth, this.img.width, this.img.height);
          };
    }
}