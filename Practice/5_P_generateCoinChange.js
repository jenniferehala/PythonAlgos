// Use the generateCoinChange function below to receive a dollar (decimal) amount with change. 
// Convert that value to the number of quarters, dimes, nickels, and pennies it would have.
// It should count the number or quarters first then work it's way down from there
// This can return a string or an object or whatever you'd like

// Example: generateCoinChange(.67) would return 2 quarters, 1 dime, 1 nickel, 2 pennies
// Example: generateCoinChange(0.77) would return 3 quarters, 2 pennies
// Example: generateCoinChange(2.85) would return 11 quarters, 1 dime
// Example: generateCoinChange(4.57) would return 18 quarters, 1 nickel, 2 pennies

function generateCoinChange(input) {
    var quarter = 0
    var dime = 0
    var nickel = 0
    var penny = 0


    // create if statements with given number minus the amount of each coin
    // if the value can contain x = .25; create while loop until it can no longer contain
    // create if statements with whiles loops with each coin until reach penny
    // add each coin in each successful while loop

    while (input >= 0.25) {
        quarter += 1
        input -= 0.25
    }

    while (input >= 0.10) {
        dime += 1
        input -= 0.10
    }
    while (input >= 0.05) {
        nickel += 1
        input -= 0.05
    }
    while (input >= 0.01) {
        penny += 1
        input -= 0.01
    }
    var change = [quarter + " quarters", dime + " dime", nickel + " nickel", penny + " penny"]
    return change
}

console.log(generateCoinChange(.67))
console.log(generateCoinChange(.67))
console.log(generateCoinChange(0.77))
console.log(generateCoinChange(2.85))
console.log(generateCoinChange(4.57)) 