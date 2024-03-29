let keyboard = new Keyboard();
function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  createButton(canvas);
}

window.addEventListener('keyup', (event) => {
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
