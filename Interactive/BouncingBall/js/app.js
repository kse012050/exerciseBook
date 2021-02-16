// import { Block } from './block.js';
import { Block } from './block02.js';
import { Ball } from './ball.js';

class App{
    constructor(){
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext('2d');

        window.addEventListener('resize',this.resize.bind(this), false);


        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        
        // this.block = new Block(this.stageWidth, 10);
        this.block = new Block(this.stageWidth, this.stageHeight);
        this.ball = new Ball(this.stageWidth, this.stageHeight, 10 , 10);
        this.resize();
        this.animate();

        // window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2)
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx);
        this.ball.draw(this.ctx , this.block);
    }
}

window.onload = () =>{
    new App();
}