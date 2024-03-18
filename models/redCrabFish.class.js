class redCrabFish extends Crab {
  id = '';
  constructor(imgPath, speed, id) {
    super(
      imgPath,
      speed,
      redCrabArrays.idle
    );
    this.id = id;
  }
}
