/*******************************
 * Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

The array will never be empty.
 * 
 */

//S1
function average(scores) {
  const sum = scores.reduce((a, b) => a + b, 0);
  return Math.round(sum / scores.length);
}
