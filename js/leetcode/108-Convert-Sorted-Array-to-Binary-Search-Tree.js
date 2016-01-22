/*
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(nums.length === 0) {
    return nums
  }

  return innerFn(nums)

  function connectNode(node, left, right) {
    node.left = left
    node.right = right
    return node
  }

  function innerFn(arr) {
    if(arr.length === 0) {
      return null
    }
    var midIndex = parseInt((arr.length - 1) / 2)

    var node = new TreeNode(arr[midIndex])
    var leftArr = arr.slice(0, midIndex)
    var rightArr = arr.slice(midIndex + 1)
    return connectNode(node, innerFn(leftArr), innerFn(rightArr))
  }
}

var TreeNode = function(val) {
  /**
   * Comparable Item
   */
  this.val = val
  this.left = null
  this.right = null
}

console.log(sortedArrayToBST([1,2,3,14,32,68]))
