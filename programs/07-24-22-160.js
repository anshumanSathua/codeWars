/************************
 * 
 * You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
 * 
 */

//S1
const stray = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
};

//S2
function stray(numbers) {
  let arr = numbers.sort();
  if (arr[0] !== arr[1]) {
    return arr[0];
  } else {
    return arr[arr.length - 1];
  }
}

//S3
function stray(numbers) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return numbers.filter((i) => i === max).length === 1 ? max : min;
}
