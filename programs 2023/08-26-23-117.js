/***************************
 * Your task is to find the maximum number of queens that can be put on the board so that there would be one single unbeaten square (ie. threatened by no queen on the board).

The Queen can move any distance vertically, horizontally and diagonally.

Input
The queens(n) function takes the size of the chessboard.

�
∈
�
n∈Z, so it can be negative, and values can go up to 
14
1
1000
141 
1000
 .

Output
The maximum number of queens to leave one single unbeaten square
Return 0 if n is negative.
Examples
�
=
4
→
6
 
�
�
�
�
�
�
n=4→6 queens
�
=
5
→
12
 
�
�
�
�
�
�
n=5→12 queens
Good luck )
 * 
 */

//S1
function queens(n) {
  return n >= 3n ? (n - 2n) * (n - 1n) : 0n;
}

//S2
// the input and output values are in BigInt type
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
function queens(n) {
  if (n <= 0n) {
    return 0n;
  } else {
    return (n - 1n) * (n - 2n);
  }
}
