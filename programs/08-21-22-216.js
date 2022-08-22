/***************
 * 
 * Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 * 
 */

//S1
function longest(s1, s2) {
  s1 = [...new Set(s1.split(""))];
  s2 = [...new Set(s2.split(""))];

  for (let i = 0; i < s2.length; i++) {
    s1.push(s2[i]);
  }

  let combo = [...new Set(s1)];
  let res = combo.sort().join("");

  return res;
}

//S2
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

//S3
function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function (element, index, array) {
    return element !== array[index - 1];
  });
  return s4.join("");
}
