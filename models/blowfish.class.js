class Blowfish extends Fish {
    // aspect ratio: 1.8 (208 x 111) (width x height)
    constructor(imagePath, originalWidth, originalHeight) {
        super();
        this.loadImage(imagePath);
        this.setDimensions(80, originalWidth, originalHeight);
    }
}