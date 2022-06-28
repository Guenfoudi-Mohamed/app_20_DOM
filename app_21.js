// app_21


function setRnadomShape(){
    const shape = document.createElement('div');
    shape.setAttribute('class','shape');
    let stockWidth = 0;
    let stockHeight = 0;
    let stockLeft = 0;
    let stockAnimationDuration = 0;
    console.log(shape);
    // let stockAnimationDelay;
    function width(){
        stockWidth = Math.ceil(Math.random() * 3);
        if(stockWidth >= 1 && stockWidth <=3){
            shape.style.setProperty('width',`${stockWidth}px`);
        }
        else{
            width();
        }
    }
    width();
    function height(){
        stockHeight = Math.ceil(Math.random() * 90);
        if(stockHeight >= 20 && stockHeight <= 90){
            shape.style.setProperty('height',`${stockHeight}px`);
            shape.style.setProperty('--height',`${stockHeight}px`);
        }
        else{
            height();
        }
    }
    height();
    function left(){
        stockLeft = Math.ceil(Math.random() * 95);
        if(stockLeft >= 1 && stockLeft <= 95){
            shape.style.setProperty('left',`${stockLeft}vw`);
        }
        else{
            left();
        }
    }
    left();
    function animationDuration(){
        stockAnimationDuration = Math.ceil(Math.random() * 15);
        if(stockAnimationDuration >= 9 && stockAnimationDuration <= 15){
            shape.style.setProperty('--animationduration',`${stockAnimationDuration}s`);
        }
        else{
            animationDuration()
        }
    }
    animationDuration();
    function animationDelay(){
        stockAnimationDelay = Math.floor(Math.random() * 20);
        if(stockAnimationDelay >= 4 && stockAnimationDelay <= 20){
            shape.style.setProperty('--animationdelay',`${stockAnimationDelay}s`);
        }
        else{
            animationDelay();
        }
    }
    animationDelay();
    document.body.appendChild(shape);
}
let times = 50;
while(times>0){
    times--;
    setRnadomShape();

};
