/*******************
 *Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
 *
 */

//S1
const solve = (arr) => {
  const result = [];
  const seen = new Set();

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!seen.has(arr[i])) {
      result.unshift(arr[i]);
      seen.add(arr[i]);
    }
  }

  return result;
};

//S2
function solve(arr) {
  return arr.filter((val, i) => arr.lastIndexOf(val) == i);
}

//S3
const solve = (arr) => [...new Set(arr.reverse())].reverse();
