var interval;
var startTime = 1;
// var startTime = 30;
var display = document.querySelector('#time');

var btn = {
    start: document.getElementById('start'),
    pause: document.getElementById('pause'),
    stop: document.getElementById('stop'),
    resume: document.getElementById('resume'),
};

btn.start.addEventListener('click', start);

btn.stop.addEventListener('click', stop);

btn.pause.addEventListener('click', pause);

btn.resume.addEventListener('click', resume);

timerShow();

function count() {
    interval = setInterval(function () {
        timerShow();

        if (startTime >= 30) {
            startTime = 1;

            clearInterval(interval);
        }

        startTime++;
    }, 1000);
}

function countDown() {
    interval = setInterval(function () {
        timerShow();

        if (startTime <= 1) {
            startTime = 30;

            clearInterval(interval);
        }

        startTime--;
    }, 1000);
}

function start() {
    count();
    // countDown();
}

function stop() {
    startTime = 1;
    // startTime = 30;

    clearInterval(interval);

    timerShow();
}

function pause() {
    clearInterval(interval);
}

function resume() {
    count();
    // countDown();
}

function timerShow() {
	minutes = parseInt(startTime / 60, 10);
	seconds = parseInt(startTime % 60, 10);

	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	display.textContent = minutes + ":" + seconds;
}