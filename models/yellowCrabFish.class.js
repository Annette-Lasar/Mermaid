class yellowCrabFish extends Crab {
  /* img; */
  id = '';
  constructor(imgPath, speed, id) {
    super(
      imgPath,
      speed,
      animalArrays.arrays.yellowCrabMove
    );
    this.id = id;
  }
}
