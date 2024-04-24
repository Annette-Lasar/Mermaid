/**
 * This class manipulates both sorts of crabs.
 */
class redCrabFish extends Crab {
  constructor(imgPath, speed, id) {
    const redCrabIndex = allImageObjects.findIndex((item) => item.type === 'redCrabArrays');
    const redCrabImages = allImageObjects[redCrabIndex].images.idle;
    super(imgPath, speed, redCrabImages);
    this.id = id;
  }
}

