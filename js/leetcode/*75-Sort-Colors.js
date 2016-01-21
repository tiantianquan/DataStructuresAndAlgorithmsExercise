/*
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

click to show follow up.

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  function getStartIndex(f) {
    var i
    switch(f) {
      case -1:
        i = 0
        break
      case 0:
        i = redIndex + 1
        break
      case 1:
        i = whiteIndex + 1
        break
      case 2:
        i = blueIndex + 1
        break
      default:
        break
    }
    return i
  }


  var redIndex
  var whiteIndex
  var blueIndex
  var flag = -1
  for(var i = 0; i < nums.length; i++) {
    var data = nums.pop()
    switch(data) {
      case 0:
        redIndex = getStartIndex(flag)
        flag = 0
        nums.splice(redIndex, 0, data)
        redIndex += 1
        break
      case 1:
        redIndex = getStartIndex(flag)
        flag = 1
        nums.splice(whiteIndex, 0, data)
        whiteIndex += 1
        break
      case 2:
        redIndex = getStartIndex(flag)
        flag = 2
        nums.splice(blueIndex, 0, data)
        blueIndex += 1
        break
      default:
        break
    }
  }
}

var other = function(nums) {
  nums.sort()
}

var nums = [0, 2, 1, 0, 2, 1]
sortColors(nums)
console.log(nums)
