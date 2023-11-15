let timerDisplay=document.querySelector('.timerDisplay');
let stopBtn=document.getElementById('stopBtn');
let resetBtn=document.getElementById('resetBtn');
let msec=0o0;
let sec=0o0;
let min=0o0;
let timerId= null;
startBtn.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer,10);
})
stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
});
resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML=`00:00:00`;
    msec=sec=min=00;
});
function startTimer(){
    msec++;
   if(msec==100){
    msec=0;
    sec++;
    if(sec==60){
        sec=0;
        min++;
    }
   }
   let msecString = msec < 10 ? `0${msec}`:msec;
   let secsString = sec < 10 ? `0${sec}`:sec;
   let minsString = min < 10 ? `0${min}`:min;
   timerDisplay.innerHTML =  `${msecString}:${secsString}:${minsString}`
}

