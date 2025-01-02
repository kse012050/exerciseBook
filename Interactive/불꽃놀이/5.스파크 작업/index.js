import CanvasOption from './js/CanvasOption.js';
import { randomNum } from './js/utils.js'
import Paticle from './js/Particle.js'

class Canvas extends CanvasOption {
    constructor(){
        super();
        this.particles = [];
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

    createPaticle(){
        const COUNT = 200;
        const x = randomNum(0, this.canvasWidth);
        const y = randomNum(0, this.canvasHeight);
        for(let a = 0; a < COUNT; a++){
            this.particles.push(new Paticle(x, y))
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
            if(delta < this.interval) return;
            this.ctx.fillStyle = 'black';
            this.ctx.beginPath();
            this.ctx.rect(0, 0, this.canvasWidth, this.canvasHeight);
            this.ctx.fill();
            this.ctx.closePath();

            this.particles.forEach((particle, idx)=>{
                particle.draw();
                particle.update();
                if(particle.opacity < 0){
                    this.particles.splice(idx, 1)
                }
            })

            then = now - (delta % this.interval);

        }
        requestAnimationFrame(frame)
    }
}

const canvas = new Canvas();

window.addEventListener('load', ()=>{
    canvas.init()
    canvas.render()
})