/**********************
 * As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last digit from fibonacci number. Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0. Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain), so, please, be careful with overflow.

Hardcore version of this kata, no bruteforce will work here ;)
 * 
 */

//S1
function getLastDigit(index) {
  if (index <= 1) {
    return index;
  }

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= index; i++) {
    const next = (prev + current) % 10;
    prev = current;
    current = next;
  }

  return current;
}

//S2
function getLastDigit(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; ++i) {
    [a, b] = [b, (a + b) % 10];
  }
  return a;
}
