var AvlTreeNode = function(val) {
  /**
   * Comparable Item
   */
  this.val = val
  this.leftChild = null
  this.rightChild = null
  this.height = 0


}


AvlTreeNode.prototype.nullHeight = function(node) {
  return node === null ? -1 : node.height
}


AvlTreeNode.prototype.setHeight = function() {
  this.height = Math.max(
    this.nullHeight(this.leftChild),
    this.nullHeight(this.rightChild)) + 1
}

AvlTreeNode.prototype.getLeftRightGap = function() {
  var left = this.nullHeight(this.leftChild)
  var right = this.nullHeight(this.rightChild)
  return left - right
}

//向左旋转
AvlTreeNode.rotateLeft = function(node) {
  // var tmpNode = node
  var toTopNode = node.rightChild
  var changeNode = node.rightChild.leftChild

  node.rightChild = changeNode
  toTopNode.leftChild = node

  node.setHeight()
  toTopNode.setHeight()
  if(changeNode) {
    changeNode.setHeight()
  }
  return toTopNode
}

//向右旋转
AvlTreeNode.rotateRight = function(node) {
  // var tmpNode = node
  var toTopNode = node.leftChild
  var changeNode = node.leftChild.rightChild

  node.leftChild = changeNode
  toTopNode.rightChild = node

  node.setHeight()
  toTopNode.setHeight()
  if(changeNode) {
    changeNode.setHeight()
  }
  return toTopNode
}

AvlTreeNode.prototype.insert = function(newNode) {
  return AvlTreeNode.insert(newNode, this)
}


AvlTreeNode.insert = function(newNode, node) {
  /**
   * 若子节点改变, 改变父节点的子节点引用
   */
  var rotateFlag = false
  var tmpNode = node
  var initHeight = node.height
  var topNode = node

  innerInsert(newNode, node)


  function innerInsert(newNode, node) {
    if(newNode.val > node.val) {
      if(node.rightChild !== null) {
        innerInsert(newNode, node.rightChild)
      } else {
        node.rightChild = newNode
      }
      if(rotateFlag) {
        node.rightChild = tmpNode
      }

    } else if(newNode.val < node.val) {
      if(node.leftChild !== null) {
        innerInsert(newNode, node.leftChild)
      } else {
        node.leftChild = newNode
      }
      if(rotateFlag) {
        node.leftChild = tmpNode
      }
    }


    var gap = node.getLeftRightGap()
      //rotate left
    if(gap === -2) {
      if(newNode.val > node.rightChild.val) {
        tmpNode = AvlTreeNode.rotateLeft(node)
      } else {
        node.rightChild = AvlTreeNode.rotateRight(node.rightChild)
        tmpNode = AvlTreeNode.rotateLeft(node)
      }
      rotateFlag = true
    }
    //rotate right
    else if(gap === 2) {
      if(newNode.val < node.leftChild.val) {
        tmpNode = AvlTreeNode.rotateRight(node)
      } else {
        node.leftChild = AvlTreeNode.rotateLeft(node.leftChild)
        tmpNode = AvlTreeNode.rotateRight(node)
      }
      rotateFlag = true
    } else {
      rotateFlag = false
      node.setHeight()
    }

    if(node.height > initHeight) {
      topNode = node
    } else if(node.height == initHeight) {
      topNode = node
    }
  }

  return topNode
}

module.exports = AvlTreeNode
