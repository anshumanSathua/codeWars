/*********************
 *
 * Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
 *
 */

//S1
const combat = (h, d) => {
  return d >= h ? 0 : h - d;
};

//S2
const combat1 = (health, damage) => Math.max(0, health - damage);
