/*
https://leetcode.com/problems/balanced-binary-tree/
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
 * @return {boolean}
 */

var isBalanced = function(root) {
  if(!root) {
    return true
  }
  var result = true
  compare(root)
  return result

  function compare(node) {
    if(node === null)
      return

    compare(node.left)
    compare(node.right)

    var gap = getNodeHieght(node.left) - getNodeHieght(node.right)
    if(result) {
      if(Math.abs(gap) >= 2) {
        result = false
      } else {
        node.height = Math.max(getNodeHieght(node.left), getNodeHieght(node.right)) + 1
      }
    }

  }

  function getNodeHieght(node) {
    return node === null ? -1 : node.height
  }
}


var other = function(root) {
  if(!root) {
    return true
  }
  var result = true
  setNodeHight(root)
  compare(root)
  return result

  function setNodeHight(node) {
    if(node === null)
      return -1

    node.height = Math.max(setNodeHight(node.left),
      setNodeHight(node.right)) + 1

    return node.height
  }

  function getNodeHieght(node) {
    return node === null ? -1 : node.height
  }

  function compare(node) {
    if(node === null) {
      return node
    }
    var gap = getNodeHieght(compare(node.left)) - getNodeHieght(compare(node.right))
    if(result) {
      result = Math.abs(gap) >= 2 ? false : true
    }
    return node
  }
}
