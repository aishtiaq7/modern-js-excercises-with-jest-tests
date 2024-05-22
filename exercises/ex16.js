/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  const applyCasing = (input, casing) => {
    switch (casing) {
      case "camel":
        return input.split(' ').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
      case "pascal":
        return input.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('');
      case "snake":
        return input.split(' ').join('_');
      case "kebab":
        return input.split(' ').join('-');
      case "title":
        return input.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
      case "vowel":
        return input.replace(/[aeiou]/g, char => char.toUpperCase());
      case "consonant":
        return input.replace(/[^aeiou]/g, char => char.toUpperCase());
      case "upper":
        return input.toUpperCase();
      case "lower":
        return input.toLowerCase();
      default:
        return input;
    }
  };

  if (Array.isArray(caze)) {
    for (const casing of caze) {
      input = applyCasing(input, casing);
    }
    return input;
  } else {
    return applyCasing(input, caze);
  }
};

/*
  Time Complexity: O(n * m), where n is the length of the input string and m is the number of casing options
  Space Complexity: O(n)

  REGEX REF: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet
  
*/


console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
