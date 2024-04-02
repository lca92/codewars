// Total amount of points

// DESCRIPTION:
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// My answer:

const points = (games) => {
  let ourTotalPoints = 0;
  games.map((matchScore) => {
    if (matchScore[0] == matchScore[2]) {
      ourTotalPoints++;
    } else if (matchScore[0] > matchScore[2]) {
      ourTotalPoints += 3;
    }
  });
  return ourTotalPoints;
};

// My reasoning:
// 1. Let's set a counter for our team's total points.
// 2. Now we iterate through the games' array with map().
// 3. For each matchScore, we first have to find in the string the indexes where the points are represented.
// 4. Our team's points: index 0.
// 5. Opponent's points: index 2.
// 6. If they're equal, add 1 to the counter.
// 7. If we won, add 3 to the counter.

// Kata from https://www.codewars.com/kata/5bb904724c47249b10000131/javascript
