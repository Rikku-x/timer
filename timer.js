let timer;
let timerCanceling = false;

function startTimer(duration, display) {
    timer = duration;
    let minutes, seconds;

    return setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `${minutes} : ${seconds}`;

        // console.log(timer, seconds)
        theEnd()

        if (--timer < 0) {
            timer = duration;
        }

    }, 1000);

}
let intervalID

window.onload = function () {
    console.log("onload")
    let threeMinutes = 60 * 3;
    let display = document.querySelector('#time');
    intervalID = startTimer(threeMinutes, display);
};

window.onmousemove = function () {
    clearInterval(intervalID);

    let text = document.getElementById("text");
    text.innerText = "one more time!";

    if (!timerCanceling) {
        timerCanceling = true;
        setTimeout(function () {
            let threeMinutes = 60 * 3 - 1;
            let display = document.querySelector('#time');

            text.innerText = "keep calm for";
            display.textContent = "03 : 00"

            intervalID = startTimer(threeMinutes, display)
            timerCanceling = false;
        }, 3000);
    }



}


window.onkeypress = window.onmousemove

function theEnd() {
    console.log("theEnd")
    if (timer == 0) {
        clearInterval(intervalID)
        let display = document.querySelector('#time');
        let text = document.getElementById("text");
        text.innerText = "good job!";
        display.textContent = "00 : 00";
    }
}