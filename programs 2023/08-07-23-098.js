/******************************
 * Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
 => [6,7]
 * 
 */

//S1
function largest(n, arr) {
  arr.sort((a, b) => a - b);
  const result = [];
  for (let i = arr.length - n; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

//S2
function largest(n, array) {
  return array
    .sort((a, b) => b - a)
    .slice(0, n)
    .reverse();
}
