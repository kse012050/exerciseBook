import { Wave } from './wave.js';

export class WaveGroup{
    constructor(){
        this.totalPoints = 3;
        this.waves = [];
        for(let i = 0; i < this.totalPoints; i++){
            const wave = new Wave(i , this.totalPoints);
            this.waves[i] = wave;
            
        }
    }

    resize(stageWidth,stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        for(let i = 0; i < this.totalPoints; i++){
            this.waves[i].resize(stageWidth,stageHeight);
        }
    }

    draw(ctx){
        // this.Wave.draw(ctx);
        for(let i = 0; i < this.totalPoints; i++){
            this.waves[i].draw(ctx);
            
        }
    }

}