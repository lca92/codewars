// Convert a string to an array

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// My answer:

const stringToArray = (string) => string.split(" ");

// My reasoning:
// 1. The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
// 2. If we use (" ") it turns the string into substrings separated by a space.
// 3. In plain English, it divides a sentence into words.

// Kata from https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/javascript
