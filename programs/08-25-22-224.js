/*****************
 *
 *Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
 *
 */

//S1
const multiplicationTable = (s) => {
  let arr = [];
  for (let i = 1; i <= s; i++) {
    let x = [];
    for (let j = 1; j <= s; j++) {
      x.push(i * j);
    }
    arr.push(x);
  }
  return arr;
};

//S2
multiplicationTable = function (size) {
  return Array.apply(null, new Array(size)).map(function (val, i) {
    return Array.apply(null, new Array(size)).map(function (val, j) {
      return (i + 1) * (j + 1);
    });
  });
};
