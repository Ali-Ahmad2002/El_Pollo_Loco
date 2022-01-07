class clouds extends MovableObject {

    y = 50;
    width = 450;
    height = 220;

    constructor() {
        super().loadImg('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = 0 + Math.random() * 500;
        this.moveClouds();

    }

    moveClouds() {
        this.moveLeft();
    }
}