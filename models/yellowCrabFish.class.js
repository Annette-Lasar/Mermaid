class yellowCrabFish extends Crab {
  id = '';
  constructor(imgPath, speed, id) {
    super(imgPath, yellowCrabData.move_width, yellowCrabData.move_height, speed, yellowCrabMoves);
    this.id = id;
  }
}


