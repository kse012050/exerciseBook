class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.resize();

        this.ctx.beginPath();
        this.ctx.fillStyle = '#ff0000';
        this.ctx.arc(30,30,30,0, 2 * Math.PI);
        this.ctx.fill();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        this.ctx.scale(2,2);
    }
}

window.onload = () => {
    new App();
}