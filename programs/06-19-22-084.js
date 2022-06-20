/*************
 * 
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
 * 
 */

//S1
const fakeBin = (x) =>
  x
    .split("")
    .map((a) => (+a < 5 ? 0 : 1))
    .join("");
