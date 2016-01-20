/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
The number of elements initialized in nums1 and nums2 are m and n respectively.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  if(m === 0 && n !== 0) {
    nums2.forEach(function(data, i) {
      nums1[i] = data
    })
    return
  }

  //nums1 pointer
  var i = 0

  //nums2 pointer
  //已插入数量
  var j = 0

  while(i < m + n && j < n) {
    var data1 = nums1[i]
    var data2 = nums2[j]
    if(data2 < data1) {
      nums1.splice(i, 0, data2)
      nums1.pop()
      j += 1
    }
    //m+j为有效数组长度
    if(data2 >= data1 && i == m + j - 1) {
      nums1.splice(i + 1, 0, data2)
      nums1.pop()
      j += 1
    }
    i += 1
  }
}

var nums1 = [1, 2, 3, 0, 0, 0]
merge(nums1, 3, [2, 5, 6], 3)
console.log(nums1)
