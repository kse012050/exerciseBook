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
    }

    createTail(){
        const x = randomNumber(0, this.canvasWidth);
        this.tails.push(new Tail(x));
    }

    createParticle(x, y){
        const COUNT = 400;
        for(let a = 0; a < COUNT; a++){
            const r = randomNumber(0, 100) * Math.hypot(this.canvasWidth, this.canvasHeight) * 0.00004;
            const angle = Math.PI / 180 * randomNumber(0, 360);
            const vx = r * Math.cos(angle);
            const vy = r * Math.sin(angle);
            const opacity = randomNumber(0.7, 0.9)
            this.particles.push(new Particle(x, y, vx, vy, opacity));
        }
    }

    render(){
        let now, delta;
        let then = new Date();

        // this.createParticle();
        // this.createTail();

        const frame = () => {
            requestAnimationFrame(frame);

            now = new Date();
            delta = now - then;
            if(delta < this.interval) return;
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

            if(Math.random() < 0.03){
                this.createTail();
            }

            this.tails.forEach((tail, index) => {
                tail.draw();
                tail.update();

                for(let a = 0; a < Math.round(-tail.vy * 0.5); a++){
                    const vx = randomNumber(-5, 5) * 0.3;
                    const vy = randomNumber(-5, 5) * 0.3;
                    const opacity = Math.min(-tail.vy, 0.5)
                    this.sparks.push(new Spark(tail.x, tail.y, vx, vy, 0.8));
                }
                if(tail.opacity < 0.15){
                    this.tails.splice(index, 1);
                    this.createParticle(tail.x, tail.y)
                }
            })
            
            this.particles.forEach((particle, index) => {
                particle.draw();
                particle.update();

                if(Math.random() < 0.1){
                    this.sparks.push(new Spark(particle.x, particle.y, 0.4))
                }

                if(particle.opacity < 0.1){
                    this.particles.splice(index, 1);
                }
            })

            this.sparks.forEach((spark, index) => {
                spark.draw();
                spark.update();

                if(spark.opacity < 0.2){
                    this.sparks.splice(index, 1)
                }
            })

            then = now - (delta % this.interval);
        }
        requestAnimationFrame(frame);
    }
}

const canvas = new Canvas();

window.addEventListener('load', () => {
    canvas.init();
    canvas.render();
});