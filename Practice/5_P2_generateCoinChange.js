// Use the generateCoinChange function below to receive a dollar (decimal) amount with change. 
// Covert that value to the number of quarters, dimes, nickels, and pennies it would have.
// It should count the number or quarters first then work it's way down from there
// This can return a string or an object or whatever you'd like

// Example: generateCoinChange(.67) would return 2 quarters, 1 dime, 1 nickel, 2 pennies
// Example: generateCoinChange(0.77) would return 3 quarters, 2 pennies
// Example: generateCoinChange(2.85) would return 11 quarters, 1 dime
// Example: generateCoinChange(4.57) would return 18 quarters, 1 nickel, 2 pennies

function generateCoinChange(input) {

    // declare variable amount of quarter, dime, nickel, penny
    //input should be measured against each and made to give an output so .67-.25 - .42 so 1 quarter, then - .10 (as many times as possible  4 x), then -.5, -.1 

    var quarter = 0
    var dime = 0
    var nickel = 0
    var penny = 0

    while (input > 0.25) {
        input = Math.floor(input - 0.25)
        quarter++
    }
    while (input > .10) {
        input = Math.floor(input - 0.10)
        dime++
    }
    while (input > 0.05) {
        input = Math.floor(input - 0.05)
        nickel++
    }
    while (input > 0.01) {
        input = Math.floor(input - 0.01)
        penny++
    }
    return (quarter + " quarter " + dime + " dime " + nickel + " nickel " + penny + " penny ")
}

console.log(generateCoinChange(.67))
console.log(generateCoinChange(0.77))
console.log(generateCoinChange(2.85))
console.log(generateCoinChange(4.57))

// Example: generateCoinChange(.67) would return 2 quarters, 1 dime, 1 nickel, 2 pennies
// Example: generateCoinChange(0.77) would return 3 quarters, 2 pennies
// Example: generateCoinChange(2.85) would return 11 quarters, 1 dime
// Example: generateCoinChange(4.57) would return 18 quarters, 1 nickel, 2 pennies