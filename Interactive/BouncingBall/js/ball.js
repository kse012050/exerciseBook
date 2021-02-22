export class Ball{
    constructor(stageWidth, stageHeight, size , speed){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.size = size;
        this.speedX = speed;
        this.speedY = speed * -1;
        this.x = (this.stageWidth / 2);
        this.y = (this.stageHeight) - (this.size * 10);

        this.test = true;
    }

    draw(ctx ,block , startBallBlean){
        if(startBallBlean){
            this.x += this.speedX;
            this.y += this.speedY;
        }            

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
            if(this.y > maxY){
                this.speedY = 0;
                this.speedX = 0;
            }
        }
    }

    bounceBlock(block){
        for(var i = 0; i < block.length; i++){
            const minX = block[i].x - this.size;
            const maxX = block[i].width + block[i].x + this.size;
            const minY = block[i].height - this.size;
            const maxY = block[i].height + block[i].y + this.size;

            // console.log("maxY = " + maxY);
            // console.log('this.y = ' + this.y);
            
            if(this.test){
                // console.log(block);
                // console.log("maxX = " + maxX);
                // console.log('this.x = ' + this.x);
                // console.log('this.y = ' + this.y);
            }
            if(this.x >= minX && this.x < maxX && this.y >= minY  && this.y <= maxY ){
                this.test = false;
                // this.speedY = 0;
                // this.speedX = 0;
                const x1 = Math.abs(minX - this.x);
                const x2 = Math.abs(this.x - maxX);
                const y1 = Math.abs(minY - this.y);
                const y2 = Math.abs(this.y - maxY);
                const min1 = Math.min(x1, x2);
                const min2 = Math.min(y1, y2);
                const min = Math.min(min1, min2);
                console.log()
                if(min == min1){
                    this.speedX *= -1;
                }else{
                    this.speedY *= -1;
                }

                block[i].blockColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
            }
        }
    }
}