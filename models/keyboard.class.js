class Keyboard {
    ARROWLEFT = false;
    ARROWRIGHT = false;
    ARROWUP = false;
    ARROWDOWN = false;
    SPACE = false;

    setKeyStatus(keyCode, status) {
        this[keyCode] = status;
    }

    getKeyStatus(keyCode) {
        return this[keyCode];
    }
}