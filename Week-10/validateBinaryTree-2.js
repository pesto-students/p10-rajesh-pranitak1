class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
}

function validateBST(root) {
    return validateNode(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
  }
  
  function validateNode(node, min, max) {
    if (!node) {
      return true;
    }
  
    if (node.value <= min || node.value >= max) {
      return false;
    }
  
    return (
      validateNode(node.left, min, node.value) &&
      validateNode(node.right, node.value, max)
    );
}
  
const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

const isValidBST = validateBST(tree.root);

console.log(`Is the tree a valid binary search tree? ${isValidBST}`); // Is the tree a valid binary search tree? true

// Time Complexity: O(n)
// Space Complexity: O(n) 
