import CanvasOption from './js/CanvasOption.js';
import Particle from './js/Particle.js';
import Tail from './js/Tail.js';
import { randomNumber } from './js/utils.js';

class Canvas extends CanvasOption{
    constructor(){
        super();
        this.particles = []
        this.tails = [];
    }

    init(){
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
    }

    createTail(){
        const x = randomNumber(this.canvasWidth * 0.2, this.canvasWidth * 0.8);
        const vy = this.canvasHeight * randomNumber(0.01, 0.013) * -1;
        const opacity = randomNumber(0.7, 0.9);
        this.tails.push(new Tail(x, vy, opacity));
    }

    createParticle(x, y){
        const COUNT = 400;
        for(let a = 0; a < COUNT; a++){
            const angle = Math.PI / 180 * randomNumber(0, 360);
            const r = randomNumber(0, 100) * Math.hypot(this.canvasWidth, this.canvasHeight) * 0.00004;
            const vx = r * Math.cos(angle)
            const vy = r * Math.sin(angle)
            const opacity = randomNumber(0.7, 0.9);
            this.particles.push(new Particle(x, y, vx, vy, opacity))
        }
    }

    render(){
        let now, delta;
        let then = new Date();

        // this.createParticle();
        
        const frame = () => {
            requestAnimationFrame(frame)

            now = new Date();

            delta = now - then;
            if(this.interval > delta) return;
            this.ctx.fillStyle = `black`;
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

            if(Math.random() < 0.05){
                this.createTail()
            }

            this.tails.forEach((tail, idx) => {
                tail.draw();
                tail.update();
                if(tail.opacity < 0.05){
                    this.tails.splice(idx, 1)
                    this.createParticle(tail.x, tail.y);
                }
            })

            this.particles.forEach((particle, idx) => {
                particle.draw();
                particle.update();
                if(particle.opacity < 0.01){
                    this.particles.splice(idx, 1)
                }
                
            })

            then = now - (delta % this.interval)
        }
        requestAnimationFrame(frame)
    }
}

const canvas = new Canvas()

window.addEventListener('load', () => {
    canvas.init();
    canvas.render();
})

window.addEventListener('resize', () => {
    canvas.render();
})