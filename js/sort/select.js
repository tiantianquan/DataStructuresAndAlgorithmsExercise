/**
 * 选择排序
 */
var selectSort = (arr) => {
  for(var startIndex = 0; startIndex < arr.length; startIndex++) {
    //最小值
    var min
      //最小值 位置
    var minIndex
    for(var i = startIndex; i < arr.length; i++) {
      if(i == startIndex || arr[i] < min) {
        min = arr[i]
        minIndex = i
      }
    }
    arr[minIndex] = arr[startIndex]
    arr[startIndex] = min
  }

  return arr
}

module.exports = selectSort
