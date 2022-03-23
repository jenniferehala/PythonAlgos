  // Use addToFront(value) to add a node with the received value to the head (beginning) of the list
    // Steps:
    // 1. Create a new node 
    // 2. Attach the new node to the head of the list
    // 3. Set it to be the new head
    addToFront(value) {
        var new_node = new ListNode(value);

        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        // otherwise
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    // Use addToBack(value) to add a node with the received value to the tail (end) of the list
    // Steps:
    // 1. Create a new node 
    // 2. Attach the new node to the tail of the list 
    // 3. Set it to be the new tail
    addToBack(value) {
        var new_node = new ListNode(value);

        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        // otherwise
        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }