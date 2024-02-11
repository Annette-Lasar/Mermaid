class Crab extends movableObject {
    // aspect ratio: 2.1 (408 x 197)
    width = 100;
    height = this.width * (107 / 408);
    
    constructor() {
        super();
    }
    loadCrabImage(path) {
        this.loadImage(path);
    }
}