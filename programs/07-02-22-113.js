/**************************
 * 
 * Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
 * 
 */

//S1
const incrementString = (input) => {
  let words = [];
  let nums = [];
  for (let i = 0; i < input.length; i++) {
    isNaN(input[i]) ? words.push(input[i]) : nums.push(input[i]);
  }
  let a = nums.length - 1;
  let arr1 = 0;
  for (let i = 0; i < nums.length; i++) {
    arr1 += nums[i] * Math.pow(10, a);
    a--;
  }
  let numArr = (arr1 + 1).toString().split("");
  for (let i = numArr.length; i < nums.length; i++) {
    numArr.unshift("0");
  }
  return words.join("") + numArr.join("");
};

//S2
function incrementString(input) {
  if (isNaN(parseInt(input[input.length - 1]))) return input + "1";
  return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

//S3
function incrementString(str) {
  var c = str[str.length - 1];
  switch (c) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
      return str.substring(0, str.length - 1) + (parseInt(c) + 1);
    case "9":
      return incrementString(str.substring(0, str.length - 1)) + 0;
    default:
      return str + "1";
  }
}
