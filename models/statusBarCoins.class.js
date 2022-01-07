class statusBarCoins extends drawAbleObject {

    coinImages = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
    ]

    percentageCoins = 100;

    constructor() {
        super();
        this.loadImages(this.coinImages);
        this.x = 30;
        this.y = 45;
        this.width = 200;
        this.height = 60;
        this.setPercentageCoins(0);
    }

    setPercentageCoins(per) {
        this.percentageCoins = per;
        let path = this.coinImages[this.resolveCoinImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveCoinImageIndex() {
        if (this.percentageCoins == 100) {
            return 5;
        } else if (this.percentageCoins > 80) {
            return 4;
        } else if (this.percentageCoins > 60) {
            return 3;
        } else if (this.percentageCoins > 40) {
            return 2;
        } else if (this.percentageCoins > 20) {
            return 1;
        } else {
           return 0;
        }
    }

}