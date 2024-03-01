class Blowfish extends Fish {
  id = '';
  constructor(imgPath, speed, id) {
    super(
      imgPath,
      blowfishData.move_width,
      blowfishData.move_height,
      speed, 
      animalArrays.arrays.blowfishMove
    );
    this.id = id;
  }
}
