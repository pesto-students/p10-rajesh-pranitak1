class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
}

function levelOrderTraversal(root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const result = levelOrderTraversal(root);
console.log(result); // [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]

// time complexity :O(n), where n is the number of nodes in the binary tree
// space complexity :O(m), where m is the maximum number of nodes at any level in the binary tree
