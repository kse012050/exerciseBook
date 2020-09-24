(() => {

    let yOffset = 0;    // window.pageYOffset 대신 쓸 변수 -> 현재 스크롤 위치 
    let prevScrollHeight = 0;
    let currentScene = 0;
    let enterNewScene = false;

    const sceneInfo = [
        {
            type: 'sticky',
            heightNum:5, 
            scrollHeight : 0,
            objs:{
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            type: 'normal',
            heightNum:0, 
            scrollHeight : 0,
            objs:{
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            type: 'sticky',
            heightNum:5, 
            scrollHeight : 0,
            objs:{
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            type: 'sticky',
            heightNum:5, 
            scrollHeight : 0,
            objs:{
                container: document.querySelector('#scroll-section-3')
            }
        }

    ];

    let totalScrollHeight
    function setLayout(){
        // 각 스크롤 섹션의 높이 세팅
        for(let i = 0; i < sceneInfo.length; i++){
            if(sceneInfo[i].type === 'sticky'){
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            }else if(sceneInfo[i].type === 'normal'){
                sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
            };
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        };

        yOffset = window.pageYOffset;
        totalScrollHeight = 0;
        for(let i = 0; i < sceneInfo.length; i++){
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight >= yOffset){
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);

    };

    function scrollLoop(){
        prevScrollHeight = 0;
        for(var i = 0; i < currentScene; i++){
            prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
        }
        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene++;
        }
        if(yOffset < prevScrollHeight){
            if(currentScene === 0) return;
            currentScene--;
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    window.addEventListener('scroll',() => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });

    // 로드 되면
    window.addEventListener('load',setLayout);
    // 브라우저의 사이즈가 변경되면
    window.addEventListener('resize',setLayout);
})();