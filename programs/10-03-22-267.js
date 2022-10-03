/*********************
 *
 *Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
 *
 */

//S1
const switcheroo = (x) =>
  x
    .split("")
    .map((p) => (p === "a" ? "b" : p === "b" ? "a" : p))
    .join("");
