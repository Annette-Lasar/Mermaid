class StoneSlab extends ImmobileItem {
  world;
  y = 200;

  constructor(imgPath, x_axis, text, textSize, textColor) {
    super(imgPath);
    this.x = x_axis;
    this.text = text;
    this.textSize = textSize;
    this.textColor = textColor;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 350 : 140;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      /* this.drawText(); */
    };
  }

 /*  drawText() {
    if (this.world) {
      this.world.ctx.font = `${this.textSize}px Arial`; // Schriftart und -größe festlegen
      this.world.ctx.fillStyle = this.textColor; // Textfarbe festlegen
      this.world.ctx.textAlign = 'center';
      this.world.ctx.fillText(
        this.text,
        this.x + this.width / 2,
        this.y + this.height / 2
      );
      console.log('drawText-Methode');
    }
  } */




}
