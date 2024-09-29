import CanvasOption from "./js/CanvasOption.js";
import Particle from "./js/Particle.js"
import { randomNumBetween } from "./js/utils.js";

class Canvas extends CanvasOption{
    constructor(){
        super()

        this.particles = []
    }

    render(){
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;

        this.canvas.style.width = this.canvasWidth + "px";
        this.canvas.style.height = this.canvasHeight + "px";
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
    }

    createParticle(){
        const COUNT = 400;
        const x = randomNumBetween(0, this.canvasWidth);
        const y = randomNumBetween(0, this.canvasHeight);
        for(let a = 0; a < COUNT; a++){
            const vx = randomNumBetween(-5, 5);
            const vy = randomNumBetween(-5, 5);
            this.particles.push(new Particle(x, y, vx, vy))
        }
    }

    draw(){
        let now, delta;
        let then = Date.now();

        this.createParticle()

        const frame = () => {
            requestAnimationFrame(frame);
            
            now = Date.now();
            delta = now - then;
            if(delta < this.interval) return;
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
            
            this.particles.forEach((particle) => {
                particle.draw();
                particle.update();
            })
            
            
            then = now - (delta % this.interval)
        }
        requestAnimationFrame(frame)
    }
}

const canvas = new Canvas();

// window.onload = () => {
//     canvas.draw();
// }

window.addEventListener('load',function(){
    canvas.render();
    canvas.draw();
})
window.addEventListener('resize',function(){
    canvas.render();
})