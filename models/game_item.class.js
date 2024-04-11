class GameItem extends ImmobileItem {
  world;
  constructor(name, id, x_axis, y_axis, imgPath, landscapeWidth, portraitWidth) {
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
      /* this.rotateObject(); */
    };
  }

  rotateObject() {
    if (this.world) {
      this.world.ctx.save(); // Speichern des aktuellen Canvas-Kontexts
      if (this.name === 'anchor') {
        this.world.ctx.translate(this.x, this.y); // Position des Bildes festlegen
        this.world.ctx.rotate((Math.PI / 180) * 90); // Rotation um 90 Grad im Bogenmaß
        this.world.ctx.drawImage(this.img, 0, 0, this.width, this.height); // Zeichnen des Bildes
      }
      this.world.ctx.restore(); // Wiederherstellen des vorherigen Canvas-Kontexts
    }
  }
}
