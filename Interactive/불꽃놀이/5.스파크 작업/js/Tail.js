import CanvasOption from './CanvasOption.js';
import { randomNumber } from './utils.js';

export default class Tail extends CanvasOption{
    constructor(x){
        super();
        this.x = x;
        this.y = this.canvasHeight;
        this.vx = randomNumber(0, 2);
        this.vy = -10;
        this.opacity = 1;
        this.friction = 0.985;
    }

    draw(){
        this.ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.y += this.vy;
        this.vy *= this.friction;

        this.vx += 1;
        this.x += Math.cos(this.vx) * this.vy * 0.5;

        this.opacity = -this.vy * 0.2;
    }
}