// SCORE HOME
let count = 0
let scoreHome = document.getElementById("score-home")
scoreHome.textContent = count

function scoreHomeOne() {
    count += 1
    scoreHome.textContent = count
}

function scoreHomeTwo() {
    count += 2
    scoreHome.textContent = count
}

function scoreHomeThree() {
    count += 3
    scoreHome.textContent = count
}

// SCORE GUESTS
let countGuest = 0
let scoreGuest = document.getElementById("score-guest")
scoreGuest.textContent = countGuest

function scoreGuestOne() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function scoreGuestTwo() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function scoreGuestThree() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}

// FOULS HOME
let countFlsHome = 0
let foulsHome = document.getElementById("fouls-home")

foulsHome.textContent = countFlsHome

function flsHome() {
    countFlsHome += 1
    foulsHome.textContent = countFlsHome
}

// FOUL GUESTS
let countFlsGuests = 0
let foulsGuests = document.getElementById("fouls-guest")

foulsGuests.textContent = countFlsGuests

function flsGuests() {
    countFlsGuests += 1
    foulsGuests.textContent = countFlsGuests
}

// TIMER
let timerInterval = null;
let secondsElapsed = 0;

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Start TIMER
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        secondsElapsed++;
        document.getElementById('timer').textContent = formatTime(secondsElapsed);
    }, 1000);
    document.getElementById('new-game').hidden = true;
    document.getElementById('pause').hidden = false;
    document.getElementById('resume').hidden = true;
    document.getElementById('reset').hidden = true;
}

// Pause TIMER
function pauseTimer() {
    clearInterval(timerInterval);
    document.getElementById('pause').hidden = true;
    document.getElementById('resume').hidden = false;
    document.getElementById('reset').hidden = false;
}

// Resume TIMER
function resumeTimer() {
    startTimer();
    document.getElementById('resume').hidden = true;
    document.getElementById('reset').hidden = true;
    document.getElementById('pause').hidden = false; 
}

// Reset TIMER
function resetTimer() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    document.getElementById('timer').textContent = '00:00';
    document.getElementById('new-game').hidden = false;
    document.getElementById('pause').hidden = true;
    document.getElementById('resume').hidden = true;
    document.getElementById('reset').hidden = true;
}