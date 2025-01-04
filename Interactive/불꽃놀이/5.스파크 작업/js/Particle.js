import CanvasOption from './CanvasOption.js';
import { randomNum } from './utils.js';

export default class Particle extends CanvasOption {
    constructor(x, y, vx, vy, opacity){
        super();
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.opacity = opacity;
    }

    draw(){
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.opacity -= 0.05;   
        this.x += this.vx;
        this.y += this.vy;
    }
}