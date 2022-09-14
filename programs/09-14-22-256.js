/*****************
 *
 *Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
 *
 */

//S1
const encryptThis = (text) => {
  let strArr = text.split(" ");
  let output = [];

  strArr.forEach((str) => {
    if (str.length === 1) {
      output.push(str.charCodeAt(0));
    } else {
      let tempStr = str.split("");
      tempStr[0] = str.charCodeAt(0);
      tempStr[1] = str[str.length - 1];
      tempStr[str.length - 1] = str[1];
      output.push(tempStr.join(""));
    }
  });

  return output.join(" ");
};
