export class Ball{
    constructor(stageWidth, stageHeight, size , speed){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.size = size;
        this.speedX = speed;
        this.startX = (this.stageWidth / 2) - (this.size);
        this.startY = (this.stageHeight) - (this.size);
    }

    draw(ctx){
        this.startX += this.speedX;
        console.log(this.speedX);
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.startX, this.startY, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}