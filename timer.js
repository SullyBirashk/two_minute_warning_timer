const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const timerDiv = document.getElementById('timer');
const alertSound = document.getElementById('alert-sound');

let timerInterval;
let totalSeconds = 0;

function startTimer() {
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);

  if (isNaN(minutes) || isNaN(seconds)) {
    return alert('Please enter valid input');
  }

  totalSeconds = minutes * 60 + seconds;

  if (totalSeconds < 1) {
    return alert('Please enter valid input');
  }

  startBtn.disabled = true;
  minutesInput.disabled = true;
  secondsInput.disabled = true;

  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  timerDiv.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (totalSeconds === 120) {
    alertSound.play();
  }

  totalSeconds--;

  if (totalSeconds < 0) {
    clearInterval(timerInterval);
    timerDiv.textContent = '00:00';
    startBtn.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerDiv.textContent = '00:00';
  startBtn.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
