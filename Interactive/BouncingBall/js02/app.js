class App{
    constructor(){
        // this.canvas = document.querySelector('canvas');
        // this.ctx = this.canvas.getContext('2d');
        this.canvas01 = document.getElementById('canvas');
        this.ctx = this.canvas01.getContext('2d');

        window.addEventListener('resize', this.resize.bind(this));

        

        this.canvas01.width = 1920;
        this.canvas01.height = 937;

        
        this.ctx.fillStyle = "#fdd700";
        this.ctx.arc(50,50,20,0, 2 * Math.PI);
        this.ctx.fill();
    }

    resize(){
      /*   console.log('11');
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas01.width = this.stageWidth;
        this.canvas01.height = this.stageHeight; */

    }
}


window.onload = function(){
    new App();
}