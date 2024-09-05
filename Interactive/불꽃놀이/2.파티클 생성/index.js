import CanvasOption from "./js/CanvasOption.js";

class Canvas extends CanvasOption {
    constructor(){
        super();
        console.log('?');
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

    render(){
        this.ctx.fillStyle = 'red'
        this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        this.ctx.fill();
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