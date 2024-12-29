import CanvasOption from './js/CanvasOption.js'
import Particle from './js/Particle.js'
import { randomNum } from './js/utils.js'

class Canvas extends CanvasOption{
    constructor(){
        super();
        this.particles = []
    }

    init(){
        this.canvasWidth = innerWidth;
        this.cavvasHeight = innerHeight;
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
    }

    createPaticle(){
        const COUNT = 10;
        for(let a = 0; a < COUNT; a++){
            const x = randomNum(0, this.canvasWidth);
            const y = randomNum(0, this.canvasHeight);
            this.particles.push(new Particle(x, y))
        }
    }

    draw(){
        let now, delta;
        let then = new Date();

        this.createPaticle()

        const frame = () => {
            requestAnimationFrame(frame)

            now = new Date();
            delta = now - then;
            if(delta < this.interval) return;

            this.particles.forEach((particle)=>{
                particle.draw();
            })

            then = now - (delta % this.interval);
        }
        requestAnimationFrame(frame)
    }
}

const canvas = new Canvas();

window.addEventListener('load', ()=>{
    canvas.init();
    canvas.draw();
})