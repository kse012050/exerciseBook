export class Ball{
    constructor(stageWidth, stageHeight, size , speed){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.size = size;
        this.speedX = speed;
        this.speedY = speed;
        this.x = (this.stageWidth / 2) - (this.size);
        this.y = (this.stageHeight) - (this.size);

        this.test = true;
    }

    draw(ctx ,block){
        this.x += this.speedX;
        this.y -= this.speedY;
        
        this.bounceWindow(this.stageWidth ,this.stageHeight);

        this.bounceBlock(block);

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

    bounceBlock(block){
        const maxX = block.width + block.x + this.size;
        const maxY = block.height + block.y + this.size;
        // console.log("maxY = " + maxY);
        // console.log('this.y = ' + this.y);
        
        if(this.test){
            console.log(block);
            console.log("maxX = " + maxX);
            console.log('this.x = ' + this.x);
        }
        if(this.y <= maxY && this.x < maxX){
            this.test = false;
            // this.speedY = 0;
            this.speedY *= -1;
            // this.speedX = 0;
            // console.log(maxY);
        }
    }
}