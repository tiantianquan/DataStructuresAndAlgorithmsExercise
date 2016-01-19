# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):

    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        def fn(node):
            if node is not None and node.next is not None:
                nextNode = node.next
                if node.val == nextNode.val:
                    node.next = nextNode.next
                    fn(node)
                else:
                    fn(node.next)

        fn(head)
        return head

    def other(self, head):
        nodeList = []

        def getNode(node):
            if node is not None:
                nodeList.append(node)
                getNode(node.next)

        def reduceHandle(x, y):
            if x.val == y.val:
                x.next = y.next
                return x
            else:
                return y

        getNode(head)
        if len(nodeList) != 0:
            reduce(reduceHandle, nodeList)
        return head
