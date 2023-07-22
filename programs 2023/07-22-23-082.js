/***************
 * Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
 * 
 */

//S1
function largestPairSum(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}

//S2
function largestPairSum(numbers) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of numbers) {
    if (num >= largest) {
      secondLargest = largest;
      largest = num;
    } else if (num >= secondLargest) {
      secondLargest = num;
    }
  }

  return largest + secondLargest;
}
