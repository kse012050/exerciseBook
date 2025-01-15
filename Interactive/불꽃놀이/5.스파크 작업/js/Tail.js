import CanvasOption from './CanvasOption.js';
import { randomNum } from './utils.js';

export default class Tail extends CanvasOption{
    constructor(x){
        super();
        this.x = x;
        this.y = this.canvasHeight;
        this.vy = -10;
        this.friction = 0.985;
        this.angle = randomNum(0, 2);
    }

    draw(){
        this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(){
        this.y += this.vy;
        this.vy *= this.friction;
        this.opacity = -this.vy * 0.1;
        

        this.angle += 1;
        this.x += Math.cos(this.angle) * this.vy * 0.7;
    }
}



// export default class Tail extends CanvasOption{
//     constructor(x){
//         super();
//         this.x = x;
//         this.y = this.canvasHeight;
//         this.vy = -10;
//         this.angle = randomNum(0, 2);
//         this.friction = 0.985
//     }

//     draw(){
//         this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
//         this.ctx.beginPath();
//         this.ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
//         this.ctx.fill();
//         this.ctx.closePath();
//     }

//     update(){
//         this.y += this.vy;
//         this.vy *= this.friction;
//         this.opacity = -this.vy * 0.1;
        
//         this.angle += 1;
//         this.x += Math.cos(this.angle) * this.vy * 0.5
//     }
// }