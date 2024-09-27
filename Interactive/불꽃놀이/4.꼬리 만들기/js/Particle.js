import CanvasOption from "./CanvasOption.js";

export default class Particle extends CanvasOption {
    constructor(x, y, vx, vy){
        super();
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }
    
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2)
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
    }
}