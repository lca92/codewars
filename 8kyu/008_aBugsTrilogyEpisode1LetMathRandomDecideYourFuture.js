// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"

// DESCRIPTION:
// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,

// Dear Pac,
// This is the first exercise. Find out what's wrong and fix the code.
// You have 15 minutes to send a solution.
// Good Luck.
// This code is a mess! Would you help Pac to fix the code in time?

// (This might be helpful -> Math.random();)

// This is my first Kata, so please any feedback (especially on Test Cases) is welcome!

// My answer:

function yourFutureCareer() {
  var career = Math.random();
  if (career <= 0.32) {
    return "FrontEnd Developer";
  } else if (career <= 0.65) {
    return "BackEnd Developer";
  } else {
    return "Full-Stack Developer";
  }
}

yourFutureCareer();

// My reasoning:
// 1. The kata doesn't have tests, so you don't need to debug it to pass, but since we're interested in the learning experience...
// 2. First: we have to name the function.
// 3. Second: we have to close the function body with curly brackets.
// 4. Third: we have to name the career variable...
// 5. ... and use the equal sign instead of a colon.
// 6. Fourth: we have to place FrontEnd Developer between quotes...
// 7. ... and exclude the equal sign.
// 8. Fifth: we have to add curly brackets around the else-if.
// 9. Sixth: for the second return, we have to delete the colon...
// 10. ... place the sentence between single quotes...
// 11. ... and substitute the comma for a semicolon
// 12. Seventh: now we just have to add semicolons all around.

// Kata from https://www.codewars.com/kata/562e98755e9214cd2500003d/javascript
