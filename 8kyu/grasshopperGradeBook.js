// Grasshopper - Grade book

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// My answer:

const getGrade = (s1, s2, s3) => {
  const score = (s1 + s2 + s3) / 3;

  switch (true) {
    case score >= 90:
      return "A";
      break;
    case score >= 80:
      return "B";
      break;
    case score >= 70:
      return "C";
      break;
    case score >= 60:
      return "D";
      break;
    default:
      return "F";
  }
};

// My reasoning:

// Kata from https://www.codewars.com/kata/55cbd4ba903825f7970000f5/javascript
