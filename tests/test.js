const t = require('tap');
const AVLTree = require('../AVLTree');

t.test('AVLTree', (t) => {
    let tree;
    t.beforeEach((done, t) => {
        tree = new AVLTree();
        done();
    });

    t.test('Tree exists', (t) => {
        t.ok(tree, 'Tree exists');
        t.end();
    });

    t.test('Insert', (t) => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);

        t.same(tree.root.value, 10, 'Check insert in root');
        t.same(tree.root.left.value, 5, 'Check insert in left');
        t.same(tree.root.right.value, 15, 'Check insert in right');

        t.end();
    });

    t.test('getHeight', (t) => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(13);


        t.same(tree.getHeight(tree.root.left.left), 0);
        t.same(tree.getHeight(tree.root.left), 1);

        t.same(tree.getHeight(tree.root), 3);
        t.same(tree.getHeight(tree.root.right), 2);
        t.same(tree.getHeight(tree.root.right.left), 1);

        t.end();
    })

    t.test('getBalance', (t) => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(13);

        t.same(tree.getBalance(tree.root), -1);
        t.same(tree.getBalance(tree.root.left), 0);

        t.same(tree.getBalance(tree.root.right), 1);
        t.same(tree.getBalance(tree.root.right.left), 0);

        t.end();
    });
    
    t.test('Rotate left', (t) => {
        tree.insert(10);
        tree.insert(7);
        tree.insert(15);
        tree.insert(13);
        tree.insert(17);

        tree.root = tree.rotateLeft(tree.root);
        
        t.same(tree.root.value, 15);
        t.same(tree.root.right.value, 17);
        t.same(tree.root.left.value, 10);
        t.same(tree.root.left.left.value, 7);
        t.same(tree.root.left.right.value, 13);

        t.end();
    });

    t.test('Rotate right', (t) => {
        tree.insert(15);
        tree.insert(10);
        tree.insert(17);
        tree.insert(7);
        tree.insert(13);

        tree.root = tree.rotateRight(tree.root);

        t.same(tree.root.value, 10);
        t.same(tree.root.left.value, 7);
        t.same(tree.root.right.value, 15);
        t.same(tree.root.right.left.value, 13);
        t.same(tree.root.right.right.value, 17);

        t.end();
    });

    t.test('Balance rotate left. B(a)=-2, B(b)=-1.', (t) => {
        tree.insert(10);
        tree.insert(7);
        tree.insert(15);
        tree.insert(13);
        tree.insert(17);
        tree.insert(19);

        //here must be execute left rotation
        
        t.same(tree.root.value, 15);
        t.same(tree.root.right.value, 17);
        t.same(tree.root.left.value, 10);
        t.same(tree.root.left.left.value, 7);
        t.same(tree.root.left.right.value, 13);
        t.same(tree.root.right.right.value, 19);

        t.end();
    });

    t.test('Balance rotate right. B(a)=2, B(b)=1', (t) => {
        tree.insert(40);
        tree.insert(50);
        tree.insert(20);
        tree.insert(30);
        tree.insert(10);
        tree.insert(5);

        //here must be execute left rotation
        
        t.same(tree.root.value, 20);
        t.same(tree.root.left.value, 10);
        t.same(tree.root.left.left.value, 5);
        t.same(tree.root.right.value, 40);
        t.same(tree.root.right.left.value, 30);
        t.same(tree.root.right.right.value, 50);
        
        t.end();
    });

    t.test('Balance. B(a)=-2, B(b)=1. Big left rotation', (t) => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(20);
        tree.insert(15);
        tree.insert(30);
        tree.insert(17);

        //here must be execute big left rotation
    
        t.same(tree.root.value, 15);
        t.same(tree.root.left.value, 10);
        t.same(tree.root.left.left.value, 5);
        t.same(tree.root.right.value, 20);
        t.same(tree.root.right.left.value, 17);
        t.same(tree.root.right.right.value, 30);

        t.end();
    });
    
    t.test('Balance. B(a)=2, B(b)=-1. Big right rotation.', (t) => {
        tree.insert(30);
        tree.insert(20);
        tree.insert(40);
        tree.insert(10);
        tree.insert(25);
        tree.insert(23);

        //here must be execute big right rotation

        t.same(tree.root.value, 25);
        t.same(tree.root.left.value, 20);
        t.same(tree.root.right.value, 30);
        t.same(tree.root.right.right.value, 40);
        t.same(tree.root.left.left.value, 10);
        t.same(tree.root.left.right.value, 23);
        
        t.end();
    });

    t.test('getMin', (t) => {
        t.same(tree.getMin(), null, 'Empty tree');

        tree.insert(10);
        tree.insert(5);
        tree.insert(12);
        tree.insert(2);
        t.same(tree.getMin(), 2);

        t.end();
    });

    t.test('delete min', (t) => {
        tree.insert(30);
        tree.insert(20);
        tree.insert(40);
        tree.insert(15);

        tree.deleteMin();
        t.same(tree.root.right.left, null);
        
        t.end();
    });

    t.test('delete', (t) => {
        tree.insert(2);
        tree.delete(3);
        t.same(tree.root.value, 2);
        tree.delete(2);
        t.same(tree.root, null);
        

        tree.insert(30);

        tree.insert(20);
        tree.insert(40);
        
        tree.insert(10);
        tree.insert(25);
        tree.insert(35);
        tree.insert(50);

        tree.insert(15);
        tree.insert(23);
        tree.insert(32);
        tree.insert(37);
        tree.insert(42);
        tree.insert(52);

        tree.delete(32);
        tree.delete(37);

        t.same(tree.root.value, 30);
        t.same(tree.root.left.value, 20);
        t.same(tree.root.right.value, 40);
        t.same(tree.root.right.left.value, 35);
        t.same(tree.root.right.right.value, 50);
        t.same(tree.root.right.right.left.value, 42);
        t.same(tree.root.right.right.right.value, 52);
        t.same(tree.getBalance(tree.root), 0);

        tree.delete(40);
        t.same(tree.getBalance(tree.root), 0);
        t.same(tree.getHeight(tree.root.right), 3);
        t.same(tree.root.value, 30);
        t.same(tree.root.left.value, 20);
        t.same(tree.root.right.value, 42);
        t.same(tree.root.right.left.value, 35);
        t.same(tree.root.right.right.value, 50);
        t.same(tree.root.right.right.left, null);
        t.same(tree.root.right.right.right.value, 52);

        tree.delete(10);
        t.same(tree.root.value, 30);
        t.same(tree.root.left.value, 20);
        t.same(tree.root.left.left.value, 15);
        t.same(tree.root.left.right.value, 25);
        t.same(tree.root.left.right.left.value, 23);
        
        t.end();
    });

    t.end();
});

