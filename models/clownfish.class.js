class Clownfish extends Fish {
  index = allImages.findIndex((item) => {
    return item.type === 'clownfishArrays';
  });
  constructor(id, imgPath, x, y, speed) {
    super();
    super.loadImage(imgPath);
    this.id = id;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.speed = speed;
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 60 : 40;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
    };

    this.loadImagesMoves(allImages[this.index].images.move);
    this.animate(allImages[this.index].images.move);
  }

  animate(array) {
    setInterval(() => {
      let currentWidth = this.img.width > this.img.height ? 60 : 40;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      this.moveUp();
      this.playAnimation(array);
    }, 1000 / 10);
  }

  moveUp() {
    this.y -= this.speed;
  }
}
