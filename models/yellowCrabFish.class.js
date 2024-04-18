class yellowCrabFish extends Crab {
  constructor(imgPath, speed, id) {
    const yellowCrabIndex = allImages.findIndex((item) => item.type === 'yellowCrabArrays');
    const yellowCrabImages = allImages[yellowCrabIndex].images.move;
    super(imgPath, speed, yellowCrabImages);
    this.id = id;
  }
}