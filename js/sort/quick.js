/**
 * 快排
 */
var quickSort = function(arr, random) {
  function merge(left, right, mid) {
    return left.concat(mid).concat(right)
  }

  if(arr.length < 2) {
    return arr
  }

  /**
   * 枢纽元
   */
  var pivot
  if(random) {
    var pivotList = [arr[0], arr[parseInt(arr.length / 2)], arr[arr.length - 1]]
      // pivotList.sort(function(a, b) {
      //   return a - b
      // })
    if(pivotList[0] > pivotList[1]) {
      if(pivotList[0] > pivotList[2]) {
        pivot = pivotList[1] > pivotList[2] ? pivotList[1] : pivotList[2]
      } else {
        pivot = pivotList[0]
      }
    } else {
      if(pivotList[0] < pivotList[2]) {
        pivot = pivotList[1] > pivotList[2] ? pivotList[2] : pivotList[1]
      } else {
        pivot = pivot[0]
      }
    }
  } else {
    pivot = arr[0]
  }


  var leftArr = []
  var rightArr = []
  var midArr = []

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > pivot) {
      rightArr.push(arr[i])
    } else if(arr[i] == pivot) {
      midArr.push(arr[i])
    } else {
      leftArr.push(arr[i])
    }
  }

  return merge(quickSort(leftArr), quickSort(rightArr), midArr)

}

module.exports = quickSort
