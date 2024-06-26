// Student's Final Grade

// DESCRIPTION:
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.

// My answer:

const finalGrade = (exam, projects) => {
  switch (true) {
    case exam > 90 || projects > 10:
      return 100;
      break;
    case exam > 75 && projects >= 5:
      return 90;
      break;
    case exam > 50 && projects >= 2:
      return 75;
      break;
    default:
      return 0;
  }
};

// My reasoning:
// 1. The switch statement evaluates an expression (in our case, true). If it is true, it matches against each case.
// 2. In case the grade from the exam is bigger than 90 or the number of projects is bigger than 10, we return 100.
// 3. In case the grade from the exam is bigger than 75 or the number of projects is bigger than or equal to 5, we return 90.
// 4. In case the grade from the exam is bigger than 50 or the number of projects is bigger than or equal to 2, we return 75.
// 5. For every other case, we return 0.

// Kata from https://www.codewars.com/kata/5ad0d8356165e63c140014d4/javascript
