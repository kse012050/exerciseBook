import {
    Hill
} from './hill.js';

class App {
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.hills = [
            new Hill('#ff4674',1.4,6)
        ];

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);

        // 레티나 디스플레이에서 선명하게 보이게 하려고 두배로 설정했어요. 다른 영상에 보시면 화면 필셀에 따라 다르게 설정하는 방법이 있습니다

        for(let i = 0; i < this.hills.length; i++){
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }

        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.stageWidth - 150, 10, 150, 100);
    }

    animate(t){
        requestAnimationFrame(this.animate.bind(this));
        
        // this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);

        let dots;
        for(let i = 0; i < this.hills.length; i++){
            dots = this.hills[i].draw(this.ctx);
        }
    }
}

window.onload = () => {
    new App();
}