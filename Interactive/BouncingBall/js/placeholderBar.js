export class PlaceholderBar {
    constructor(stageWidth , stageHeight){
        this.width = 5;
        this.height = 200;
        this.stageWidth = (stageWidth / 2) - (this.width / 2);
        this.stageHeight = stageHeight;
    }
    draw(ctx ,ball){
        this.length = (this.height - (ball.size * 2)) / 5;

        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath();
        // ctx.rect(this.stageWidth, (ball.y - this.height), this.width , this.length * 5);
        for(let i = 0; i < 5; i++){
            ctx.rect(this.stageWidth, (ball.y - this.height) + (this.length * i) , this.width , this.length - 5);
        }
        ctx.fill();
    }
}