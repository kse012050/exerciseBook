import CanvasOption from './CanvasOption.js'

export default class Particle extends CanvasOption{
    constructor(x, y, vx, vy, opacity, color){
        super();
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.opacity = opacity;
        this.friction = 0.985;
        this.gravity = 2;
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
        this.x += this.vx;
        this.y += this.vy;

        this.vy *= this.friction;
        this.vx *= this.friction;

        this.y += this.gravity;
        
        this.opacity -= 0.004;
    }
}