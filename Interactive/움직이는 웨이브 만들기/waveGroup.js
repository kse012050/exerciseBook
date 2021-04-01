import { Wave } from './wave.js';

export class WaveGroup{
    constructor(){
        this.totleWaves = 3;
        this.Wave = new Wave();
    }

    resize(stageWidth,stageHeight){

    }

    draw(ctx){
        this.Wave.draw(ctx);
    }

}