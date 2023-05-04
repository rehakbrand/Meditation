const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const timeDisplay = document.getElementById('time-display');
const instruction = document.getElementById('instruction');

let timer;
let minutes = 0;
let seconds = 0;
let isPaused = false;

function startTimer() {
	if (!isPaused) {
		timer = setInterval(incrementTime, 1000);
	}
}

function pauseTimer() {
	isPaused = true;
	clearInterval(timer);
}

function stopTimer() {
	clearInterval(timer);
	minutes = 0;
	seconds = 0;
	timeDisplay.innerHTML = '00:00';
	isPaused = false;
}

function incrementTime() {
	if (seconds < 59) {
		seconds++;
	} else {
		seconds = 0;
		minutes++;
	}

	let minuteString = minutes < 10 ? `0${minutes}` : minutes;
	let secondString = seconds < 10 ? `0${seconds}` : seconds;

	timeDisplay.innerHTML = `${minuteString}:${secondString}`;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);


let playBtn = document.getElementsByClassName("play");

let text = document.querySelector("p");

const audio = new Audio("./rainsound.mp3");

playBtn[0].addEventListener("click", (e) => {
  audio.play();
});
