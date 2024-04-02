// Drink about

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// My answer:

const peopleWithAgeDrink = (old) => {
  switch (true) {
    case old < 14:
      return `drink toddy`;
      break;
    case old < 18:
      return `drink coke`;
      break;
    case old < 21:
      return `drink beer`;
      break;
    default:
      return `drink whisky`;
      break;
  }
};

// My reasoning:
// 1. We use a switch statement to evaluate different ages.
// 2. If it's true that the person is younger than 14, we return "drink toddy".
// 3. If the person is between 14 and 18, we return "drink coke".
// 4. If the person is between 18 and 21, we return "drink beer".
// 5. If the person is older than 20, we return "drink whisky".

// Kata from https://www.codewars.com/kata/56170e844da7c6f647000063/javascript
