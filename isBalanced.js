// https://leetcode.com/problems/balanced-binary-tree/
//
// Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as:
//
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
//
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true
//
// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
//
// Example 3:
// Input: root = []
// Output: true


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true
    const left = findHeight(root.left)
    const right = findHeight(root.right)
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

function findHeight(node) {
    if (node == null) return 0;
    return 1 + Math.max(this.findHeight(node.left), this.findHeight(node.right));
}


module.exports = {
    isBalanced
}

// Runtime: 78 ms, faster than 90.43% of JavaScript online submissions for Balanced Binary Tree.
// Memory Usage: 47.1 MB, less than 32.41% of JavaScript online submissions for Balanced Binary Tree.