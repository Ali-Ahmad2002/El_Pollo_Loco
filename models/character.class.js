class character extends MovableObject {

    y = 100;
    width = 115;
    height = 190;
    speed = 10;

    walkingImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ]

    jumpingImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',    
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png'
    ];


    hurtImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ]


    deadImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];

    world;
    walkingSound = new Audio('Audio/421022_5121236-lq.mp3');

    constructor() {
        super().loadImg('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png') //so wird von der Übergeordneten Methode (MovableObject) die Fkt loadImg aufgerufen und als parameter pack ich den Pfad des character bild ein
        this.loadImages(this.walkingImages);
        this.loadImages(this.jumpingImages);
        this.loadImages(this.hurtImages);
        this.loadImages(this.deadImages);
        this.applyGravity();
        this.animate();
    }


    animate() {

        this.moveInterval = setInterval(() => {
            this.walkingSound.pause();
            if (this.world.theKeyboard.right && this.x < this.world.level.levelEndX) {
                this.moveRight();
                this.otherDirection = false;
                this.walkingSound.play();
            }

            if (this.world.theKeyboard.left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walkingSound.play();
            }

            if (this.world.theKeyboard.space && !this.isAboveGround()) {
                this.jump();
            }

            this.world.cameraX = -this.x + 100;
        }, 1000 / 60);


        this.playInterval = setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.deadImages);
                // this.gameOver();
            } else if (this.isHurt()) {
                this.playAnimation(this.hurtImages);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.jumpingImages);
            } else {

                if (this.world.theKeyboard.right || this.world.theKeyboard.left) {
                    this.playAnimation(this.walkingImages);
                }
            }
        }, 100);
    }

    stopCharacterIntervals() {
        clearInterval(this.moveInterval);
        clearInterval(this.playInterval);
        super.stopGravity();
    }
}