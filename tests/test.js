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
    
    t.end();
});

