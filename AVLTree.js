

class AVLTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
        this.height = 0;
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
        else if (value > node.value) {
            node.right = this.putNode(node.right, value);
        }
        return node;
    }
}

module.exports = AVLTree;