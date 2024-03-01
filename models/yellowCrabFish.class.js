class yellowCrabFish extends Crab {
  id = '';
  constructor(imgPath, speed, id) {
    super(
      imgPath,
      yellowCrabData.move_width,
      yellowCrabData.move_height,
      speed,
      animalArrays.arrays.yellowCrabMove
    );
    this.id = id;
  }
}


/* class yellowCrabFish extends Crab {
  id = '';
  constructor(imgPath, speed, id) {
    console.log('animalArrays wird benötigt');
    super(
      imgPath,
      yellowCrabData.move_width,
      yellowCrabData.move_height,
      speed,
      animalArrays.arrays.yellowCrabMove
    );
    this.id = id;
  }
} */