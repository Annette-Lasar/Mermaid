class yellowCrabFish extends Crab {
  /* img; */
  id = '';
  constructor(imgPath, speed, id) {
    super(
      imgPath,
      speed,
      yellowCrabArrays.move
    );
    this.id = id;
  }
}
