import CanvasOption from "./js/CanvasOption.js";
import Particle from "./js/Particle.js";
import { randomValue } from "./js/utils.js";

class Canvas extends CanvasOption {
    constructor(){
        super();
        this.particles = []
    }

    init(){
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.ctx.scale(this.dpr, this.dpr)

        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
    }

    createParticles(){
        const COUNT = 1000;
        const x = randomValue(0, this.canvas.width);
        const y = randomValue(0, this.canvas.height);
        for(let a = 0; a < COUNT; a++){
            const r = randomValue(-5, 5);
            const angle = Math.PI / 180 * randomValue(0, 360);
            const vx = r * Math.cos(angle);
            const vy = r * Math.sin(angle);
            this.particles.push(new Particle(x, y, vx, vy))
        }
    }

    render(){
        let now, delta;
        let then = Date.now();

        this.createParticles();

        const frame = () => {
            requestAnimationFrame(frame)
            now = Date.now();
            delta = now - then;
            if(delta < this.interval) return;
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
            
            this.particles.forEach((particle)=>{
                particle.draw()
                particle.update()
            })


            then = now - (delta % this.interval);
        }
        requestAnimationFrame(frame)
    }
}

const canvas = new Canvas();

window.addEventListener('load', ()=>{
    canvas.init();
    canvas.render();
})

window.addEventListener('resize', ()=>{
    canvas.init();
})