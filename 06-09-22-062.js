/*********************
 * 
 * You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
 * 
 */

//S1
function otherAngle(a, b) {
  return 180 - (a + b);
}

//S2
const otherAngle = (a, b) => 180 - a - b;
