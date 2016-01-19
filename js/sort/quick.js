/**
 * 快排
 */
var quickSort = function(arr) {
  function merge(left,right){
    return left.concat(right)
  }

  if(arr.length<2){
    return arr
  }

  /**
   * 枢纽元
   */
  var pivot = arr[0]

  var leftArr = []
  var rightArr = []

  for(var i=1;i<arr.length;i++){
    if(arr[i]>pivot){
      rightArr.push(arr[i])
    }
    else{
      leftArr.push(arr[i])
    }
  }
  leftArr.push(pivot)

  return merge(quickSort(leftArr),quickSort(rightArr))

}

module.exports = quickSort
