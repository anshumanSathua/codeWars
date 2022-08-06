/****************
 * 
 * The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 * 
 */

//S1
var maxSequence = function (arr) {
  let min = 0,
    res = 0,
    i,
    sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(sum, min);
    res = Math.max(res, sum - min);
  }
  return res;
};

//S2
var maxSequence = function (arr) {
  if (arr.length == 0) {
    return 0;
  }
  let currentMax = 0,
    currentSum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currentMax) {
      currentMax = arr[i];
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (j == i + 1) {
        currentSum = arr[i];
      }
      currentSum += arr[j];
      if (currentSum > currentMax) {
        currentMax = currentSum;
      }
    }
  }
  return currentMax;
};

//S3
function maxSequence(arr) {
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var sum = 0, j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) max = sum;
    }
  }

  return max;
}
