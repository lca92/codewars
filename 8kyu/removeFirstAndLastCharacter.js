// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// My answer:

const removeChar = (str) => str.slice(1, -1);

// My reasoning:
// 1. The slice() method of String values extracts a section of this string and returns it as a new string.
// 2. For the start, I choose index 1, because it will be the second character.
// 3. For the end, I choose index -1, because it will count backwards on the string and exclude the last character.

// Kata from https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/javascript
