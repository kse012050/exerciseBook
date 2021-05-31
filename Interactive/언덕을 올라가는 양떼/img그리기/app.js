class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        // window.addEventListener('resize',this.resize.bind(this))
        this.resize();

        // requestAnimationFrame(this.animate.bind(this))
    }

    resize(){
        this.stageWidht = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        console.log(document.body.clientWidth);

        this.canvas.width = this.stageWidht;
        this.canvas.height = this.stageHeight;
    }

    animate(){
        
    }
}

// window.onload = function(){
//     new App();
// }

window.onload = () => {
    new App();
}