const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-operator');
const resultButton = document.querySelector('.btn-result');
const clearButton = document.querySelector('.btn-clear');
const inputDisplay = document.querySelector('.input');
const resultDisplay = document.querySelector('.result');

let firstInput = null;
let secondInput = null;
let operatorInput = '';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === 'x') {
    return multiply(a, b);
  } else {
    return divide(a, b);
  }
};

numberButtons.forEach(function (button) {
  button.addEventListener('click', () => {
    inputDisplay.textContent += button.textContent;
    !operatorInput
      ? (firstInput = Number(inputDisplay.textContent))
      : (secondInput = Number(inputDisplay.textContent));
  });
});

operatorButtons.forEach(function (button) {
  button.addEventListener('click', () => {
    inputDisplay.textContent += button.textContent;
    operatorInput = button.textContent;
    inputDisplay.textContent = '';
  });
});

resultButton.addEventListener('click', () => {
  resultDisplay.textContent = operate(operatorInput, firstInput, secondInput);
});

clearButton.addEventListener('click', () => {
  inputDisplay.textContent = '';
  resultDisplay.textContent = 0;
});
