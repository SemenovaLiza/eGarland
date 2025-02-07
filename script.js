const autoModeSequence = [
    "red",
    "yellow",
    "green",
    "yellow",
    "red",
    "yellow",
    "green",
    "red",
    "red",
    "green",
    "yellow",
    "red",
    "green",
    "yellow",
    "red",
    "yellow",
    "green",
    "yellow",
    "red",
    "yellow",
    "green",
    "red",
    "green",
    "yellow",
    "red",
    "green",
    "yellow",
    "red",
    "yellow",
    "green",
    "yellow",
    "red",
    "red",
    "yellow",
    "green",
    "red",
    "yellow",
    "green",
    "red",
    "yellow",
    "green",
    "yellow",
    "red",
    "yellow",
    "green",
    "yellow",
    "red",
    "yellow",
    "green",
];
let interval;

var redLight = document.getElementById("red");
var yellowLight = document.getElementById("yellow");
var greenLight = document.getElementById("green");


document.getElementById("auto-btn").onclick = startAutoMode;
document.getElementById("random-btn").onclick = startRandomMode;
document.getElementById("stop-btn").onclick = stopRandom;
document.getElementById("red-btn").onclick = function() { turnOnColor("red") };
document.getElementById("yellow-btn").onclick = function() { turnOnColor("yellow") };
document.getElementById("green-btn").onclick = function() { turnOnColor("green") };

function turnOffColors() {
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.remove("active");
}

function turnOnColor(button) {
    stopRandom();
    if (button == "red") {
        redLight.classList.add("active");
    } else if (button == "yellow") {
        yellowLight.classList.add("active");
    } else {
        greenLight.classList.add("active");
    }
}

function startAutoMode() {
    clearInterval(interval);
    let i = 0;
    interval = setInterval(() => {
        turnOffColors();
        let currentColor = autoModeSequence[i];
        document.getElementById(currentColor).classList.add("active");
        i++;
    }, 1000);
}

function startRandomMode() {
    clearInterval(interval);
    const colors = ["red", "yellow", "green"];
    interval = setInterval(() => {
        turnOffColors();
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById(randomColor).classList.add("active");
    }, 1000);
}

function stopRandom() {
    clearInterval(interval);
    turnOffColors();
}