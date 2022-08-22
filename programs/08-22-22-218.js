/*******************
 *
 *If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
 *
 */

//S1
const wordsToMarks = (str) => {
  str = str.split("");
  let init = [
    0,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (init.includes(str[i])) {
      sum += init.indexOf(str[i]);
    }
  }
  return sum;
};

//S2
const wordsToMarks1 = (s) =>
  [...s].reduce((res, c) => (res += c.charCodeAt() - 96), 0);

//S3
function wordsToMarks(str) {
  var sum = 0;
  for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) - 96;
  return sum;
}
