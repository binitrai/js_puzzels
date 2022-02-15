/*
Reverse singly linked list
*/

// Create singly linked list node first

function Node(value) {
    this.value = value;
    this.next = null;
}

// Create LinkedList nodes;
const head = new Node(1);

const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)

// Update the pointers
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;


// reverseSinglyLinkedList Iterative solution

function reverseSinglyLinkedList(head) {
    let node = head;
    let previous;
    let tempNode;
    while(node) {
        tempNode = node.next;
        node.next = previous;
        previous = node;
        node = tempNode;
    }
    return previous;
}

function traverse(head) {
    while(head.next) {
        console.log(head.value)// do operation
        head = head.next;
    }
}
