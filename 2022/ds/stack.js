class Stack {
    constructor() {
        this.items = []
    }

    push (value) {
        return this.items.push(value)
    }

    pop () {
        if (this.isEmpty()) {
            throw new Error("stack underflow")
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    

    size () {
        return this.items.length;
    }

    

    peak() {
        return this.items[this.size() -  1];
    }

    clear () {
        this.items = []
    }
}
