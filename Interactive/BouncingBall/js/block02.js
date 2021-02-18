export class Block{
    constructor(width, height){
        this.x = 200;
        this.y = 200;
        this.width = (width - (this.x * 2));
        this.height = (height / 2) - (this.y / 2);
        // this.maxX = this.width - this.x;
        // this.maxY = this.height + this.y;
    }

    draw(ctx){
        ctx.fillStyle = '#ff384e';
        ctx.beginPath();
        ctx.rect(this.x , this.height , this.width, this.y);
        ctx.fill()
    }
}