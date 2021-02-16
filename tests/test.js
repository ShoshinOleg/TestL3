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

    t.end();
});

