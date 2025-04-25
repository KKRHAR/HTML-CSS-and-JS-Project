const progressBar = document.getElementById("circular-progress");
const progressValue = document.getElementById("progress-value");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

let progress;
let speed = 20;

function startProgress() {
let progressStartValue = 0;
let progressEndvalue = 100;
let color = "#f03a02";

clearInterval(progress);
startBtn.disabled = true;

progress = setInterval(()=>{
    progressValue.textContent = `${progressStartValue}%`;

    if(progressStartValue < 20)
        color = "red";
    else if(progressStartValue < 40)
        color = "aqua";
    else if(progressStartValue < 60)
        color = "indigo";
    else if(progressStartValue < 80) 
        color = "blue";
    else
        color = "teal";

    progressBar.style.background = `conic-gradient(${color} ${progressStartValue * 3.6}deg, #ededed 0deg)`;
    progressValue.style.color = color;

    if (progressStartValue >= progressEndvalue){
        clearInterval(progress);
        startBtn.disabled = false;
    } 
    progressStartValue++;
  }, speed);
}

function resetProgress(){
  clearInterval(progress);
  progressValue.textContent = "0%";
  progressBar.style.background = `conic-gradient(#f03a02 0deg, #ededed 0deg)`;
  progressValue.style.color = "#f03a02";
  startBtn.disabled = false;
}

startBtn.addEventListener("click", startProgress);
resetBtn.addEventListener("click", resetProgress);