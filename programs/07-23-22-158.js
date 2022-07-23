/******************
  * 
  * Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
  * 
  */

//S1
const findSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
};

//S2
function findSum(n) {
  return Array.from({ length: n }, (a, b) => b + 1).reduce(function (
    curSum,
    val
  ) {
    return !(val % 5 && val % 3) ? curSum + val : curSum;
  },
  0);
}

//S3
const findSum = (n) =>
  [...Array(n)]
    .map((_, i) => ++i)
    .reduce((r, e) => r + (e % 5 && e % 3 ? 0 : e), 0);
