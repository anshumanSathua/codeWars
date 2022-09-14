/***********
 *
 *Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
 *
 */

//S1
var greet = function (n) {
  n = n
    .split("")
    .map((a, i) => (i === 0 ? a.toUpperCase() : a.toLowerCase()))
    .join("");

  return `Hello ${n}!`;
};
