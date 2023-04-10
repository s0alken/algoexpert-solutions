function middleNode(linkedList) {
    let slowNode = linkedList;
    let fastNode = linkedList;

    while (fastNode && fastNode.next) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }

    return slowNode;
}