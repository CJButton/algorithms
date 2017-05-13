

// Given a binary tree, write a function to check whether it’s a binary
// search tree or not.





// Write a JavaScript function to check if a binary tree is balanced.
// sA tree is balanced if, at every node, the depth of subtree on the
// left hand side is equal to the depth of the subtree on the right
// (plus or minus one).

const isBalanced = (node) => {

  let left = [];
  let right = [];
  if (node.left) {
    left.push(node.left);
  }
  if (node.right) {
    right.push(node.right):
  }

  let countL = 0;
  let countR = 0;

  let diving1 = true;
  while (diving1) {
    let newL = [];

    if (left.length > 1) {
      countL += 1;
    } else if (left.length === 0) {
      diving1 = false;
    }

    left.forEach((node) => {
      if (node.left) {
        newL.push(node.left);
      }
      if (node.right) {
        newL.push(node.right);
      }
    });

    left = newL;
  }

  let diving2 = true;
  while (diving2) {
    let newR = [];

    if (right.length > 1) {
      countR += 1;
    } else if (right.length === 0) {
      diving2 = false;
    }

    right.forEach((node) => {
      if (node.left) {
        newR.push(node.left);
      }
      if (node.right) {
        newR.push(node.right);
      }
    });

    right = newR;
  }

  if ((countL - countR) < -1 || (countL - countR) > 1) {
    return false;
  } else {
    return true;
  }



}
