/**
 * 根据数组创建链表
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

function create(arr) {
  //循环
  var tmpNode
  var headNode
  for(var i = 0; i < arr.length; i++) {
    var node = new ListNode(arr[i])

    if(i == 0) {
      headNode = node
    }
    if(i !== 0) {
      tmpNode.next = node
    }
    tmpNode = node
  }
  return headNode
}

// var list = [1, 2, 2, 3, 4, 5, 10]
// console.log(create(list))

module.exports = create
