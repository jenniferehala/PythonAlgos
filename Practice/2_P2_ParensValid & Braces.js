// // PARENS VALID

// // Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid

// //Example 1: "y(3(p)p(3)r)s" --> true
// //Example 2: "n(0(p)3" --> false
// //Example 3: "n)0(t(o)k" --> false

// //hint: consider using an array or object to solve

// //check entire string, return true/false
// //every single oening parens has a opening parens
// // Only care about the parens in the string

// function parensValid(str) {

//     //add close and open parens variable
//     let openParens = []
//     let closeParens = []
//     //for loop
//     for (var i = 0; i < str.length; i++) {
//         //account for out of order
//         if (closeParens.length > openParens.length) {
//             return false
//         }
//         // push open parens into openParens
//         if (str[i] == "(") {
//             openParens.push(str[i])
//         }
//         // push close parens into closeParens
//         if (str[i] == ")") {
//             closeParens.push(str[i])
//         }
//     }
//     // if openParens.length - closeParens.length =0, then valid
//     if (openParens.length - closeParens.length == 0) {
//         return true
//     }
//     // else not valid
//     else { return false }
// }

// console.log(parensValid("y(3(p)p(3)r)s"))
// console.log(parensValid("n(0(p)3"))
// console.log(parensValid("n)0(t(o)k"))







// BRACES VALID

// Given a string, returns whether the sequence of various parenteses, braces and brackets wthin it are valid

//Example 1: ""({[({})]})" --> true
//Example 2: "d(i{a}l[t]o)n{el" --> false
//Example 3: "{{[a]}}(){bcd}{()}" --> true

function bracesValid(str) {
    // checkBraces, checkParens, checkBrackets variable
    //for loop
    let checkBraces = 0
    let checkParens = 0
    let checkBrackets = 0

    for (var i = 0; i < str.length; i++) {
        if (checkBraces < 0 | checkBrackets < 0 | checkParens < 0) {
            return false
        }
        //Braces
        if (str[i] == "{") {
            checkBraces += 1
        }
        if (str[i] == "}") {
            checkBraces -= 1
        }
        //Brackets
        if (str[i] == "[") {
            checkBrackets += 1
        }
        if (str[i] == "]") {
            checkBrackets -= 1
        }
        // Parens
        if (str[i] == "(") {
            checkParens += 1
        }
        if (str[i] == ")") {
            checkParens -= 1
        }
    }
    if (checkBraces == 0 && checkBrackets == 0 && checkParens == 0) {
        return true
    } else {
        return false
    }

}

console.log(bracesValid("({[({})]})"))
console.log(bracesValid("d(i{a}l[t]o)n{el"))
console.log(bracesValid("{{[a]}}(){bcd}{()}"))
