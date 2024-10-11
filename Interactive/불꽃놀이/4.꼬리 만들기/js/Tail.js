import CanvasOption from "./CanvasOption.js";
import { randomNumBetween } from "./utils.js";

export default class Tail extends CanvasOption{
    constructor(x, y, vy){
        super();
        this.x = x;
        this.y = y;
        this.vy = vy;
        this.angle = randomNumBetween(0, 2);
    }

    draw(){
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }
    
    update(){
        this.vy *= this.friction;
        this.y += this.vy;
        this.angle += 1;
        this.x += Math.cos(this.angle) * this.vy * 0.2
        this.opacity = -this.vy * 0.1
    }
}