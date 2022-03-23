
//Implement reverseString(str) that takes in a String and then returns a string of the same Length, but with all the characters reversed

//Example: "creature" ---> "erutaerc"

//** Don't use the built-in-reverse() method!
function reverseString(str) {
  let newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString("creature"))



//Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).
//Example: "there's no free lunch --- gotta payer yer way"--->  "TNFL-GPYW"
// Not sure where solution is from below

function acronym(text) {
  return text
    .split(/\s/)
    .reduce(function (accumulator, word) {
      return accumulator + word.charAt(0);
    }, '');
}

var str = (acronym("there's no free lunch - gotta pay yer way"));
var res = str.toUpperCase();
console.log(res);