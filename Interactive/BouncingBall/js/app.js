// import { Block } from './block.js';
import { Block } from './block02.js';
import { Ball } from './ball.js';
import { Bar } from './bar.js';
import { PlaceholderBar } from './placeholderBar.js'

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
        this.blockCrash = 1;

        this.startBallBlean = false;
        for(var i = 0; i < 3; i++){
            this.block.push(new Block(this.blockWidth, this.stageHeight , this.blockBetween , i ,this.blockCrash));
        }
        this.bar = new Bar(this.stageWidth , this.stageHeight)
        this.ball = new Ball(this.stageWidth, this.stageHeight, 10 , 20);
        this.placeholderBar = new PlaceholderBar(this.stageWidth , this.stageHeight)

        this.resize();
        this.animate();

        // window.requestAnimationFrame(this.animate.bind(this));
        this.keydownEvent();
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
            if(this.block[i].blockCrash != 0){
                this.block[i].draw(this.ctx );
            }
        }
        this.bar.draw(this.ctx, this.directionKey);
        this.ball.draw(this.ctx , this.block ,this.bar ,this.startBallBlean );
        this.placeholderBar.draw(this.ctx ,this.ball);
    }

    keydownEvent(){
        window.addEventListener('keydown',(e) => {
            console.log(e.key);
            if(e.key === " "){
                this.startBallBlean = !this.startBallBlean;
            }

            if((e.key === "ArrowLeft" || e.key === "ArrowRight") && this.startBallBlean){
                this.directionKey = e.key;
            }else{
                this.directionKey = '';
            }
        })
    }
}

window.onload = () =>{
    new App();
}