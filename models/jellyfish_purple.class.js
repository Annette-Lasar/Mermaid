class JellyfishPurple extends Jellyfish {
    // aspect ratio: 1.49 (196 x 294) (width x height)
    constructor(imagePath, originalWidth, originalHeight) {
        super();
        this.loadImage(imagePath);
        this.setDimensions(50, originalWidth, originalHeight);
    }
}