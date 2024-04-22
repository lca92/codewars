// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My answer:

const fakeBin = (x) => x.replace(/\d/g, (number) => (number < 5 ? 0 : 1));

// My reasoning:
// 1. The replace() method returns a new string with part of the original string replaced by a pattern we'd like.
// 2. The pattern can be a string or a RegEx.
// 3. RegEx stands for "Regular Expression", which is a string of characters that express a search pattern. They are mostly used for searching files in a database.
// 4. A great place to learn RegEx is regexlearn.com.
// 5. For this kata, we just need to know that:
// 6. "\d" matches any digit (0 <= n <= 9).
// 7. The "g" flag stands for "global". If we don't use it, the search will stop at the first occurrence, but we want to replace all numbers that match our condition, not just the first.
// 8. Now, we pass a ternary operator as our pattern. We ask ourselves: "Is this number less than 5?"
// 9. If it is, we replace it by 0.
// 10. If it isn't, we replace it with 1.

// Kata from https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript
