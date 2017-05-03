

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
    // if we reach the left max
    if (node.left === null) {
      order.push(node);
      return order;
    } else {
      // if we can still go deeper
      rest = inOrder(node.left);
    }

    order.concat(rest).concat(node);
    if (node.right) {
      inOrder(node.right);
    }

    return order;


  }

  delete(val) {

  }

}

let bst = new BST;
bst.insert(5);
bst.insert(4);
bst.insert(6);
bst.insert(10)
