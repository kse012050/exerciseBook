import CanvasOption from './js/CanvasOption.js'
import Particle from './js/Particle.js'
import Tail from './js/Tail.js'
import { randomNumber } from './js/utils.js'

class Canvas extends CanvasOption{
    constructor(){
        super();
        this.particles = [];
        this.tails = [];
    }

    init(){
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
        this.ctx.scale(this.dpr, this.dpr);
    }

  

    createParticles(){
        const COUNT = 400;
        const x = randomNumber(0, this.canvasWidth);
        const y = randomNumber(0, this.canvasHeight);
        for(let a = 0; a < COUNT; a++){
            const angle = Math.PI / 180 * randomNumber(0, 360);
            const r = Math.hypot(this.canvasWidth, this.canvasHeight) * randomNumber(0, 10) * 0.0004;
            const vx = r * Math.cos(angle);
            const vy = r * Math.sin(angle);
            const opacity = randomNumber(0.7, 0.9)
            this.particles.push(new Particle(x, y, vx, vy, opacity));
        }
    }

    render(){
        let now, delta;
        let then = new Date();

        // this.createParticles();


        const frame = () => {
            requestAnimationFrame(frame)

            now = new Date();
            delta = now - then;
            if(this.intervale > delta) return;
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

            this.particles.forEach((particle, idx) => {
                particle.draw();
                particle.update();

                if(particle.opacity < 0.3){
                    this.particles.splice(idx, 1)
                }
            })
        }

        requestAnimationFrame(frame)
    }
}

const canvas = new Canvas();

window.addEventListener('load', () => {
    canvas.init();
    canvas.render();
})

window.addEventListener('resize', (e) => {
    canvas.init();
    canvas.render();
})