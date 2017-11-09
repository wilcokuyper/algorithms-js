import Queue from './Queue';

 class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insertLeft(val) {
    if (!this.left) {
      this.left = new BinaryTree(val);
    } else {
      let newLeft = new BinaryTree(val);
      newLeft.left = this.left;
      this.left = newLeft;
    }
  }

  insertRight(val) {
    if (!this.right) {
      this.right = new BinaryTree(val);
    } else {
      let newRight = new BinaryTree(val);
      newRight.right = this.right;
      this.right = newRight;
    }
  }

  // pre-order Depth First Search
  preOrder() {
    console.log(this.val);
    if(this.left) this.left.preOrder();
    if(this.right) this.right.preOrder();
  }

  // In-order Depth First Search
  inOrder() {
    if(this.left) this.left.inOrder();
    console.log(this.val);
    if(this.right) this.right.inOrder();
  }

  // Post-order Depth First Search
  postOrder() {
    if(this.left) this.left.postOrder();
    if(this.right) this.right.postOrder();
    console.log(this.val);
  }

  bfs() {
    this.queue = new Queue();
    this.queue.enqueue(this);

    while(this.queue.size() > 0) {
      const currentNode = this.queue.dequeue();
      console.log(currentNode.val);

      if(currentNode.left) this.queue.enqueue(currentNode.left);
      if(currentNode.right) this.queue.enqueue(currentNode.right);
    }
  }
}

export default BinaryTree;
