const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-operator');
const inputDisplay = document.querySelector('.input');
const resultDisplay = document.querySelector('.result');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  if (operator === '+') {
    add(a, b);
  } else if (operator === '-') {
    subtract(a, b);
  } else if (operator === '*') {
    multiply(a, b);
  } else {
    divide(a, b);
  }
};

numberButtons.forEach(function (button) {
  button.addEventListener('click', () => {
    inputDisplay.textContent += button.textContent;
  });
});
