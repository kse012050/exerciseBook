export class Block{
    constructor(width, height , between , amount){
        this.width = width - between;
        this.x= between + (this.width * amount) + (between * amount);
        this.y = 20;
        this.height = between;
        // this.maxX = this.width - this.x;
        // this.maxY = this.height + this.y;
        this.blockColor = '#ff384e';
    }

    draw(ctx){
        ctx.fillStyle = this.blockColor;
        ctx.beginPath();
        ctx.rect(this.x , this.height , this.width, this.y);
        ctx.fill()
    }
}