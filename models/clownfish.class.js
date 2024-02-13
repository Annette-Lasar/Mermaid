class Clownfish extends Fish {
    // aspect ratio: 1.7 (231 x 135) (width x height)
    constructor(imagePath, originalWidth, originalHeight) {
        super();
        this.loadImage(imagePath);
        this.setDimensions(80, originalWidth, originalHeight);
    }
}