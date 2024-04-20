class ImageInformation {
  images = {};
  object_information = [];
  relatedImages = [];
  type;

  constructor(type) {
    this.type = type;
  }

  addImageInformation(
    category,
    images,
    name,
    x,
    y,
    src,
    width,
    height,
    landscapeWidth,
    portraitWidth
  ) {
    this.relatedImages = [...this.relatedImages, ...images];
    this.images[category] = images;
    let object = {
      name: name,
      x: x,
      y: y,
      src: src,
      width: width,
      height: height,
      landscapeWidth: landscapeWidth,
      portraitWidth: portraitWidth,
    };
    this.object_information.push(object);
  }


  addImageInformationWithCounter(
    category,
    images,
    name,
    x,
    y,
    src,
    width,
    height,
    landscapeWidth,
    portraitWidth,
    from,
    to
  ) {
    for (let i = from; i <= to; i++) {
      let imagesToAdd = [];
      let categoryWithNumber = category + '_' + i;
      images.forEach((img) => {
        imagesToAdd.push(img.replace('COUNTER', i));
      });
      this.relatedImages = [...this.relatedImages, ...imagesToAdd];
      this.images[categoryWithNumber] = imagesToAdd;
      this.addObjectInformation(
        i,
        name,
        x,
        y,
        src,
        width,
        height,
        landscapeWidth,
        portraitWidth
      );
    }
  }

  addObjectInformation(
    i,
    name,
    x,
    y,
    src,
    width,
    height,
    landscapeWidth,
    portraitWidth
  ) {
    let object = {
      name: name + '_' + i,
      x: x,
      y: y,
      src: src.replace('COUNTER', i),
      width: width,
      height: height,
      landscapeWidth: landscapeWidth,
      portraitWidth: portraitWidth,
    };
    this.object_information.push(object);
  }
}
