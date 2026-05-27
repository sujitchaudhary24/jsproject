const startBtn = document.querySelector("#btn1");
const stopBtn = document.querySelector("#btn2");
const resetBtn = document.querySelector("#btn3");
const countDown = document.querySelector(".count-down");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

startBtn.addEventListener("click", function(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
     }
});

stopBtn.addEventListener("click", function(){
    if(isRunning){
        clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isRunning = false;
        }
});

resetBtn.addEventListener("click", function(){
    clearInterval(timer);
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    countDown.textContent = "00:00:00:00";
});


function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60))%60;
    let sec = Math.floor(elapsedTime/1000%60);
    let milliSec = Math.floor(elapsedTime%1000/10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    milliSec = String(milliSec).padStart(2, "0");
    
    countDown.textContent = `${hours}:${minutes}:${sec}:${milliSec}`;
};