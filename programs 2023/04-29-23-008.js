/************************
 * 
 * Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
 */

//S1
const noOdds = (values) => {
  let even = [];
  for (let a of values) {
    if (a % 2 === 0) even.push(a);
  }
  return even;
};

//S2
var noOdds1 = (values) => values.filter((x) => x % 2 === 0);
