const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const displayValue = [];
//add event listener on all keys that the calculator--key div handles
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;

    const display = calculator.querySelector(".calculator__display");
    if (!action) {
      displayValue.push("number key, ");
      display.textContent = displayValue;
      console.log(displayValue);
    }
    switch (action) {
      case "add":
        displayValue.push("+");
        display.textContent = displayValue;
        console.log("add");
        break;
      case "subtract":
        console.log("subract");
        break;
      case "multiply":
        console.log("multiply");
        break;
      case "divide":
        console.log("divide");
        break;
      case "decimal":
        console.log("decimal");
        break;
      case "clear":
        console.log("clear");
        break;
      case "calculate":
        console.log("equals");
        break;
    }
  }
});

//basic operations

const add = (x, y) => parseFloat(x + y);
const subtract = (x, y) => parseFloat(x - y);
const multiply = (x, y) => parseFloat(x * y);
const divide = (x, y) => {
  let answer = parseFloat(x / y);
  if (answer == Infinity) return "lol";
  else return answer;
};

//switch for operator calls operations
const operate = (operator, x, y) => {
  switch (operator) {
    case "+":
      return add(x, y);
      break;
    case "-":
      return subtract(x, y);
      break;
    case "*":
      return multiply(x, y);
      break;
    case "/":
      return divide(x, y);
    default:
      "Somthing went wrong";
  }
};

// const operate = (operator, x, y) => {
//   if (operator == "+") {
//     return add(x, y);
//   } else if (operator == "-") {
//     return subtract(x, y);
//   } else if (operator == "*") {
//     return multiply(x, y);
//   } else if (operator == "/") {
//     return divide(x, y);
//   } else "error";
// };
