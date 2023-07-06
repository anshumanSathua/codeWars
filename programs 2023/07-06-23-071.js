/*************************
 * Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
 * 
 */

//S1
function sameCase(a, b) {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
}

//S2
function sameCase(char1, char2) {
  if (
    isLetter(char1) &&
    isLetter(char2) &&
    ((char1.toLowerCase() === char1 && char2.toLowerCase() === char2) ||
      (char1.toUpperCase() === char1 && char2.toUpperCase() === char2))
  ) {
    return 1;
  } else if (!isLetter(char1) || !isLetter(char2)) {
    return -1;
  } else {
    return 0;
  }
}

function isLetter(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}
