class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.resize();
    }

    resize(){
        this.stageWidht = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        console.log(document.body.clientWidth);

        this.canvas.width = this.stageWidht;
        this.canvas.height = this.stageHeight;
    }
}

// window.onload = function(){
//     new App();
// }

window.onload = () => {
    new App();
}