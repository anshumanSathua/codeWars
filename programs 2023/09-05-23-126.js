/************************************
 * Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:

1212 returns:

"12
12"
Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

"123
123
123"
Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.
 * 
 */

//S1
function squareIt(int) {
  const numStr = int.toString();
  const length = numStr.length;
  const sqRoot = Math.sqrt(length);

  if (sqRoot === Math.floor(sqRoot)) {
    const blockSize = Math.floor(sqRoot);
    let result = "";

    for (let i = 0; i < length; i += blockSize) {
      result += numStr.slice(i, i + blockSize) + "\n";
    }

    return result.trim();
  } else {
    return "Not a perfect square!";
  }
}

//S2
function squareIt(int) {
  let n = Math.sqrt(int.toString().length);

  if (n !== Math.floor(n)) {
    return "Not a perfect square!";
  } else {
    return int
      .toString()
      .split("")
      .map((e, i) => ((i + 1) % n === 0 && i !== n ** 2 - 1 ? `${e}\n` : e))
      .join("");
  }
}
