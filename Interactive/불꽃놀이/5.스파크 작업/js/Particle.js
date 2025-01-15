import CanvasOption from './CanvasOption.js';

export default class Particle extends CanvasOption {
    constructor(x, y, vx, vy, opacity){
        super();
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.opacity = opacity;
        this.friction = 0.975;
        this.gravity = 0.05;
    }

    draw(){
        this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.vy += this.gravity;

        this.opacity -= 0.01;
    }
}
