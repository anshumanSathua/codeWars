/*************************
 *Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
 *
 */

//S1
function cubeOdd(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return undefined;
    }

    if (arr[i] % 2 !== 0) {
      sum += Math.pow(arr[i], 3);
    }
  }

  return sum;
}

//s2
let cubeOdd = (a) => {
  var isNumeric = a.every((x) => !isNaN(x));
  return isNumeric
    ? a.filter((n) => n % 2).reduce((s, n) => s + n * n * n, 0)
    : undefined;
};
