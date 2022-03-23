//REVERSE STRING

// function reverseString(str) {
//     let newStr = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(reverseString("creature"))





//ACRONYM

// function acronym(str) {
//     let myArray = str.split(" ")
//     newStr = ""
//     // console.log(myArray);
//     for (var i = 0; i < myArray.length; i++) {
//         newStr += myArray[i][0]
//     }

//     return newStr;

// }

// console.log(acronym("there's no free lunch - gotta pay yer way"));

// function acronym(str) {
//     newStr = str[0];
//     for (var i = 1; i < str.length; i++) {
//         if (str[i] == " ") {
//             newStr += str[i + 1];
//         }
//     }
//     return newStr
// }

// console.log(acronym("there's no free lunch - gotta pay yer way"));


// Kaysee's Solution

function acronym(str) {
    var newStr = str[0].toUpperCase();

    for (var i = 1; i < str.length; i++) {
        if (str[i] == " ") {
            newStr += str[i + 1].toUpperCase();
        }
    }
    return newStr;
}


console.log(acronym("there's no free lunch - gotta pay yer way"));
