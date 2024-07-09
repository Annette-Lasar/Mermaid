let keyboard = new Keyboard();
const imagePromises = [];

/**
 * This function calls all other functions necessary on loading the game.
 */
function init() {
  loadMusicStatus();
  loadNoiseStatus();
  showOrHideLoadingSpinner('show');
  getAllImages();
  let allCollectedImages = showAllImages();
  preloadImages(allCollectedImages).then(() => {
    showOrHideLoadingSpinner('hide');
    renderStartScreenContent();
    showStartButton();
  });
}

/**
 * This function renders the start screen content.
 */
function renderStartScreenContent() {
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateStartScreenContentHTML();
  setNoiseStatus('noise_button', 'noise_text');
  setMusicStatus('music_button', 'music_text');
}

/**
 * This function preloads all images before the game starts.
 * @param {array} imagePaths - This is the array that is created in the file
 * create_all_images_information.js
 * @returns - It returns an array with all image objects.
 */
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

    imagePaths.forEach((path) => {
      const img = new Image();
      img.onload = onLoadHandler;
      img.src = path;
      imagePromises.push(img);
    });
  });
}

/**
 * This function shows the start button after all images have been preloaded.
 */
function showStartButton() {
  const startButton = document.getElementById('start_game_button');
  startButton.classList.remove('d-none');
}

/**
 * This function shows a screen where the player can select a character just
 * before the game starts.
 */
function showMermaidSelection() {
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateMermaidSelectionHTML();
}

/** This function brings the player back to the start screen after a
 * game has been lost or won.
 */
function backToStartScreen() {
  renderStartScreenContent();
  showStartButton();
}

/**
 *
 * @param {number} typeNumber - This is the number 1, 2 or 3 for each mermaid type.
 * The variable mermaidType is defined in the file data.js.
 */
function selectMermaidType(typeNumber) {
  mermaidType = typeNumber;
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateCanvasHTML();
  startGame();
}

/**
 * This function starts the game.
 * */
function startGame() {
  initLevel();
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  setNoiseStatus('noise_icon');
  setMusicStatus('music_icon');
}

/**
 * This function renders a screen with information about the background story to the game.
 */
function openStoryInfo() {
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateStoryContentHTML();
}

/**
 * This function renders a screen with game rules for the player to read.
 */
function openGameRules() {
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateGameRulesContentHTML();
}

/**
 * This function renders a screen with imprint information.
 */
function openImprintInfo() {
  const outerStartScreen = document.getElementById(
    'start_screen_outer_wrapper'
  );
  outerStartScreen.innerHTML = generateImprintContentHTML();
}

/**
 * This function toggles music on or off.
 */
function toggleMusic(buttonID, textID) {
  music = !music;
  setMusicStatus(buttonID, textID);
  saveMusicStatus();
}

/**
 * This function sets the music status on the start screen.
 */
function setMusicStatus(buttonID, textID) {
  let musicButton = document.getElementById(buttonID);
  let musicText = document.getElementById(textID);
  let imgPathOn = './img/game_ui/PNG/buttons/music_on.png';
  let imgPathOff = './img/game_ui/PNG/buttons/music_off.png';
  updateMusicButtons(musicButton, musicText, imgPathOn, imgPathOff);
}

/**
 * This function updates the buttons and text on the screen that show
 * whether music is on or off
 * @param {Object} musicButton - HTML element for the music button
 * @param {Object} musicText  - HTML element for the description text
 * @param {string} imgPathOn - image path for music on image
 * @param {string} imgPathOff - image path for music off image
 */
function updateMusicButtons(musicButton, musicText, imgPathOn, imgPathOff) {
  if (music) {
    musicButton.src = imgPathOn;
    if (musicText !== null) {
      musicText.innerHTML = 'MUSIC IS ON';
    }
  } else {
    musicButton.src = imgPathOff;
    if (musicText !== null) {
      musicText.innerHTML = 'MUSIC IS OFF';
    }
  }
}

/**
 * This function saves the current music status in the local storage.
 */
function saveMusicStatus() {
  localStorage.setItem('music', JSON.stringify(music));
}

/**
 * This function loads the current music status from the local storage.
 */
function loadMusicStatus() {
  let musicAsText = localStorage.getItem('music');
  if (musicAsText) {
    music = JSON.parse(musicAsText);
  }
}

/**
 * This function toggles noise on or off.
 */
function toggleNoise(buttonID, textID) {
  noise = !noise;
  setNoiseStatus(buttonID, textID);
  saveNoiseStatus();
}

/**
 * This function sets the noise status on the start screen.
 */
function setNoiseStatus(buttonID, textID) {
  let noiseButton = document.getElementById(buttonID);
  let noiseText = document.getElementById(textID);
  let imgPathOn = './img/game_ui/PNG/buttons/noise_on.png';
  let imgPathOff = './img/game_ui/PNG/buttons/noise_off.png';
  updateNoiseButtons(noiseButton, noiseText, imgPathOn, imgPathOff);
}

/**
 * This function updates the noise button and text according to
 * the current noise status. 
 * @param {object} noiseButton - HTML element with noise icon
 * @param {object} noiseText  - HTML element with noise text
 * @param {string} imgPathOn - image path with substitute noise icon
 * @param {string} imgPathOff - image path with substitute noise icon
 */
function updateNoiseButtons(noiseButton, noiseText, imgPathOn, imgPathOff) {
  if (noise) {
    noiseButton.src = imgPathOn;
    if (noiseText !== null) {
      noiseText.innerHTML = 'NOISE IS ON';
    }
  } else {
    noiseButton.src = imgPathOff;
    if (noiseText !== null) {
      noiseText.innerHTML = 'NOISE IS OFF';
    }
  }
}

/**
 * This function saves the current noise status in the local storage.
 */
function saveNoiseStatus() {
  localStorage.setItem('noise', noise);
}

/**
 * This function loads the current noise status from the local storage.
 */
function loadNoiseStatus() {
  let noiseAsText = localStorage.getItem('noise');
  if (noiseAsText) {
    noise = JSON.parse(noiseAsText);
  }
}

/**
 * This function shows or hides the loading spinner when all images are preloaded.
 * @param {string} action - This is either 'show' or 'hide'.
 */
function showOrHideLoadingSpinner(action) {
  const loadingSpinner = document.getElementById('loading_spinner');
  if (action === 'show') {
    loadingSpinner.classList.remove('d-none');
  } else if (action === 'hide') {
    loadingSpinner.classList.add('d-none');
  }
}

/**
 * This function reloads the start screen.
 */
function replayGame() {
  renderStartScreenContent();
  showStartButton();
}

/**
 * This function registers which key of the keyboard is released.
 */
window.addEventListener('keyup', (event) => {
  let keyboardEvent = event.code.toUpperCase();
  keyboard.setKeyStatus(keyboardEvent, false);
});

/**
 * This function registers which key of the keyboard is pressed.
 */
window.addEventListener('keydown', (event) => {
  let keyboardEvent = event.code.toUpperCase();
  keyboard.setKeyStatus(keyboardEvent, true);
});

/**
 * This function clears allIntervals and all setTimeouts
 * after a game.
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999999; i++) {
    window.clearInterval(i);
    clearTimeout(i);
  }
}
