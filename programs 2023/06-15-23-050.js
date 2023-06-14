/***************************
 * Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
 * 
 */

//S1
const filterString = (v) => {
  let currentNumber = "";

  for (let i = 0; i < v.length; i++) {
    const char = v[i];

    if (!isNaN(Number(char))) {
      currentNumber += char;
    }
  }

  return Number(currentNumber);
};

//S2
var FilterString = function (value) {
  var result = "";
  for (var i = 0; i < value.length; i++) {
    if (!isNaN(value[i])) result += value[i];
  }
  return parseInt(result);
};
