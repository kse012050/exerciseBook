export class Img{
    constructor(){
        this.img = new Image();
        this.img.onload = () =>{
            this.loaded();
        }
        this.img.src = 'sheep.png';

    }

    draw(){
        
    }
}