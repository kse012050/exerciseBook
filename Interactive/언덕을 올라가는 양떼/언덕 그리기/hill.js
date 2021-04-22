export class Hill{
    constructor(color, speed, total){
        this.color = color;
        this.speed = speed;
        this.total = total;
    }
    resize(stageWidth,stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.points =[];
        this.gap = Math.ceil(this.stageWidth / this.total);
        for(let i = 0; i < this.total; i++){
            this.points[i] = {
                x : this.gap * i,
                y : this.getY()
            }
            // console.log(this.points[i]);
        }
    }
    draw(ctx){
        ctx.fillStyle = 'red';
        for(let i = 0; i < this.total; i++){
            // ctx.fillStyle = 'rgba(255,0,0,1)';
            console.log(this.points[i].x);
            ctx.beginPath();
            ctx.arc(this.points[i].x ,this.points[i].y , 10, 0, 2* Math.PI);
            ctx.fill();
        }
    }

    getY(){
        const min = this.stageHeight / 8;
        const max = this.stageHeight - min;
        return min + Math.random() * max;
    }
}