class yellowCrabFish extends Crab {
  constructor(imgPath, speed, id) {
    super(
      imgPath,
      speed,
      yellowCrabArrays.move
    );
    this.id = id;
  }
}
