class Stack {
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack undeflow")
        }
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0
    }
}

function reverseString(str) {
    const stack = new Stack();
    let reverseString = "";
    for (let i = 0; i< str.length; i++) {
        stack.push(str[i]);
    }

    while(!stack.isEmpty()) {
        reverseString += stack.pop();
    } 
    return reverseString;
}

reverseString("Binit") // "tiniB"
