/**
 * This class manipulates valuable game items like key, starfish and pearls.
 */
class ValuableGameItem extends MovableObject {
  world;  
  constructor(
      name,
      id,
      x_axis,
      y_axis,
      imgPath,
      landscapeWidth,
      portraitWidth,
      speed
    ) {
      super();
      super.loadImage(imgPath);
      this.name = name;
      this.id = id;
      this.x = x_axis;
      this.y = y_axis;
      this.currentY = this.y;
      this.landscapeWidth = landscapeWidth;
      this.portraitWidth = portraitWidth;
      this.speed = speed;
      this.img.onload = () => {
        let currentWidth =
          this.img.width > this.img.height
            ? this.landscapeWidth
            : this.portraitWidth;
        this.setDimensions(currentWidth, this.img.width, this.img.height);
      };
      this.moveUpAndDown();
    }
  
    /**
     * This function moves the items slightly up and down.
     */
    moveUpAndDown() {
      const minY = this.currentY - 10;
      const maxY = this.currentY + 10;
  
      if (this.y > minY && this.y < maxY) {
        this.moveVertically();
      } else {
        this.speed *= -1;
        this.moveVertically();
      }
    }
  
    /**
     * This function sets the speed for the vertical movement.
     */
    moveVertically() {
      this.y -= this.speed;
      setTimeout(() => {
        this.moveUpAndDown();
      }, 1000 / 60);
    }
  }
