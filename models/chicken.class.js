class chicken extends MovableObject {

    y = 358;
    width = 60;
    height = 60;
    walkingImages = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
        // 'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png',
    ];

    constructor() {
        super().loadImg('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

        this.x = 500 + Math.random() * 1750; // die Chickens werden zufällig an einer Position gespawnt zwischen 200 und 700
        this.loadImages(this.walkingImages);
        this.speed = 0.15 + Math.random() * 0.5;
        this.animateEnemies();
    }

    animateEnemies() {

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.walkingImages);
        }, 100);


    }

}