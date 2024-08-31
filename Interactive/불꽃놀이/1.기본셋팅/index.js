const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function init(){
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const dpr = window.devicePixelRatio;
    canvas.width = windowWidth * dpr;
    canvas.height = windowHeight * dpr;
    ctx.scale(dpr, dpr)
}

function renter() {
    ctx.fillStyle = 'red';
    ctx.arc(10, 10, 10, 0, Math.PI * 2);
    ctx.fill();

}

window.addEventListener('load', ()=> {
    init();
    renter();
})