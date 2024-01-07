// Up and down, the string grows

// DESCRIPTION:
// Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript, uppercase/lowercase in Kotlin. Typically, these methods won't change the size of the string.

// For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.

// However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?

// For example, in Ruby, That means str.upcase.downcase.size > str.size

// You should just set the value of STRANGE_STRING to meet the previous criteria.

// Note: Meta programming is not allowed in this kata. So, the size of your solution is limited.

// My answer:

const STRANGE_STRING = "İ";

// My reasoning:
// 1. It shouldn't be an 8 kyu kata, but anyways, what we have to do is research the official documentation for Unicode.
// 2. We can then make a string and check if "console.log(STRANGE_STRING.toUpperCase().toLowerCase().length > STRANGE_STRING.length);" is true.

// Kata from https://www.codewars.com/kata/644b17b56ed5527b09057987
// 2024.01.06
