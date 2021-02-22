export class Bar{
    constructor(stageWidth , stageHeight){
        this.stageWidth = stageWidth;
        // this.width = stageWidth - 100;
        this.width = 200;
        this.height = 20;
        this.x = (stageWidth / 2) - (this.width / 2);
        this.y = stageHeight - 80;
    }
    draw(ctx, directionKey){
        // if(directionKey != ''){
            if(directionKey === "ArrowLeft" && this.x >= 0){
                this.x -= 20;
            }else if(directionKey === "ArrowRight" && (this.x + + this.width) <= this.stageWidth ){
                this.x += 20;
            }
        // }
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.rect(this.x , this.y, this.width , this.height);
        ctx.fill();
    }
}