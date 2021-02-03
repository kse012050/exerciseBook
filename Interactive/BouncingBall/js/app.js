class App{
    constructor(){
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext('2d');
        console.log(
            document.body.clientWidth
        )
        

        window.addEventListener('resize',this.resize.bind(this), false);
        // this.ctx.beginPath();
        // this.ctx.strokeStyle = "blue";
        // this.ctx.strokeWidth = 50;
        // this.ctx.moveTo(20, 20);
        // this.ctx.lineTo(200, 20);
        // this.ctx.stroke();

        // First path
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'blue';
        this.ctx.moveTo(20, 20);
        this.ctx.lineTo(200, 20);
        this.ctx.stroke();

        // Second path
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'green';
        this.ctx.moveTo(20, 20);
        this.ctx.lineTo(120, 120);
        this.ctx.stroke();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2)
    }
}

window.onload = () =>{
    new App();
}