/******************
 * 
 * Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
 * 
 */

//S1
const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

//S2
function greet(name, owner) {
  return `Hello ${name == owner ? "boss" : "guest"}`;
}
