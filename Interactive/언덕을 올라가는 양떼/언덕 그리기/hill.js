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
        this.gap = Math.ceil(this.stageWidth / (this.total - 1));
        for(let i = 0; i < this.total; i++){
            this.points[i] = {
                x : this.gap * i,
                y : this.getY()
            }
            // console.log(this.points[i]);
        }
        // console.log(this.total);
        // console.log(this.points.length);
    }
    draw(ctx){
        ctx.fillStyle = 'red';
        for(let i = 0; i < this.total; i++){
            // ctx.fillStyle = 'rgba(255,0,0,1)';
            // console.log(this.points[i].x);
            ctx.beginPath();
            ctx.arc(this.points[i].x ,this.points[i].y , 5, 0, 2* Math.PI);
            ctx.fill();
        }

        let cur = this.points[0];
        let prev = cur;
        

        ctx.fillStyle = this.color;
        ctx.beginPath();
        
        ctx.moveTo(prev.x , prev.y);
        for(let i = 1; i < this.points.length; i++){
            cur = this.points[i];

            const cx = (cur.x + prev.x) / 2;
            const cy = (cur.y + prev.y) / 2;
            // ctx.arc(cx ,cy , 5, 0, 2* Math.PI);
            ctx.quadraticCurveTo(prev.x,prev.y,cx,cy);

            prev = cur;
        }
        ctx.lineTo(prev.x, prev.y);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
    }

    getY(){
        const min = this.stageHeight / 8;
        const max = this.stageHeight - min;
        return min + Math.random() * max;
    }
}