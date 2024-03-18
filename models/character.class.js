class Character extends movableObject {
  world;
  swimming_sound = new Audio('audio/underwater_movement_02.mp3');
  /* allImagesLoaded = false; */
  constructor(imgPath, speed) {
    super();
    super.loadImage(imgPath);
    this.y = 200;
    this.speed = speed;
    this.imageDimensions = [];
    this.img.onload = () => {
      let currentWidth = this.img.width > this.img.height ? 150 : 80;
      this.setDimensions(currentWidth, this.img.width, this.img.height);
      /* this.checkImageDimensions(); */
    };

    this.loadImagesMoves(mermaidArrays.idle);
    this.animateIdle(mermaidArrays.idle);
    this.loadImagesMoves(mermaidArrays.move);
    this.animateMoves(mermaidArrays.move);
  }

  /*   checkImageDimensions() {
    const allImagesLoaded = Object.values(this.imageCache).every(img => img.complete);
  
    if (allImagesLoaded) {
      const firstImg = Object.values(this.imageCache)[0];
      const currentWidth = firstImg.width > firstImg.height ? 500 : 120;
  
      // Aktualisiere die Dimensionen für alle Bilder basierend auf dem Seitenverhältnis des ersten Bildes
      Object.values(this.imageCache).forEach(img => {
        this.setDimensions(currentWidth, img.width, img.height);
      });
  
      console.log('Aktualisierte Dimensionen für alle Bilder:', Object.values(this.imageCache).map(img => ({ width: img.width, height: img.height })));
    } else {
      // Wenn nicht alle Bilder geladen sind, warte auf die vollständige Laden und überprüfe erneut
      Object.values(this.imageCache).forEach(img => {
        if (!img.complete) {
          img.onload = this.checkImageDimensions.bind(this);
        }
      });
    }
  } */

  checkImageDimensions() {
    const imageKeys = Object.keys(this.imageCache);

    imageKeys.forEach((key, index) => {
      if (index % 10 === 0) {
        const img = this.imageCache[key];
        const desiredWidth = img.width > img.height ? 150 : 80;
        const updatedImg = new Image();
        updatedImg.src = img.src;
        updatedImg.onload = () => {
          this.imageCache[key] = updatedImg;
        };
        this.setDimensions(desiredWidth, img.width, img.height);
      }
    });
    /* this.allImagesLoaded = true; */
  }

  animateIdle(array) {
    setInterval(() => {
      if (!this.world.keyboard.ARROWRIGHT && !this.world.keyboard.ARROWLEFT) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 50);
  }

  animateMoves(array) {
    setInterval(() => {
      this.swimming_sound.pause();
      if (
        this.world.keyboard.ARROWRIGHT &&
        this.x < this.world.level.level_end_x
      ) {
        this.x += this.speed;
        this.otherDirection = false;
        this.swimming_sound.play();
      }

      if (this.world.keyboard.ARROWLEFT && this.x > -853) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.swimming_sound.play();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.ARROWRIGHT || this.world.keyboard.ARROWLEFT) {
        this.playAnimation(array);
      }
    }, 50);
  }

  moveUp() {
    console.log('Moving up');
  }
  moveDown() {
    console.log('Moving down');
  }
}
