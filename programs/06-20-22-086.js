/**************
 *
 *Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 *
 */

//S1
const rps = (p1, p2) => {
  const els = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  return p1 === p2 ? `Draw!` : `Player ${els[p1] === p2 ? 1 : 2} won!`;
};
