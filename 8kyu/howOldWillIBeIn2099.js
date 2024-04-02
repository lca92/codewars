// How old will I be in 2099?

// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

// My answer:

function calculateAge(yearOfBirth, givenYear) {
  switch (true) {
    case givenYear - yearOfBirth === 1:
      return `You are 1 year old.`;
      break;
    case givenYear > yearOfBirth:
      return `You are ${givenYear - yearOfBirth} years old.`;
      break;
    case givenYear == yearOfBirth:
      return `You were born this very year!`;
      break;
    case yearOfBirth - givenYear === 1:
      return `You will be born in 1 year.`;
      break;
    case givenYear < yearOfBirth:
      return `You will be born in ${yearOfBirth - givenYear} years.`;
      break;
  }
}

// My reasoning:
// 1. We use switch to evaluate multiple cases.
// 2. We pass true as our condition so it executes the case whose condition evaluates to true.
// 3. There are three main possibilities: Philip's age is greater than, less than or equal to givenYear.
// 4. But if Philip's age is just one year apart from givenYear, we must return an answer with the word "year", in singular.
// 5. We evaluate those exceptions before the general cases because they are a subset of the bigger set of possibilities, and switch evaluates in order.

// Kata from https://www.codewars.com/kata/5761a717780f8950ce001473/javascript
