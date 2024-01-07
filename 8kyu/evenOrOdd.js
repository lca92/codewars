// Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My answer:

const evenOrOdd = (number) => (number % 2 == 0 ? "Even" : "Odd");

// My reasoning:
// 1. Even numbers are always divisible by 2, so I can check if a number is divisible by 2 with the remainder operator. The remainder (%) operator returns the remainder left over when one operand is divided by a second operand.
// 2. Now I use a conditional ternary operator to ask "Is the number divisible by two?".
// 3. If the answer is "yes", I return "Even".
// 4. If the answer is "no", it has to be an odd number, so I return "Odd".

// Kata from https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
