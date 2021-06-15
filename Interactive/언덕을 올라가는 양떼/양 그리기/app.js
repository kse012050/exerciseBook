class App {
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.resize();

        this.draw(this.ctx);
    }

    resize(){

        this.ctx.scale(2,2);
    }
    
    draw(ctx){
        ctx.fillStyle = 'red';
        this.ctx.fillRect(20,10,150,100);
    }
}

window.onload = function(){
    new App();
}