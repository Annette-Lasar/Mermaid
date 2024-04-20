class redCrabFish extends Crab {
  constructor(imgPath, speed, id) {
    const redCrabIndex = allImages.findIndex((item) => item.type === 'redCrabArrays');
    const redCrabImages = allImages[redCrabIndex].images.idle;
    super(imgPath, speed, redCrabImages);
    this.id = id;
  }
}

