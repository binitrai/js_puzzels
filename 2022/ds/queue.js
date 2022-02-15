class Queue {
    constructor() {
        this.items = [];
    }

    enqueue (item) {
        return this.items.push(item);
    }

    dequeue () {
        return this.items.shift();
    }
}


// in above implementation we are using shift operation that has O(n) time complexity
// if we want to achive in less complexity then we use map

class Q {
    constructor () {
        this.head = 0;
        this.tail = 0;
        this.items = {}
    }

    enQ (item) {
        this.items[this.tail] = item;
        this.tail += 1;
    }
    deQ () {
        if (this.head === this.tail) {
            return undefined;
        }
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head += 1;
        return item;
    }

    peek() {
        return this.items[this.head];
      }

    get length() {
        return this.tail - this.head;
      }
}
