/*****************************
 * Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]
 * 
 */

//S1
function factors(number) {
  if (!Number.isInteger(number) || number < 1) {
    return -1;
  }
  const factorArray = [];

  for (let i = number; i >= 1; i--) {
    if (number % i === 0) {
      factorArray.push(i);
    }
  }

  return factorArray;
}

//S2
function factors(x) {
  if (x != parseInt(x, 10) || x < 1) return -1;
  return Array.from(Array(x), (x, i) => (x = i + 1))
    .filter((n) => !(x % n))
    .sort((a, b) => b - a);
}
