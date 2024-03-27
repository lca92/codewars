// Grasshopper - Bug Squashing

// Terminal game bug squashing
// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

// You are using a library that already has the functions below. Create a function named main that calls the functions in the proper order.

// - combat
// - buyHealth
// - getCoins
// - printStatus
// - rollDice
// - move

// My answer:

var health = 100;
var position = 0;
var coins = 0;

function main() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

// My reasoning:
// 1. We have to test the code and adjust for each bug.
// 2. In the main() function, some functions are in the wrong order.
// 3. One of them has a typo.
// 4. One of them doesn't exist.

// Kata from https://www.codewars.com/kata/56214b6864fe8813f1000019/javascript
