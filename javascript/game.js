let keyboard = new Keyboard();

function init() {
  const imagePaths = getAllImagePaths(allImages);
  preloadImages(imagePaths).then(() => {
    // createStartButton();
  });
}

function getAllImagePaths(obj) {
  let paths = [];

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((item) => {
        if (typeof item === 'string') {
          paths.push(item);
        } else if (typeof item === 'object') {
          paths = paths.concat(getAllImagePaths(item));
        }
      });
    } else if (typeof obj[key] === 'object') {
      paths = paths.concat(getAllImagePaths(obj[key]));
    } else if (key === 'src') {
      paths.push(obj[key]);
    }
  }
  return paths;
}

function preloadImages(imagePaths) {
  return new Promise((resolve) => {
    let loadedImages = 0;
    const totalImages = imagePaths.length;

    const onLoadHandler = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        resolve();
      }
    };

    const imagePromises = [];
    imagePaths.forEach((path) => {
      const img = new Image();
      img.onload = onLoadHandler;
      img.src = path;
      imagePromises.push(img);
    });
    console.log('Geladene Bilder: ', imagePromises);
  });
}


function createStartButton() {
  const startButton = document.createElement('button');
  startButton.textContent = 'Mein Spiel starten';
  startButton.classList.add('start-button');
  startButton.addEventListener('click', startGame);
  document.body.appendChild(startButton);
}

function startGame() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
}

/* let fullscreenIsActivated = false;

function showFullscreen() {
  let fullscreen = document.getElementById("Start_Screen");
  if (!fullscreenIsActivated) {
    enterFullscreen(fullscreen);
    fullscreenIsActivated = true;
  } else {
    exitFullscreen();
    fullscreenIsActivated = false;
  }
} */

/* function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // iOS Safari
    element.webkitRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
} */

/* function startGame() {
  removeStartGameButton();
  centerKeyboardCommandDiv();
  mobileButtons();
  removeEndscreens();
  canvas = document.getElementById("Canvas");
  initLevel();
  world = new World(canvas, keyboard);
  keyboard.bindButtonPressEvents();
} */

/* function removeEndscreens() {
  document.getElementById("Game_Over_Screen").classList.add("d-none");
  document.getElementById("Win_Screen").classList.add("d-none");
}

function mobileButtons() {
  if (window.innerWidth <= 800) {
    document.getElementById("Mobile_Movement_Left").style.display = "flex";
    document.getElementById("Mobile_Movement_Right").style.display = "flex";
  }
}

function removeStartGameButton() {
  document.getElementById("Start_Game_Button").style.display = "none";
  document.getElementById("Policy_Btn").style.display = "none";
}

function centerKeyboardCommandDiv() {
  document.getElementById("Keyboard_Command_Div").style.left = "50%";
  document.getElementById("Keyboard_Command_Div").style.transform =
    "translateX(-50%)";
}

function showKeyboardCommands() {
  let popUpBackground = document.createElement("div");
  popUpBackground.classList.add("pop-up-backdrop");
  popUpBackground.innerHTML = generateKeyboardCommandsHTML();

  document.body.appendChild(popUpBackground);
  document
    .getElementById("Close_Keyboard_Commands")
    .addEventListener("click", function () {
      document.body.removeChild(popUpBackground);
    });
} */

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
  canvas.innerHTML += '<button>Start</button>';
}




