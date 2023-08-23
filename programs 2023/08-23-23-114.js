/**************************
 *A positive integer. It is guaranteed that no zero appears in n.

[output] an integer

The parameter of the given number.

Example
For n = 22, the output should be 4.

Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

For n = 1234, the output should be 120.

1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120
 *
 */

//S1
function parameter(n) {
  function lcm(a, b) {
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

    return (a * b) / gcd(a, b);
  }
  const digits = Array.from(String(n), Number);
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  const product = digits.reduce((acc, digit) => acc * digit, 1);

  return lcm(sum, product);
}
