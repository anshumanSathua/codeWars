/***********************
 * 
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
 * 
 */

//S1
const findOutlier = (int) => {
  let even = int.filter((x) => x % 2 === 0);
  let odd = int.filter((y) => y % 2 !== 0);
  return even.length < odd.length ? even[0] : odd[0];
};

//S2
function findOutlier(integers) {
  const oddArray = [];
  const evenArray = [];
  for (let integer of integers) {
    if (integer % 2 === 0) {
      evenArray.push(integer);
    } else {
      oddArray.push(integer);
    }
  }
  return oddArray.length === 1 ? oddArray[0] : eventArray[0];
}
