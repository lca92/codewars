// Do you speak "English"?

// DESCRIPTION:
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// My answer:
const spEng = (sentence) =>
  sentence.toLowerCase().includes("english") ? true : false;

// My reasoning:
// 1. We have to put all the characters either in lower or upper case, so we may compare them properly.
// 2. I used the toLowerCase() method, which puts the characters in lowercase.
// 3. Now, we must check if the string sentence includes the word "english" with the method includes().
// 4. If it does, we return true.
// 5. If it doesn't, we return false.

// Kata from https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/javascript
