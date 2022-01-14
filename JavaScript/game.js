let canvas;
let theWorld;
let theKeyboard = new keyboard();

function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('theGame').classList.remove('d-none');
    document.getElementById('theGame').classList.add('theGame');
    getLevel();
    init();
}

function restartGame() {
    document.getElementById('winImg').classList.add('d-none');
    startGame();
    // getLevel();
}

function tryAgain() {
    document.getElementById('lostImg').classList.add('d-none');
    startGame();
}

function openInfo() {
    let info = document.getElementById('infoContainer');
    info.classList.remove('d-none');
}

function closeInfo() {
    let info = document.getElementById('infoContainer');
    info.classList.add('d-none');
}

function fullScreen() {
    let canvas = document.getElementById('canvas');
    canvas.requestFullscreen();
}

function init() {
    canvas = document.getElementById('canvas');
    theWorld = new world(canvas, theKeyboard);
    console.log('My Character is', theWorld);
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        theKeyboard.right = true;
    }

    if (e.keyCode == 38) {
        theKeyboard.up = true;
    }

    if (e.keyCode == 37) {
        theKeyboard.left = true;
    }

    if (e.keyCode == 40) {
        theKeyboard.down = true;
    }

    if (e.keyCode == 32) {
        theKeyboard.space = true;
    }

    if (e.keyCode == 68) {
        theKeyboard.D = true;
    }
})

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        theKeyboard.right = false;
    }

    if (e.keyCode == 38) {
        theKeyboard.up = false;
    }

    if (e.keyCode == 37) {
        theKeyboard.left = false;
    }

    if (e.keyCode == 40) {
        theKeyboard.down = false;
    }

    if (e.keyCode == 32) {
        theKeyboard.space = false;
    }

    if (e.keyCode == 68) {
        theKeyboard.D = false;
    }
})