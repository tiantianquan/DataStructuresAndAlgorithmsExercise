/*
https://leetcode.com/problems/count-complete-tree-nodes/
Given a complete binary tree, count the number of nodes.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
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
 * @return {number}
 */
var countNodes = function(root) {
  if(root === null) {
    return 0
  }
  var flag = true
  var depth = -1
  var maxDepth = -1
    //初始为1 补全第一次查找底部
  var count = 1
  getDepth(root)
  for(var i = 0; i < maxDepth; i++) {
    //2的N次方
    count += Math.pow(2, i)
  }
  return count

  function getDepth(node) {
    if(node === null) {
      if(depth + 1 === maxDepth) {
        flag = false
      }
      return
    }
    depth += 1
    if(depth === maxDepth) {
      count += 1
    }
    if(depth > maxDepth) {
      maxDepth = depth
    }
    if(flag) {
      getDepth(node.left)
      if(flag) {
        getDepth(node.right)
        depth -= 1
      }
    }
  }
}

var other = function(root) {
  if(root === null) {
    return 0
  }
  var count = 0
  var maxDepth = getDepth(root)
  for(var i = 0; i < maxDepth; i++) {
    //2的N次方
    count += Math.pow(2, i)
  }
  return count

  function getEndCount(topNode, depth) {
    var num = 0
    var tmpNode = topNode
    for(var i = 0; i <= depth, i++) {
      tmpNode = tmpNode.left
    }
    if(tmpNode === null) {
      return num
    } else {
      num += 1
    }
  }

  function getDepth(node) {
    var maxDepth = -1
    innerFn(node)
    return maxDepth

    function innerFn(node) {
      if(node === null) {
        return
      }
      maxDepth += 1
      innerFn(node.left)
    }
  }

  function getEndCount() {

  }
}


var root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
other(root)

// console.log(countNodes(root))
