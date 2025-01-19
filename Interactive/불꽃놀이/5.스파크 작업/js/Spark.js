import CanvasOption from "./CanvasOption.js"

export default class Spark extends CanvasOption{
    constructor(x, y, vx, vy, opacity){
        super();
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.opacity = opacity;
    }

    draw(){
        this.ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= 0.05;
    }
}