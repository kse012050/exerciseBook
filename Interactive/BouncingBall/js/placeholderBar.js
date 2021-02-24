export class PlaceholderBar {
    constructor(stageWidth , stageHeight ,ball){
        this.width = 5;
        this.height = 200;
        this.stageWidth = (stageWidth / 2) - (this.width / 2);
        this.stageHeight = stageHeight;
        this.ballY = ball.y;
        this.ballSize = ball.size;
    }
    draw(ctx){
        this.length = (this.height - (this.ballSize * 2)) / 5;

        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath();
        // ctx.rect(this.stageWidth, (ball.y - this.height), this.width , this.length * 5);
        for(let i = 0; i < 5; i++){
            ctx.rect(this.stageWidth, (this.ballY - this.height) + (this.length * i) , this.width , this.length - 5);
        }
        ctx.fill();
    }
}