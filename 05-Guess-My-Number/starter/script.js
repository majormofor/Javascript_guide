'use strict';

const messaging = document.querySelector('.message');
const secretBox = document.querySelector('.number');
let score = 20;
let highscore = 0;
let scored = document.querySelector('.score');
let body = document.querySelector('body');
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
const reset = document.querySelector('.again');
const highscored = document.querySelector('.highscore');

function lose() {
  messaging.textContent = 'You lost the Game!';
  score = 0;
  body.style.backgroundColor = 'red';
  scored.textContent = score;
  secretBox.textContent = 'X';
}

// listening for an event
//  First select the element

const check = document.querySelector('.check');

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    messaging.textContent = 'No!! Choose a NUMBER';
    secretBox.textContent = '';

    // when player wins
  } else if (guess === SecretNumber) {
    secretBox.textContent = SecretNumber;
    messaging.textContent = '😍 Hurray!!! You guessed right. ';
    body.style.backgroundColor = '#60b347';
    secretBox.style.width = '30rem';
    if (score > highscore) {
      highscored.textContent = score;
    }

    // when guess is too high
  } else if (guess > SecretNumber) {
    if (score > 1) {
      score--;
      scored.textContent = score;
      messaging.textContent = '😒Too High';
    } else {
      lose();
    }

    //  when guess is too low
  } else if (guess < SecretNumber) {
    if (score > 1) {
      score--;
      scored.textContent = score;
      messaging.textContent = '↘️Too low';
    } else {
      lose();
    }
  }
});

reset.addEventListener('click', function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  secretBox.textContent = '?';
  messaging.textContent = 'start guessing...';
  scored.textContent = score;
  body.style.backgroundColor = 'black';
  document.querySelector('.guess').value = '';
});
