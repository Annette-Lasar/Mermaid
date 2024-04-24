/**
 * This class manipulates yellow crabs.
 */
class yellowCrabFish extends Crab {
  constructor(imgPath, speed, id) {
    const yellowCrabIndex = allImageObjects.findIndex((item) => item.type === 'yellowCrabArrays');
    const yellowCrabImages = allImageObjects[yellowCrabIndex].images.move;
    super(imgPath, speed, yellowCrabImages);
    this.id = id;
  }
}