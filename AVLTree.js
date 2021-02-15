

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
        } 
        else if(value > node.value) {
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

    getHeight(node) {
        if(!node) {
            return 0;
        }
        return node.height;
    }
}

module.exports = AVLTree;