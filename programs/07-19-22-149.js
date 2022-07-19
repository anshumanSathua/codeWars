/****************************
 * 
 * Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
 * 
 */

//S1
const binaryArrayToNumber = (arr) => {
  let res = 0;
  arr.map((a, i) => {
    if (a !== 0) {
      res += 2 ** (arr.length - (i + 1));
    }
  });
  return res;
};

//S2
function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => (a << 1) | b);
}

//S3
const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);
