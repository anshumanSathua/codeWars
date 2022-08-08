/********************
 *
 * return "Position of alphabet: " + ((letter.charCodeAt(0)-97) + 1);
 *
 */

//S1
const position = (letter) => {
  return `Position of alphabet: ${letter.charCodeAt(0) - 97 + 1}`;
};

//S2
function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}
