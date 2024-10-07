export default class Canvas {
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        this.dpr = window.devicePixelRatio;
        this.fps = 6000;
        this.interval = 1000 / this.fps;

    }
}