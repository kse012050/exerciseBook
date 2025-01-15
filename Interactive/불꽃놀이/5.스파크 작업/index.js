import CanvasOption from './js/CanvasOption.js';
import Particle from './js/Particle.js';
import Tail from './js/Tail.js';
import { randomNum } from './js/utils.js';

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

    createTail(){
        const x = randomNum(this.canvasWidth * 0.2, this.canvasWidth * 0.8);

        this.tails.push(new Tail(x));
    }

    createParticle(x, y){
        // const x = x;
        // const y = y;
        const COUNT = 400;
        for(let a = 0; a < COUNT; a++){
            const r = randomNum(2, 100) * Math.hypot(this.canvasWidth, this.canvasHeight) * 0.00004;
            const angle = Math.PI / 180 * randomNum(0, 360);
            const vx = r * Math.cos(angle);
            const vy = r * Math.sin(angle);
            const opacity = randomNum(0.7, 0.9)
            this.particles.push(new Particle(x, y, vx, vy, opacity))
        }
    }

    render(){
        let now, delta;
        let then = new Date();

        this.createTail();
        // this.createParticle();
        const frame = () => {
            requestAnimationFrame(frame);
            
            now = new Date();
            delta = now - then;
            
            if(delta < this.interval) return;
            
            // if(Math.random() < 0.1){
            //     this.createTail();
            // }

          
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

            this.tails.forEach((tail, idx) => {
                tail.draw();
                tail.update();

                if(tail.opacity < 0.1){
                    this.createParticle(tail.x, tail.y)
                    this.tails.splice(idx, 1);
                }
            })

            this.particles.forEach((particle, idx)=>{
                particle.draw();
                particle.update();

                if(particle.opacity < 0){
                    this.particles.splice(idx, 1)
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
})