import { BinaryTree, BinarySearchTree } from './binary-tree';

let one = new BinaryTree(1);
one.insert_left(2);
let two = one.left;
two.insert_left(3);
two.insert_right(4);
one.insert_right(5);
let five = one.right;
five.insert_left(6);
five.insert_right(7);

console.log('Pre-order:');
one.pre_order();
console.log('In-order:');
one.in_order();
console.log('Post-order:');
one.post_order();
console.log('BFS:');
one.bfs();

let bst = new BinarySearchTree(15);
bst.insert_node(10);
bst.insert_node(20);
bst.insert_node(8);
bst.insert_node(12);
bst.insert_node(17);
bst.insert_node(25);
bst.insert_node(19);

console.log('BinarySearchTree:');
console.log(bst);

console.log('BST find_node(7)');
console.log(bst.find_node(17));
console.log('BST find_node(9)');
console.log(bst.find_node(9));

console.log(bst.remove_node(8, null))
bst.pre_order();
console.log(bst.remove_node(17, null));
bst.pre_order();
console.log(bst.remove_node(15, null));
bst.pre_order();
