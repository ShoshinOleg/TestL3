

class AVLTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.putNode(this.root, value);
    }

    putNode(node, value) {
        if(!node) {
            return new AVLTreeNode(value);
        }
        if(value < node.value) {
            node.left = this.putNode(node.left, value);
        } else if(value > node.value) {
            node.right = this.putNode(node.right, value);
        }
        this.correctHeight(node);

        return node;
    }

    correctHeight(node) {
        node.height = Math.max(this.getHeight(node.left),
                                this.getHeight(node.right))
                                 + 1;
    }

    getBalance(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    getHeight(node) {
        if(!node) {
            return 0;
        }
        return node.height;
    }

    rotateLeft(nodeA) {
        let nodeB = nodeA.right;
        nodeA.right = nodeB.left;
        nodeB.left = nodeA;
        this.correctHeight(nodeB);

        return nodeB;
    }

    rotateRight(nodeB) {
        let nodeA = nodeB.left;
        nodeB.left = nodeA.right;
        nodeA.right = nodeB;
        this.correctHeight(nodeA);

        return nodeA;
    }
}

module.exports = AVLTree;