import {
    Hill
} from './hill.js'

class App{
    constructor(){
        // console.log('첫 시작');

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.hills = new Hill(6);

        window.addEventListener('resize',this.resize.bind(this))
        this.resize();

        this.hills.draw();

        // requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        this.ctx.scale(2,2);

        this.hills.resize(this.stageWidth,this.stageHeight);
        /* for(let i = 0; i < this.hills.length; i++){
            this.hills[i].resize(this.stageWidth,this.stageHeight);
        } */

        

        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.stageWidth - 150, 10, 150, 100);
    }

    animate(t){
        requestAnimationFrame(this.animate.bind(this));
        
        this.ctx.clearRect(0,0,this.stageWidth , this.stageHeight);
    }
}

// window.onload = function(){
//     new App();
// }

window.onload = () =>{
    new App();
}

