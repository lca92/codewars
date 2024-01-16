// ASCII Total

// DESCRIPTION:
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

// My answer:

const uniTotal = (string) =>
  string
    .split("")
    .map((character) => character.charCodeAt())
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// My reasoning:
// 1. I use split("") to turn the string into an array with the string's characters.
// 2. I do that because I want to use map(), but map() is an array method.
// 3. I use map() to iterate through the array and return a new array with modified elements.
// 4. For each element from the original array i.e. the string's characters, I check their ASCII code with charCodeAt().
// 5. Now I sum all values with reduce(), starting at zero.

// Kata from https://www.codewars.com/kata/572b6b2772a38bc1e700007a/javascript
