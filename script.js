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
