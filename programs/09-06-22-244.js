/***************
 * 
 * Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
 * 
 */

//S2
const factorial = (n) => {
  //your code here
  let a = 1;
  for (let i = 1; i <= n; i++) {
    a = a * i;
  }
  return n <= 1 ? 1 : a;
};

//S2
function factorial(n) {
  let answer = 1;

  while (n > 0) {
    answer *= n;
    n--;
  }

  return answer;
}
