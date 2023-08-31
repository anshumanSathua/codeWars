/**************************************
 *Define a function that will receive a logarithm function, and returns the base of that logarithm.

guessBase(ln) == e
Base is a real number (not only integers) guaranteed to be less than 1e6.

Have a fun time coding!
 *
 *
 */

//S1
function determineBase(logarithm) {
  if (logarithm === Math.log) {
    return Math.E;
  } else if (logarithm === Math.log10) {
    return 10;
  } else if (logarithm === Math.log2) {
    return 2;
  } else {
    const x = 10044.111; // The number for which the logarithm is taken
    return Math.pow(x, 1 / logarithm(x));
  }
}

//S2
determineBase = (f) => 2 ** (f(2) ** -1);
