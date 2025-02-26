import CanvasOption from './CanvasOption.js';
import { randomNumber } from './utils.js';

export default class Tail extends CanvasOption{
    constructor(x, vy){
        super();
        this.x = x;
        this.y = this.canvasHeight;
        this.vy = vy;
        this.angle = randomNumber(0, 2);
        this.gravity = 0.982;
        this.opacity = -vy;
    }

    draw(){
        this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.y += this.vy;
        this.vy *= this.gravity;
        this.opacity = -this.vy * 0.3;
        
        this.angle += 1;
        this.x += Math.cos(this.angle) * this.vy * 0.5;
    }
}