// SLL - node
// head -> beginning node
// they have an order?
// tail -> end node
//Notes
//When list empty: head node = null, tail node = null
// Do they have index positions like arrays?
//no, nodes do not have index positions
//nodes point to each other anywhere in memory?
// What's the benefit?
//inserting and deleting items is faster
//you don't have to shift every item like an array
//What do i need to know?
//where the start head node is
//where the end tail node is
//all the stops in-between (the other nodes)
//What is a Class in SLL nodes?
//class creates node instances that we connect together
//each node will have:
//(1) value
//(2) next property
//so we know which node its connected to

//this is how we create the blocks that are attached to with the string
//everytime we call ListNode, its going to create a node that has an attribute of value
// and its going to be equal to whatever value we pass in
// going to have next attribute - important one
class ListNode {
    // Create class that has a constructor function and the value is what we pass in
    //it has a next attribute that's going to hook it up  in the list
    constructor(value) {
        this.value = value;
        this.next = null;
        // this is how you attach them together
        // I would have to say this.next is equal to...
        // like if i was going to put something in the front i would say alright
        // im creating this new node and saying the NEXT attribute is equal to the HEAD (this.next = this.head?) right? The first one, in the list

    }
}

//Two different classes: 
// (1) That BUILDS the node itself (node we're going to connect together)
// (2) Other class is going to be the class that actually hooks them up
// --> sets up the list where they're all just kind of connected


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

//create new instance of ListNode
//each instance of ListNode has a next value that we set equal to the next nodes on the list










var disney = new ListNode("Disney World");
// ListNode { value: 'Disney World', next: null}

var vegas = new ListNode("Las Vegas")
disney.next = vegas;
// ListNode { value: 'Disney World', next: ListNode { value: 'Las Vegas', next: null} }

var yellow = new ListNode("Yellowstone")
vegas.next = yellow;
// ListNode { value: 'Disney World', next: ListNode { value: 'Las Vegas', next: Listnode { value: 'Yellowstone', next:null}}}

// Use addToFront(value) to add a node with the received value to the head (beginning) of the list
// Steps:
// 1. Create a new node 
// 2. Attach the new node to the head of the list
// 3. Set it to be the new head
addToFront(value) { }

addToBack(value) { }

var new_sll = new SinglyLinkedList();
new_sll.addToFront("Disneyland");
console.log(new_sll.display());

new_sll.addToFront("Las Vegas");
console.log(new_sll.display());

new_sll.addToBack("Gateway Arch");
console.log(new_sll.display());

new_sll.addToBack("Coca Cola Museum");
console.log(new_sll.display());

console.log(new_sll.contains("Las Vegas"));
console.log(new_sll.contains("Mount Rushmore"));
console.log(new_sll.contains("Statue of Liberty"));
console.log(new_sll.contains("Disney World"));


