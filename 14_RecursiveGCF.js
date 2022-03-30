// Greatest Common Factor
// Given two integers, create recursiveGreatestCommonFactor(num1, num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// 1) if num1 === num2, that number is the greatest common factor;
// 2) if a>b, then you can remove b from a, which gets you closer to the GCF;
// 3) if b>a, then you can remove a from b, which gets you closer to the GCF;
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF ’s reach. You should be able to compute rGCF(123456,987654) .

// function recursiveGreatestCommonFactor(num1, num2) {
//     if (num2 === 0) {
//         return num1
//     } else {
//         return recursiveGreatestCommonFactor(num2, num1 % num2);
//     }
// }

// console.log(recursiveGreatestCommonFactor(50, 180)); // 10
// console.log(recursiveGreatestCommonFactor(7, 35)); // 7
// console.log(recursiveGreatestCommonFactor(65, 95)); // 5
// console.log(recursiveGreatestCommonFactor(123456, 987654)); // 6
// console.log(recursiveGreatestCommonFactor(102, 1000)); // 2
// console.log(recursiveGreatestCommonFactor(7, 13)); // 1

// https://github.com/kcwebers/CodingDojoAlgos/blob/main/Chapter09_Recursion/recursiveGreatestCommonFactor.js

//Instructor Solution


// function recursiveGreatestCommonFactor(num1, num2) {
//     console.log(num1 + " " + num2)
//     if (num1 > num2) {
//         return recursiveGreatestCommonFactor(num1-num2, num2);
//     } else if(num2 > num1 ) {
//         return recursiveGreatestCommonFactor(num1, num2-num1);
//     } else {
//         return num1
//     }
// }

// console.log(recursiveGreatestCommonFactor(50, 180)); // 10
// console.log(recursiveGreatestCommonFactor(7, 35)); // 7

// =============================================
//Other Solution
// =============================================

function recursiveGreatestCommonFactor(num1, num2){
    if(num1 % num2 !=0){
        console.log(num2);
        return recursiveGreatestCommonFactor(num2, num1 % num2)
    }

    return num2
}

console.log(recursiveGreatestCommonFactor(50, 180)); // 10
// console.log(recursiveGreatestCommonFactor(7, 35)); // 7
// console.log(recursiveGreatestCommonFactor(65, 95)); // 5
// console.log(recursiveGreatestCommonFactor(123456, 987654)); // 6
// console.log(recursiveGreatestCommonFactor(102, 1000)); // 2
// console.log(recursiveGreatestCommonFactor(7, 13)); // 1

// =============================================
//Other Solution
// =============================================


function recursiveGreatestCommonFactor(num1, num2){
    var a = num1;
    var b = num2;
    if (a === b){
        return a;
    }    

    else if (a > b){
        a = a-b
        return recursiveGreatestCommonFactor(a, b);
    }

    else {
        b = b-a
        return recursiveGreatestCommonFactor(a, b);
    }
} 

console.log(recursiveGreatestCommonFactor(50, 180)); // 10
console.log(recursiveGreatestCommonFactor(7, 35)); // 7



// =============================================
// Binary Search (for today/tomorrow)
// =============================================

// Write a function that, given a sorted array and a value, determines whether the value is found within the array through 
// recursively searching, and returns the index. Binary Search works by checking whether the value given is greater than or 
// less than a midway point, which is why the given array must be sorted. 
// Also, even though there's only an array and value given, you can add additional parameters to your function.
// Return -1 if the number is not in the array

// val = 9
// arr = [1,2,3,5,7,9,10,11,13,14,15,56,78]

// [1,2,3,5,7,9,10      |        11,13,14,15,56,78] <----- 9 is less than halfway so now you can search the left side only
// [1,2,3,5,       |        7,9,10] <------  9 is greater than halfway so you can search the right side only
// [7,      |       9,10] <------ depending on where you split,9 is greater than halfway
// [9,     |      10] <------ whittle down to 1 or 2 items to check and solve!


// function recursiveBinarySearch(arr) {
//         var val;
//         var leftarr = []
//         var rightarr = []
//         if (  )
//             recursiveBinarySearch( , )
            

// }

// [1, 2], ---> -2
// [1, 2], ---> 4
// [1, 2], ---> 1
// [1,2,2], ---> 2
// [], ---> 7
// [1,2,2,2,2,2,2,4,5,5,5,5,6,6,6], ---> 2
// [1, 1, 1, 1, 1], ---> 1
// [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10], ---> 8
// make sure to test all given scenarios!
// extra challenge: don't use built-in functions such as splice() or slice(), 
// with the exception of rounding functions (Math.floor(), Math.ceil())