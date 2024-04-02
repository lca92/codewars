// All Star Code Challenge #18

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// My answer:

const strCount = (str, letter) =>
  str.split("").filter((character) => character === letter).length;

// My reasoning:
// 1. We use split("") to create an array with the string's letters.
// 2. Then, we use filter() to make another array containing only the letter given by the input.
// 3. Now, we use length to check how many elements there are in this array.
// 4. Since the last array has the given letter repeated however many times it appears in the given string, the length property is already our answer.

// Kata from https://www.codewars.com/kata/5865918c6b569962950002a1/javascript
