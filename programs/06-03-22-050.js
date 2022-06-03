/**************************
 * 
 * The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
 * 
 */

//S1
const EUREKAS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135, 175, 518, 598, 1306, 1676, 2427, 2646798,
];

const sumDigPow = (a, b) => EUREKAS.filter((n) => a <= n && n <= b);

//S2
function sumDigPow(a, b) {
  let eureka = [];
  for (i = a; i <= b; i++) {
    let digits = String(i).split("");
    if (
      i ==
      digits.reduce(function (accumulator, currentValue, currentIndex) {
        return accumulator + currentValue ** (currentIndex + 1);
      }, 0)
    ) {
      eureka.push(i);
    }
  }
  return eureka;
}

//S3
function sumDigPow(a, b) {
  return [...Array(b - a + 1)]
    .map((_, i) => i + a)
    .filter(
      (x) =>
        (x + "")
          .split("")
          .map((y, i) => Math.pow(+y, i + 1))
          .reduce((m, n) => m + n) == x
    );
}

//S4
function sumDigPow(a, b) {
  let result = [];

  for (let i = a; i <= b; i++) {
    if (
      i ===
      i
        .toString()
        .split("")
        .map((item, index) => {
          return Math.pow(+item, index + 1);
        })
        .reduce((a, b) => {
          return a + b;
        })
    ) {
      result.push(i);
    }
  }

  return result;
}
