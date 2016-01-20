class Solution(object):

    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
        if m == 0 and n != 0:
            nums1[0:] = nums2
            return

        i = 0
        j = 0

        while j < n:
            data1 = nums1[i]
            data2 = nums2[j]
            if data1 > data2:
                nums1.insert(i, data2)
                nums1.pop()
                j += 1
            elif i == m + j - 1:
                nums1.insert(i + 1, data2)
                nums1.pop()
                j += 1
            i += 1

nums1 = [1, 2, 3, 0, 0, 0]
Solution().merge(nums1, 3, [2, 5, 6], 3)
print(nums1)
