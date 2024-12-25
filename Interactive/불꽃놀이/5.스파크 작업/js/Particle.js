import CanvasOption from './CanvasOption.js'

export default class Particle extends CanvasOption{
    constructor(){
        super();
    }

    draw(){
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(20, 20, 10, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        
    }
}