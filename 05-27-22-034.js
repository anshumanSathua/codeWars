/***************************
 * 
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
 * 
 */

//S1
function squareDigits(num) {
  let newNum = new Array();
  ("" + num).split("").map((n) => {
    newNum.push(n ** 2);
  });

  return parseInt(newNum.join(""));
}

//S2
function squareDigits(num) {
  let number = "" + num;
  let newNum = new Array();
  number.split("").map((n) => {
    newNum.push(n ** 2);
  });

  return parseInt(newNum.join(""));
}

//S3
const squareDigits = (num) =>
  parseInt(
    String(num)
      .split("")
      .map((x) => parseInt(x) ** 2)
      .reduce((a, x) => a + String(x))
  );
//S4
function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map(function (item) {
        return Math.pow(Number(item), 2);
      })
      .join("")
  );
}
//S5
function squareDigits(num) {
  var res = "";
  num = num.toString();
  for (var i = 0; i < num.length; i++) {
    res = res + (num[i] * num[i]).toString();
  }
  return Number(res);
}
//S5
squareDigits = (num) => +[...(num + "")].map((x) => x * x).join``;
//S6
function squareDigits(num) {
  //S7
  return parseInt(
    String(num)
      .split("")
      .map((x) => Math.pow(x, 2))
      .join()
      .replace(/,/g, "")
  );
}
