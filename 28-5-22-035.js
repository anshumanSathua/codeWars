/**************************
 * 
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 * 
 */

//S1
function isIsogram(str) {
  if (str.isEmpty) {
    return true;
  } else {
    str = str.toLowerCase();
  }
  let arr1 = str.split("");
  let arr2 = arr1.slice().sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i + 1] == arr2[i]) {
      return false;
    }
  }
  return true;
}

//S2
function isIsogram(str) {
  str = str.toLowerCase();

  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i), i + 1) >= 0) {
      return false;
    }
  }

  return true;
}

//S3
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
