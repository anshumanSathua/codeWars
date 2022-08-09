/***********************
 * 
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
 * 
 */

//S1
const squareDigits = (num) => {
  let res = new Array();
  ("" + num).split("").map((n) => {
    res.push(n ** 2);
  });

  return parseInt(res.join(""));
};

//S2
function squareDigits(num) {
  var numS = num.toString();
  var output = "";
  for (var i = 0; i < numS.length; i++) {
    output += parseInt(numS[i]) * parseInt(numS[i]);
  }
  return parseInt(output);
}
