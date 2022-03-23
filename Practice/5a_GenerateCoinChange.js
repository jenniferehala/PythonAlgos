function generateCoinChange(cents) {
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;
    if (Math.floor(cents / 25) > 0) {
      quarter = Math.floor(cents / 25);
      cents -= (quarter*25);
    }
    if (Math.floor(cents / 10) > 0) {
      dime = Math.floor(cents / 10);
      cents -= (dime*10);
    }
    if (Math.floor(cents / 5) > 0) {
      nickel = Math.floor(cents / 5);
      cents -= (nickel*5);
    }
    penny = cents;
  
    console.log("quarter: ", quarter);
    console.log("dime: ", dime);
    console.log("nickel: ", nickel)
    console.log("penny: ", penny);
  }
  
  console.log(generateCoinChange(99));


//   function generateCoinChange(sum){
//     var arr=[25,10,5,1];
//     var change=[];
//     for(i = 0; i < arr.length; i++){
        
//       var temp = Math.floor(sum / arr[i]);

//       sum -= temp * arr[i];

//       change.push(temp);
//     }
//     return change;
//   }
  
//   console.log(generateCoinChange(94))


//   function generateCoinChange(cents) {
//     var rem = cents % 25; //remainder

//     if (rem !=0) {
//       var quarter = (cents-rem)/25;
//     } else {
//       var quarter = cents/25;
//     }

//     if (rem > 0) {
//       var rem2 = rem % 10;
//       if (rem2 != 0) {
//         var dime = (rem - rem2)/10;
//       } else {
//         var dime = rem / 10;
//       }
//     }

//     if (rem2 > 0) {
//       var rem3 = rem2 % 5;
//       if (rem3 != 0) {
//         var nickel = (rem2 - rem3)/5;
//       } else {
//         var nickel = rem2 / 5;
//       }
//     }

//     if (rem3 > 0) {
//       var penny = rem3;
//     }

//     console.log("Quarters: " + quarter)
//     console.log("Dimes: " + dime)
//     console.log("Nickels: " + nickel)
//     console.log("Pennies: " + penny)

  }

