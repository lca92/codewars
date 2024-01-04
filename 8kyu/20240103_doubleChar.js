// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// My answer:

const doubleChar = (str) =>
  str
    .split("")
    .map((character) => character + character)
    .join("");

// My reasoning:
// 1. I want to use map() to iterate through the string, but map() is an Array method.
// 2. With a little bit of "jeitinho brasileiro", I use split() and join() to first turn the given string into an array and then the resulting array into a new string. That way, I can use map().
// 3. split(): The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
// 4. If I use an empty string ("") as a pattern, it returns every character with an empty string in between i.e. every character.
// 5. map(): Since I want to double each character and strings naturally concatenate with the use of the plus sign, I do character + character.
// 6. join(): Now I have an array of strings with double characters, but I still have to make it into a string. The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
// 7. For the separator string, I will, again, use an empty string (""), which translates to "I don't want anything between each element".

// Kata from https://www.codewars.com/kata/56b1f01c247c01db92000076/javascript
// 2024.01.03
