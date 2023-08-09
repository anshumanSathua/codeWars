/********************************
 * Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"
 * 
 */

//S1
function stringMerge(str1, str2, letter) {
  const index1 = str1.indexOf(letter);
  const index2 = str2.indexOf(letter);

  const prefix = str1.slice(0, index1);
  const suffix = str2.slice(index2);

  return prefix + suffix;
}

//S2
const stringMerge = (a, b, l) =>
  a.slice(0, a.indexOf(l)) + b.slice(b.indexOf(l));
