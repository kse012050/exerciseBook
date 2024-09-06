import CanvasOption from "./js/CanvasOption.js";
import { randomNumBetween } from "./js/utils.js";
import Particle from "./js/Particle.js";

class Canvas extends CanvasOption {
    constructor(){
        super();
        this.particles = []
    }

    init(){
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.ctx.scale(this.dpr, this.dpr)

        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
    }

    createParticles(x, y){
        const PARTICLE_COUNT = 1;
        for(let i = 0; i < PARTICLE_COUNT; i++){
            this.particles.push(
                new Particle(
                    randomNumBetween(this.canvasWidth * 0.2, this.canvasWidth * 0.8), 
                    randomNumBetween(this.canvasHeight * 0.2, this.canvasHeight * 0.8)
                )
            )
        }
    }

    render(){
        let now, delta;
        let then = Date.now();

        this.createParticles();
        
        const frame = () =>{
            requestAnimationFrame(frame)
            now = Date.now();
            delta = now - then;
            if(delta < this.interval) return;
            this.ctx.fillStyle = '#000000'
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)


            this.particles.forEach((particle, index)=>{
                particle.draw()
            })

            

            then = now - (delta % this.interval)
        }

        requestAnimationFrame(frame)
    }
}

const canvas = new Canvas();

window.addEventListener('load', () => {
    canvas.init();
    canvas.render();
})

window.addEventListener('resize', () =>{
    canvas.init();
})