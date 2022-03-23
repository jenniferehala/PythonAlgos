//Practice

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var disney = new ListNode("Disneyland");
console.log(disney)

var vegas = new ListNode("Las Vegas");
disney.next = vegas;
console.log(disney)

var yellow = new ListNode("Yellowstone");
vegas.next = yellow;
console.log(disney);

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }


    addToFront(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    addToBack(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }

    contains(value) {
        var runner = this.head

        while (runner) {
            if (runner.value == value) {
                return true
            }
            runner = runner.next
        }
        return false
    }

    display() {
        if (this.head == null) {
            return null;
        }

        var values = this.head.value;
        var runner = this.head.next;

        while (runner != null) {
            values += " - " + runner.value;
            runner = runner.next;
        }

        return values;
    }

    // Today we will be removing the front and back nodes of the SLL using the functions found at the bottom
    // Use removeFront() to remove the head of the linked list and return its value
    // HINTS: 
    // this.head's value needs to change
    // The connection between the old head and new head needs to be severed
    // You may want to save the current head into a temporary variable and then do your magic
    // this needs to be in a certain order, what would happen if you set this.head's value to null first?
    // or what would happen if you only set the new head and that's it?  

    removeFront() {
        if (this.head == null) {
            this.head = new_node
            this.tail = new_node

        }

        //else if ( this.head == this.tail)
        //var temp = this.head
        //this.head = null
        //this.tail = null
        //return temp.value

        else {
            var temp = this.head.next
            this.head = null
            this.head = temp

            //var temp = this.head
            //this.head = this.head.next;
            //temp.next = null
        }
        return temp

    }


    // Use removeBack() to remove the tail of the linked list and return its value
    // HINTS: 
    // Think about how can we get to the end of the list and how can we tell which one is the 2nd to last?
    // This needs to be in a certain order as well
    // Save the value of the old tail so you can return it  
    // A new tail should be marked
    // The connection between the old tail and new tail needs to be severed
    // You may want to save the current tail into a temporary variable and then do your magic
    // If you get done early try and handle the edge cases if the linked list only has one or zero nodes
    removeBack() {
        if (this.head == null) {
            this.head = new_node
            this.tail = new_node
        }

        else if (this.head == this.tail) {
            var temp = this.head
            this.head = null
            this.tail = null
            return temp.value
        }

        var runner = this.head

        while (runner !== null) {
            //while (runner !== this.tail)
            if (runner.next == this.tail) {
                var temp = this.tail
                this.tail = runner
                console.log(runner.next)
                runner.next = null
                console.log(this.tail)
                return temp.value
            } else {
                runner = runner.next
            }
        }
    }

}

var new_sll = new SinglyLinkedList();

new_sll.addToFront("Disneyland");
// console.log(new_sll.display());
new_sll.addToFront("Las Vegas");
// console.log(new_sll.display());
new_sll.addToBack("Gateway Arch");
// console.log(new_sll.display());
new_sll.addToBack("Coca Cola Museum");
console.log(new_sll.display());

// console.log(new_sll.contains("Las Vegas"));
// console.log(new_sll.contains("Mount Rushmore"));
// console.log(new_sll.contains("Statue of Liberty"));
// console.log(new_sll.contains("Disney World"));

console.log(new_sll.removeFront())
// console.log(new_sll.display());

console.log(new_sll.removeBack())
console.log(new_sll.display());


