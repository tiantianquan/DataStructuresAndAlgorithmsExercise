/*
https://leetcode.com/problems/binary-tree-level-order-traversal/
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) {
    return []
  }
  var depth = -1
  var resultArr = []
  traversal(root)

  return resultArr

  function traversal(node) {
    if(node === null) {
      return
    }
    depth += 1
    if(resultArr[depth]) {
      resultArr[depth].push(node.val)
    } else {
      resultArr[depth] = [node.val]
    }
    traversal(node.left)
    traversal(node.right)
    //递归紧缩的时候,将深度减少
    depth -= 1
  }
}
