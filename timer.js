let timerCanceling = false
let intervalID, timer

let startTimer = (duration, display) => {
    timer = duration
    let minutes, seconds
    return setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds
        display.textContent = `${minutes} : ${seconds}`
        zeroTimer()
        timer--
    }, 1000)
}
let zeroTimer = () => {
    if (timer == 0) {
        clearInterval(intervalID)
        let display = document.querySelector('#time')
        let text = document.querySelector("#text")
        text.innerText = "good job!"
        display.textContent = "00 : 00"
    }
}

window.onload = () => {
    let threeMinutes = 60 * 3
    let display = document.querySelector('#time')
    intervalID = startTimer(threeMinutes, display)
}
window.onmousemove = () => {
    clearInterval(intervalID)
    let text = document.querySelector("#text")
    text.innerText = "one more time!"
    if (!timerCanceling) {
        timerCanceling = true
        setTimeout(function () {
            let threeMinutes = 60 * 3 - 1
            let display = document.querySelector('#time')
            text.innerText = "keep calm for"
            display.textContent = "03 : 00"
            intervalID = startTimer(threeMinutes, display)
            timerCanceling = false
        }, 3000)
    }
}
window.onkeypress = window.onmousedown = window.onmousemove