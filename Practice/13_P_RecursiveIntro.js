// What is Recursion?
// Basically: when a function calls itself within itself

//Write a recursive function that, given a number, returns the sum of integers from one up to that given number
// Ex: given 5 would return 1+2+3+4+5 == 15
// Ex: given 2.5 would return 1+2 == 3

function sigma(num) {

    var sum = 0
    for (i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log(sigma(5)) //15

// RECURSIVE WAY BELOW

function recursiveSigma(num) {
    //Endpoint => if # dips below one, stops recursive call
    if (num <= 1) {
        return 1
    }

    return num + recursiveSigma(num - 1)

}

console.log(recursiveSigma(5)) // 15


// Write a recursive function that, given a number, returns the product of integers up t a given number
//Ex: given 4 sould return 1*2*3*4 == 24
//Ex: given 3.5 would return 1*2*3 = 6

function recursiveFactorial(num) {
    num = Math.floor(num)
    if (num <= 1) {
        return 1
    }

    return num * recursiveFactorial(num - 1)

}


console.log(recursiveFactorial(4)) // 24
console.log(recursiveFactorial(3.5)) // 6
console.log(recursiveFactorial(5)) // 6

//Given a number, add the collective sum up to that number (using Fibonacci sequence)

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

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(2)) // 1
console.log(recursiveFibonacci(3)) // 2
console.log(recursiveFibonacci(4)) // 3
console.log(recursiveFibonacci(5)) // 5
console.log(recursiveFibonacci(6)) // 8
console.log(recursiveFibonacci(7)) // 13
console.log(recursiveFibonacci(8)) // 21
console.log(recursiveFibonacci(9)) // 34