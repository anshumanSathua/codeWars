/******************
 * 
 * Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
 * 
 */

//S1
const capitals = function (a) {
  return a
    .split("")
    .map((el, i) => {
      if (el.toUpperCase() === el) return i;
    })
    .filter((i) => {
      return i != null;
    });
};

//S2
const capitals1 = function (word) {
  var caps = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};
