class Node{
    constructor(data = null) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = new Node();
    }
    append (item) {
        let current = this.head;
        let newNode = new Node(item);
        while(current.next != null) {
            current = current.next;
        }
        current.next = newNode;
        return current;
    }
    remove(item) {
        let current = this.head;
        while(current.next != null) {
            let pre = current;
            current = current.next;
            if (current.data === item) {
                pre.next = current.next;
                return "deleted"
            }
        }
        return "Item not found";
    }
    reverse() {
		let current = this.head.next;
		let prev = null;
		let next;
        while(current !== null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head.next = prev
        return true
    }
    display() {
        let current = this.head;
		let elements = [];
		while( current !== null ) {
			elements.push( current.data );
			current = current.next
		}
		return elements.join(" ");
    }
    isLoop() {
        let p1 = this.head;
        let p2 = this.head;
        while(p2.next) {
            p1 = p1.next;
            p2 = p2.next.next;
            if (p1 == p2) {
                return true;
            }
        }
        return false;
    }
}