class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.prepend(data);
            return;
        }

        if (index === this.size) {
            this.append(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        newNode.prev = current;

        current.next.prev = newNode;
        current.next = newNode;

        this.size++;
    }

    delete(data) {
        if (!this.head) {
            return false;
        }

        if (this.head.data === data) {
            this.head = this.head.next;

            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }

            this.size--;
            return true;
        }

        let current = this.head;

        while (current) {
            if (current.data === data) {

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                current.prev.next = current.next;

                this.size--;
                return true;
            }

            current = current.next;
        }

        return false;
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    printForward() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.next
                ? `[${current.data}] ⇄ `
                : `[${current.data}]`;

            current = current.next;
        }

        console.log(result);
    }

    printBackward() {
        let current = this.tail;
        let result = '';

        while (current) {
            result += current.prev
                ? `[${current.data}] ⇄ `
                : `[${current.data}]`;

            current = current.prev;
        }

        console.log(result);
    }
}

const dll = new DoublyLinkedList();

console.log('=== Append ===');
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.printForward();

console.log('\n=== Prepend ===');
dll.prepend(5);
dll.printForward();

console.log('\n=== InsertAt ===');
dll.insertAt(15, 2);
dll.printForward();

console.log('\n=== Delete ===');
dll.delete(20);
dll.printForward();

console.log('\n=== Reverse ===');
dll.reverse();
dll.printForward();

console.log('\n=== Print Backward ===');
dll.printBackward();