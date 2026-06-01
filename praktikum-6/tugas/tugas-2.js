class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function buatLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }

    const head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

function printList(head) {
    let current = head;
    let result = '';

    while (current) {
        result += current.next
            ? `[${current.data}] → `
            : `[${current.data}]`;

        current = current.next;
    }

    console.log(result);
}

function palindromLL(head) {
    const arr = [];

    let current = head;

    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function hapusNDariAkhir(head, n) {
    const dummy = new Node(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}

function tengahLinkedList(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

console.log('=== Palindrome ===');

const p1 = buatLinkedList([1, 2, 3, 2, 1]);
const p2 = buatLinkedList([1, 2, 2, 1]);
const p3 = buatLinkedList([1, 2, 3]);

console.log(palindromLL(p1));
console.log(palindromLL(p2));
console.log(palindromLL(p3));

console.log('\n=== Hapus N dari Akhir ===');

const h1 = buatLinkedList([1, 2, 3, 4, 5]);
const h2 = buatLinkedList([10, 20, 30, 40]);
const h3 = buatLinkedList([7, 8, 9]);

printList(hapusNDariAkhir(h1, 2));
printList(hapusNDariAkhir(h2, 1));
printList(hapusNDariAkhir(h3, 3));

console.log('\n=== Tengah Linked List ===');

const t1 = buatLinkedList([1, 2, 3, 4, 5]);
const t2 = buatLinkedList([10, 20, 30, 40, 50, 60]);
const t3 = buatLinkedList([7, 8, 9]);

console.log(tengahLinkedList(t1).data);
console.log(tengahLinkedList(t2).data);
console.log(tengahLinkedList(t3).data);