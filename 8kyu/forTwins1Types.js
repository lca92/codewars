// For Twins: 1. Types

// Prolog:
// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

// Task:
// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

// Examples:
// 42, "number"   --> true
// "42", "number" --> false

// My answer:

const typeValidation = (variable, type) => typeof variable == type;

// My reasoning:

// Kata from https://www.codewars.com/kata/59c1302ecb7fb48757000013/javascript
