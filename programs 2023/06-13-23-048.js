/*************
 *Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
 *
 */

//S1
const sumOfMinimums = (arr) => {
  let sum = 0;
  for (let el of arr) {
    let cur = el.sort((a, b) => a - b);
    sum += cur[0];
  }
  return sum;
};

//S2
function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}

//S3
function sumOfMinimums(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += Math.min(...arr[i]);
  }

  return total;
}
