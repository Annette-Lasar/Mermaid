let keyboard = new Keyboard();
function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
}

window.addEventListener('keyup', (event) => {
  let keyboardEvent = event.code.toUpperCase();
  keyboard.setKeyStatus(keyboardEvent, false);
});

window.addEventListener('keydown', (event) => {
  console.log(event);
  let keyboardEvent = event.code.toUpperCase();
  keyboard.setKeyStatus(keyboardEvent, true);
});
