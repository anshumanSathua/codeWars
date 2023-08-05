/*****************************
 * Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
 * 
 */

//S1
function kebabize(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= "A" && char <= "Z") {
      if (i !== 0 && result[result.length - 1] !== "-") {
        result += "-";
      }
      result += char.toLowerCase();
    } else if (char >= "a" && char <= "z") {
      result += char;
    }
  }

  return result;
}

//S2
function kebabize(str) {
  return str
    .split("")
    .filter((v) => isNaN(parseInt(v)))
    .map((v) =>
      v.toUpperCase() === v
        ? v.replace(v, "-" + v.toLowerCase())
        : v.toLowerCase()
    )
    .join("")
    .replace(/^-/, "");
}

//S3
function kebabize(str) {
  return str
    .split("")
    .filter((x) => x.toUpperCase() != x.toLowerCase())
    .reduce((acc, curr, i) => {
      return curr.toUpperCase() == curr && i
        ? acc + "-" + curr.toLowerCase()
        : acc + curr.toLowerCase();
    }, "");
}
