let keyboard = new Keyboard();

function init() {
  renderStartScreenContent();
  showStartButton();
  const imagePaths = getAllImagePaths(allImages);
  preloadImages(imagePaths).then(() => {
   // später showButton hier einfügen
  });
}


function renderStartScreenContent() {
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateStartScreenContentHTML();
}

function getAllImagePaths(obj) {
  let paths = [];
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((item) => {
        if (typeof item === 'string') {
          // Ersetzen Sie die Platzhalter im Dateipfad durch den aktuellen Wert von mermaidType
          item = item.replace('mermaid_1', `mermaid_${mermaidType}`);
          paths.push(item);
        } else if (typeof item === 'object') {
          paths = paths.concat(getAllImagePaths(item));
        }
      });
    } else if (typeof obj[key] === 'object') {
      // Prüfen, ob das aktuelle Objekt den Typ 'mermaidArrays' hat
      if (obj[key].type === 'mermaidArrays' && obj[key].images) {
        // Durchsuchen Sie die Bilder im Objekt 'images' und passen Sie die Bildpfade entsprechend an
        for (const imageKey in obj[key].images) {
          if (Array.isArray(obj[key].images[imageKey])) {
            obj[key].images[imageKey].forEach((imagePath) => {
              if (typeof imagePath === 'string') {
                const regex = /mermaid_1/g;
                // Ersetzen Sie die Platzhalter im Dateipfad durch den aktuellen Wert von mermaidType
                // imagePath = imagePath.replace('mermaid_1', `mermaid_${mermaidType}`);
                imagePath = imagePath.replace(regex, `mermaid_\${mermaidType}`);
                paths.push(imagePath);
              }
            });
          }
        }
      } else {
        paths = paths.concat(getAllImagePaths(obj[key]));
      }
    }
  }

  console.log('Pfade: ', paths);
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
      let updatedPath = path.replace(/'mermaid_$%7BmermaidType%7D'/g, `mermaid_' + mermaidType`);

      const img = new Image();
      img.onload = onLoadHandler;
      img.src = updatedPath;
      imagePromises.push(img);
    });
    console.log('Geladene Bilder: ', imagePromises);
  });
}




/* function preloadImages(imagePaths) {
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
} */

function showStartButton() {
  const startButton = document.getElementById('start_game_button');
  startButton.classList.remove('d-none');
}

function showMermaidSelection() {
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateMermaidSelectionHTML();
}

function backToStartScreen() {
  renderStartScreenContent();
  showStartButton();
}

function selectMermaidType(typeNumber) {
  mermaidType = typeNumber;
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateCanvasHTML();
  startGame();
}

function startGame() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
}

function openStoryInfo() {
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateStoryContentHTML();
}

function openGameRules() {
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateGameRulesContentHTML();
}

function openImprintInfo() {
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateImprintContentHTML();
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
  canvas.innerHTML += '<button>Start</button>';
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
