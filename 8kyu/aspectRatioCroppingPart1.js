// Aspect Ratio Cropping - Part 1

// The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

// This kata is part of a series with Aspect Ratio Cropping - Part 2 .

// My answer:

const aspectRatio = (x, y) => [Math.ceil(y * (16 / 9)), y];

// My reasoning:
// 1. The value of y doesn't change.
// 2. The value of x is based on y. It's equivalent to y*16/9.
// 3. We round up the result with Math.ceil() to get an integer.
// 4. We return an array with our formula at index 0 and y at index 1.

// Kata from https://www.codewars.com/kata/596e4ef7b61e25981200009f/javascript
