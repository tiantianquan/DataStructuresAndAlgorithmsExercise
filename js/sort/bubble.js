/**
 * 冒泡排序
 */
var bubbleSort = function(arr) {
  var endIndex = arr.length - 1

  do {
    var hasSwapElement = false

    //单次比较
    for(var i = 0; i <= endIndex; i++) {
      if(arr[i] > arr[i + 1]) {
        var temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        hasSwapElement  = true
      }
    }

    endIndex = endIndex - 1
  } while (hasSwapElement)

  return arr
}

module.exports = bubbleSort
