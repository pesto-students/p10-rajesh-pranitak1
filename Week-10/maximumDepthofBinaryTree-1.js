// binary tree
class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function maximumDepth(root) {
    if (!root) {
      return 0;
    }
  
    const leftDepth = maximumDepth(root.left);
    const rightDepth = maximumDepth(root.right);
  
    return Math.max(leftDepth, rightDepth) + 1;
  }

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const depth = maximumDepth(root);

console.log(`Maximum depth of the binary tree is: ${depth}`); // Maximum depth of the binary tree is: 3


// Time Complexity: O(n)
// Space Complexity: O(log(n))
