class selectObjects extends drawAbleObject {

    coinImages = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];

    constructor() {
        super().loadImg('img/8.Coin/Moneda1.png');
        this.loadImages(this.coinImages);
        this.x = 375 + Math.random() * 1750;
        this.y = 80 - Math.random() * 70;
    }
}