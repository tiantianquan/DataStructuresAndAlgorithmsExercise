# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def __init__(self):
        self.flag = True
        self.depth = -1
        self.maxDepth = -1
        self.count = 1

    def countNodes(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """

        if root is None:
            return 0

        def getDepth(node):
            if node is None:
                if self.depth + 1 == self.maxDepth:
                    self.flag = False
                return

            self.depth += 1

            if self.depth == self.maxDepth:
                self.count += 1
            if self.depth > self.maxDepth:
                self.maxDepth = self.depth
            if self.flag:
                getDepth(node.left)
                if self.flag:
                    getDepth(node.right)
                    self.depth -= 1

        getDepth(root)

        for i in range(0, self.maxDepth):
            self.count += pow(2, i)

        return self.count
