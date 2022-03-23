// // Instructors Solution

// function parensValid(str) {
//     // use array to store just my opening parens
//     var checkParens = [];
//     // loop through the entire string and check for opening and closing parens
//     for (var i = 0; i < str.length; i++) {
//         // when we find opening parens, we will hold on to them in our array
//         if (str[i] === "(") {
//             checkParens.push(str[i]);
//         } else if (str[i] === ")" && checkParens[checkParens.length - 1] === "(") {
//             // when we find closing parens, we compare against the opening ones we have
//             checkParens.pop();
//         } else if (str[i] === ")") {
//             return false;
//         }
//     }

//     // check remaining array, if anything in it return false because the parens dont have their pair
//     if (checkParens.length > 0) {
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(parensValid("y(3(p)p(3)r)s"))
// console.log(parensValid("n(0(p)3"))
// console.log(parensValid("n)0(t(o)k"))

// Student Solutions
// function parensValid(str) {
//     var counter = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == ")") {
//             counter--;
//         }
//         if (str[i] == "(") {
//             counter++;
//         }
//     }
//     if (counter > 0) {
//         return false;
//     } else if (counter == 0) {
//         return true;
//     }
// }

// console.log(parensValid("y(3(p)p(3)r)s")) // true
// console.log(parensValid("n(0(p)3")) // false
// console.log(parensValid("n)0(t(o)k"))// false

// function parensValid(str) {
//     var openParens = [];
//     var closeParens = [];
//     for (let i = 0; i < str.length; i++) {
//         if (closeParens.length > openParens.length) {
//             return false;
//         }
//         if (str[i] == "(") {
//             openParens.push(str[i]);
//         }
//         if (str[i] == ")") {
//             closeParens.push(str[i]);
//         }
//     }
//     if (openParens.length == closeParens.length) {
//         return true

//     }
//     return false;
// }

// console.log(parensValid("y(3(p)p(3)r)s"))
// console.log(parensValid("n(0(p)3"))
// console.log(parensValid("n)0(t(o)k"))

function bracesValid(str) {
    // checkBraces, checkParens, checkBrackets variable
    //for loop
    let Braces = 0
    let Parens = 0
    let Brackets = 0

    for (var i = 0; i < str.length; i++) {
        if (Braces < 0 || Brackets < 0 || Parens < 0) {
            return false
        }
        //Braces
        if (str[i] == "{") {
            Braces++
        }
        if (str[i] == "}") {
            Braces--
        }
        //Brackets
        if (str[i] == "[") {
            Brackets++
        }
        if (str[i] == "]") {
            Brackets--
        }
        // Parens
        if (str[i] == "(") {
            Parens++
        }
        if (str[i] == ")") {
            Parens--
        }
    }
    if (Braces == 0 && Brackets == 0 && Parens == 0) {
        return true
    } else { return false }

}

console.log(bracesValid("({[({})]})"))
console.log(bracesValid("d(i{a}l[t]o)n{el"))
console.log(bracesValid("{{[a]}}(){bcd}{()}"))