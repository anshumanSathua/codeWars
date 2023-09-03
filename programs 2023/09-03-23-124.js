/*******************************
 * In this kata, your task is to write a function to_bytes(n)
 * (or toBytes(n) depending on language) that produces a list of bytes that
 * represent a given non-negative integer n. Each byte in the list is
 * represented by a string of '0' and '1' of length 8. The most significant
 * byte is first in the list. The example test cases should provide you with
 * all the details. You may assume that the argument n is valid.
 *
 */

//S1
function toBytes(n) {
  if (n === 0) return ["00000000"];

  const binary = n.toString(2); // Convert to binary
  const padding = 8 - (binary.length % 8); // Calculate padding

  // Add leading zeros for padding
  const paddedBinary = "0".repeat(padding) + binary;

  // Split into 8-bit bytes
  const bytes = [];
  for (let i = 0; i < paddedBinary.length; i += 8) {
    bytes.push(paddedBinary.slice(i, i + 8));
  }

  // Remove leading zero bytes except the last one
  while (bytes.length > 1 && bytes[0] === "00000000") {
    bytes.shift();
  }

  return bytes;
}

//S2
function toBytes(n) {
  let s = n.toString(2);
  let mrg = Math.ceil(s.length / 8) * 8;
  return Array.from({ length: mrg / 8 }, (_, i) =>
    s.padStart(mrg, "0").slice(i * 8, (i + 1) * 8)
  );
}
