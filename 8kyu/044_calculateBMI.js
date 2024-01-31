// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// My answer:

const bmi = (weight, height) => {
  const bmiFormula = weight / height ** 2;

  switch (true) {
    case bmiFormula <= 18.5:
      return `Underweight`;
      break;
    case bmiFormula <= 25:
      return `Normal`;
      break;
    case bmiFormula <= 30:
      return `Overweight`;
      break;
    case bmiFormula > 30:
      return `Obese`;
      break;
  }
};

// My reasoning:
// 1. We define a constant to store our BMI formula.
// 2. We use a constant because its value won't change.
// 3. We use a switch statement to evaluate if different possibilities for bmiFormula are true.

// Kata from https://www.codewars.com/kata/57a429e253ba3381850000fb/javascript
