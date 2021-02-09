export class Block{
    constructor(amount , stageWidth){
        console.log(amount);
        this.width = 200;
        this.height = 20;
        this.x = 20;
        this.y = 20;
        this.maxX = this.width + this.x;
        this.maxY = this.height + this.y;
    }

    draw(ctx){
        ctx.fillStyle = '#ff384e';
        ctx.beginPath();
        ctx.rect(this.x , this.y , this.width, this.height);
        ctx.fill()
    }
}