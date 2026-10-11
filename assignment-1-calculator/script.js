// Assignment 1: JavaScript Calculator using Functions

// 1. Basic Arithmetic Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by 0';
  }
  return a / b;
}

// 2. Dispatcher function using Switch Statement
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid Operation';
  }
}

// 3. Calculator State & UI Logic
let firstNumber = null;
let currentOperator = null;
let waitingForSecondNumber = false;
const display = document.getElementById('display');

function appendNumber(num) {
  if (waitingForSecondNumber) {
    display.value = num;
    waitingForSecondNumber = false;
  } else {
    if (display.value === '0' && num !== '.') {
      display.value = num;
    } else {
      if (num === '.' && display.value.includes('.')) return;
      display.value += num;
    }
  }
}

function setOperator(op) {
  const currentVal = parseFloat(display.value);

  if (firstNumber === null) {
    firstNumber = currentVal;
  } else if (currentOperator) {
    const result = calculate(firstNumber, currentVal, currentOperator);
    display.value = result;
    firstNumber = result;
  }

  currentOperator = op;
  waitingForSecondNumber = true;
}

function handleCalculate() {
  if (firstNumber === null || currentOperator === null) return;

  const secondNumber = parseFloat(display.value);
  const result = calculate(firstNumber, secondNumber, currentOperator);

  display.value = result;
  firstNumber = null;
  currentOperator = null;
  waitingForSecondNumber = true;
}

function clearDisplay() {
  display.value = '0';
  firstNumber = null;
  currentOperator = null;
  waitingForSecondNumber = false;
}

function deleteLast() {
  if (display.value.length === 1 || display.value === '0') {
    display.value = '0';
  } else {
    display.value = display.value.slice(0, -1);
  }
}
