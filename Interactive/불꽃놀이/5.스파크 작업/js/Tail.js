import CanvasOption from "./CanvasOption.js";

export default class Tail extends CanvasOption{
    constructor(x){
        super();
        this.x = x;
        this.y = this.canvasHeight;
        // this.vy = 10;
        this.vy = Math.hypot(this.canvasWidth, this.canvasHeight) * 0.004;
        this.gravity = 0.985;
    }

    draw(){
        this.ctx.fillStyle = `white`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.y -= this.vy;
        this.vy *= this.gravity;
        
    }
}