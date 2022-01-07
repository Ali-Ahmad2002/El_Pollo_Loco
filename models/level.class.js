class level {
    enemies;
    endBoss;
    theClouds;
    theBackgroundObjects;
    theBottles;
    coins;
    levelEndX = 2500;

    constructor(enemies, endBoss, theClouds, theBackgroundObjects, theBottles, coins) {
        this.enemies = enemies;
        this.endBoss = endBoss;
        this.theClouds = theClouds;
        this.theBackgroundObjects = theBackgroundObjects;
        this.theBottles = theBottles;
        this.coins = coins;     
    }
}