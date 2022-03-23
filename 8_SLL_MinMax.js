class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var disney = new ListNode("Disneyland");

var vegas = new ListNode("Las Vegas");
disney.next = vegas;

var yellow = new ListNode("Yellowstone");
vegas.next = yellow;

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
    removeFront() {
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
                runner.next = null
                return temp.value
            } else {
                runner = runner.next
            }
        }
    }

    moveMinToFront() {
        var min = this.head
        var runner = this.head
        var walker = this.head

        while (runner.next != null) {
            if (runner.next.value < min.value) {
                min = runner.next
                walker = runner
            }
            runner = runner.next
        }
        if (min == this.head) {
            console.log("min is already at the head")
        }

        walker.next = min.next
        min.next = this.head
        this.head = min
    }

    moveMaxToBack() {
        var max = this.head
        var runner = this.head
        var walker = this.head
        while (runner.next != null) {
            if (runner.next.value > max.value) {
                max = runner.next
                walker = runner
            }
            runner = runner.next
        }
        if (max == runner) {
            console.log("Max is already at back")
            return
        }
        if (max == this.head) { // if the max value is at the front of the list
            this.head = this.head.next // move max node over to make it 2nd on the list
        }
        walker.next = max.next
        max.next = this.tail.next
        this.tail.next = max
    }
}

var new_sll = new SinglyLinkedList();

new_sll.addToFront(12);
new_sll.addToFront(60);
new_sll.addToBack(7);
new_sll.addToBack(11);
// console.log(new_sll.display());
// new_sll.removeFront();
// console.log(new_sll.display());
// new_sll.removeBack();
// console.log(new_sll.display());

console.log(new_sll.display());
new_sll.moveMinToFront()
console.log(new_sll.display());
new_sll.moveMaxToBack()
console.log(new_sll.display());




