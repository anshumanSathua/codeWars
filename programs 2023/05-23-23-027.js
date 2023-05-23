/********************************
 *You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
Have fun!
 *
 */

//S1
const maxDiff = (lst) => {
  if (lst.length === 0 || lst.length === 1) {
    return 0;
  }

  const maxValue = Math.max(...lst);
  const minValue = Math.min(...lst);

  return maxValue - minValue;
};

//S2
function maxDiff(list) {
  let smallestValue = Infinity;
  let biggestValue = -Infinity;
  if (list.length === 0) return 0;
  for (i = 0; i < list.length; i++) {
    if (list[i] > biggestValue) {
      biggestValue = list[i];
    }
    if (list[i] < smallestValue) {
      smallestValue = list[i];
    }
  }
  return biggestValue - smallestValue;
}
