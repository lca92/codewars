// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

// My answer:

const remove = (string) => string.split("!").join("") + "!";

// My reasoning:
// 1. The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
// 2. If we use "!" as the pattern, it will automatically exclude the exclamation point.
// 3. The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
// 4. In our case, if we pass an empty string as a separator, there will be nothing between the characters in the new string.
// 5. We add a "!" at the and.

// Kata from https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/javascript
