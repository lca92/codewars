// Beginner Series #1 School Paperwork

// DESCRIPTION:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// My answer:

const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

// My reasoning:
// 1. I have to multiply the number of pages by the number of classmates.
// // 2. I use a ternary operator first to exclude any numbers below zero, and then multiply n by m.

// Kata from https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
// 2024.01.04
