import CanvasOption from './js/CanvasOption.js'
import Particle from './js/Particle.js'
import { randomNumBetween, hypotenuse } from './js/utils.js';

class Canvas extends CanvasOption {
    constructor(){
        super();
        this.particles = []
    }

    init(){
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        // this.dpr = 2
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
        this.ctx.scale(this.dpr, this.dpr)
    }

    createPaticle(){
        const COUNT = 400;

        const x = randomNumBetween(0, this.canvasWidth);
        const y = randomNumBetween(0, this.canvasHeight);

        for(let a = 0; a < COUNT; a++){
            const r = randomNumBetween(2, 100) * hypotenuse(this.canvasWidth, this.canvasHeight) * 0.00004;
            const angle = Math.PI / 180 * randomNumBetween(0, 360);
            const vx = r * Math.cos(angle)
            const vy = r * Math.sin(angle)
            this.particles.push(new Particle(x, y, vx, vy))
        }
    }

    render(){
        let now, delta;
        let then = new Date();

        this.createPaticle()

        const frame = () =>{
            requestAnimationFrame(frame)

            now = new Date();
            delta = now - then;
            if( delta < this.interval ) return;
            this.ctx.fillStyle = 'black'
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

            this.particles.forEach((particle)=>{
                particle.draw();
                particle.update();
            })
            

            then = now - (delta % this.interval);
        }

        requestAnimationFrame(frame)
    }
}

const canvas = new Canvas();


window.addEventListener('DOMContentLoaded',()=>{
    canvas.init();
    canvas.render();
})

window.addEventListener('resize',()=>{
    canvas.init();
})