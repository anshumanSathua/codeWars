/********************
 *
 *Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
 */

//S1
const divCon = (x) => {
  let num = [],
    str = [];
  for (let a of x) {
    if (typeof a === "string") {
      str.push(+a);
    } else {
      num.push(a);
    }
  }
  let a = num.reduce((x, y) => x + y, 0);
  let b = str.reduce((x, y) => x + y, 0);

  return a - b;
};

//S2
function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
  );
}
