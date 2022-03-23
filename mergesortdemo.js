const combine = (leftArr, rightArr) => {
    
    
    var result = [];
    while (leftArr.length && rightArr.length) {

        if (leftArr[0] <= rightArr[0]) {
            result.push(leftArr.shift());
        } else {
            result.push(rightArr.shift());
        }
    }




    while (leftArr.length) {
        result.push(leftArr.shift());
    }
    while (rightArr.length) {
        result.push(rightArr.shift());
    }
    return result;
}



console.log(combine([1,2,7,9],[0,3,4,6,11]));

console.log(combine([1],[0]))