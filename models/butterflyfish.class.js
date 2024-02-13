class Butterflyfish extends Fish {
    // aspect ratio: 1.2 (236 x 193) (width x height)
    constructor(imagePath, originalWidth, originalHeight) {
        super();
        this.loadImage(imagePath);
        this.setDimensions(80, originalWidth, originalHeight);
    }
}