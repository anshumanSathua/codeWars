/*********************
 *
 * Simple, remove the spaces from the string, then return the resultant string.
 *
 */

//S1
const noSpace = (x) => x.split(" ").join("");

//S2
function noSpace(x) {
  let newStr = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      newStr += x[i];
    }
  }
  return newStr;
}

//S3
function noSpace(x) {
  return x.replace(/\s/g, "");
}
