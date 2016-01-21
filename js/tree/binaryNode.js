var BinaryNode = function(element) {
  this.element = element
  this.leftChild = null
  this.rightChild = null
}


var testData = [89, 30, 15, 100, 32, 2, 0, 99]


var BinarySearchTree = function() {

}

BinarySearchTree.prototype.create = function(arr) {
  function compare(n1, n2) {
    if(n1.element > n2.element) {
      if(n1.leftChild) {
        compare(n1.leftChild, n2)
      } else {
        n1.leftChild = n2
      }
    } else {
      if(n1.rightChild) {
        compare(n1.rightChild, n2)
      } else {
        n1.rightChild = n2
      }
    }
  }

  for(var i = 0; i < arr.length; i++) {
    var node = new BinaryNode(arr[i])
    if(i === 0) {
      this.topNode = node
    } else {
      compare(this.topNode, node)
    }
  }
  return this.topNode
}

var result = new BinarySearchTree().create(testData)

console.log(result)
