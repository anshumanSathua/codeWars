/*******************
 *
 *Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.
 *
 */

//S1
const calculateTip = (a, r) => {
  r = r.toLowerCase();
  return r === "terrible"
    ? 0
    : r === "poor"
    ? Math.ceil((a * 5) / 100)
    : r === "good"
    ? Math.ceil((a * 10) / 100)
    : r === "great"
    ? Math.ceil((a * 15) / 100)
    : r === "excellent"
    ? Math.ceil((a * 20) / 100)
    : "r not recognised";
};

//S2
const TIPS = {
  terrible: 0.0,
  poor: 0.05,
  good: 0.1,
  great: 0.15,
  excellent: 0.2,
};

const calculateTip1 = (amount, rating) => {
  rating = rating.toLowerCase();

  return rating in TIPS
    ? Math.ceil(TIPS[rating] * amount)
    : "Rating not recognised";
};
