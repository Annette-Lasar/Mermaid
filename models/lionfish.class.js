class Lionfish extends Fish {
    // aspect ratio: 1.8 (423 x 336) (width x height)
    constructor(imagePath, originalWidth, originalHeight) {
        super();
        this.loadImage(imagePath);
        this.setDimensions(100, originalWidth, originalHeight);
    }
}