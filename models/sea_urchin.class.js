class seaUrchinFish extends MovableObject {
    // aspect ratio: 0.9 (311 x 318) (width x height)
    constructor(imagePath, originalWidth, originalHeight) {
        super();
        this.loadImage(imagePath);
        this.setDimensions(50, originalWidth, originalHeight);
    }
    eat() {
        console.log('Is eating');
    }
}