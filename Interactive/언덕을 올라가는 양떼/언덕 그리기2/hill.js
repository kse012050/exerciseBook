export class Hill {
    constructor(total){
        this.total = total;
    }

    resize(stageWidth,stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.points = [];
        this.cur = [];
        this.gap = this.stageWidth / this.total;

        for(let i = 0; i < this.total; i++){
            this.points[i] = {
                x : i * this.gap,
                y : this.getY()
                // y : 500
            }
        }
    }

    draw(ctx){
        // 선 그리기 테스트
        // ctx.fillStyle = 'blue';
        // ctx.strokeStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(0 , 800 , 5, 0 , 2 * Math.PI);
        // ctx.stroke();
        // ctx.fill();

        for(let i = 0; i < this.points.length; i++){
            ctx.fillStyle = 'red';
            ctx.strokeStyle = 'blue';
            console.log(i + 'x : ' + this.points[i].x);
            console.log(i + 'y : ' + this.points[i].y);
            ctx.beginPath();
            ctx.arc(this.points[i].x , this.points[i].y , 5 , 0 , 2 * Math.PI);
            // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();

            ctx.fillStyle = 'blue';
            ctx.strokeStyle = 'red';

            if(i >= 1){

            }
            this.cur[i] = {
                
            }

        }
    }
    
    getY(){
        const min = this.stageHeight / 8;
        const max = this.stageHeight - min;
        return min + Math.random() * max;
    }
}