/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(l1 === null){
    return l2
  }
  else if(l2 === null){
    return l1
  }

  function getNodeList(n) {
    var nodeList = []

    function getNode(node) {
      if(node !== null && node !== undefined) {
        nodeList.push(node)
        return getNode(node.next)
      }
    }

    getNode(n)
    return nodeList
  }

  var nodeList1 = getNodeList(l1)
  var nodeList2 = getNodeList(l2)
  var lastNode

  while(nodeList1.length && nodeList2.length) {
    var tmp
    var l1first = nodeList1[0]
    var l2first = nodeList2[0]
    if(l1first.val > l2first.val) {
      tmp = l2first
      nodeList2.shift()
    } else {
      tmp = l1first
      nodeList1.shift()
    }
    if(lastNode) {
      lastNode.next = tmp
    }
    lastNode = tmp
  }
  if(nodeList1.length === 0 && nodeList2.length !== 0){
    lastNode.next = nodeList2[0]
  }
  if(nodeList1.length!==0 && nodeList2.length ===0){
    lastNode.next = nodeList1[0]
  }

  return  l1.val > l2.val  ? l2 : l1
}

var createLinkList = require('../linkList/create')
var list1 = [1, 1, 1, 3, 4, 5, 10]
var list2 = [4, 7, 19, 22,38 ]
var l1 = createLinkList(list1)
var l2 = createLinkList(list2)
var a =mergeTwoLists(l1, l2)
