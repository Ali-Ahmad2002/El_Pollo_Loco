class MovableObject extends drawAbleObject {


    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;      // beschleunigung
    energy = 100;
    lastHit = 0;
    CoinEnergy = 0;
    bottleEnergy = 0;
    endBossEnergy = 100;
    chickenEnergy = 1;


    stopGravity() {
        clearInterval(this.gravityInterval);
    }


    applyGravity() {
        this.gravityInterval = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof throwableObject) {  //<= throwableObject fällt durch die map 
            return true;
        } else {
            return this.y < 230;
        }
    }


    gameOver() {
        if (this.energy == 0) {
            return init();
        }
    }



    //character is colliding chicken 
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitCoin() {
        this.CoinEnergy += 20;
        if (this.CoinEnergy > 100) {
            this.CoinEnergy = 100;
        }
    }

    hitBottle() {
        this.bottleEnergy += 10;
        if (this.bottleEnergy > 100) {
            this.bottleEnergy = 100;
        }
    }

    downBottleEnergy() {
        this.bottleEnergy - 20;
        if (this.bottleEnergy <= 0) {
            this.bottleEnergy = 0;
        }
    }

    hitEndBoss() {
        this.endBossEnergy -= 25;
        if (this.endBossEnergy < 0) {
            this.endBossEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitChickens() {
        this.chickenEnergy -= 1;
        if (this.chickenEnergy <= 0) {
            this.chickenEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; //Differenz in ms
        timePassed = timePassed / 1000; //Differenz in S
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    endBossDead() {
        return this.endBossEnergy == 0;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;

    }

    playAnimation(images) {
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    }

    jump() {
        this.speedY = 25;
    }
} 