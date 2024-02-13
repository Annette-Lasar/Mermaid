class JellyfishBlue extends Jellyfish {
    // aspect ratio: 1.49 (130 x 87) (width x height)
    constructor(imagePath, originalWidth, originalHeight) {
        super();
        this.loadImage(imagePath);
        this.setDimensions(50, originalWidth, originalHeight);
    }
}