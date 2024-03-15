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
}



