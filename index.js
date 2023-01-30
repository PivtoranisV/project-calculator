const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-operator');
const resultButton = document.querySelector('.btn-result');
const clearButton = document.querySelector('.btn-clear');
const backspaceButton = document.querySelector('.btn-delete');
const decimalButton = document.querySelector('.btn-dot');
const signButton = document.querySelector('.btn-sign');
const firstInputDisplay = document.querySelector('.first-number');
const secondInputDisplay = document.querySelector('.second-number');
const operatorDisplay = document.querySelector('.operator');
const resultDisplay = document.querySelector('.result');

let firstInput = null;
let secondInput = null;
let operatorInput = '';
let previousResult = null;

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
    if (!operatorInput) {
      firstInputDisplay.textContent += button.textContent;
      firstInput = Number(firstInputDisplay.textContent);
    } else {
      secondInputDisplay.textContent += button.textContent;
      secondInput = Number(secondInputDisplay.textContent);
    }
  });
});

operatorButtons.forEach(function (button) {
  button.addEventListener('click', () => {
    if (firstInput && secondInput) {
      previousResult = operate(operatorInput, firstInput, secondInput);
      firstInput = previousResult;
      firstInputDisplay.textContent = previousResult;
      operatorInput = button.textContent;
      operatorDisplay.textContent = operatorInput;
      secondInput = null;
      secondInputDisplay.textContent = '';
    } else {
      operatorDisplay.textContent = button.textContent;
      operatorInput = button.textContent;
    }
  });
});

resultButton.addEventListener('click', () => {
  resultDisplay.textContent = operate(operatorInput, firstInput, secondInput);
});

clearButton.addEventListener('click', () => {
  firstInputDisplay.textContent = '';
  secondInputDisplay.textContent = '';
  operatorDisplay.textContent = '';
  resultDisplay.textContent = 0;
  operatorInput = '';
  previousResult = null;
  firstInput = null;
  secondInput = null;
});

backspaceButton.addEventListener('click', () => {
  if (!operatorInput) {
    firstInputDisplay.textContent = firstInputDisplay.textContent.slice(0, -1);
    firstInput = Number(firstInputDisplay.textContent);
  } else {
    secondInputDisplay.textContent = secondInputDisplay.textContent.slice(
      0,
      -1
    );
    secondInput = Number(secondInputDisplay.textContent);
  }
});

decimalButton.addEventListener('click', () => {
  if (!operatorInput && !firstInputDisplay.textContent.includes('.')) {
    firstInputDisplay.textContent += '.';
  } else if (operatorInput && !secondInputDisplay.textContent.includes('.')) {
    secondInputDisplay.textContent += '.';
  }
});

signButton.addEventListener('click', () => {
  if (!operatorInput) {
    firstInput = -firstInput;
    firstInputDisplay.textContent = firstInput;
  } else {
    secondInput = -secondInput;
    secondInputDisplay.textContent = secondInput;
  }
});

// keyboard support

document.addEventListener('keydown', (event) => {
  if (event.key >= '0' && event.key <= '9') {
    const numberButton = document.querySelector(
      `.btn-num[data-value='${event.key}']`
    );
    numberButton.click();
  } else if (
    event.key === '+' ||
    event.key === '-' ||
    event.key === '*' ||
    event.key === '/'
  ) {
    const operatorButton = document.querySelector(
      `.btn-operator[data-value='${event.key}']`
    );
    operatorButton.click();
  } else if (event.key === '=' || event.key === 'Enter') {
    resultButton.click();
  } else if (event.key === 'Escape') {
    clearButton.click();
  } else if (event.key === 'Backspace') {
    backspaceButton.click();
  } else if (event.key === '.') {
    decimalButton.click();
  }
});
