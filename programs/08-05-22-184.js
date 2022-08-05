/********************
 *
 *You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
 *
 */

//S1
const smallEnough = (a, limit) => {
  return !a.some((e) => e > limit);
};

//S2
function smallEnough(a, limit) {
  for (var i of a) {
    if (i > limit) return false;
  }
  return true;
}

//S3
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
