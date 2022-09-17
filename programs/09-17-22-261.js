/*****************
 *
 *I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
 *
 */

//S1
const generateShape = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr.push("+");
    }
    if (i !== n - 1) arr.push("\n");
  }
  return arr.join("");
};

//S2
function generateShape(n) {
  return ("+".repeat(n) + "\n").repeat(n).trim();
}
