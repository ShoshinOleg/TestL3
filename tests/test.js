const t = require('tap');
const AVLTree = require('../AVLTree');

t.test('AVLTree', (t) => {

    t.test('Tree exists', (t) => {
        const tree = new AVLTree();

        t.ok(tree, 'Tree exists');
        t.end();
    });

    t.end();
});

