class JellyfishPink extends Jellyfish {
    // aspect ratio: 1.49 (143 x 255) (width x height)
    constructor(imagePath, originalWidth, originalHeight) {
        super();
        this.loadImage(imagePath);
        this.setDimensions(50, originalWidth, originalHeight);
    }
}