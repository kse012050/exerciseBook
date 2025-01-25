import CanvasOption from './js/CanvasOption.js';
import Particle from './js/Particle.js';
import { randomNumber } from './js/utils.js'

class Canvas extends CanvasOption {
    constructor(){
        super();
        this.particles = []
    }

    init(){
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
    }

    createParticle(){
        const COUNT = 400;
        const x = randomNumber(0, this.canvasWidth);
        const y = randomNumber(0, this.canvasHeight);
        for(let a = 0; a < COUNT; a++){
            const r = Math.hypot(this.canvasWidth, this.canvasHeight) * 0.00004 * randomNumber(2, 100);
            const angle = Math.PI / 180 * randomNumber(0, 360);
            const vx = r * Math.cos(angle);
            const vy = r * Math.sin(angle);
            const opacity = randomNumber(0.7, 0.9);
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

            if(this.interval > delta) return;
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

            this.particles.forEach((particle) => {
                particle.draw();
                particle.update();
            })

            then = now - (delta % this.interval)
        }
        requestAnimationFrame(frame);
    }
}

const canvas = new Canvas();

window.addEventListener('load', () => {
    canvas.init();
    canvas.render();
})