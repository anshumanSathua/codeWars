/*******************
 * 
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
 * 
 */

//S1
const capitalize = (s) => {
  let s1 = "";
  let s2 = "";
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (i % 2 != 0) {
      s1 += el.toLowerCase();
      s2 += el.toUpperCase();
    } else {
      s1 += el.toUpperCase();
      s2 += el.toLowerCase();
    }
  }
  return [s1, s2];
};

//S2
function capitalize(s) {
  const odd = s
    .split("")
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join("");
  const even = s
    .split("")
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
    .join("");
  return [even, odd];
}
