class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) return null;

        const value = this.top.data;
        this.top = this.top.next;
        this.size--;

        return value;
    }

    peek() {
        return this.top ? this.top.data : null;
    }

    isEmpty() {
        return this.size === 0;
    }
}

class MinStack {
    constructor() {
        this.stack = new Stack();
        this.minStack = new Stack();
    }

    push(value) {
        this.stack.push(value);

        if (
            this.minStack.isEmpty() ||
            value <= this.minStack.peek()
        ) {
            this.minStack.push(value);
        }
    }

    pop() {
        const removed = this.stack.pop();

        if (
            removed !== null &&
            removed === this.minStack.peek()
        ) {
            this.minStack.pop();
        }

        return removed;
    }

    peek() {
        return this.stack.peek();
    }

    getMin() {
        return this.minStack.peek();
    }
}

const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

console.log("getMin() =", ms.getMin());

ms.pop();
console.log("setelah pop =", ms.getMin());

ms.pop();
console.log("setelah pop lagi =", ms.getMin());