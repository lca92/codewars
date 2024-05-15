// Freudian translator

// You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...

// In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.

// In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.

// My answer:

const toFreud = (string) => (string ? string.replace(/\S+/g, "sex") : "");

// My reasoning:
// 1. The replace() method returns a new string with part of the original string replaced by a pattern we'd like.
// 2. The pattern can be a string or a RegEx.
// 3. RegEx stands for "Regular Expression", which is a string of characters that express a search pattern. They are mostly used for searching files in a database.
// 4. A great place to learn RegEx is regexlearn.com.
// 5. For this kata, we just need to know that:
// 6. \S: Matches any non-whitespace character.
// 7. +: Expression matches one or more.
// 8. The "g" flag stands for "global". If we don't use it, the search will stop at the first occurrence, but we want to replace all words, not just the first.
// 9. Finally, we pass "sex" as a pattern we want to replace the words.

// Kata from https://www.codewars.com/kata/5713bc89c82eff33c60009f7/javascript
