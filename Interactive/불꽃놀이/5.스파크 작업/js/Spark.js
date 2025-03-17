import CanvasOption from './CanvasOption.js';

export default class Spark extends CanvasOption{
    constructor(x, y, vx, color){
        super();
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.color = color;
        this.opacity = 1;
    }

    draw(){
        this.ctx.fillStyle = `hsla(${this.color}, 100%, 60%, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.opacity -= 0.02;
        this.x += this.vx;
    }
}