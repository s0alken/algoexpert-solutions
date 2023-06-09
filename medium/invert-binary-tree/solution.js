function invertBinaryTree(tree) {
    if (!tree) return;

    const temp = tree.right;

    tree.right = tree.left;
    tree.left = temp;

    invertBinaryTree(tree.right);
    invertBinaryTree(tree.left);
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}