var hours = minutes = seconds = miliSeconds = 0;
var miliSecondsBox = document.getElementById("miliSeconds");
var secondsBox = document.getElementById("seconds");
var minutesBox = document.getElementById("minutes");
var hoursBox = document.getElementById("hours");
var interval;
var startButton = document.getElementById("startButton");

function timer() {
    miliSeconds++;
    miliSecondsBox.innerHTML = miliSeconds;

    if (miliSeconds >= 100) {
        seconds++;
        secondsBox.innerHTML = seconds;
        miliSeconds = 0;

    } else if (seconds >= 60) {
        minutes++;
        minutesBox.innerHTML = minutes;
        seconds = 0;
    } else if (minutes >= 60) {
        hours++;
        hoursBox.innerHTML = hours;
        minutes = 0;
    }


}


function start() {

    startButton.disabled = true;    
    interval = setInterval(timer, 10);

}

function stop() {
    startButton.disabled = false;   
    clearInterval(interval)
}

function reset() {
    startButton.disabled = false;   
    miliSecondsBox.innerHTML = 0;
    secondsBox.innerHTML = 0;
    minutesBox.innerHTML = 0;
    hoursBox.innerHTML = 0;
    clearInterval(interval)
}