/***********************************
 * 
 * Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

 * 
 */

//S1
function towerBuilder(n) {
  let space = "";
  let x = "";
  let arr = [];
  for (let i = 1; i <= n; i++) {
    space = " ".repeat(n - i);
    x = "*".repeat(2 * i - 1);
    arr.push(space + x + space);
  }
  return arr;
}

//S2
function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}
