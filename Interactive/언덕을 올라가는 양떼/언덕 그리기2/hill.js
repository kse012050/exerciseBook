export class Hill {
    constructor(){
        
    }

    resize(stageWidth,stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx){
        this.getY();
    }
    
    getY(){
        const min = stageWidth / 8;
        console.log(min);
    }
}