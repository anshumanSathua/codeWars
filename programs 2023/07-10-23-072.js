/*********************
 * Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
 * 
 */

//S1
function calc(x) {
  const total1 = x
    .split("")
    .map((char) => char.charCodeAt(0))
    .join("");
  const total2 = total1
    .split("")
    .map((digit) => (digit === "7" ? "1" : digit))
    .join("");
  const diff =
    [...total1].reduce((sum, digit) => sum + parseInt(digit), 0) -
    [...total2].reduce((sum, digit) => sum + parseInt(digit), 0);
  return diff;
}

//S2
function calc(x) {
  let total1 = "";
  for (let i = 0; i < x.length; i++) {
    total1 += x.charCodeAt(i);
  }

  let total2 = "";
  for (let i = 0; i < total1.length; i++) {
    if (total1[i] === "7") {
      total2 += "1";
    } else {
      total2 += total1[i];
    }
  }

  let sum1 = 0;
  for (let i = 0; i < total1.length; i++) {
    sum1 += parseInt(total1[i]);
  }

  let sum2 = 0;
  for (let i = 0; i < total2.length; i++) {
    sum2 += parseInt(total2[i]);
  }

  return sum1 - sum2;
}
