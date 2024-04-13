// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// My answer:

const replace = (s) => s.replace(/[aeiou]/gi, "!");

// My reasoning:
// 1. The replace() method returns a new string with part of the original string replaced by a pattern we'd like.
// 2. The pattern can be a string or a RegEx.
// 3. RegEx stands for "Regular Expression", which is a string of characters that express a search pattern. They are mostly used for searching files in a database.
// 4. A great place to learn RegEx is regexlearn.com.
// 5. For this kata, we just need to know that:
// 6. A character set is represented with square brackets around them: [xxx].
// 7. The "g" flag stands for "global". If we don't use it, the search will stop at the first occurrence, but we want to replace all vowels, not just the first.
// 8. The "i" flag stands for "ignore Case" i.e. it doesn't matter if the vowel is in lower or upper case.
// 9. Finally, we pass "!" as a pattern we want to replace the vowels.

// Kata from https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/javascript
