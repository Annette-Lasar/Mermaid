/**
 * This class manipulates information about the keyboard.
 */
class Keyboard {
  ARROWLEFT = false;
  ARROWRIGHT = false;
  ARROWUP = false;
  ARROWDOWN = false;
  SPACE = false;

  /**
   * This function sets the status of a keyboard key to true or false.
   * @param {string} keyCode - Name of the currently pressed key.
   * @param {boolean} status
   */
  setKeyStatus(keyCode, status) {
    this[keyCode] = status;
  }

  /**
   * This function gets the current key status.
   * @param {boolean} keyCode
   * @returns - It returns true or false.
   */
  getKeyStatus(keyCode) {
    return this[keyCode];
  }

  /**
   * This function links the mobile buttons on the screen to the key events.
   */
  linkButtonsToPressEvents() {
    document.getElementById('btn_left').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.ARROWLEFT = true;
    });

    document.getElementById('btn_left').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.ARROWLEFT = false;
    });

    document.getElementById('btn_right').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.ARROWRIGHT = true;
    });

    document.getElementById('btn_right').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.ARROWRIGHT = false;
    });

    document.getElementById('btn_up').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.ARROWUP = true;
    });

    document.getElementById('btn_up').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.ARROWUP = false;
    });

    document.getElementById('btn_down').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.ARROWDOWN = true;
    });

    document.getElementById('btn_down').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.ARROWDOWN = false;
    });

    document.getElementById('btn_space').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.SPACE = true;
    });

    document.getElementById('btn_space').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.SPACE = false;
    });
  }
}
