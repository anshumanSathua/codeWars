/*****************
 *
 *Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
 *
 */

//S1
const primeFactors = (n) => {
  let arr = [],
    obj = {},
    str = "";
  const fact = (n) => {
    if (n > 1) {
      for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
          arr.push(i);
          fact(n / i);
          return true;
        }
      }
    } else {
      return true;
    }
  };
  fact(n);

  arr.map((el) => {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });
  for (let i in obj) {
    obj[i] == 1 && (str += "(" + i + ")");
    obj[i] > 1 && (str += "(" + i + "**" + obj[i] + ")");
  }
  return str;
};
