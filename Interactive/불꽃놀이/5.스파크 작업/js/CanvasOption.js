export default class CanvasOptions{
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        this.dpr = window.devicePixelRatio || 1;
        this.fps = 1000;
        this.interval = this.fps / 6;
    }
}