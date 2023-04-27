"use strict";

// selecting elements
const increment = document.querySelector(".addition");
console.log(increment);
const decrement = document.querySelector(".subtraction");
const result = document.querySelector(".output");
const reset = document.querySelector(".reset-content");

// initially score is 0
let score = 0;

increment.addEventListener("click", function () {
  score += 1;
  console.log(score);
  result.textContent = score;
});
decrement.addEventListener("click", function () {
  score -= 1;
  result.textContent = score;
});

reset.addEventListener("click", function () {
  score = 0;
  result.textContent = score;
});
