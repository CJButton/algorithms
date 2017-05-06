

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

    return node;

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

    if (node.left) {
      rest = this.postOrder(node.left);
      order = order.concat(rest);
    }

    if (node.right) {
      rest = this.postOrder(node.right);
      order = order.concat(rest);
    }
    order.push(node.val);

    return order;
  }

  min(node = this.root) {
    let minEl;

    if (!node.left) {
      return node;
    } else {
      minEl = this.min(node.left);
    }
  }

  max(node = this.root) {
    let maxEl;

    if(!node.right) {
      return node;
    } else {
      maxEl = this.max(node.right);
    }
  }

  delete(val) {
    // find node to delete and it's parent
    // !what if node is root?!
    let found = false;
    let node = this.root;
    let children = [node.left, node.right]
    let idx = 1;
    let parent;

    // 3 possiblities: no children, 1 child, 2 children
    // if two children, choose min from right subtree

    // replace del el with min el, and switch the children to min el
    while (found) {
      if (val < node.val) {
        idx = 0;
      } else if (val > node.val) {
        idx = 1;
      } else if (val === node.val) {
        found = true;
      }
      parent = node;
      node = children[idx];

    }




    // 3 checks
    // no children
    // one child
    // two children


    //two children:
    // find min from the right child and it's parent
    // delete min from it's parent's child
    // repalce deleted value with min
    // move deleted's children to min's

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
console.log(bst.find(10));
