import CanvasOption from "./CanvasOption.js";
import { randomNumBetween } from "./utils.js";

export default class Particle extends CanvasOption {
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
        this.vx = randomNumBetween(-5, 5);
        this.vy = randomNumBetween(-5, 5);
        this.opacity = 1;
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;

        this.opacity -= 0.01
    }

    draw(){
        this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }
}