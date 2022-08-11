/*************************
 * 
 * My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
 * 
 */

//S1
const predictAge = (a1, a2, a3, a4, a5, a6, a7, a8) => {
  let arr = [
    a1 * a1,
    a2 * a2,
    a3 * a3,
    a4 * a4,
    a5 * a5,
    a6 * a6,
    a7 * a7,
    a8 * a8,
  ];
  let res = Math.sqrt(arr.reduce((x, y) => x + y, 0)) / 2;
  return Math.floor(res);
};

//S2
const predictAge1 = (...ages) => (Math.hypot(...ages) / 2) | 0;
