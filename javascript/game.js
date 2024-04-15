let keyboard = new Keyboard();
let loadedImages = 0;
function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  createButton(canvas);
  /* showLoadedImagesCount(); */
}

window.addEventListener('keyup', (event) => {
  // console.log('Taste: ', event);
  let keyboardEvent = event.code.toUpperCase();
  keyboard.setKeyStatus(keyboardEvent, false);
});

window.addEventListener('keydown', (event) => {
  let keyboardEvent = event.code.toUpperCase();
  keyboard.setKeyStatus(keyboardEvent, true);
});

function createButton(canvas) {
  canvas.innerHTML += '<button>Start</button>'
}

function showLoadedImagesCount() {
  setInterval(() => {
    console.log('Geladene Bilder: ', loadedImages);
  })
}
