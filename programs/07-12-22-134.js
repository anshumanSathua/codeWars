/*******************
 * 
 * You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
 * 
 */

//S1
const twoSort = (s) => {
  return s.sort()[0].split("").join("***");
};

//S2
function twoSort(s) {
  if (s.length === 0) {
    return "";
  }

  var min = s[0];

  for (var i = 1; i < s.length; i = i + 1) {
    if (s[i] < min) {
      min = s[i];
    }
  }

  return min.split("").join("***");
}
