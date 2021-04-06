import {
    Point
} from './point.js'

export class Wave{
    constructor(index ,totalPoints){
        this.index = index;
        this.totalPoints = totalPoints;
    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        this.init();
    }

    init(){
        this.points = [];
        for(let i = 0; i < this.totalPoints; i++){
            console.log(this.pointGap * i);
            const point = new Point(
                this.pointGap * i,
                this.centerY
            );
            this.points[i] = point;
        }
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = '#ff0000';
        
        for(let i = 0; i < this.totalPoints; i++){
            this.points[i].update();
            ctx.beginPath();
            ctx.arc(this.points[i].x, this.points[i].y , 30, 0 , 2 * Math.PI);
            ctx.fill();
        }

    }
}