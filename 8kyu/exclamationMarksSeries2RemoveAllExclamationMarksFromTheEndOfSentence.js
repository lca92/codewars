// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// My answer:

const remove = (string) => string.replace(/!+$/, "");

// My reasoning:
// 1. The replace() method returns a new string with part of the original string replaced by a pattern we'd like.
// 2. The pattern can be a string or a RegEx.
// 3. RegEx stands for "Regular Expression", which is a string of characters that express a search pattern. They are mostly used for searching files in a database.
// 4. A great place to learn RegEx is regexlearn.com.
// 5. For this kata, we just need to know that:
// 6. The dollar sign represents the end of a string.
// 7. The plus sign matches the preceding character one or more times.
// 8. So if we use "!+$", it means "read from end to start while exclamation mark is present".
// 9. Finally, if we pass "" as the pattern we want to replace the exclamation marks, there will be no replacement, it will only take out the exclamation marks.

// Kata from https://www.codewars.com/kata/57faece99610ced690000165
