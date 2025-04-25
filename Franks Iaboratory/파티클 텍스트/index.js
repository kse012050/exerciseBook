import { randomBetween } from "./util.js";


const canvasText = document.getElementById('canvas-text');
const ctxText = canvasText.getContext('2d');
const canvasTextStyle = getComputedStyle(canvasText);
const canvasTextWidth = canvasTextStyle.width.replace('px', '');
const canvasTextHeight = canvasTextStyle.height.replace('px', '');
const dpr = window.devicePixelRatio || 1;
const interval = 1000 / 60;

canvasText.width = canvasTextWidth;
canvasText.height = canvasTextHeight;
canvasText.style.width = canvasTextWidth + 'px';
canvasText.style.height = canvasTextHeight + 'px';


const gradient = ctxText.createLinearGradient(0, 0, canvasTextWidth, canvasTextHeight);
gradient.addColorStop(0.35, 'white')
gradient.addColorStop(0.5, '#3EC3F7')
gradient.addColorStop(0.65, 'red')
ctxText.fillStyle = gradient;
// ctxText.font = '100px';
ctxText.font = "bold 250px 'Jua', system-ui";
ctxText.textAlign = 'center';
ctxText.textBaseline = 'middle';
ctxText.fillText('김성은', canvasTextWidth / 2, canvasTextHeight / 2)
const gap = 5;

const particles = [];
const pixels = ctxText.getImageData(0, 0, canvasTextWidth, canvasTextHeight).data;
ctxText.clearRect(0, 0, canvasTextWidth, canvasTextHeight);

class Particle{
    constructor(effect, x, y, colors){
        this.effect = effect;
        this.x = Math.random() * (canvasTextWidth * 2) - (canvasTextWidth / 2);
        this.y = Math.random() * (canvasTextHeight * 2) - (canvasTextHeight / 2);
        // this.opacity = randomBetween(-1, 0.3);
        this.opacity = 1;
        // this.opacityDelta = randomBetween(0.003, 0.006);
        // this.opacity = 1;
        this.colors = colors;
        this.originX = x;
        this.originY = y;
        this.size = gap;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
        this.friction = Math.random() * 0.6 + 0.15;
        // this.ease = Math.random() * 0.1 + 0.0005;
        this.ease = Math.random() * 0.1 + 0.02;
    }
    draw(){
        this.effect.fillStyle = `rgba(${this.colors.red}, ${this.colors.green}, ${this.colors.blue}, ${this.opacity})`;
        this.effect.fillRect(this.x, this.y, this.size, this.size);
        // this.effect.ellipse(this.x, this.y, this.size, this.size, Math.PI / 4, 0, Math.PI * 2);
        // this.effect.fill();
        // this.effect.fillStyle = `rgba(255, 255, 255, ${1 - this.opacity})`;
        // this.effect.fillRect(this.x + this.size / 2, this.y + this.size / 2, this.size / 2, this.size / 2);
        // this.effect.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // this.effect.fill();
        // this.effect.fillRect(this.originX, this.originY, this.size, this.size);
    }
    step01(){
        this.opacity += this.opacityDelta;
    }
    step02(){
        this.x += (this.originX - this.x) * this.ease;
        this.y += (this.originY - this.y) * this.ease;
    }
    update(){
        // this.dx = this.effect.mouse.x - this.x;
        // this.dy = this.effect.mouse.y - this.y;
        // // this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        // this.distance = this.dx * this.dx + this.dy * this.dy;
        // this.force = -this.effect.mouse.radius / this.distance;

        // if(this.distance < this.effect.mouse.radius){
        //     this.angle = Math.atan2(this.dy, this.dx);
        //     this.vx += this.force * Math.cos(this.angle);
        //     this.vy += this.force * Math.sin(this.angle);
        // }
        
        this.x += (this.originX - this.x) * this.ease;
        this.y += (this.originY - this.y) * this.ease;
    }
}

for(let y = 0; y < canvasTextHeight; y+=gap){
    for(let x = 0; x < canvasTextWidth; x+=gap){
        const index = (y * canvasTextWidth + x) * 4;
        const alpha = pixels[index + 3];
        if(alpha > 0){
            // console.log(alpha);
            // console.log(x);
            // console.log(y);
            
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            // const color = `rgba(${red}, ${green}, ${blue}, ${1})`;
            const colors = {
                red,
                green,
                blue,
            }
            const particle = new Particle(ctxText, x, y, colors);
            particles.push(particle);
        }
    }
}

function render(){
    let now, delta;
    let then = Date.now();
    let animateStep = 'step02';
    
    const frame = () => {
        requestAnimationFrame(frame);

        now = Date.now();
        delta = now - then;

        if(delta < interval) return;

        ctxText.clearRect(0, 0, canvasTextWidth, canvasTextHeight);
        // if(animateStep === 'step01' && particles.some((particle) => particle.opacity >= 1)){
        //     animateStep = 'step02';
        // }
        // if(animateStep === 'step02' && particles.some((particle) => particle.originX === particle.x)){
        //     animateStep = 'step03';
        // }
        particles.forEach((particle) => {
            particle.draw();
            particle[animateStep]();
            // particle.update();
            // if(particle.opacity < 1){
            //     particle.step01();
            // }else{
            //     particle.step02()
            // }

            // if(animateStep === 'step03'){
            //     console.log('?');
                
            // }
            
        })

        then = now - (delta % interval);
    }
    requestAnimationFrame(frame);
}


window.addEventListener('load', () => {
    render();
})

