import CanvasOption from './CanvasOption.js';
import { randomNumber } from './utils.js';

export default class Tail extends CanvasOption{
    constructor(x, vy, colorDeg){
        super();
        this.x = x;
        this.y = this.canvasHeight;
        this.angle = randomNumber(0, 2);
        this.vy = vy;
        this.opacity = 3;
        this.friction = 0.985;
        this.colorDeg = colorDeg;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = `hsla(${this.colorDeg}, 100%, 65%, ${this.opacity})`;
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.y += this.vy;
        
        this.vy *= this.friction;

        this.x += Math.cos(this.angle) * this.vy * -1;
        this.angle++;

        this.opacity *= this.friction;
    }
}