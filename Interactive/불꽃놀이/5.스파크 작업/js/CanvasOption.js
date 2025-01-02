export default class CanvasOption{
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        this.dpr = window.devicepixelRadio || 1;
        // this.dpr = 2;
        this.fps = 60;
        this.interval = 1000 / this.fps;
    }
}