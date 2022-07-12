/*****************
 * 
 * Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 * 
 */

//S1
function stringToArray(s) {
  return s.split(" ");
}

//S2
function stringToArray(string) {
  var result = [];
  var traverse = function foo(string) {
    for (var i = 0; i < string.length; i++) {
      var chr = string.charAt(i);
      if (chr === " ") {
        result.push(string.slice(0, i));
        foo(string.slice(i + 1));
        return;
      }
    }
    result.push(string);
  };
  traverse(string);
  return result;
}
