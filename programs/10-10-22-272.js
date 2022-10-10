/*****************
 * 
 * Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive

Single-digit numbers are considered Automorphic number.
 * 
 */

//S1
function automorphic(n) {
  return Math.pow(n, 2).toString().endsWith(n) ? "Automorphic" : "Not!!";
}

//S2
function automorphic(n) {
  if (n.length == 1) return "Automorphic";
  var x = Math.pow(n, 2).toString();
  var y = x.split("");
  y = y.slice(Math.max(y.length - n.toString().length, 0)).join("");
  if (n != Number(y)) return "Not!!";
  return "Automorphic";
}
