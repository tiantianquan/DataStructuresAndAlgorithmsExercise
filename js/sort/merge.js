/**
 * 合并排序
 */

var mergeSort = function(arr) {
  function merge(leftArr, rightArr) {
    var mergeResult = []
    while(leftArr.length && rightArr.length) {
      if(leftArr[0] < rightArr[0]) {
        mergeResult.push(leftArr[0])
        leftArr.shift()
      } else {
        mergeResult.push(rightArr[0])
        rightArr.shift()
      }
    }
    var result = mergeResult.concat(leftArr.concat(rightArr))
    return result
  }

  if(arr.length<2)
    return arr

  var midIndex = parseInt(arr.length / 2)
  var left = arr.slice(0, midIndex)
  var right = arr.slice(midIndex)
  console.log(left,right)

  return merge(mergeSort(left), mergeSort(right))
}


module.exports = mergeSort
