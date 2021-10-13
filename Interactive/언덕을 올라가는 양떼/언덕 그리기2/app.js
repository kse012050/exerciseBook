import {
    Hill
} from './hill.js'

class App{
    constructor(){
        // console.log('첫 시작');

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.resize();

        this.hill = new Hill();
    }

    resize(){
        console.log('test');
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        this.ctx.scale(2,2);

        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.stageWidth - 150, 10, 150, 100);
    }
}

// window.onload = function(){
//     new App();
// }

window.onload = () =>{
    new App();
}

