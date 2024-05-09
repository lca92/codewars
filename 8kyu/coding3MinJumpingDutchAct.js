// Coding 3min : Jumping Dutch act

// DESCRIPTION:
// Coding 3min : Jumping Dutch act

// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// Task:
// Mr. despair wants to jump off Dutch act, So he came to the top of a building.

// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

// Input: floor, The height of the building (floor)

// Output: a string, The voice of despair(When jumping Dutch act)

// Example:
// sc(2) should return "Aa~ Pa! Aa!"

// It means:

// Mr. despair jumped from the 2 floor, the voice is "Aa~"
// He fell on the ground, the voice is "Pa!"
// He did not die immediately, and the final voice was "Aa!"
// sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

// sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// if floor<=1, Mr. despair is safe, return ""

// The final advice
// Just play in this kata, Don't experiment in real life ;-)

// My answer:

const sc = (floor) => {
  if (floor <= 1) return "";
  return "Aa~ ".repeat(floor - 1) + "Pa!" + (floor <= 6 ? " Aa!" : "");
};

// My reasoning:
// 1. If they are already on the ground, we return an empty string ("").
// 2. For each floor Mr. Despair passes during his fall, he will scream "Aa~ ". For that, we use the repeat() method.
// 3. repeat() takes in a number n and repeats a string n times. In our case, we use floor - 1, because the last one is going to have a different scream.
// 4. When Mr. Despair hits the ground, he screams "Pa!"
// 5. Now we use a ternary operator to ask ourselves: "Is the height less than or equal to 6 floors?"
// 6. If it is, we append a final scream.
// 7. If it isn't, Mr. Despair dies on impact and we return an empty string.

// Kata from https://www.codewars.com/kata/570bcd9715944a2c8e000009/javascript
