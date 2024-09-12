import CanvasOption from "./js/canvasOption.js";
import Particle from "./js/Particle.js";
import { randomNumBetween, hypotenuse } from "./js/utils.js";

class Canvas extends CanvasOption{
    constructor(){
        super();
        this.particles = [];
    }

    init(){
        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.ctx.scale(this.dpr, this.dpr)
    }

    createParticle(){
        const particle_count = 200;
        const x = randomNumBetween(0, this.canvasWidth);
        const y = randomNumBetween(0, this.canvasHeight);
        for(let a = 0; a < particle_count; a++){
            const r = randomNumBetween(2, 100) * hypotenuse(innerWidth, innerHeight) * 0.00002;
            const angle = Math.PI / 180 * randomNumBetween(0, 360);
            const vx = r * Math.cos(angle);
            const vy = r * Math.sin(angle);
            this.particles.push(new Particle(x, y, vx, vy))
        }
    }

    draw(){
        let now , delta;
        let then = new Date();

        this.createParticle();

        const frame = () =>{
            requestAnimationFrame(frame)
            now = new Date();
            delta = now - then;
            if(delta < this.interval) return;

            this.ctx.fillStyle = 'black'
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

            this.particles.forEach((particle, index) => {
                particle.draw();
                particle.update();

                if(particle.opacity <= 0) this.particles.splice(index, 1);
            })

            then = now - (delta % this.interval);
        }
        requestAnimationFrame(frame)
    }
}

const canvas = new Canvas();

window.onload = () => {
    canvas.init();
    canvas.draw();
}

window.addEventListener("resize", () =>{
    canvas.init();
})