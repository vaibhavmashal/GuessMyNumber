"use strict";
//console.log(document.querySelector(".meassage").textContent);
// document.querySelector(".message").textContent = "Correct Number !!!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let score = 20;
let sectrateNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number is Enterd !!!";
    score = score - 1;
  } else if (guess === sectrateNumber) {
    document.querySelector(".message").textContent = "Correct Number !!!";
    document.querySelector(".number1").textContent = sectrateNumber;
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess > sectrateNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Number is to High !!!";
      score = score - 2;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "red";
    } else {
      document.querySelector(".message").textContent = "You Lost !!!";
    }
  } else if (guess < sectrateNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is to Low !!!!";
      score = score - 2;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "red";
    } else {
      document.querySelector(".message").textContent = "Yuo Lost !!!";
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  sectrateNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing ... ";
  document.querySelector("body").style.backgroundColor = "gray";

  document.querySelector(".score").textContent = score;

  document.querySelector(".number1").textContent = "?";
  document.querySelector(".guess").value = "";
});
