import CanvasOption from './js/CanvasOption.js';
import Tail from './js/Tail.js';
import Particle from './js/Particle.js';
import Spark from './js/Spark.js';
import { randomNumber } from './js/utils.js';

class Canvas extends CanvasOption{
    constructor(){
        super();
        this.tails = []
        this.particles = []
        this.sparks = []
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
        const x = randomNumber(this.canvasWidth * 0.2, this.canvasWidth * 0.8);
        const vy = this.canvasHeight * randomNumber(0.01, 0.013) * -1;
        const color = randomNumber(0, 360);
        this.tails.push(new Tail(x, vy, color))
    }

    render(){
        let now, delta;
        let then = new Date();
        
        this.createTail();
        const frame = () => {
            requestAnimationFrame(frame);
            now = new Date();
            delta = now - then;
            

            if(delta < this.interval) return;
            this.ctx.fillStyle = `rgba(0, 0, 0, 1)`;
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

            
            this.tails.forEach((tail, idx) => {
                tail.draw();
                tail.update();
                
                // for(let a = 0; a < Math.round(tail.vy * -1 * 0.5); a++){
                //     console.log(tail.vy * -1 * 0.5);
                    
                //     const x = tail.x;
                //     const y = tail.y + randomNumber(-1, 1);
                //     const vx = randomNumber(-1, 1)
                //     this.sparks.push(new Spark(x, y, vx, tail.color));
                // }

                for(let i = 0; i < Math.round(-tail.vy * 0.5); i++){
                    const vx = randomNumber(-5, 5) * 0.05;
                    const vy = randomNumber(-5, 5) * 0.05;
                    const opacity = Math.min(-tail.vy, 0.5);
                    this.sparks.push(new Spark(tail.x, tail.y, vx, tail.tail))
                }
                if(tail.opacity < 0.1){
                    this.tails.splice(idx, 1);
                }
            })

            this.sparks.forEach((spark, idx) => {
                spark.draw();
                spark.update();
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

window.addEventListener('load', () => {
    canvas.init();
})