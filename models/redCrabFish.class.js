class redCrabFish extends Crab {
  id = '';
  constructor(imgPath, speed, id) {
    super(
      imgPath,
      redCrabData.idle_width,
      redCrabData.idle_height,
      speed,
      animalArrays.arrays.redCrabIdle
    );
    this.id = id;
  }
}
