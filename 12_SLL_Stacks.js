class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//This is creating the stack itself.
//Head is where things get added (beginning) to the stack so it's at the top
//Tail is the last thing that needs to be removed so it's at the bottom
//The order of the stack  will go from left to right (1st Node) to the left (last node)
// For example: 3rd Node (head) - 2nd Node - 1st Node (tail)

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Use add(value) to add something to the top (head) of the stack
    // Return the added node's value
    // HINTS - Need to create the node before you can add it
    // Remember to connect the node to the top of the stack first and then name it the ne
    // Edge Case - what if the list is empty?

    add(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node
            this.tail = new_node
        }
        else {
            new_node.next = this.head
            this.head = new_node
        }

        return new_node.value
    }

    //Use remove() to take away the node on top of the stack
    // Return the removed node's value
    // HINTS - The head  is the top of the stack
    // We need to save the head in a var before we remove it so we can return it's value
    // Name the new head  and then cut the connection to the old head
    // Edge Cases - what if the list is empty? What if there's only one node in the list

    // remove(value) {

    //     var runner = this.head

    //     while (runner != this.tail) {
    //         if (runner.next = this.tail) {
    //             var temp = this.head
    //             this.tail = runner
    //             runner.next = null
    //             return temp.value
    //         }
    //         else {
    //             runner = runner.next
    //         }

    //     }
    // }

    // Use top() to return the value of the top node of the stack without removing it 
    // Edge Case - What if the list is empty?

    top() {

    }

    // Use contains(value) to search the stack for a received value
    // Return true if the value is in the stack, return false if it's not
    // There are no built in "stack" methods like "includes" in JS
    // So how do we go through a whole stack? Wanna go for a run...? (:
    contains(value) {

    }

    //Use isEmpty to see if the stack is empty
    // Return true if the stack is empty, return false if it's not 
    isEmpty() {
        if (this.head == null) {
            return true
        }
        return false
    }

    // Use size() to count all the nodes in the stack
    // Return the total number of nodes the stack
    // Edge Case - What if the list is empty?
    size() {

    }

    //This is given to you for your convenience, nothing to do here (:
    display() {
        if (this.head == null) {
            return null;
        }
        var values = this.head.value
        var runner = this.head.next

        while (runner != null) {
            values += " - " + runner.value;
            runner = runner.next;
        }
        return values;
    }

}

var x = new SLLStack();

console.log(x.isEmpty()); // true
console.log(x.add("A"));  // A
console.log(x.display()); // A
console.log(x.isEmpty()); // false

console.log(x.add("B"));  // B
console.log(x.add("C"));  // C
console.log(x.display()); // C - B - A
// console.log(x.top()); // C

// console.log(x.remove());  // C
// console.log(x.remove());  // B
// console.log(x.display()); // A

// console.log(x.add("D"));  // D
// console.log(x.add("E"));  // E
// console.log(x.display()); // E - D - A
// console.lot(x.top()); // E
// console.lot(x.size()); // 3
// console.lot(x.contains("E")); // true
// console.lot(x.contains("Z")); // false

