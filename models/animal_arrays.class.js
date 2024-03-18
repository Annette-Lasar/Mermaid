console.log('Ich bin die animal_arrays.class-Datei.');
class AnimalArrays {
  constructor() {
    this.arrays = {};
  }

  createArray(capitalizedAction, animal) {
    const key = animal + capitalizedAction;
    if (!this.arrays[key]) {
      this.arrays[key] = [];
    }
  }

  pushImagePath(action, animal, path) {
    let capitalizedAction = capitalizeAction(action);
    const key = animal + capitalizedAction;
    if (!this.arrays[key]) {
      this.createArray(capitalizedAction, animal);
    }
    this.arrays[key].push(path);
  }

  getArray(action, animal) {
    const key = animal + action;
    return this.arrays[key] || [];
  }

  async loadImage(path) {
    return await new Promise((resolve, reject) => {
      this.img = new Image();
      this.img.onload = () => resolve(this.img);
      this.img.onerror = () =>
        reject(
          new Error(`Das Bild unter ${path} konnte nicht geladen werden.`)
        );
      this.img.src = path;
    });
  }

  async loadImages(imageCache) {
    for (let i = 0; i < imageCache.length; i++) {
      const path = imageCache[i];
      await this.loadImageFromPath(path);
      if (path.includes('./img/fish/PNG/yellowCrab/move_009.png')) {
        allAssetsAreLoaded = true;
      }
    }
  }

  /**
   * loads all images in the arry imageCache of one object for animation
   * @param {array} imageCache is the array of all images from one movable object
   */
  async loadImageFromPath(path) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => {
        this.imageCache[path].loaded = true;
        this.imageCache[path].error = false;
        resolve();
      };
      img.onerror = () => {
        this.imageCache[path].loaded = true;
        this.imageCache[path].error = truth;
        reject(`Image ${path} for ${typeof this} could not be loaded`);
      };
      this.imageCache[path] = { img, loaded: false, error: false };
      img.src = path;
    });
  }

  /**
   * @param {JSON} images is the JSON arry with all images to load for a class
   */
  async loadAllImages(images) {
    for (const status in images) {
      await this.loadImages(images[status]);
    }
  }
}
