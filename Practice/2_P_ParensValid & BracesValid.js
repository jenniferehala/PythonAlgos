function parensValid(str) {
    myArray = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            myArray.push(str[i])
            console.log(myArray);
        }
        if (str[i] == ")" && myArray[myArray.length - 1] == "(") {
            myArray.pop()
        }
    }
    if (myArray == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(parensValid("y(3(p)p(3)r)s"))
console.log(parensValid("n(0(p)3"))
console.log(parensValid("n)0(t(o)k"))