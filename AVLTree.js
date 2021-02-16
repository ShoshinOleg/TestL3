

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
        this.root = this.balance(this.putNode(this.root, value));
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

    balance(node) {
        this.correctHeight(node);
        if (this.getBalance(node) == -2){
    
            if (this.getBalance(node.right) > 0){
                node.right = this.rotateRight(node.right);
            }
    
            return this.rotateLeft(node);
        }
        else
        if (this.getBalance(node) == 2){
            if (this.getBalance(node.left) < 0){
                node.left = this.rotateLeft(node.left);
            }
    
            return this.rotateRight(node);
        }
    
        return node;
    }

    getMin() {
        if(!this.root)
            return null;
        return this.getMinNode(this.root).value;
    }

    getMinNode(node) {
        if (!node.left) 
            return node;
        return this.getMinNode(node.left); 
    }

    deleteMin() {
        this.root = this.deleteMinNode(this.root);
    }

    deleteMinNode(node) {
        if(node.left == null) {
            return node.right;
        }

        node.left = this.deleteMinNode(node.left);
        this.correctHeight(node);
        
        return node;
    }

    
}

module.exports = AVLTree;