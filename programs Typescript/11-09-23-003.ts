/*****************************
 * You are given an array of 6-faced dice. Each die is represented by its face up.

Calculate the minimum number of rotations needed to make all faces the same.

1 will require one rotation to have 2, 3, 4 and 5 face up, but would require two rotations to make it the face 6, as 6 is the opposite side of 1.

The opposite side of 2 is 5 and 3 is 4.

Examples
dice = {1, 1, 1, 1, 1, 6} --> 2:
rotate 6 twice to get 1

dice = {1, 2, 3} --> 2:
2 rotations are needed to make all faces either 1, 2, or 3

dice = {3, 3, 3} --> 0:
all faces are already identical

dice = {1, 6, 2, 3} --> 3:
rotate 1, 6 and 3 once to make them all 2
 * 
 */

//S1
export function rotations(dieArray: number[]): number {
  if (dieArray.length === 0) return 0;
  const rolls: { [idx: string]: number } = {};
  dieArray.forEach((die, idx) => {
    rolls[idx] = calcRolls(die, dieArray);
  });
  const rollsArr: number[] = Object.values(rolls);
  return Math.min(...rollsArr);
}

function calcRolls(die: number, arr: number[]): number {
  return arr.reduce((a, b) => {
    if (b === die) return a;
    if (die + b === 7) return a + 2;
    return a + 1;
  }, 0);
}
