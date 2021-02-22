// import { Block } from './block.js';
import { Block } from './block02.js';
import { Ball } from './ball.js';
import { Bar } from './bar.js';

class App{
    constructor(){
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext('2d');

        window.addEventListener('resize',this.resize.bind(this), false);


        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        
        // this.block = new Block(this.stageWidth, 10);
        this.block = []
        this.blockBetween = 40;
        this.blockWidth = (this.stageWidth - (this.blockBetween)) / 3;

        this.startBallBlean = false;
        for(var i = 0; i < 3; i++){
            this.block.push(new Block(this.blockWidth, this.stageHeight , this.blockBetween , i));
        }
        this.bar = new Bar(this.stageWidth , this.stageHeight)
        this.ball = new Ball(this.stageWidth, this.stageHeight, 10 , 20);
        this.resize();
        this.animate();

        // window.requestAnimationFrame(this.animate.bind(this));
        window.addEventListener('keydown',(e) => {
            alert();
            this.startBallBlean = true;
        })
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

        this.block[0].draw(this.ctx);

        for(var i = 0; i < this.block.length; i++){
        // for(var i in this.block.length){
            this.block[i].draw(this.ctx);
        }
        this.bar.draw(this.ctx);
        this.ball.draw(this.ctx , this.block ,this.startBallBlean );
    }
}

window.onload = () =>{
    new App();
}