class movableObject {
    x = 120;
    y = 300;
    img;
    
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    moveRight() {
        console.log('Moving right');
    }
    moveLeft() {
        console.log('Moving left');
    }
}