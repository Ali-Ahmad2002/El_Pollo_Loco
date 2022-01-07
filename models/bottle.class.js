class bottle extends drawAbleObject {
    y = 350;
    width = 80;
    height = 75;

    bottles = [
        'img/6.botella/2.Botella_enterrada1.png',
    ]

    constructor() {
        super().loadImg('img/6.botella/2.Botella_enterrada1.png');
        this.loadImages(this.bottles);
        this.x = 300 + Math.random() * 1750;
    }
}

