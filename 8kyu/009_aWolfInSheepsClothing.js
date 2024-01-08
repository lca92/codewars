// #9

// A wolf in sheep's clothing

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// My answer:

const warnTheSheep = (queue) =>
  queue.indexOf("wolf") == queue.length - 1
    ? `Pls go away and stop eating my sheep`
    : `Oi! Sheep number ${
        queue.length - queue.indexOf("wolf") - 1
      }! You are about to be eaten by a wolf!`;

// My reasoning:
// 1. With indexOf(), we can find the wolf's index in the array.
// 2. If this integer is equal to the queue's length minus 1, it means the wolf is right next to us, because we're counting in descending order.
// 3. Also, let's always keep in mind that we start counting indexes from 0, so we have to subtract 1 from the array's length.
// 4. If the wolf is next to us, let's beg them to leave our sheep alone.
// 5. Let's alert the sheep right next to them if they aren't.
// 6. For that, we have to find its position in the array. We subtract the index of the wolf from the array's length minus 1.

// Kata from https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/javascript
