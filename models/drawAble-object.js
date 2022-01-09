class drawAbleObject {
    img;
    imageCache = [];
    currentImg = 0;
    x = 120;
    y = 265;
    width = 100;
    height = 150;


    loadImg(path) {
        this.img = new Image(); //JS schreibeweise von <img src="">
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        if (this instanceof character) {
            ctx.beginPath();
            // ctx.lineWidth = '5';
            // ctx.strokeStyle = 'blue';
            // ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }



    loadImages(imgArray) {
        imgArray.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}