//Implement reverseString(str) that takes in a String and then returns a string of the same Length, but with all the characters reversed

//Example: "creature" ---> "erutaerc"

//** Don't use the built-in-reverse() method!
// function reverseString(str) {
//     var newString = ""
// create a for loop to run through each letter
// for (var i = str.length - 1; i >= 0; i--) {
//create new string variable to hold new output
//         newString += str[i]
//     }
//     return newString
// }

// console.log(reverseString("creature"))



//ACRONYM

//Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).
//Example: "there's no free lunch --- gotta payer yer way"--->  "TNFL-GPYW"

function acronym(str) {
    //var for new output
    // account for the first letter
    var newStr = str[0];
    //for loop
    for (var i = 0; i < str.length; i++) {
        //if statement ( which takes the letter after a space)
        if (str[i] == " ") {
            newStr += str[i + 1]
        }
    }

    return newStr.toUpperCase()
}

console.log(acronym("there's no free lunch - gotta pay yer way"));

