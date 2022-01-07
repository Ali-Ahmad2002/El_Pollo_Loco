class statusBarBottles extends drawAbleObject {

    bottleBarImages = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ]

    percentageBottle = 100;

    constructor() {
        super();
        this.loadImages(this.bottleBarImages);
        this.x = 30;
        this.y = 90;
        this.width = 200;
        this.height = 60;
        this.setPercentageBottles(0);
    }

    setPercentageBottles(per) {
        this.percentageBottle = per;
        let path = this.bottleBarImages[this.resolveBottleImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveBottleImageIndex() {
        if (this.percentageBottle == 100) {
            return 5;
        } else if (this.percentageBottle > 80) {
            return 4;
        } else if (this.percentageBottle > 60) {
            return 3;
        } else if (this.percentageBottle > 40) {
            return 2;
        } else if (this.percentageBottle > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}