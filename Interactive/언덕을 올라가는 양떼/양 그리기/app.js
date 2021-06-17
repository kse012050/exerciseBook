class App {
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.resize();

        this.img = new Image();

        this.img.src = 'sheep.png';

        this.draw(this.ctx);
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        this.ctx.scale(2,2);
    }
    
    draw(ctx){
        ctx.fillStyle = 'red';
        this.ctx.fillRect(20,10,150,100);

        ctx.drawImage(
            this.img,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10
        )
    }
}

window.onload = function(){
    new App();
}