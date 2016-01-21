var TreeNode = function(element) {
  this.element = element
  this.nextNode = null
  this.firstChild = null
}

var TreeNode2 = function(element) {
  this.element = element
  this.children = []
}

module.exports = {
  TreeNode,
  TreeNode2
}
