/**
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  function fn(node) {
    //下一个node
    if(node !== null && node !== undefined && node.next !== null) {
      var nextNode = node.next
      if(node.val === nextNode.val) {
        node.next = nextNode.next
          //改变了下一node 重新判断, 会有三个或多个x连续相等项
        fn(node)
      } else {
        fn(node.next)
      }
    }
  }
  fn(head)

  return head
}



var other = function(head) {
  var nodeList = []

  function getNode(node) {
    if(node !== null && node !== undefined) {
      nodeList.push(node)
      return getNode(node.next)
    }
  }

  getNode(head)
  if(nodeList.length) {
    nodeList.reduce(function(previousValue, currentValue, index, array) {
      if(previousValue.val === currentValue.val) {
        previousValue.next = currentValue.next
        return previousValue
      } else {
        return currentValue
      }
    })
  }
  return head
}

/**
 * Test
 */
var createLinkList = require('../linkList/create')
var list = [1, 1, 1, 3, 4, 5, 10]
var head = createLinkList(list)
console.log(deleteDuplicates(head))
