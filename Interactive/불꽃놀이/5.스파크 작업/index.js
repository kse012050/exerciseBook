import CanvasOption from './js/CanvasOption.js'
import Particle from './js/Particle.js'
import Tail from './js/Tail.js'
import Spark from './js/Spark.js'
import { randomNumber } from './js/utils.js'

class Canvas extends CanvasOption{
    constructor(){
        super();
        this.particles = [];
        this.tails = [];
        this.sparks =[]
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

    createTails(){
        const x = randomNumber(this.canvasWidth * 0.2, this.canvasWidth * 0.8);
        const vy = this.canvasHeight * randomNumber(0.01, 0.015) * -1;
        this.tails.push(new Tail(x, vy))
    }

  

    createParticles(x, y){
        const COUNT = 400;
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

        this.createTails();

        const frame = () => {
            requestAnimationFrame(frame)

            now = new Date();
            delta = now - then;
            if(this.intervale > delta) return;
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

            // if(Math.random() < 0.3){
            //     this.createTails();
            // }

            this.tails.forEach((tail, idx) => {
                tail.draw();
                tail.update();

                const colorDeg = randomNumber(0, 360);
                for(let a = 0; a < Math.round(-tail.vy * 0.5); a++){
                    const vx = randomNumber(-5, 5) * 0.05;
                    const vy = randomNumber(-5, 5) * 0.05;
                    const opacity = Math.min(-tail.vy, 0.5);
                    this.sparks.push(new Spark(tail.x, tail.y, vx, vy, opacity, colorDeg))
                }

                if(tail.opacity < 0.2){
                    this.createParticles(tail.x, tail.y)
                    this.tails.splice(idx, 1)
                }
            })

            this.particles.forEach((particle, idx) => {
                particle.draw();
                particle.update();

                if(Math.random() < 0.1) {
                    this.sparks.push(new Spark(particle.x, particle.y, 0, 0, 0.3, 45))
                }

                if(particle.opacity < 0.3){
                    this.particles.splice(idx, 1)
                }
            })

            this.sparks.forEach((spark, idx) => {
                spark.draw();
                spark.update();
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