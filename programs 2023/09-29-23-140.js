/************************
 * In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!

Please also try Simple remove duplicates
 * 
 */

//S1
function solve(s) {
  let maxNumber = 0;
  let currentNumber = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "0" && char <= "9") {
      currentNumber = currentNumber * 10 + parseInt(char, 10);
    } else {
      maxNumber = Math.max(maxNumber, currentNumber);
      currentNumber = 0;
    }
  }
  maxNumber = Math.max(maxNumber, currentNumber);

  return maxNumber;
}
