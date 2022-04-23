var msec = 0;
var sec = 0;
var min = 0;
var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var msecHead = document.getElementById("msec");

startClock = () => {
    msec++;
    msecHead.innerHTML = msec;
    if (msec === 100) {
        msec = 0;
        sec++;
        secHead.innerHTML = sec;
    } else if (sec === 60) {
        sec = 0;
        min++;
        minHead.innerHTML = min;
    }
}

var set = 0;

start = () => {

    document.getElementById("start").disabled = true
    set = setInterval(startClock, 10);
    distbtn = document.getElementById("start");

}

resetClock = () => {

    minHead.innerHTML = 0;
    secHead.innerHTML = 0;
    msecHead.innerHTML = 0;
    pauseClock();
}

pauseClock = () => {
    document.getElementById("start").disabled = false

    clearInterval(set);
}


//mistakes
//var sec = document.getElementById("sec"); never save same


