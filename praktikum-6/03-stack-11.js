class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }

    removeHead() {
        if (!this.head) {
            return null;
        }

        const removed = this.head.data;

        this.head = this.head.next;

        this.length--;

        return removed;
    }

    peekHead() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    print() {
        if (!this.head) {
            console.log('[Stack kosong]');
            return;
        }

        let current = this.head;
        let result = '';

        while (current) {
            result += current.next
                ? `[${current.data}] → `
                : `[${current.data}]`;

            current = current.next;
        }

        console.log(result);
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.peekHead();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.size();
    }

    print() {
        this.list.print();
    }
}

const stack = new Stack();

console.log('=== Push ===');

stack.push('Buka File');
stack.push('Edit Teks');
stack.push('Simpan File');
stack.push('Hapus Baris');

stack.print();

console.log('\nTop Stack:', stack.peek());

console.log('\n=== Undo ===');

console.log('Undo:', stack.pop());
console.log('Undo:', stack.pop());

stack.print();

console.log('\nJumlah Stack:', stack.size());

console.log('\nApakah Stack kosong?', stack.isEmpty());