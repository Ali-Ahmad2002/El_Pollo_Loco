class world {

    theCharacter = new character();
    level = level1;
    theKeyboard;
    canvas;
    ctx;
    cameraX = 0;
    // theEndBoss = new endBoss();
    theStatusBar = new statusBar();
    coinBar = new statusBarCoins();
    bottleBar = new statusBarBottles();
    throwBottles = [];
    amountBottle = [];
    earnCoinSound = new Audio('Audio/editEarCoin.mp3');
    pullUpBottle = new Audio('Audio/pullUpBottle.mp3');
    hitCharakterSound = new Audio('Audio/hit-[AudioTrimmer.com].mp3');



    constructor(canvas, theKeyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.theKeyboard = theKeyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkTrhowObjects();
            this.checkCollisionsBottles();
            this.checkCollisionWithChickens();
            this.checkCollisionBottleWithEndboss();
            // this.BottleCollidingWithEnemy();
        }, 200);

        setInterval(() => {
            this.checkCollisionsCoins();
        }, 35);
    }


    /**
     * with this function, you can throw a object with a key
     * @param {string}
     */
    checkTrhowObjects() {
        if (this.theKeyboard.D && this.amountBottle.length > 0) {
            let bottle = new throwableObject(this.theCharacter.x + 100, this.theCharacter.y + 100);
            this.throwBottles.push(bottle);
            this.amountBottle.shift();
            this.theCharacter.downBottleEnergy();
            this.bottleBar.setPercentageBottles(this.theCharacter.bottleEnergy);
            //animation einfügen zum flaschen werfen
        }
    }

    // BottleCollidingWithEnemy() {
    //     let bottle = new throwableObject(this.theCharacter.x + 100, this.theCharacter.y + 100);
    //     this.level.enemies.forEach((enemy) => {
    //         if (bottle.isColliding(enemy)) {
    //             console.log('gegner getroffen', bottle.isColliding(enemy))
    //         }
    //     })
    // }    

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.theCharacter.isColliding(enemy)) {
                this.theCharacter.hit();
                this.hitCharakterSound.play();
                console.log(this.theCharacter.energy);
                this.theStatusBar.setPercentage(this.theCharacter.energy);
            }
        });
    }

    // characterCollisionWithEndboss() {

    // }

    checkCollisionsCoins() {
        this.level.coins.forEach((coin) => {
            if (this.theCharacter.isColliding(coin)) {
                this.theCharacter.hitCoin();
                this.coinBar.setPercentageCoins(this.theCharacter.CoinEnergy);
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.earnCoinSound.play();
            }
        });
    }

    checkCollisionsBottles() {
        this.level.theBottles.forEach((bottles) => {
            if (this.theCharacter.isColliding(bottles)) {
                this.theCharacter.hitBottle();
                this.bottleBar.setPercentageBottles(this.theCharacter.bottleEnergy);
                this.level.theBottles.splice(this.level.theBottles.indexOf(bottles), 1);
                this.pullUpBottle.play();
                this.amountBottle.push(bottles);
                console.log('die länge', this.amountBottle.length);
            }
        })
    }

    checkCollisionWithChickens() {
        this.throwBottles.forEach((bottles) => {
            this.level.enemies.forEach((theChickens) => {
                if (bottles.isColliding(theChickens)) {
                    console.log('hit the chickens', bottles.isColliding(theChickens));
                }
            })
        })
    }

    checkCollisionBottleWithEndboss() {
        this.throwBottles.forEach((bottles) => {
            this.level.endBoss.forEach((boss) => {
                if (bottles.isColliding(boss)) {
                    boss.hitEndBoss();
                    console.log('hit endboss', bottles.isColliding(boss));
                    console.log('endboss is hurt', boss.isHurt());
                    console.log('endbossEnergy', boss.endBossEnergy);
                }
            })
        })
    }

    setWorld() {
        this.theCharacter.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.ctx.translate(this.cameraX, 0);    //In diesem bereich bewegt sich die Kamera mit

        this.addObjectsToMap(this.level.theBackgroundObjects);
        this.addObjectsToMap(this.level.theClouds);
        this.addToMap(this.theCharacter);
        this.addObjectsToMap(this.throwBottles);
        this.addObjectsToMap(this.level.theBottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endBoss);

        this.ctx.translate(-this.cameraX, 0);

        this.addToMap(this.theStatusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        //draw() wird immer wieder aufgerufen
        let self = this;    //requestAnimationFrame kennt das wort "this" nicht, deswegen definiere ich über die Fkt die Variable self mit dem wort this
        requestAnimationFrame(function () { //ich gebe in requestAnimationFrame eine Fkt und diese wird ausgeführt sobald das bild oben geladen ist
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImg(mo)
        }

        mo.draw(this.ctx);

        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImgBack(mo);
        }
    }


    flipImg(mo) {
        this.ctx.save(); //wenn das Object was ich in die map einfüge eine andere richtung hat dann speichere ich den akutellen status vom ctx (context)
        this.ctx.translate(mo.width, 0); //die methode wie ich die bilder einfüge 
        this.ctx.scale(-1, 1);  //das bild wird gespiegelt 
        mo.x = mo.x * -1;
    }

    flipImgBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore(); //hier wird die spieglung rückgängig gemacht
    }
}