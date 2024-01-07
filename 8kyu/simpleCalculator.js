// Simple calculator

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"

// Good luck!

// My answer:

const calculator = (a, b, sign) => {
  if (typeof a == "number" && typeof b == "number") {
    switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
  }
  return "unknown value";
};

// My reasoning:
// 1. First, I'll check if a and b are numbers with typeof. If they are not, I'll return "unknown value".
// 2. If they are numbers, now I have to check which of the four possible mathematical signs is the argument sign. For each case, I'll perform the corresponding calculation.

// Kata from https://www.codewars.com/kata/5810085c533d69f4980001cf/javascript
