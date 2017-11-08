import Queue from './Queue';

 class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert_left(val) {
    if (!this.left) {
      this.left = new BinaryTree(val);
    } else {
      let new_left = new BinaryTree(val);
      new_left.left = this.left;
      this.left = new_left;
    }
  }

  insert_right(val) {
    if (!this.right) {
      this.right = new BinaryTree(val);
    } else {
      let new_right = new BinaryTree(val);
      new_right.right = this.right;
      this.right = new_right;
    }
  }

  // pre-order Depth First Search
  pre_order() {
    console.log(this.val);
    if(this.left) this.left.pre_order();
    if(this.right) this.right.pre_order();
  }

  // In-order Depth First Search
  in_order() {
    if(this.left) this.left.in_order();
    console.log(this.val);
    if(this.right) this.right.in_order();
  }

  // Post-order Depth First Search
  post_order() {
    if(this.left) this.left.post_order();
    if(this.right) this.right.post_order();
    console.log(this.val);
  }

  bfs() {
    this.queue = new Queue();
    this.queue.enqueue(this);

    while(this.queue.size() > 0) {
      const current_node = this.queue.dequeue();
      console.log(current_node.val);

      if(current_node.left) this.queue.enqueue(current_node.left);
      if(current_node.right) this.queue.enqueue(current_node.right);
    }
  }
}

export default BinaryTree;
