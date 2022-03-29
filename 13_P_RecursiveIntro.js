// What is Recursion?
// Basically: when a function calls itself within itself

//Write a recursive function that, given a number, returns the sum of integers from one up to that given number
// Ex: given 5 would return 1+2+3+4+5 == 15
// Ex: given 2.5 would return 1+2 == 3

// function sigma(num) {

//     var sum = 0
//     for (i = 0; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }

// function recursiveSigma(num) {
//     //Endpoint => if # dips below one, stops recursive call
//     if (num <= 1) {
//         return 1
//     }

//     return num + recursiveSigma(num - 1)

// }

// console.log(recursiveSigma(5))


// Write a recursive function that, given a number, returns the product of integers up t a given number
//Ex: given 4 sould return 1*2*3*4 == 24
//Ex: given 3.5 would return 1*2*3 = 6

// function recursiveFactorial(num) {
//     num = Math.floor(num)
//     if (num <= 1) {
//         return 1
//     }

//     return num * recursiveFactorial(num - 1)

// }


// console.log(recursiveFactorial(4)) // 24
// console.log(recursiveFactorial(3.5)) // 6
// console.log(recursiveFactorial(5)) // 6

//Given a number, add the collective sum up to that number (using Fibonacci sequence)

// F0  F1-> F2 -> F3 -> F4 -> F5 -> F6 -> F7 -> F8 -> F9 -> F10
// 0    1    1     2      5     8     13        21    34     55

//F(0) = 0
//F(1) = 1
//F(2) = 1
//F(3) = 2
//F(4) = 3
//F(5) = 5
//F(6) = 8
//F(7) = 13
//F(8) = 21
//F(9) = 34

function recursiveFibonacci(num) {
    if (num == 0) {
        return 0
    }
    if (num == 1) {
        return 1
    }

    return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2)
}

console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(7))
console.log(recursiveFibonacci(8))
console.log(recursiveFibonacci(9))
console.log(recursiveFibonacci(10))