import CanvasOption from "./js/CanvasOption.js";
import Particle from "./js/Particle.js"
import Tail from "./js/Tail.js";
import { hypotenuse, randomNumBetween } from "./js/utils.js"

class Canvas extends CanvasOption{
    constructor(){
        super();
        this.particles = [];
        this.tails = [];
    }

    init(){
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        this.canvas.width = this.canvasWidth * 2;
        this.canvas.height = this.canvasHeight * 2;
        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
        this.ctx.scale(2, 2)
    }

    createTail(){
        const x = randomNumBetween(this.canvasWidth * 0.2, this.canvasWidth * 0.8)
        const vy = this.canvasHeight * randomNumBetween(0.01, 0.015) * -1;
        const colorDeg = randomNumBetween(0, 360)
        this.tails.push(new Tail(x, vy, colorDeg))
    }

    createParticles(){
        const COUNT = 400;
        const x = randomNumBetween(0, this.canvasWidth);
        const y = randomNumBetween(0, this.canvasHeight);
        for(let i = 0; i < COUNT; i++){
            const r = randomNumBetween(2, 100) * hypotenuse(innerWidth, innerHeight) * 0.00005;
            const angle = Math.PI / 180 * randomNumBetween(0, 360);
            // const angle = 
            const vx = r * Math.cos(angle);
            const vy = r * Math.sin(angle);
            const opacity = randomNumBetween(0.6, 0.9)
            this.particles.push(new Particle(x, y, vx, vy, opacity))
        }
    }

    render(){
        let now, delta;
        let then = new Date();

        this.createTail()
        // this.createParticles();

        const frame = () =>{
            requestAnimationFrame(frame);
            now = new Date();

            delta = now - then;
            if(delta < this.interval) return;
            this.ctx.fillStyle = `#00000060`;
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

            this.tails.forEach((tail, index)=>{
                tail.draw();
                tail.update();
            })
            
            this.particles.forEach((particle, index)=>{
                particle.draw();
                particle.update();

                if(particle.opacity <= 0){
                    this.particles.splice(index, 1)
                }
            })
 
            then = now - (delta % this.interval)
        }
        requestAnimationFrame(frame);
    }
}

const canvas = new Canvas();

window.addEventListener('DOMContentLoaded', ()=>{
    canvas.init();
    canvas.render();
})

window.addEventListener('resize', ()=>{
    canvas.init();
})