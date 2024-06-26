// Determine offspring sex based on genes XX and XY chromosomes

// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

// My answer:

const chromosomeCheck = (sperm) =>
  `Congratulations! You're going to have a ${
    sperm.includes("Y") ? `son` : `daughter`
  }.`;

// My reasoning:
// 1. includes() determines whether an array includes a certain value among its entries.
// 2. We use the ternary operator to ask ourselves: "Does the sperm have a Y chromosome?".
// 3. If so, they're going to have a son.
// 4. Else, they're going to have a daughter.

// Kata from https://www.codewars.com/kata/56530b444e831334c0000020/javascript
