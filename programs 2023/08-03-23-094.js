/*******************
 * Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
 * 
 */

//S1
function dashatize(n) {
  if (typeof n !== "number" || isNaN(n)) {
    return "NaN";
  }

  n = Math.abs(n);

  const str = n.toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (
      (i > 0 && parseInt(str[i - 1]) % 2 !== 0) ||
      (i > 0 && parseInt(str[i]) % 2 !== 0)
    ) {
      result += "-";
    }
    result += str[i];
  }

  return result;
}

//S2
function dashatize(num) {
  return (num = num
    .toString()
    .split("")
    .map(function (c) {
      return c % 2 ? "-" + c + "-" : c;
    })
    .join("")
    .split("-")
    .filter((a) => a != "")
    .join("-"));
}
