class redCrabFish extends Crab {
  id = '';
  constructor(imgPath, speed, id) {
    super(
      imgPath,
      speed,
      animalArrays.arrays.redCrabIdle
    );
    this.id = id;
  }
}
