// Use the bookIndex function below to receive a sorted array of page numbers
// and then return a STRING that combines consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12,14,15,16,17] returns "1, 3-5, 7-8, 10, 12, 14-17"

// HINTS: 
// You'll want a way to look at the current value and then look at the next one to see if it's one higher
// If it is, then you've found a range, if it's not, you haven't
// You could create a string and add to it, or get rid of the values in the array that aren't needed 
//   and convert to a string, or whatever way you come up with!

//create a string and add to it
//or get rid of the values in the array that aren't needed and conver to a string
function bookIndex(arr) {
    bookArr = []
    //for loop
    for (var i = 0; i < arr.length; i++) {
        //way to look at current value
        if (arr[i + 1] == arr[i] + 1) {
            var start = arr[i]
            while (arr[i + 1] == arr[i] + 1) {
                i++
                var end = arr[i];
            }
            bookArr.push(start + "-" + end)
        }

    }
    return bookArr
}


console.log(bookIndex([1, 3, 4, 5, 7, 8, 10, 12, 14, 15, 16, 17]))


