// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// My answer:

function remove(s) {
  return s.endsWith("!") ? s.slice(0, -1) : s;
}

// My reasoning:
// 1. I have to check if the string ends with "!", so I use the very intuitively named method endsWith(), which returns a boolean.
// 2. Now I use a conditional ternary operator to ask "Does s end with '!'?".
// 3. If it does, then I trim it with slice. For the first parameter, I put the index 0, to start slicing at the beginning of the string; for the second, I choose the index -1 to count backwards and slice the last index of the string i.e. "!".
// 4. If it doesn't, I return the original string.

// Kata from https://www.codewars.com/kata/57fae964d80daa229d000126/javascript
// 2024.01.02
