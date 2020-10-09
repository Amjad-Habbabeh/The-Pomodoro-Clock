/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

//  variables:
const up = document.getElementById('up');
const down = document.getElementById('down');
const play = document.getElementById('play');
const i = document.getElementById('icon');
const iP = document.getElementById('icon-p');
const pause = document.getElementById('pause');
let playing = false;
let pausing = false;
const minutes = document.getElementById('minutes');
let min = minutes.innerText;
let sec = 0;
let timer = document.getElementById('timer');
timer.innerText = minutes.innerText + ':' + '0' + sec;

// function display minutes and seconds in the timer"

function showTime() {
  if (sec < 10) {
    timer.innerText = min + ':' + '0' + sec;
  } else {
    timer.innerText = min + ':' + sec;
  }
}
// event lestener:

// up button:

up.addEventListener('click', () => {
  if (playing === false && pausing === false) {
    sec = 0;
    min = parseFloat(min) + 1;
    minutes.innerText = min;

    showTime();
  }
});

// down button:

down.addEventListener('click', () => {
  if (playing === false && pausing === false) {
    sec = 0;

    if (parseFloat(minutes.innerText) - 1 > 0) {
      min = parseFloat(min) - 1;
      minutes.innerText = min;
      showTime();
    } else if (parseFloat(minutes.innerText) - 1 <= 0) {
      min = 0;
      minutes.innerText = 0;
      timer.innerText = 'Time is up!';
    }
  }
});

// play button

play.addEventListener('click', () => {
  if (min != 0) {
    if (playing === false && pausing === false) {
      sec = 59;
      interval();
      timer.innerText = parseFloat(min) - 1 + ':' + sec;
      playing = true;
      i.className = 'fas fa-stop';
    } else {
      playing = false;
      min = minutes.innerText;
      sec = 0;
      timer.innerText = minutes.innerText + ':' + '0' + sec;
      i.className = 'fas fa-play';
      pausing = false;
      iP.style.color = '#fff';
    }
  }
});

// pause button
pause.addEventListener('click', () => {
  if (pausing === false && playing === true) {
    pausing = true;
    playing = false;
    iP.style.color = '#8faaad';
  } else if (pausing === true) {
    pausing = false;
    playing = true;
    iP.style.color = '#fff';
  }
});

function interval() {
  let start = setInterval(() => {
    if (parseFloat(min) !== 0) {
      if (playing === true && parseFloat(min) > 0) {
        if (sec > 10) {
          sec = sec - 1;
          timer.innerText = parseFloat(min) - 1 + ':' + sec;
        } else if (sec <= 10 && sec >= 1) {
          sec = sec - 1;
          timer.innerText = parseFloat(min) - 1 + ':0' + sec;
        } else if (parseFloat(min) !== 1) {
          sec = 59;
          min = parseFloat(min) - 1;
          timer.innerText = parseFloat(min) - 1 + ':' + sec;
        } else {
          sec = 0;
          clearInterval(start);
          timer.innerText = 'Time is up!';
        }
      } else if (playing === false && pausing === true) {
        pausing = true;
      } else {
        clearInterval(start);
        showTime();
      }
    } else {
      clearInterval(start);
      timer.innerText = 'Time is up!';
    }
  }, 1000);
}
