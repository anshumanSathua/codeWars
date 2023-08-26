/*************************
 * Task:
Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
 * 
 */

//S1
function twoArePositive(a, b, c) {
  let positiveCount = 0;

  if (a > 0) {
    positiveCount++;
  }
  if (b > 0) {
    positiveCount++;
  }
  if (c > 0) {
    positiveCount++;
  }

  return positiveCount === 2;
}

//S2
function twoArePositive(a, b, c) {
  return [...arguments].filter((i) => i > 0).length === 2;
}

//S3
function twoArePositive(a, b, c) {
  return (a > 0) + (b > 0) + (c > 0) == 2;
}
