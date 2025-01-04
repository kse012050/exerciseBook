import CanvasOption from './js/CanvasOption.js';
import Particle from './js/Particle.js';
import { randomNum } from './js/utils.js'

class Canvas extends CanvasOption{
    constructor(){
        super();
        this.particles = [];
    }

    init(){
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
        this.ctx.scale(this.dpr, this.dpr)
    }

    createParticle(){
        const COUNT = 400;
        const x = randomNum(this.canvasWidth * 0.2, this.canvasWidth * 0.8);
        const y = randomNum(0, this.canvasHeight)
        for(let a = 0; a < COUNT; a++){
            const r = Math.PI / 180 * randomNum(0, 360);
            const vx = Math.cos(r) * randomNum(-2, 2)
            const vy = Math.sin(r) * randomNum(-2, 2)
            const opacity = randomNum(0.7, 0.9);
            this.particles.push(new Particle(x, y, vx, vy, opacity))
        }
    }

    render(){
        let now, delta;
        let then = new Date();

        this.createParticle();

        const frame = () => {
            requestAnimationFrame(frame);

            now = new Date();
            delta = now - then;
            if(delta < this.interval) return;
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

            this.particles.forEach((particle)=>{
                particle.update();
                particle.draw();
            })

            then = now - (delta % this.interval);
        }
        requestAnimationFrame(frame);
    }
}

const canvas = new Canvas()

window.addEventListener('load', () => {
    canvas.init();
    canvas.render();
})