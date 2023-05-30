/*************************
 *Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck!
 *
 */

//S1
const capitalize = (s, ind) => {
  const charArray = s.split("");

  for (let i = 0; i < ind.length; i++) {
    const index = ind[i];
    if (index >= 0 && index < charArray.length) {
      charArray[index] = charArray[index].toUpperCase();
    }
  }

  return charArray.join("");
};

//S2
function capitalize(s, arr) {
  return [...s].map((x, i) => (arr.includes(i) ? x.toUpperCase() : x)).join("");
}
