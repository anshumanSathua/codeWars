/*******************
 * 
 * Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 * 
 */

//S1
const find_average = (array) => {
  let sum = array.reduce((a, b) => a + b, 0);
  return array.length !== 0 ? sum / array.length : 0;
};

//S2
const findAvg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (arr.length === 0) {
    return 0;
  } else {
    return sum / arr.length;
  }
};
