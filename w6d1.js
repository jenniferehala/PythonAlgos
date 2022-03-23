function sigma(num) {
    var sum = 0
    for (i = 0 ; i <= num ; i ++) {
        sum += i
    }
    return sum
}


function recursiveSigma(num) {
    if (num <= 1) {
        return 1
    }
    
    return num * recursiveSigma(num - 1)
}

console.log(recursiveSigma(4))