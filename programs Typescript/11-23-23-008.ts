/*****************************
 * You have to create a function that converts integer given as string into ASCII uppercase letters or spaces.

All ASCII characters have their numerical order in table.

For example,

from ASCII table, character of number 65 is "A".
Numbers will be next to each other, So you have to split given number to two digit long integers.

Examples (input -> output)
'658776' -> 'AWL' (because in ASCII table 'A' is 65, 'W' is 87, 'L' is 76)
'73327673756932858080698267658369' ->'I LIKE UPPERCASE'
Good Luck!
 * 
 */

//S1
export function convert(n: string): string {
  let result = "";
  for (let i = 0; i < n.length; i += 2) {
    const num = parseInt(n.slice(i, i + 2), 10);
    if (65 <= num && num <= 90) {
      result += String.fromCharCode(num);
    } else if (num === 32) {
      result += " ";
    }
  }
  return result;
}
