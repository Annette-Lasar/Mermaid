/* class ImageInformation {
  type;
  relatedImages = [];
  images = {};

  constructor(type) {
    this.type = type;
    
  }

  addImages(category, images) {
    this.relatedImages = [...this.relatedImages, ...images];
    this.images[category] = images;
  }

  addImagesWithCounter(category, images, from, to) {
    for (let i = from; i <= to; i++) {
      let imagesToAdd = [];
      let categoryWithNumber = category;
      images.forEach((img) => {
        categoryWithNumber = category + '_' + i;
        imagesToAdd.push(img.replace('COUNTER', i));
        // imagesToAdd.push(img);
      });
      this.relatedImages = [...this.relatedImages, ...imagesToAdd];
      this.images[categoryWithNumber] = imagesToAdd; // vorher stand hier nur images
    }
  }
} */

class ImageInformation {
    type;
    objectInfo = {};
    relatedImages = [];
    images = {};

  
    constructor(type) {
      this.type = type;      
    }
  
    addImages(category, images, name, x, y, width, height, landscapeWidth, portraitWidth) {
      this.relatedImages = [...this.relatedImages, ...images];
      this.images[category] = images;
      this.objectInfo.name = name;
      this.objectInfo.x = x;
      this.objectInfo.y = y;
      this.objectInfo.width = width;
      this.objectInfo.height = height;
      this.objectInfo.landscapeWidth = landscapeWidth;
      this.objectInfo.portraitWidth = portraitWidth;
    }

    // , x, y, width, height, landscapeWidth, portraitWidth
  
    addImagesWithCounter(category, images, from, to) {
      for (let i = from; i <= to; i++) {
        let imagesToAdd = [];
        let categoryWithNumber = category;
        images.forEach((img) => {
          categoryWithNumber = category + '_' + i;
          imagesToAdd.push(img.replace('COUNTER', i));
          // imagesToAdd.push(img);
        });
        this.relatedImages = [...this.relatedImages, ...imagesToAdd];
        this.images[categoryWithNumber] = imagesToAdd; // vorher stand hier nur images
      }
    }
  }
