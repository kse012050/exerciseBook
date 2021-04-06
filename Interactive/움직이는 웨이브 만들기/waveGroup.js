import { Wave } from './wave.js';

export class WaveGroup{
    constructor(){
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = ['rgba(255,0,0,0.4)','rgba(255,255,0,0.4)','rgba(0,255,255,0.4)'];

        this.waves = [];
        // this.wave = new Wave(1,this.totalPoints);
        for(let i = 0; i < this.totalWaves; i++){
            const wave = new Wave(i , this.totalPoints, this.color[i]);
            this.waves[i] = wave;
            
        }
    }

    resize(stageWidth,stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        for(let i = 0; i < this.totalWaves; i++){
            this.waves[i].resize(stageWidth,stageHeight);
        }
        // this.wave.resize(stageWidth,stageHeight);
    }

    draw(ctx){
        // this.wave.draw(ctx);
        for(let i = 0; i < this.totalWaves; i++){
            this.waves[i].draw(ctx);
            
        }
    }

}