import CanvasOption from './CanvasOption.js';
import { randomNumber } from './utils.js';

export default class Tail extends CanvasOption{
    constructor(x, vy, color){
        super();
        this.x = x;
        this.y = this.canvasHeight;
        this.vx = 0;
        this.vy = vy;
        this.angle = randomNumber(0, 2);
        this.gravity = 0.985;
        this.opacity = 1;
        this.color = color;
    }

    draw(){
        this.ctx.fillStyle = `hsla(${this.color}, 100%, 60%, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.angle++;
        this.vx = Math.cos(this.angle) * this.vy * 0.5;

        this.vy *= this.gravity;
        this.opacity *= this.gravity + 0.008;
        
    }
}