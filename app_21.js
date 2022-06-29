// app_21

// FUNCTION FOR ANIMATION
function setRnadomShape(){
    const shape = document.createElement('div');
    shape.setAttribute('class','shape');
    let stockWidth = 0;
    let stockHeight = 0;
    let stockLeft = 0;
    let stockAnimationDuration = 0;
    // console.log(shape);
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
        stockLeft = Math.ceil(Math.random() * 98);
        if(stockLeft >= 2 && stockLeft <= 98){
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
    document.querySelector('body #shapes').appendChild(shape);
}
// RUN THE FUNCTION 
let times = 75;
while(times>0){
    times--;
    setRnadomShape();

};

//  === 

const inpPerspective = document.querySelector('body .container .inputControles > .inpPerspective');
const inpRotateX = document.querySelector('body .container .inputControles > .inpRotateX');
const inpRotateY = document.querySelector('body .container .inputControles > .inpRotateY');
const inpRotateZ = document.querySelector('body .container .inputControles > .inpRotateZ');
const box = document.querySelector('body .container .boxTest .box');
inpPerspective.oninput = function(){
    box.parentElement.style.setProperty('perspective',`${inpPerspective.value}px`);
    document.querySelector('body .container .inputControles .lblPerspective span').textContent = `${inpPerspective.value}px`;
};
inpRotateX.oninput = function(){
    box.style.setProperty('transform',`rotateX(${inpRotateX.value}deg) rotateY(${inpRotateY.value}deg) rotateZ(${inpRotateZ.value}deg)`);
    document.querySelector('body .container .inputControles .lblRotateX span').textContent = `${inpRotateX.value}deg`;

};
inpRotateY.oninput = function(){
    box.style.setProperty('transform',`rotateX(${inpRotateX.value}deg) rotateY(${inpRotateY.value}deg) rotateZ(${inpRotateZ.value}deg)`);
    document.querySelector('body .container .inputControles .lblRotateY span').textContent = `${inpRotateY.value}deg`;

};
inpRotateZ.oninput = function(){
    box.style.setProperty('transform',`rotateX(${inpRotateX.value}deg) rotateY(${inpRotateY.value}deg) rotateZ(${inpRotateZ.value}deg)`);
    document.querySelector('body .container .inputControles .lblRotateZ span').textContent = `${inpRotateZ.value}deg`;

};

const btnRest = document.querySelector('body .container .inputControles .btns .reset');
btnRest.onclick = function(){
    inpPerspective.value = 250;
    inpPerspective.oninput();
    inpRotateX.value = 0;
    inpRotateX.oninput();
    inpRotateY.value = 0;
    inpRotateY.oninput();
    inpRotateZ.value = 0;
    inpRotateZ.oninput();
}

const btncopy = document.querySelector('body .container .inputControles .btns .copy');
btncopy.onclick = function(){
    const copyCodeCss = `perspective: ${inpPerspective.value}px;transform: rotateX(${inpRotateX.value}deg) rotateY(${inpRotateY.value}deg) rotateZ(${inpRotateZ.value}deg);`;
    // copyCodeCss.select();
    navigator.clipboard.writeText(copyCodeCss); 
    // console.log(`perspective: ${inpPerspective.value}px;transform: rotateX(${inpRotateX.value}deg) rotateY(${inpRotateY.value}deg) rotateZ(${inpRotateZ.value}deg);`);
};

window.onload = function(){
    btnRest.click();
}
