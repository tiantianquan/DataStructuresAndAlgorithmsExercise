var AvlTreeNode = function(val) {
  /**
   * Comparable Item
   */
  this.val = val
  this.leftChild = null
  this.rightChild = null
  this.height = 0
}

AvlTreeNode.prototype.clone = function() {
  var node = new AvlTreeNode()
  for(var key in this) {
    node[key] = this[key]
  }
  return node
}

AvlTreeNode.prototype.nullHeight = function(node) {
  return node === null ? -1 : node.height
}


AvlTreeNode.prototype.setHeight = function() {
  this.height += Math.max(
    this.nullHeight(this.leftChild),
    this.nullHeight(this.rightChild)) + 1
}

AvlTreeNode.prototype.getLeftRightGap = function() {
  var left = this.nullHeight(this.leftChild)
  var right = this.nullHeight(this.rightChild)
  return left - right
}

AvlTreeNode.prototype.rotateBalance = function() {
  var gap = node.getLeftRightGap()

  //rotate left
  if(gap === -2) {
    this.rotateLeft
  }
  //rotate right
  if(gap === 2) {
    this.rotateRight()
  }
}

AvlTreeNode.rotateLeft = function(node) {
  var tmpNodeleft = node.rightChild.leftChild
  var tmpNode = node.clone()
  node = node.rightChild
  node.leftChild = tmpNode
  node.rightChild.rightChild.leftChild = tmpNodeleft
}

AvlTreeNode.insert = function(newNode, node) {
  if(newNode.val > node.val) {
    if(node.rightChild !== null) {
      AvlTreeNode.insert(newNode, node.rightChild)
    } else {
      node.rightChild = newNode
    }
  } else if(newNode.val < node.val) {
    if(node.leftChild !== null) {
      AvlTreeNode.insert(newNode, node.leftChild)
    } else {
      node.leftChild = newNode
    }
  }



  node.setHeight()
}
