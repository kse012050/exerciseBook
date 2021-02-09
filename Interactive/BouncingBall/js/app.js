import { Block } from './block.js'

class App{
    constructor(){
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext('2d');

        window.addEventListener('resize',this.resize.bind(this), false);


        this.block = new Block(this.stageWidth , this.stageWidth);

        this.resize();
        this.animate();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2)

    }

    animate(t){
        this.block.draw(this.ctx);
    }
}

window.onload = () =>{
    new App();
}