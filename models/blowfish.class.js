class Blowfish extends Fish {
  id = '';
  constructor(imgPath, speed, id) {
    super(
      imgPath,
      blowfishData.move_width,
      blowfishData.move_height,
    );
    this.id = id;
  }
}
