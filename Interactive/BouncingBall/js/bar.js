export class Bar{
    constructor(stageWidth , stageHeight){
        this.width = 200;
        this.height = 10;
        this.x = (stageWidth / 2) - (this.width / 2);
        this.y = stageHeight - 80;
    }
    draw(ctx){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.rect(this.x , this.y, this.width , this.height);
        ctx.fill();
    }
}