

// Binary Search Tree (non-AVL/ non balancing)
// Space - O(n)
// Insert - O(log n)
// Delete - O(log n)
// pre-order
// post-order
// in-order

class BSTNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}


class BST {
  constructor() {
    this.root = null
  }

  find(val) {
    if (this.root === null) return "Tree is empty";

    let node = this.root;
    let searching = true;

    while (searching) {
      if (val < node.val) {
        node = node.left;
      } else if (val > node.val) {
        node = node.right;
      }

      if (node.val === val) {
        return node;
      } else if (node.left === null && node.right === null) {
        return "node not found";
      }
    }

  }

  insert(val) {
    if (this.root === null) return this.root = new BSTNode(val);

    let node = this.root;
    let searching = true;

    while (searching) {
      if (val < node.val) {
        node.left === null ? node.left = new BSTNode(val) : node = node.left;
      } else if (val > node.val) {
        node.right === null ? node.right = new BSTNode(val) : node = node.right;
      }

      if (node.val === val) {
        searching = false;
      }

    }
    return node;
  }




  preOrder() {

  }

  postOrder() {

  }
  // In this traversal method, the left subtree is visited first, then
  // the root and later the right sub-tree. We should always remember
  // that every node may represent a subtree itself.

  // If a binary tree is traversed in-order, the output will produce
  // sorted key values in an ascending order.
  inOrder(node = this.root) {
    let rest;
    let order = [];

    if (node.left === null) {
      order.push(node.val);
      return order;
    } else {
      rest = this.inOrder(node.left);
      order = order.concat(rest);
    }
    order.push(node.val);

    if (node.right) {
      order = order.concat(this.inOrder(node.right));
    }

    return order;
  }

  preOrder(node = this.root) {

    let order = [];
    let rest;
    order.push(node.val);

    if (node.left) {
      rest = this.preOrder(node.left);
      order = order.concat(rest);
    }

    if (node.right) {
      rest = this.preOrder(node.right);
      order = order.concat(rest);
    }
    return order;
  }

  postOrder(node = this.root) {

    let order = [];
    let rest;

    if (node.right) {
      rest = this.postOrder(node.right);
      order = rest.concat(order);
    }

    if (node.left) {
      rest = this.postOrder(node.left);
      order = rest.concat(order);
    }


    order.push(node.val);

    return order;


  }

  delete(val) {

  }

}

let bst = new BST;
bst.insert(6);
bst.insert(4);
bst.insert(3);
bst.insert(5);
bst.insert(10);
bst.insert(9);
bst.insert(11);
console.log(bst.postOrder());
