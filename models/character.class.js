class Character extends movableObject {
    width = 100;
    height = this.width * (1028 / 665);
    

    constructor() {
        super().loadImage(`../img/Mermaid/PNG/${mermaidType}/idle_000.png`);
    }

    moveUp() {
        console.log('Moving up');
    }
    moveDown() {
        console.log('Moving down');
    }
}


