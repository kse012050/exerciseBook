import CanvasOption from './CanvasOption.js'
import { randomNumber } from './utils.js';

export default class Tail extends CanvasOption{
    constructor(x, vy, color){
        super();
        this.x = x;
        this.y = this.canvasHeight;
        this.angle = randomNumber(0, 2);
        this.vy = vy;
        this.friction = 0.985;
        this.opacity = 1;
        this.color = color;
    }

    draw(){
        this.ctx.fillStyle = `hsla(${this.color}, 100%, 65%, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.y += this.vy;

        this.vy *= this.friction;

        this.x += Math.cos(this.angle) * this.vy * 0.6;
        this.angle += 1;

        this.opacity = this.vy * - 0.3;
    }
}