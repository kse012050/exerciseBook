export class Ball{
    constructor(stageWidth, stageHeight, size , speed){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.size = size;
        this.speedX = speed;
        this.speedY = speed;
        this.x = (this.stageWidth / 2) - (this.size);
        this.y = (this.stageHeight) - (this.size);
    }

    draw(ctx){
        this.x += this.speedX;
        this.y -= this.speedY;
        
        this.bounceWindow(this.stageWidth ,this.stageHeight);

        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight){
        const minX = this.size;
        const maxX = stageWidth - this.size;
        const minY = this.size;
        const maxY = stageHeight - this.size;

        if(this.x > maxX || this.x < minX){
            this.speedX *= -1;
        }else if(this.y > maxY || this.y < minY){
            this.speedY *= -1;
        }
    }
}