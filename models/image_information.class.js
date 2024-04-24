/**
 * This class creates an array with all images that are preloaded.
 */
class ImageInformation {
  images = {};
  relatedImages = [];
  type;

  constructor(type) {
    this.type = type;
  }

  /**
   * This function pushes all image paths into the array relatedImages.
   * @param {string} category - This is the name of the category in the array.
   * @param {Array} images - This is an array with all image paths.
   */
  addImageInformation(category, images) {
    this.relatedImages = [...this.relatedImages, ...images];
    this.images[category] = images;
  }

  /**
   * This function pushes all mermaid image paths into the array relatedImages and
   * replaces the word 'COUNTER' by a number so that later a mermaid type can be selected.
   * @param {string} category - This is the name of the category in the array.
   * @param {Array} images - This is an array with all image paths for mermaids.
   * @param {number} from - This is the number of the first mermaid type.
   * @param {number} to - This is the number of the last mermaid type.
   */
  addImageInformationWithCounter(category, images, from, to) {
    for (let i = from; i <= to; i++) {
      let imagesToAdd = [];
      let categoryWithNumber = category + '_' + i;
      images.forEach((img) => {
        imagesToAdd.push(img.replace('COUNTER', i));
      });
      this.relatedImages = [...this.relatedImages, ...imagesToAdd];
      this.images[categoryWithNumber] = imagesToAdd;
    }
  }
}
