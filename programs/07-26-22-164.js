/*****************
 *
 *Complete the function which converts a binary number (given as a string) to a decimal number.
 *
 */

//S1
const binToDec = (bin) => {
  return bin
    .split("")
    .reverse()
    .reduce((a, b, i) => {
      return b === "1" ? a + Math.pow(2, i) : a;
    }, 0);
};

//S2
const binToDec1 = (bin) =>
  [...bin].reverse().reduce((acc, elt, idx) => acc + elt * 2 ** idx, 0);

//S3
function binToDec(bin) {
  return parseInt(bin, 2);
}
