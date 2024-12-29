import CanvasOption from "./CanvasOption.js";

export default class Particle extends CanvasOption{
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
    }

    draw(){
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }
}