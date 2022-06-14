/*************
 * 
 * Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
 * 
 */

//S1
const number = (array) => {
  if (array.length === 0) {
    return [];
  } else {
    return array.map((a, b) => b + 1 + ": " + a);
  }
};

//S2
let num = (a) => a.map((v, i) => `${i + 1}: ${v}`);

//S3
var num1 = function (arr) {
  var newArr = [];
  if (arr.length === 0) {
    return [];
  } else {
    for (var i = 0, len = arr.length; i < len; i += 1) {
      newArr.push(i + 1 + ": " + arr[i]);
    }
  }
  return newArr;
};
