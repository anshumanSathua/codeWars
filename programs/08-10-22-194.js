/*****************
 *
 * Write a function that returns the total surface area and volume of a box as an array: [area, volume]
 *
 */

//S1
const getSize = (w, h, d) => {
  return [2 * (h * w) + 2 * (h * d) + 2 * (w * d), w * h * d];
};
