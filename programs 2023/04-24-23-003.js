/*****************
 *
 *Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .
 *
 */

//S1
const adjacentElementsProduct = (arr) => {
  let x = 0;
  let y = 0;
  let p = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    x = arr[i];
    y = arr[i + 1];
    if (x * y > p) {
      p = x * y;
    }
  }
  return p;
};

//S2
function adjacentElementsProduct(array) {
  let newArr = [];
  for (i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }
  return Math.max(...newArr);
}

//S3
function adjacentElementsProduct(a) {
  return Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1));
}
