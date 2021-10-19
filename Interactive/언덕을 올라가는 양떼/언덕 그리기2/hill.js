export class Hill {
    constructor(total){
        this.total = total;
    }

    resize(stageWidth,stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.points = [];
        this.gap = this.stageWidth / this.total;

        for(let i = 0; i < this.total; i++){
            this.points[i] = {
                x : i * this.gap,
                y : this.getY()
            }
        }
    }

    draw(ctx){
        
    }
    
    getY(){
        const min = this.stageWidth / 8;
        const max = this.stageWidth - min;
        return min + Math.random() * max;
    }
}