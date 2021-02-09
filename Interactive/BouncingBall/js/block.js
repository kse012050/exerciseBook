export class Block{
    constructor(width, amount){
        this.amount = amount;
        this.x = 20;
        this.y = 20;
        this.width = (width - this.x) / this.amount;
        this.height = 20;
        this.maxX = this.width - this.x;
        this.maxY = this.height + this.y;
    }

    draw(ctx){
        ctx.fillStyle = '#ff384e';
        for(let i = 0; i < this.amount; i++){
            ctx.beginPath();
            ctx.rect(this.x + (this.maxX * i) + (this.x * i), this.y , this.maxX, this.height);
            ctx.fill()
        }
    }
}