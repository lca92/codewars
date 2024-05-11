// Contamination #1 -String-

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// My answer:

const contamination = (text, char) => char.repeat(text.length);

// My reasoning:
// 1. We don't actually change the string from the input.
// 2. We use repeat() on the char string to return another string that repeats the first one a certain amount of times.
// 3. We use the length property to check how many characters there are in the text string and pass this value to repeat().

// Kata from https://www.codewars.com/kata/596fba44963025c878000039/javascript
