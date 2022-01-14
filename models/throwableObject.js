class throwableObject extends MovableObject {

    throwableBottles = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    constructor(x, y, otherDicretion) {
        super().loadImg('img/6.botella/1.Marcador.png');
        this.loadImages(this.throwableBottles);
        this.x = x;
        this.y = y;
        this.otherDirection = otherDicretion;
        this.height = 75;
        this.width = 80;
        this.throw();
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 10;
            } else {
                this.x += 10;
                this.playAnimation(this.throwableBottles);
            }

        }, 25);
    }

}

