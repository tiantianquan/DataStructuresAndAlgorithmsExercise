var assert = require('assert')

describe('AvlTree', function() {
  this.slow(-100)
  this.timeout(100000)
  describe('Balance AvlTree', function() {
    it('Should return Balance AvlTree', function() {
      /*
        12
        /\
      11  15
           /\
         14  20
              \
              25


          15
          /\
        12  20
        /\    \
      11  14   25

       */
      var AvlTreeNode = require('../tree/avlTree')
      var node1 = new AvlTreeNode(12)
      var node2 = new AvlTreeNode(11)
      var node3 = new AvlTreeNode(15)
      var node4 = new AvlTreeNode(14)
      var node5 = new AvlTreeNode(20)
      var node6 = new AvlTreeNode(25)

      node1.insert(node2).insert(node3).insert(node4).insert(node5).insert(
        node6)

      assert.equal(node3.leftChild, node1)
      assert.equal(node3.rightChild, node5)
      assert.equal(node1.rightChild, node4)
      assert.equal(node1.leftChild, node2)
      assert.equal(node5.rightChild, node6)

    })
  })
  describe('aa', function() {
    it('Should return Balance AvlTree', function() {
      var AvlTreeNode = require('../tree/avlTree')
      var topNode
      for(var i = 0; i < 2000; i++) {
        var node = new AvlTreeNode(i)
        if(i === 0) {
          topNode = node
        } else {
          topNode = topNode.insert(node)
        }
      }

      console.log(countNodes(topNode))

      function countNodes(root) {
        if(root === null) {
          return 0
        }

        var depth = -1
        var maxDepth = -1
        var count = 0
        getDepth(root)
        return count

        function getDepth(node) {
          if(node === null) {
            return
          }
          depth += 1
          count += 1
            // if(depth === maxDepth) {
            //   count += 1
            // }
            // if(depth > maxDepth) {
            //   maxDepth = depth
            // }

          getDepth(node.leftChild)
          getDepth(node.rightChild)
          depth -= 1
        }
      }



    })
  })
})
