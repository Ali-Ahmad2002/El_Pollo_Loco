class throwableObject extends MovableObject {

    constructor(x, y) {
        super().loadImg('img/6.botella/1.Marcador.png');
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 80;
        this.throw();
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

}