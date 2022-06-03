/*******************************
 * 
 * Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
 * 
 */

//S1
function duplicateCount(text) {
  let arr = text.toLowerCase();
  let a = {};
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!a[arr[i]]) {
      a[arr[i]] = 1;
    } else if (a[arr[i]] < 2) {
      a[arr[i]] += 1;
      c++;
    }
  }
  return c;
}

//S2
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((el, i, arr) => {
      return !!(arr.indexOf(el) !== i && arr.lastIndexOf(el) === i);
    }).length;
}

//S3
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .reduce(
      function (a, l) {
        a[l] = a[l] ? a[l] + 1 : 1;
        if (a[l] === 2) a.count++;
        return a;
      },
      { count: 0 }
    ).count;
}

//S4
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
