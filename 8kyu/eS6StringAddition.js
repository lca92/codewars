// ES6 string addition

// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.

// My answer:

const joinStrings = (string1, string2) => `${string1} ${string2}`;

// My reasoning:
// 1. ES6 introduced template literals to improve the readability of our code. It allows string interpolation.
// 2. Everything between the backticks will turn into a string.
// 3. We can use placeholders (${expression}) to perform substitutions for embedded expressions.

// Kata from https://www.codewars.com/kata/582e4c3406e37fcc770001ad/javascript
