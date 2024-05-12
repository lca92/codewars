// Convert number to reversed array of digits

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// My answer:

const digitize = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((string) => Number(string));

// My reasoning:
// 1. toString() transforms a number into a string. We do this to be able to use the split() method of String.
// 2. split() takes a pattern and divides this string into an ordered list of substrings by searching for the pattern (in our case, an empty string).
// 3. Now we have an array with strings containing each individual number. We use reverse() to reverse the order of the elements.
// 4. Still, we need to change the type of the elements from String to Number. We can use map() to make this change for each string.

// Kata from https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript
