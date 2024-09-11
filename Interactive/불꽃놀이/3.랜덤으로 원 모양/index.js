import CanvasOption from "./js/canvasOption.js";

class Canvas extends CanvasOption{
    constructor(){
        super();
    }

    init(){
        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.ctx.scale(this.dpr, this.dpr)
    }

    draw(){
        let now , delta;
        let then = new Date();
        const frame = () =>{
            requestAnimationFrame(frame)
            now = date.now();
            delta = now - then;
            if(delta < this.interval) return;
            

            then = now - (delta % this.interval);
        }
        requestAnimationFrame(frame)
    }
}

const canvas = new Canvas();

window.onload = () => {
    canvas.init();
}

window.addEventListener("resize", () =>{
    canvas.init();
})