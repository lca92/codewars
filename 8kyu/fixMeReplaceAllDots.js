// FIXME: Replace all dots

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

// My answer:

const replaceDots = (str) => str.replace(/\./g, "-");

// My reasoning:
// 1. The replace() method returns a new string with part of the original string replaced by a pattern we'd like.
// 2. The pattern can be a string or a RegEx.
// 3. RegEx stands for "Regular Expression", which is a string of characters that express a search pattern. They are mostly used for searching files in a database.
// 4. A great place to learn RegEx is regexlearn.com.
// 5. For this kata, we just need to know that:
// 6. The dot (.) is a special character for RegEx. It matches any character except for line breaks.
// 7. Since we want it to match just the dots and not any character, we use a backslash (\) in front of it to "escape" it.
// 8. The "g" flag stands for "global". If we don't use it, the search will stop at the first occurrence, but we want to replace all dots, not just the first.
// 9. Finally, we pass "-" as a pattern we want to replace the dots.

// Kata from https://www.codewars.com/kata/596c6eb85b0f515834000049/javascript
