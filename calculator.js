const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator; // This wil overwrite the displayValue if the current value is 0, if its not 0 then it appends to the current value

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit; // If "waitingForSecondOperand" is set to true, the "displayValue" is overwritten with the digit that was clicked
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0.";
    calculator.waitingForSecondOperand = false;
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  // When an operator is pressed, the "displayValue" will convert to a float number and store it in firstOperand
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    // Checks if operator already exists and if "waitingForSecondOperand" is true
    // If that is true, the operator is replaced with new operator and function exits
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    // This will check if "firstOperand" is null or is not a number
    calculator.firstOperand = inputValue;
    // This updates the "firstOperand"
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

function updateDisplay() {
  const display = document.querySelector(".input-screen");
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  // This will access the clicked element. This is the same as saying 'const target = event.target'
  const { value } = target;

  if (!target.matches("button")) {
    // This above will check if the clicked element is a button. If its not, it will exit the function
    return;
  }

  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
      handleOperator(value);
      break;
    case ".":
      inputDecimal(value);
      break;
    case "all-clear":
      resetCalculator();
      break;
    default:
      if (Number.isInteger(parseFloat(value))) {
        inputDigit(value);
      }
  }
  updateDisplay();
  // updateDisplay is called again so the new "displayValue" contents will show on the calculator screen
});
