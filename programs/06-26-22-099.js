/********************
 * 
 * Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
 * 
 */

//S1
const min = (list) => Math.min(...list);

const max = (list) => Math.max(...list);

//S2
var mini = function (list) {
  var min = list[0];
  for (var i = 0; i < list.length; i++) {
    var cur = list[i];
    if (cur < min) min = cur;
  }
  return min;
};

var maxi = function (list) {
  var max = list[0];
  for (var i = 0; i < list.length; i++) {
    var cur = list[i];
    if (cur > max) max = cur;
  }
  return max;
};

//S3
var minimum = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var maximum = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
