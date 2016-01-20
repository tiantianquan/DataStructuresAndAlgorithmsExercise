class Solution(object):

    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        length = len(nums)
        if length == 0:
            return 0

        last = None
        i = 0
        while i < len(nums):
            if last == nums[i]:
                nums.pop(i)
                i -= 1
            else:
                last = nums[i]

            i += 1

        return len(nums)
