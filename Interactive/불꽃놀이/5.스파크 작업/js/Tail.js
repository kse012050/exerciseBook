import CanvasOption from "./CanvasOption.js";
import { randomNumber } from "./utils.js";

export default class Tail extends CanvasOption{
    constructor(x, vy, opacity){
        super();
        this.x = x;
        // this.vx = 0;
        this.y = this.canvasHeight;
        this.vy = vy;
        this.angle = randomNumber(0, 2);
        this.friction = 0.985;
        this.opacity = opacity;
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
        this.x += Math.cos(this.angle) * this.vy * 0.5;
        this.angle += 1;
        this.vy *= this.friction;
        this.opacity = -this.vy * 0.1
    }
}