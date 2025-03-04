import CanvasOption from './js/CanvasOption.js';
import Tail from './js/Tail.js';
import Particle from './js/Particle.js';
import Spark from './js/Spark.js';
import { randomNumber } from './js/utils.js';

class Canvas extends CanvasOption{
    constructor(){
        super();
        this.tails = [];
        this.particles = [];
        this.sparks = [];
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

    createTail(){
        const x = randomNumber(this.canvasWidth * 0.2, this.canvasWidth * 0.8);
        const vy = this.canvasHeight * randomNumber(0.01, 0.013) * -1;
        const colorDeg = randomNumber(0, 360)
        this.tails.push(new Tail(x, vy, colorDeg));
    }

    createParticle(x, y){
        const COUNT = 400;
        for(let a = 0; a < COUNT; a++){
            const angle = Math.PI / 180 * randomNumber(0, 360);
            const r = Math.hypot(this.canvasWidth, this.canvasHeight) * 0.0004 * randomNumber(0, 10);
            const vx = r * Math.cos(angle);
            const vy = r * Math.sin(angle);
            const opacity = randomNumber(0.7, 0.9)
            this.particles.push(new Particle(x, y, vx, vy, opacity))
        }
    }

    render(){
        let now, delta;
        let then = new Date();
        
        // this.createParticle();
        this.createTail();
        
        const frame = () => {
            requestAnimationFrame(frame);
            
            now = new Date();
            delta = now - then;
            if(this.interval > delta) return;
            this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.ctx.closePath();

            this.tails.forEach((tail, idx) => {
                tail.draw();
                tail.update();
                for(let a = 0; a < Math.round(-tail.vy * 0.5); a++){
                    const vx = randomNumber(-5, 5) * 0.05;
                    const vy = randomNumber(-5, 5) * 0.05;
                    const opacity = Math.min(-tail.vy, 0.5);
                    this.sparks.push(new Spark(tail.x, tail.y, vx, vy, opacity, tail.colorDeg));
                }
                if(tail.opacity <= 0.2){
                    this.tails.splice(idx, 1)
                    this.createParticle(tail.x, tail.y);
                }
            })

            this.particles.forEach((particle, idx) => {
                particle.draw();
                particle.update();

                if(Math.random() < 0.1) {
                    this.sparks.push(new Spark(particle.x, particle.y, 0, 0, 0.3))
                }
                // this.sparks.push(new Spark(particle.x, particle.y));

                if(particle.opacity <= 0){
                    this.particles.splice(idx, 1)
                }
            })

            this.sparks.forEach((spark, idx) => {
                spark.update();
                spark.draw();

                if(spark.opacity < 0) this.sparks.splice(idx, 1);
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

window.addEventListener('reset', () => {
    canvas.init();
    canvas.render();
})