class BinarySearchTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insertNode(val) {
    if(val <= this.val && this.left) {
      this.left.insertNode(val);
    } else if (val <= this.val) {
      this.left = new BinarySearchTree(val);
    } else if (val > this.val && this.right) {
      this.right.insertNode(val);
    } else {
      this.right = new BinarySearchTree(val);
    }
  }

  findNode(val) {
    if(val < this.val && this.left) {
      return this.left.findNode(val);
    } else if (val > this.val && this.right){
      return this.right.findNode(val);
    }
    return val == this.val;
  }

  removeNode(val, parent) {
    // first check if value if leaf node
    if(val < this.val && this.left) {
      return this.left.removeNode(val, this);
    } else if (val < this.val) {
      // value does not exist
      return false;
    } else if (val > this.val && this.right) {
      return this.right.removeNode(val, this);
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
        this.value = this.right.findMinimum();
        this.right.removeNode(this.val, this);
      }

    return true;
    }
  }

  findMinimum() {
    if(this.left) {
      return this.left.findMinimum();
    } else {
      return this.value;
    }
  }

  preOrder() {
    console.log(this.val);
    if(this.left) this.left.preOrder();
    if(this.right) this.right.preOrder();
  }
}

export default BinarySearchTree;
