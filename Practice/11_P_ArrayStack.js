// Today we will be creating a stack using an array inside of the class ArrayStack's constructor
// A Stack operates on the principal of "First In, Last Out" 
// An example of this would be cement blocks placed on top of each other (or ABC stacking blocks)
//    I can't remove the first block placed down until all the other ones on top have been removed
// Another example would be chips in a Pringles can (: 
//    The chip that I will be eating last was the chip placed in the can first
// If it's placed in first, it's on the bottom, it can't be removed until everything else above it has been removed
// Remember, in the world exists JavaScript array methods.  They can be very helpful (:

class ArrayStack {
    constructor() {
        this.contents = []
    }

    // Use add(value) - adds the given value to the stack in the array
    // Return the stack (array)
    // Since this is using a stack structure, where should the added item go?  Front or back?

    //it should go to the back
    add(value) {
        this.contents.push(value)
        return this
    }

    // Use remove() to remove the top value from the stack 
    // Return the stack after the top value has been removed
    // We are using a stack structure, so where should the item be removed from? Front (bottom) or back (top)?
    remove() {
        this.contents.pop()
        return this
    }

    // Use top() to return the top value of the stack WITHOUT removing it
    // This should not affect or change the stack in any way
    // top() {
    //     var x = this.contents.pop()
    //     this.contents.push(x)
    //     return x
    // }

    top() {
        return this.contents[this.contents.length - 1]
    }

    // Use contains(value) to search the stack for a value
    // Return true if the value exists in the stack or return false if it doesn't

    contains(target) {
        var array = this.contents
        for (var i = 0; i < array.length; i++) {
            if (this.contents[i] == target) {
                return true
            }
        }
        return false
    }

    // contains(target) {
    //     for (var i = 0; i < this.length; i++) {
    //         console.log(this[i])

    //         if (this.contents[i] == target)
    //             if (target == this[i]) {
    //                 return true
    //             }
    //     }
    //     return false
    // }

    // Use isEmpty() to check to see if the stack is empty
    // Return true if the stack is empty or return false if it isn't
    isEmpty() {
        if (this.contents.length == 0) {
            return true
        }
        return false
    }

    // Use size() to return the amount of items in the stack
    // Does this require a loop?
    // size() {
    //     var array = this.contents
    //     var count = 0

    //     for (var i = 0; i < array.length; i++) {
    //         count++
    //     }
    //     return count
    // }

    size() {
        return this.contents.length
    }


}

//Stack those ABC blocks!
var stack = new ArrayStack();

console.log(stack.isEmpty());
console.log(stack.add("A"));
console.log(stack.isEmpty());
console.log(stack.add("B"));
console.log(stack.add("C"));
console.log(stack.top());
console.log(stack.remove());
console.log(stack.remove());
console.log(stack.add("D"));
console.log(stack.top());
console.log(stack.add("E"));
console.log(stack.add("F"));
console.log(stack.size());
console.log(stack.contains("A"));
console.log(stack.contains("Z"));
