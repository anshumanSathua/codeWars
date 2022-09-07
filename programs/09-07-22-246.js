/*****************
 *
 *Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
 *
 */

//S1
const sumMul = (n, m) => {
  if (m <= n) {
    return "INVALID";
  } else {
    let i = 1;
    let a = 0;
    while (n * i < m) {
      a += n * i;
      i++;
    }
    return a;
  }
};

//S2
function sumMul(n, m) {
  return m <= n
    ? "INVALID"
    : Math.floor(m / n) * (Math.floor(m / n) + 1) * (n / 2);
}

//S3
function sumMul(n, m) {
  if (n >= m) return "INVALID";

  var sum = 0;
  for (var i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}
