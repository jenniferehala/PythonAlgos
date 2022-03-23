// Use the generateCoinChange function below to receive a dollar (decimal) amount with change. 
// Covert that value to the number of quarters, dimes, nickels, and pennies it would have.
// It should count the number or quarters first then work it's way down from there
// This can return a string or an object or whatever you'd like

// Example: generateCoinChange(.67) would return 2 quarters, 1 dime, 1 nickel, 2 pennies
// Example: generateCoinChange(0.77) would return 3 quarters, 2 pennies
// Example: generateCoinChange(2.85) would return 11 quarters, 1 dime
// Example: generateCoinChange(4.57) would return 18 quarters, 1 nickel, 2 pennies

function generateCoinChange(input) {
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var pennies = 0;
    while (input >= .25 )
    {
        quarter += 1 
        input -= .25
    }
    while (input >= .10)
    {
        dime += 1
        input -= .10
    }
    while (input >= .05)
    {
        nickel += 1
        input -= .05
    }
    while (input >= .01)
    {
        pennies += 1
        input -= .01
    }

    var output = "There are " + quarter + " quarter(s) " + dime + " dime(s) " + nickel + " nickel(s) " + pennies + " pennies"

    console.log(output)
     
}

console.log(generateCoinChange(.67))
console.log(generateCoinChange(.67)) 
console.log(generateCoinChange(0.77))
console.log(generateCoinChange(2.85)) 
console.log(generateCoinChange(4.57)) 