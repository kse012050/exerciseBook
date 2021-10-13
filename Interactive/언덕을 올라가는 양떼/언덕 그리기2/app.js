class App{
    constructor(){
        // console.log('첫 시작');

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.resize();
    }

    resize(){
        // console.log('resize');

        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    }
}

// window.onload = function(){
//     new App();
// }

window.onload = () =>{
    new App();
}

