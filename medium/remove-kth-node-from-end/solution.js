// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head, k) {
    let fast = head;
    let slow = head;

    let counter = 0;

    while (counter < k) {
        fast = fast.next;
        if (!fast) {
            head.value = head.next.value;
            head.next = head.next.next;
            return;
        }
        counter++;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

}