/*****************************************
 * 
 * Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 * 
 */

//S1
function repeatStr(n, s) {
  return s.repeat(n);
}

//S2
function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++) str += s;
  return str;
}

//S3
function repeatStr(n, s) {
  String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
  };
  return s.repeat(n);
}
