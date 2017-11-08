import queue from './queue';

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

class BinarySearchTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert_node(val) {
    if(val <= this.val && this.left) {
      this.left.insert_node(val);
    } else if (val <= this.val) {
      this.left = new BinarySearchTree(val);
    } else if (val > this.val && this.right) {
      this.right.insert_node(val);
    } else {
      this.right = new BinarySearchTree(val);
    }
  }

  find_node(val) {
    if(val < this.val && this.left) {
      return this.left.find_node(val);
    } else if (val > this.val && this.right){
      return this.right.find_node(val);
    }
    return val == this.val;
  }

  remove_node(val, parent) {
    // first check if value if leaf node
    if(val < this.val && this.left) {
      return this.left.remove_node(val, this);
    } else if (val < this.val) {
      // value does not exist
      return false;
    } else if (val > this.val && this.right) {
      return this.right.remove_node(val, this);
    } else if (val > this.val) {
      // value does not exist
      return false;
    } else {
      if(!this.left && !this.right && this == parent.left) {
        parent.left = null;
      } else if(!this.left && !this.right && this == parent.right) {
        parent.right = null;
      } else if(this.left && !this.right && this == parent.left) {
        parent.left = this;
      } else if(this.left && !this.right && this == parent.right) {
        parent.right = this.left;
      } else if(this.right && !this.left && this == parent.left) {
        parent.left = this.right;
      } else if(this.right && !this.left && this == parent.right) {
        parent.right = this.right;
      } else {
        this.value = this.right.find_minimum();
        this.right.remove_node(this.val, this);
      }

    return true;
    }
  }

  find_minimum() {
    if(this.left) {
      return this.left.find_minimum();
    } else {
      return this.value;
    }
  }

  pre_order() {
    console.log(this.val);
    if(this.left) this.left.pre_order();
    if(this.right) this.right.pre_order();
  }
}

export default BinaryTree;
export default BinarySearchTree;
