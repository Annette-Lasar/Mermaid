/* class redCrabFish extends Crab {
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
 */

class redCrabFish extends Crab {
  constructor(imgPath, speed, id) {
    const redCrabIndex = allImages.findIndex((item) => item.type === 'redCrabArrays');
    const redCrabImages = allImages[redCrabIndex].images.idle;
    super(imgPath, speed, redCrabImages);
    this.id = id;
  }
}

