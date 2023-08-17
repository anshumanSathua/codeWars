/****************************
 * You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
 * 
 */

//S1
function tailSwap(arr) {
  const [first, second] = arr.map((str) => str.split(":"));
  return [first[0] + ":" + second[1], second[0] + ":" + first[1]];
}

//S2
function tailSwap(arr) {
  var c = [];
  var ar = [];
  for (var i = 0; i < arr.length; ++i) c.push(arr[i].split(":"));
  for (var i = 0; i < c.length; ++i)
    ar.push(c[i][0] + ":" + c[c.length - 1 - i][1]);
  return ar;
}
