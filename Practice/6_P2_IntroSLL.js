//constructor function (like init) 
//setting up attributes and their values
//create an instance of a node

class ListNode {

    constructor(value) {
        this.value = value;
        this.next = null;

    }
}

//shove the instance of that node into the list (which i think we declare ""new_sll")

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1. Create a new node 
    // 2. Attach the new node to the head of the list
    // 3. Set it to be the new head

    addToFront(value) {
        var new_node = new ListNode(value);
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
            //its head and tail bc its only node in there
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
            this.tail.next = new_node
            this.tail = new_node
        }
    }

    //     addToBack(value) {
    //         var new_node = new ListNode(value);
    //         if (this.head == null) {
    //             this.head = new_node;
    //             this.tail = new_node;
    //         }
    //         while (runner = ! null) {
    //             if (runner == null) {
    //                 runner.next = new_node
    //                 return runner
    //             }
    //             runner = runner.next
    //         }
    //     }
    // }

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

    // Use contains(value) to return true if value received is in the linked list, as a node value, or return false
    // Steps: 
    // 1. Create a runner that starts at the head
    // 2. While loop that goes until the runner encounters null 
    // 3. If we find the value in one of the nodes, return true
    // 4. If we don't, go to the next node using runner.next()
    contains(value) {
        if (this.head == null) {
            return null;
        }
        var runner = this.head
        while (runner != null) {

            if (runner.value == value) {
                return true
            }

            runner = runner.next
        }
        return false
    }
}

var new_sll = new SinglyLinkedList();
new_sll.addToFront("Disneyland");
new_sll.addToFront("Las Vegas");
new_sll.addToBack("Gateway Arch");
new_sll.addToBack("Coca Cola Museum");
console.log(new_sll.contains("Las Vegas"));
console.log(new_sll.contains("Gateway Arch"));
console.log(new_sll.contains("Mount Rushmore"));
console.log(new_sll.contains("Statue of Liberty"));
console.log(new_sll.contains("Disney World"));




