// Grasshopper - Terminal game combat function

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// My answer:

const combat = (health, damage) => (damage > health ? 0 : health - damage);

// My reasoning:

// Kata from https://www.codewars.com/kata/586c1cf4b98de0399300001d/javascript
