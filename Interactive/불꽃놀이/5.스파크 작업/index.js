import CanvasOptions from './js/CanvasOption.js'
import Particles from './js/Particle.js'
import { randomNum } from './js/utils.js';

class Canvas extends CanvasOptions{
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
        this.ctx.scale(this.dpr, this.dpr)
    }

    createParticles(){
        const COUNT = 1;
        for(let a = 0; a < COUNT; a++){
            const x = randomNum(0, this.canvasWidth)
            const y = randomNum(0, this.canvasHeight)
            this.particles.push(new Particles(x, y))
        }
    }

    draw(){
        this.createParticles();

        const frame = () => {
            this.particles.forEach((particle)=>{
                particle.draw()
            })
            requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
        
    }
}

const canvas = new Canvas();

window.addEventListener('load',()=>{
    canvas.init();
    canvas.draw();
})