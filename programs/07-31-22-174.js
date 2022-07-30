/*************
 *
 * Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
 *
 */

//S1
const problem = (x) => {
  return typeof x === "number" ? x * 50 + 6 : "Error";
};

//S2
function problem(x) {
  let sum = x * 50 + 6;
  if (x > 0 || x < 0 || x === 0) return sum;
  else {
    return "Error";
  }
}
